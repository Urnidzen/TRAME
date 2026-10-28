/**
 * TRAME - Module d'exportation Markdown autonome
 */
const TRAME_Exporteur = (function() {

    // 1. Convertisseur HTML brut -> Markdown épuré
    function htmlToMarkdown(htmlString) {
        if (!htmlString) return '';

        const parser = new DOMParser();
        const doc = parser.parseFromString(`<div>${htmlString}</div>`, 'text/html');
        const root = doc.body.firstElementChild;

        // Suppression des éléments d'interface web et balises parasites
        root.querySelectorAll('script, style, .card-start, .card-end, .page-break, .legal-notice, .page-number').forEach(el => el.remove());

        // Normalisation des listes et sous-listes TRAME
        root.querySelectorAll('.pseudo-li').forEach(el => {
            el.textContent = `- ${el.textContent.trim()}`;
        });
        root.querySelectorAll('.pseudo-li-level2').forEach(el => {
            el.textContent = `  - ${el.textContent.trim()}`;
        });

        // Conversion des tableaux HTML en Markdown
        root.querySelectorAll('table').forEach(table => {
            let mdTable = '\n';
            const rows = Array.from(table.querySelectorAll('tr'));
            rows.forEach((row, idx) => {
                const cells = Array.from(row.querySelectorAll('th, td')).map(c => c.textContent.trim().replace(/\|/g, '\\|'));
                if (cells.length > 0) {
                    mdTable += `| ${cells.join(' | ')} |\n`;
                    if (idx === 0) {
                        mdTable += `| ${cells.map(() => '---').join(' | ')} |\n`;
                    }
                }
            });
            const textNode = doc.createTextNode(mdTable + '\n');
            table.parentNode.replaceChild(textNode, table);
        });

        // Conversion des titres
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
            const level = '#'.repeat(parseInt(tag[1]));
            root.querySelectorAll(tag).forEach(el => {
                el.textContent = `\n\n${level} ${el.textContent.trim()}\n\n`;
            });
        });

        let texte = root.textContent;
        texte = texte.replace(/[ \t]+/g, ' ');
        texte = texte.replace(/\n{3,}/g, '\n\n');
        return texte.trim();
    }

    // 2. Récupération du contenu de chaque document du site
    async function recupererContenuDocument(doc) {
        // Cas A : L'Atlas (généré par les scripts en mémoire)
        if (doc.id === 'lore_atlas' && window.TRAME_Atlas) {
            return window.TRAME_Atlas.renderView();
        }

        // Cas B : Les Personnages (généré par le script en mémoire)
        if (doc.id === 'lore_personnages' && window.TRAME_Personnages) {
            return window.TRAME_Personnages.renderView('region');
        }

        // Cas C : Le Bestiaire (HTML introductif + data JS)
        if (doc.id === 'livret5' && window.TRAME_Bestiaire) {
            const res = await fetch(doc.file);
            const raw = await res.text();
            return raw.replace(
                '<div id="bestiaire-dynamic-container">',
                '<div id="bestiaire-dynamic-container">' + window.TRAME_Bestiaire.renderView('type')
            );
        }

        // Cas D : Fichier Markdown direct (.md)
        if (doc.file.endsWith('.md')) {
            const res = await fetch(doc.file);
            return await res.text();
        }

        // Cas E : Fichier HTML standard (Livrets 1 à 4, Introduction, Annexe 5)
        if (doc.file.endsWith('.html') || doc.file.endsWith('.htm')) {
            const res = await fetch(doc.file);
            return await res.text();
        }

        return '';
    }

    // 3. Téléchargement d'un fichier Markdown
    function telechargerMarkdown(nomFichier, contenu) {
        const blob = new Blob([contenu], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = nomFichier;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // 4. Modale de sélection
    function ouvrirModale() {
        const liste = (typeof documents !== 'undefined') ? documents : (window.documents || []);

        // Vérification du mot de passe Lore (en mémoire ou dans sessionStorage)
        const estLoreDeverrouille = (typeof loreUnlocked !== 'undefined' && loreUnlocked) || 
                                     (sessionStorage.getItem('lore_unlocked') === 'true');

        // Filtrage : pas de fiche interactive, pas de contact, et pas de Lore si verrouillé
        const docsExportables = liste.filter(d => {
            if (d.id === 'fiche' || d.id === 'contact') return false;
            if (d.isLore && !estLoreDeverrouille) return false;
            return true;
        });

        let modale = document.getElementById('exportMarkdownModal');
        if (!modale) {
            modale = document.createElement('div');
            modale.id = 'exportMarkdownModal';
            modale.style.cssText = 'display:flex; position:fixed; inset:0; z-index:10006; background:rgba(12,10,8,0.8); align-items:center; justify-content:center;';
            document.body.appendChild(modale);
        }

        let html = `
            <div style="background:#e3d5b8; background-image:url('parchment.png'); border:3px solid #1c1917; border-radius:6px; width:480px; max-width:92vw; padding:20px; box-shadow:0 15px 40px rgba(0,0,0,0.7); color:#1c1917; font-family:'Cormorant Garamond',serif;">
                <h3 style="font-family:'Cinzel',serif; font-size:1.3rem; border-bottom:2px solid #7c2d12; padding-bottom:8px; margin-top:0; margin-bottom:12px; text-align:center;">Exporter en Markdown</h3>
                
                <div style="margin-bottom:10px; border-bottom:1px dashed rgba(0,0,0,0.2); padding-bottom:6px;">
                    <label style="cursor:pointer; font-weight:bold; color:#7c2d12; font-family:'Cinzel',serif; font-size:0.85rem; display:flex; align-items:center; gap:8px;">
                        <input type="checkbox" id="exportMasterCb" checked onchange="TRAME_Exporteur.cocherTout(this.checked)" style="width:16px; height:16px; cursor:pointer;">
                        Sélectionner tous les documents
                    </label>
                </div>

                <div id="exportDocsList" style="max-height:48vh; overflow-y:auto; margin-bottom:15px; padding-right:5px; font-size:1.05rem;">
        `;

        docsExportables.forEach(doc => {
            html += `
                <div style="margin-bottom:4px;">
                    <label style="cursor:pointer; display:flex; align-items:center; gap:8px;">
                        <input type="checkbox" class="export-doc-cb" value="${doc.id}" checked style="width:16px; height:16px; cursor:pointer;">
                        <span>${doc.title}</span> <span style="opacity:0.6; font-size:0.85rem;">(${doc.subtitle})</span>
                    </label>
                </div>
            `;
        });

        html += `
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; border-top:1px solid rgba(0,0,0,0.2); padding-top:12px;">
                    <button type="button" onclick="TRAME_Exporteur.fermerModale()" style="background:rgba(28,25,23,0.1); border:1px solid #1c1917; padding:6px 12px; border-radius:4px; cursor:pointer; font-family:'Cinzel',serif; font-weight:bold;">Annuler</button>
                    <div style="display:flex; gap:6px;">
                        <button type="button" onclick="TRAME_Exporteur.executerExport('zip')" style="background:rgba(124,45,18,0.15); color:#7c2d12; border:1px solid #7c2d12; padding:6px 12px; border-radius:4px; cursor:pointer; font-family:'Cinzel',serif; font-weight:bold;">Archive ZIP</button>
                        <button type="button" onclick="TRAME_Exporteur.executerExport('unique')" style="background:#7c2d12; color:#f4ecd8; border:1px solid #1c1917; padding:6px 14px; border-radius:4px; cursor:pointer; font-family:'Cinzel',serif; font-weight:bold;">Fichier unique</button>
                    </div>
                </div>
            </div>
        `;

        modale.innerHTML = html;
        modale.style.display = 'flex';
    }

    function fermerModale() {
        const m = document.getElementById('exportMarkdownModal');
        if (m) m.style.display = 'none';
    }

    function cocherTout(etat) {
        document.querySelectorAll('.export-doc-cb').forEach(cb => cb.checked = etat);
    }

    // 5. Exécution de l'exportation
    async function executerExport(mode) {
        const coches = Array.from(document.querySelectorAll('.export-doc-cb:checked')).map(cb => cb.value);
        if (coches.length === 0) {
            alert('Veuillez cocher au moins un document.');
            return;
        }

        fermerModale();
        const liste = (typeof documents !== 'undefined') ? documents : (window.documents || []);
        const selection = liste.filter(d => coches.includes(d.id));

        if (mode === 'unique') {
            let texteGlobal = '# Sommaire de la Compilation\n\n**Documents inclus dans ce fichier :**\n';
            selection.forEach((doc, i) => {
                texteGlobal += `${i + 1}. ${doc.title} — ${doc.subtitle}\n`;
            });
            texteGlobal += '\n---\n\n';

            const chapitres = [];
            for (const doc of selection) {
                const brut = await recupererContenuDocument(doc);
                const mdTxt = doc.file.endsWith('.md') ? brut.trim() : htmlToMarkdown(brut);
                if (mdTxt) {
                    chapitres.push(mdTxt);
                }
            }

            texteGlobal += chapitres.join('\n\n---\n\n');
            telechargerMarkdown('Compilation_TRAME.md', texteGlobal);

        } else if (mode === 'zip' && typeof JSZip !== 'undefined') {
            const zip = new JSZip();

            for (const doc of selection) {
                const brut = await recupererContenuDocument(doc);
                const mdTxt = doc.file.endsWith('.md') ? brut.trim() : htmlToMarkdown(brut);
                const nomFichier = `${doc.title.replace(/[^\wÀ-ÿ0-9-_]/g, '_')}.md`;
                zip.file(nomFichier, mdTxt);
            }

            const blob = await zip.generateAsync({ type: 'blob' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Documents_TRAME_Markdown.zip';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    }

    return {
        ouvrir: ouvrirModale,
        fermerModale: fermerModale,
        cocherTout: cocherTout,
        executerExport: executerExport
    };

})();
