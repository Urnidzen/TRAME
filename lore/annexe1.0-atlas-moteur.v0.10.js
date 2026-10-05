/**
 * TRAME - Annexe 1.0 : Atlas (Moteur & Indexation)
 * Version : v0.10
 * Moteur d'assemblage, injection des liens vers Personnages/Bestiaire et index hiérarchique
 */

window.TRAME_Atlas = window.TRAME_Atlas || {};

(function() {

    // Helper d'injection automatique des liens vers les Personnages et Créatures
    function enrichirTexteAtlas(texte, originElementId) {
        if (!texte) return '';

        // Table unifiée de toutes les correspondances
        const correspondances = [
            // --- PNJ ---
            { nom: "Elkyriel-Aethelvahr", id: "perso-elkyriel-personnage-joueur", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Elkyriel", id: "perso-elkyriel-personnage-joueur", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Faelia", id: "perso-faelia", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Mila", id: "perso-mila", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Lysa", id: "perso-lysa", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Liriel", id: "perso-liriel", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Lirael", id: "perso-lirael", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Vespera", id: "perso-vespera", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Dravenna", id: "perso-dravenna", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Seraphine", id: "perso-seraphine", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Roran", id: "perso-roran", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Doran", id: "perso-doran", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Néria", id: "perso-neria", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Rose", id: "perso-rose", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Aldric", id: "perso-aldric", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Lila", id: "perso-lila", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Milo", id: "perso-milo", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Elara", id: "perso-elara", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Kaelen", id: "perso-kaelen", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Alden", id: "perso-alden", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Thorne", id: "perso-thorne", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Maëva", id: "perso-maeva", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Lysandra", id: "perso-lysandra", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Kaelia", id: "perso-reine-kaelia-d-ardelie", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Aldous", id: "perso-roi-aldous-d-ardelie", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Silas", id: "perso-silas", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Odran Sorell", id: "perso-odran-sorell", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Lucretia", id: "perso-lucretia", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Valerius", id: "perso-valerius", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Livia", id: "perso-livia", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Thorek", id: "perso-thorek", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Alise", id: "perso-alise", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Ysoria", id: "perso-reine-ysoria-de-varethis", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Méléandre", id: "perso-prince-meleandre-de-varethis", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Maëra", id: "perso-maera", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Solenne Varin", id: "perso-solenne-varin", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Kordran Fergivre", id: "perso-kordran-fergivre", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Selyne Var", id: "perso-selyne-var", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Eliane Var", id: "perso-eliane-var-dite-aline-varet", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Aline Varet", id: "perso-eliane-var-dite-aline-varet", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Brenor", id: "perso-lieutenant-brenor", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Caldrin", id: "perso-capitaine-caldrin", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Kharza Peau-de-Neige", id: "perso-kharza-peau-de-neige", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Rhazka Cendre-Claire", id: "perso-rhazka-cendre-claire", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Vessa Orm", id: "perso-vessa-orm", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Isilvrya", id: "perso-isilvrya", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Aélis Vaer", id: "perso-aelis-vaer", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Sévra Noll", id: "perso-sevra-noll", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Ilysthéra", id: "perso-ilysthera", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Léonie Varc", id: "perso-leonie-varc", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Dhoran Vesk", id: "perso-dhoran-vesk", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Kaldrielle", id: "perso-kaldrielle", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Maélis d'Orsenn", id: "perso-maelis-d-orsenn", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Maélis d’Orsenn", id: "perso-maelis-d-orsenn", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Maélis", id: "perso-maelis-d-orsenn", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Talyra", id: "perso-talyra", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Eryx", id: "perso-eryx", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Nymira", id: "perso-nymira", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Mirelle Auvray", id: "perso-mirelle-auvray-2", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Goran", id: "perso-goran", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Myrène", id: "perso-myrene", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Lethielle", id: "perso-lethielle", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Nathalysse", id: "perso-nathalysse", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Dame Thalysse de Mirande", id: "perso-nathalysse", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Olan Vespre", id: "perso-olan-vespre", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Salomé d’Arqueval", id: "perso-salome-d-arqueval", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Mireva", id: "perso-mireva", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Pell", id: "perso-pell-calde", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Dhorg", id: "perso-dhorg-clair-verger", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Sera", id: "perso-sera-grands-vergers", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Enric", id: "perso-enric-asten", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Maura", id: "perso-maura-haute-rive", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Lise", id: "perso-lise-haute-rive", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Siane", id: "perso-siane-bois-serein", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Naela", id: "perso-naela-bois-serein", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Ysel", id: "perso-ysel-rive-noire", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Rhea", id: "perso-rhea-rive-noire", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Virelle Senn", id: "perso-virelle-senn", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Vel'Shara", id: "perso-vel-shara", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Vel’Shara", id: "perso-vel-shara", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Armand Vellec", id: "perso-armand-vellec", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Sariel", id: "perso-sariel", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Eirik", id: "perso-eirik", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Borin", id: "perso-borin", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Thalira", id: "perso-thalira", doc: "lore_personnages", info: "Consulter la fiche du personnage" },
            { nom: "Liora", id: "perso-liora", doc: "lore_personnages", info: "Consulter la fiche du personnage" },

            // --- BESTIAIRE ---
            { nom: "Dragonne Bestiale", id: "creature-dragon-bestial", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Dragon Bestial", id: "creature-dragon-bestial", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Dragonne Noble", id: "creature-dragon-noble", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Dragon Noble", id: "creature-dragon-noble", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Golems de guerre", id: "creature-golem-de-guerre", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Golem de guerre", id: "creature-golem-de-guerre", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Serpents de Mer", id: "creature-serpent-de-mer-geant", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Serpent de Mer", id: "creature-serpent-de-mer-geant", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Wyvernes", id: "creature-dragon-wyverne", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Wyverne", id: "creature-dragon-wyverne", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Dragons", id: "section-dragons", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Dragon", id: "section-dragons", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Golems", id: "section-golems", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Golem", id: "section-golems", doc: "livret5", info: "Consulter dans le Bestiaire" },
            { nom: "Pagures", id: "section-pagures", doc: "livret2", info: "Consulter dans le Bestiaire" },
            { nom: "Pagure", id: "section-pagures", doc: "livret2", info: "Consulter dans le Bestiaire" }
        ];

        // 1. Trier de façon absolue par longueur de nom décroissante
        correspondances.sort((a, b) => b.nom.length - a.nom.length);

        // 2. Construire la liste des motifs pour la recherche en une seule passe
        const dictionnaire = new Map();
        const motifs = correspondances.map(c => {
            dictionnaire.set(c.nom.toLowerCase(), c);
            return c.nom.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        });

        // Regex globale stricte
        const masterRegex = new RegExp(`(?<![\\wÀ-ÿ])(${motifs.join('|')})(?![\\wÀ-ÿ])`, 'gi');

        // 3. Parser le HTML pour ne travailler QUE sur les vrais nœuds de texte
        const parser = new DOMParser();
        const doc = parser.parseFromString(`<div>${texte}</div>`, 'text/html');
        const root = doc.body.firstElementChild;

        const walker = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];
        let node;
        while ((node = walker.nextNode())) {
            if (node.parentElement && node.parentElement.closest('a, span[onclick], button')) continue;
            if (node.nodeValue && masterRegex.test(node.nodeValue)) {
                textNodes.push(node);
            }
        }

        // 4. Remplacement sécurisé nœud par nœud
        textNodes.forEach(textNode => {
            masterRegex.lastIndex = 0;
            const originalText = textNode.nodeValue;
            const fragment = doc.createDocumentFragment();
            let lastIdx = 0;

            originalText.replace(masterRegex, (match, p1, offset) => {
                if (offset > lastIdx) {
                    fragment.appendChild(doc.createTextNode(originalText.substring(lastIdx, offset)));
                }

                const item = dictionnaire.get(match.toLowerCase());
                if (item) {
                    const span = doc.createElement('span');
                    span.setAttribute('onclick', `navigateToDocSection('${item.doc}', '${item.id}', 'lore_atlas', '${originElementId || ''}', 'l\\'Atlas')`);
                    span.setAttribute('style', 'color:#7c2d12; text-decoration:underline; cursor:pointer; font-weight:bold;');
                    span.setAttribute('title', item.info);
                    span.textContent = `${match} 🔍`;
                    fragment.appendChild(span);
                } else {
                    fragment.appendChild(doc.createTextNode(match));
                }

                lastIdx = offset + match.length;
            });

            if (lastIdx < originalText.length) {
                fragment.appendChild(doc.createTextNode(originalText.substring(lastIdx)));
            }

            textNode.parentNode.replaceChild(fragment, textNode);
        });

        return root.innerHTML;
    }

    // Moteur d'assemblage unifié
    function renderView() {
        const fullContent = 
            (window.TRAME_Atlas.VUE_ENSEMBLE_HTML || '') +
            (window.TRAME_Atlas.ARDELIE_HTML || '') +
            (window.TRAME_Atlas.VARETHIS_HTML || '') +
            (window.TRAME_Atlas.EMPIRE_HTML || '');

        return enrichirTexteAtlas(fullContent);
    }

    // Index hiérarchique dynamique pour la barre latérale (Sidebar)
    function getIndex() {
        return [
            // --- VUE D'ENSEMBLE ---
            { id: "section-vue-ensemble", title: "Vue d'ensemble de la région", level: 1 },
            { id: "section-geographie-generale", title: "Géographie générale & repères", level: 2 },
            { id: "section-referentiel-trajets", title: "Référentiel des trajets", level: 2 },
            { id: "section-climat-milieux", title: "Climat & grands milieux", level: 2 },
            { id: "section-faune-populations", title: "Faune & populations", level: 2 },

            // --- 1. ROYAUME D'ARDÉLIE ---
            { id: "royaume-ardelie", title: "Royaume d'Ardélie", level: 1 },
            
            { id: "section-rivecour", title: "Rivecour (Capitale)", level: 2 },
            { id: "section-rivecour-localisation", title: "Localisation & environnement", level: 3 },
            { id: "section-rivecour-structure", title: "Structure urbaine", level: 3 },
            { id: "section-rivecour-points-interet", title: "Points d'Intérêt", level: 3 },
            { id: "section-rivecour-presences", title: "Présences Notables", level: 3 },
            { id: "section-forge-naine-rivecour", title: "La Forge naine de Rivecour", level: 3 },
            { id: "section-cercles-teleportation", title: "Réseau des Cercles de Téléportation", level: 3 },

            { id: "section-aldhaven", title: "Aldhaven", level: 2 },
            { id: "section-saillans", title: "Les Saillans", level: 2 },
            { id: "section-immensite-grise", title: "L'Immensité Grise", level: 2 },
            { id: "section-mer-de-jade", title: "La Mer de Jade & Archipel", level: 2 },
            { id: "section-marches-orientales", title: "Les Marches orientales", level: 2 },
            { id: "section-axe-sud-ouest", title: "Axe Sud-Ouest", level: 2 },

            // --- 2. ROYAUME DE VARETHIS ---
            { id: "royaume-varethis", title: "Royaume de Varethis", level: 1 },
            { id: "section-trois-bornes", title: "Passe des Trois Bornes (Frontière)", level: 2 },
            { id: "section-karsenne", title: "Karsenne (Capitale)", level: 2 },
            { id: "section-parfumerie-leirykle", title: "Parfumerie de maître Leirykle", level: 3 },
            { id: "section-domaine-clairval", title: "Domaine de Clairval", level: 2 },

            // --- 3. EMPIRE DE L'ENCLAVE DES CINQ TRÔNES ---
            { id: "section-empire-enclave", title: "Empire des Cinq Trônes", level: 1 },
            { id: "section-hautes-lames", title: "Les Hautes-Lames & Accès", level: 2 },
            { id: "section-gor-kadar", title: "Royaume Orque de Gor-Kadar", level: 2 },
            { id: "section-royaume-traverse", title: "Royaume de Traverse (Cœur)", level: 2 },
            { id: "section-traverse-cites", title: "Les Cités de Traverse", level: 3 },
            { id: "section-forteresse-monde", title: "Forteresse-Monde (10e Cité)", level: 3 },
            { id: "section-traverse-forces", title: "Forces Militaires de Traverse", level: 3 },
            { id: "section-astreane", title: "Concordat d'Astréane", level: 2 },
            { id: "section-dhor-kez", title: "Ligues de Dhor-Kez", level: 2 },
            { id: "section-orsenn", title: "Royaume d'Orsenn", level: 2 }
        ];
    }

    // Exports
    window.TRAME_Atlas.enrichirTexteAtlas = enrichirTexteAtlas;
    window.TRAME_Atlas.renderView = renderView;
    window.TRAME_Atlas.getIndex = getIndex;

})();
