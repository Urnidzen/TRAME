/**
 * TRAME - Annexe 1.1 : Atlas (Partie 1)
 * Version : v0.01
 * Géographie, trajets, Ardélie, Mer de Jade, Immensité Grise, Marches Orientales & Varethis
 * État de référence : Automne 1250
 */

window.TRAME_Atlas = window.TRAME_Atlas || {};

(function() {

    // Helper d'injection automatique des liens vers les Personnages et Créatures
    function enrichirTexteAtlas(texte, originElementId) {
        if (!texte) return '';
        let t = texte;

        // Table de correspondance vers les fiches de personnages (Annexe 3)
        const pnjLinks = [
            { nom: "Elkyriel-Aethelvahr", id: "perso-elkyriel-personnage-joueur", label: "Elkyriel-Aethelvahr" },
            { nom: "Elkyriel", id: "perso-elkyriel-personnage-joueur", label: "Elkyriel" },
            { nom: "Faelia", id: "perso-faelia", label: "Faelia" },
            { nom: "Mila", id: "perso-mila", label: "Mila" },
            { nom: "Lysa", id: "perso-lysa", label: "Lysa" },
            { nom: "Liriel", id: "perso-liriel", label: "Liriel" },
            { nom: "Lirael", id: "perso-lirael", label: "Lirael" },
            { nom: "Vespera", id: "perso-vespera", label: "Vespera" },
            { nom: "Dravenna", id: "perso-dravenna", label: "Dravenna" },
            { nom: "Seraphine", id: "perso-seraphine", label: "Seraphine" },
            { nom: "Roran", id: "perso-roran", label: "Roran" },
            { nom: "Doran", id: "perso-doran", label: "Doran" },
            { nom: "Néria", id: "perso-neria", label: "Néria" },
            { nom: "Rose", id: "perso-rose", label: "Rose" },
            { nom: "Aldric", id: "perso-aldric", label: "Aldric" },
            { nom: "Lila", id: "perso-lila", label: "Lila" },
            { nom: "Milo", id: "perso-milo", label: "Milo" },
            { nom: "Elara", id: "perso-elara", label: "Elara" },
            { nom: "Kaelen", id: "perso-kaelen", label: "Kaelen" },
            { nom: "Alden", id: "perso-alden", label: "Alden" },
            { nom: "Thorne", id: "perso-thorne", label: "Thorne" },
            { nom: "Maëva", id: "perso-maeva", label: "Maëva" },
            { nom: "Lysandra", id: "perso-lysandra", label: "Lysandra" },
            { nom: "Kaelia", id: "perso-reine-kaelia-d-ardelie", label: "Kaelia" },
            { nom: "Aldous", id: "perso-roi-aldous-d-ardelie", label: "Aldous" },
            { nom: "Silas", id: "perso-silas", label: "Silas" },
            { nom: "Odran Sorell", id: "perso-odran-sorell", label: "Odran Sorell" },
            { nom: "Lucretia", id: "perso-lucretia", label: "Lucretia" },
            { nom: "Valerius", id: "perso-valerius", label: "Valerius" },
            { nom: "Livia", id: "perso-livia", label: "Livia" },
            { nom: "Thorek", id: "perso-thorek", label: "Thorek" },
            { nom: "Alise", id: "perso-alise", label: "Alise" },
            { nom: "Ysoria", id: "perso-reine-ysoria-de-varethis", label: "Ysoria" },
            { nom: "Méléandre", id: "perso-prince-meleandre-de-varethis", label: "Méléandre" },
            { nom: "Maëra", id: "perso-maera", label: "Maëra" },
            { nom: "Solenne Varin", id: "perso-solenne-varin", label: "Solenne Varin" },
            { nom: "Kordran Fergivre", id: "perso-kordran-fergivre", label: "Kordran Fergivre" },
            { nom: "Selyne Var", id: "perso-selyne-var", label: "Selyne Var" },
            { nom: "Eliane Var", id: "perso-eliane-var-dite-aline-varet", label: "Eliane Var" },
            { nom: "Aline Varet", id: "perso-eliane-var-dite-aline-varet", label: "Aline Varet" },
            { nom: "Brenor", id: "perso-lieutenant-brenor", label: "Brenor" },
            { nom: "Caldrin", id: "perso-capitaine-caldrin", label: "Caldrin" },
            { nom: "Kharza Peau-de-Neige", id: "perso-kharza-peau-de-neige", label: "Kharza Peau-de-Neige" },
            { nom: "Rhazka Cendre-Claire", id: "perso-rhazka-cendre-claire", label: "Rhazka Cendre-Claire" },
            { nom: "Vessa Orm", id: "perso-vessa-orm", label: "Vessa Orm" },
            { nom: "Isilvrya", id: "perso-isilvrya", label: "Isilvrya" },
            { nom: "Aélis Vaer", id: "perso-aelis-vaer", label: "Aélis Vaer" },
            { nom: "Sévra Noll", id: "perso-sevra-noll", label: "Sévra Noll" },
            { nom: "Ilysthéra", id: "perso-ilysthera", label: "Ilysthéra" },
            { nom: "Léonie Varc", id: "perso-leonie-varc", label: "Léonie Varc" },
            { nom: "Dhoran Vesk", id: "perso-dhoran-vesk", label: "Dhoran Vesk" },
            { nom: "Kaldrielle", id: "perso-kaldrielle", label: "Kaldrielle" },
            { nom: "Maélis d’Orsenn", id: "perso-maelis-d-orsenn", label: "Maélis d’Orsenn" },
            { nom: "Maélis", id: "perso-maelis-d-orsenn", label: "Maélis" },
            { nom: "Talyra", id: "perso-talyra", label: "Talyra" },
            { nom: "Eryx", id: "perso-eryx", label: "Eryx" },
            { nom: "Nymira", id: "perso-nymira", label: "Nymira" },
            { nom: "Mirelle Auvray", id: "perso-mirelle-auvray-2", label: "Mirelle Auvray" },
            { nom: "Goran", id: "perso-goran", label: "Goran" },
            { nom: "Myrène", id: "perso-myrene", label: "Myrène" },
            { nom: "Lethielle", id: "perso-lethielle", label: "Lethielle" },
            { nom: "Nathalysse", id: "perso-nathalysse", label: "Nathalysse" },
            { nom: "Dame Thalysse de Mirande", id: "perso-nathalysse", label: "Dame Thalysse de Mirande" },
            { nom: "Olan Vespre", id: "perso-olan-vespre", label: "Olan Vespre" },
            { nom: "Salomé d’Arqueval", id: "perso-salome-d-arqueval", label: "Salomé d’Arqueval" },
            { nom: "Mireva", id: "perso-mireva", label: "Mireva" },
            { nom: "Pell", id: "perso-pell-calde", label: "Pell" },
            { nom: "Dhorg", id: "perso-dhorg-clair-verger", label: "Dhorg" },
            { nom: "Sera", id: "perso-sera-grands-vergers", label: "Sera" },
            { nom: "Enric", id: "perso-enric-asten", label: "Enric" },
            { nom: "Maura", id: "perso-maura-haute-rive", label: "Maura" },
            { nom: "Lise", id: "perso-lise-haute-rive", label: "Lise" },
            { nom: "Siane", id: "perso-siane-bois-serein", label: "Siane" },
            { nom: "Naela", id: "perso-naela-bois-serein", label: "Naela" },
            { nom: "Ysel", id: "perso-ysel-rive-noire", label: "Ysel" },
            { nom: "Rhea", id: "perso-rhea-rive-noire", label: "Rhea" },
            { nom: "Virelle Senn", id: "perso-virelle-senn", label: "Virelle Senn" },
            { nom: "Vel’Shara", id: "perso-vel-shara", label: "Vel’Shara" },
            { nom: "Armand Vellec", id: "perso-armand-vellec", label: "Armand Vellec" },
            { nom: "Sariel", id: "perso-sariel", label: "Sariel" },
            { nom: "Eirik", id: "perso-eirik", label: "Eirik" },
            { nom: "Borin", id: "perso-borin", label: "Borin" },
            { nom: "Thalira", id: "perso-thalira", label: "Thalira" },
            { nom: "Liora", id: "perso-liora", label: "Liora" }
        ];

        pnjLinks.forEach(p => {
            const regex = new RegExp(`\\b(${p.nom})\\b`, 'g');
            t = t.replace(regex, `<span onclick="navigateToDocSection('lore_personnages', '${p.id}', 'lore_atlas', '${originElementId || ''}', 'l\\'Atlas')" style="color:#7c2d12; text-decoration:underline; cursor:pointer; font-weight:bold;" title="Consulter la fiche du personnage">$1 🔍</span>`);
        });

        // Table de correspondance vers le Bestiaire (Livret 5)
        const bestiaireLinks = [
            { nom: "Wyvernes", id: "creature-dragon-wyverne" },
            { nom: "Wyverne", id: "creature-dragon-wyverne" },
            { nom: "Dragon Noble", id: "creature-dragon-noble" },
            { nom: "Dragonne Noble", id: "creature-dragon-noble" },
            { nom: "Dragon Bestial", id: "creature-dragon-bestial" },
            { nom: "Dragonne Bestiale", id: "creature-dragon-bestial" },
            { nom: "Dragon", id: "section-dragons" },
            { nom: "Dragons", id: "section-dragons" },
            { nom: "Serpents de Mer", id: "creature-serpent-de-mer-geant" },
            { nom: "Serpent de Mer", id: "creature-serpent-de-mer-geant" },
            { nom: "Pagures", id: "section-pagures", doc: "livret2" },
            { nom: "Pagure", id: "section-pagures", doc: "livret2" },
            { nom: "Golems de guerre", id: "creature-golem-de-guerre" },
            { nom: "Golem de guerre", id: "creature-golem-de-guerre" },
            { nom: "Golems", id: "section-golems" },
            { nom: "Golem", id: "section-golems" }
        ];

        bestiaireLinks.forEach(b => {
            const regex = new RegExp(`\\b(${b.nom})\\b`, 'g');
            const targetDoc = b.doc || 'livret5';
            t = t.replace(regex, `<span onclick="navigateToDocSection('${targetDoc}', '${b.id}', 'lore_atlas', '${originElementId || ''}', 'l\\'Atlas')" style="color:#7c2d12; text-decoration:underline; cursor:pointer; font-weight:bold;" title="Consulter dans le Bestiaire">$1 🔍</span>`);
        });

        return t;
    }

    // Export du helper pour les deux fichiers de données
    window.TRAME_Atlas.enrichirTexteAtlas = enrichirTexteAtlas;

    // --- DONNÉES DE LA PARTIE 1 ---
    window.TRAME_Atlas.PARTIE_1_HTML = `
        <h2 id="section-atlas-intro">Annexe 1 : Atlas</h2>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>État du monde de référence : Automne 1250.</strong></p></div>
            <div class="rule-item">
                <p>Cet Atlas décrit l'état factuel du monde à cette date : géographie, lieux, distances, structures, occupations, présences et créatures.</p>
                <p>Les cités, forteresses, bourgs et villages répertoriés dans cet Atlas ne constituent en aucun cas une liste exhaustive. Chaque royaume et province abrite un maillage de nombreuses autres bourgades, villages agricoles, hameaux, relais, chemins locaux et domaines qui ne figurent pas dans ce document. L'Atlas s'efforce de donner une image représentative et structurée du monde, sans prétendre en recenser chaque établissement.</p>
                <p>Il ne constitue pas une chronologie et n'a pas vocation à raconter le déroulement des événements. Les éléments historiques sont toutefois conservés lorsqu'ils sont nécessaires pour comprendre la structure, la fonction, l'origine ou l'état actuel d'un lieu.</p>
            </div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h2 id="section-vue-ensemble">1. Vue d'ensemble de la région</h2>
        
        <h3 id="section-geographie-generale">Géographie générale et repères cartographiques</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Le royaume d'Ardélie est bordé à l'ouest par la Mer de Jade. Il est traversé d'est en ouest par le grand axe fluvial reliant Rivecour à Aldhaven, bordé de plaines agricoles, tandis que la bordure sud du royaume est occupée par une vaste forêt. Au nord s'étend l'Immensité Grise, vaste steppe continentale dont Ardélie ne contrôle réellement qu'une faible bordure méridionale malgré les revendications de la Couronne. Vers l'est, les plaines se prolongent jusqu'aux Marches orientales, puis laissent progressivement place aux collines et au massif montagneux formant la frontière naturelle avec Varethis.</p>
            </div>
            <div class="rule-item">
                <p>Au-delà des Hautes-Lames, au nord-nord-est de l'Immensité Grise, s'étend l'<strong>Empire de l'Enclave des Cinq Trônes</strong> (anciennement Enclave des Cinq Trônes), vaste région continentale unifiée sous la couronne de <strong>Sa Majesté Impériale Elkyriel-Aethelvahr</strong>, articulée autour du réseau hydrographique et géothermique des Veines Chaudes. Les royaumes d'Ardélie et de Varethis à l'Ouest ignorent totalement l'existence de cet empire et n'y voient toujours en Elkyriel qu'un Seigneur Mercenaire indépendant.</p>
            </div>
            <div class="rule-item">
                <p>Les coordonnées utilisées dans l'Atlas prennent <strong>Aldhaven pour origine (0,00 ; 0,00)</strong>. L'est correspond à l'axe X positif et le nord à l'axe Y positif. Une unité cartographique représente environ une journée de marche théorique sur terrain terrestre ordinaire. Ces coordonnées indiquent la position horizontale des lieux et ne représentent pas leur altitude.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Aldhaven — (0,00 ; 0,00) :</strong> Grande cité portuaire située sur la Mer de Jade, à l'embouchure du grand fleuve navigable venant de l'intérieur du royaume.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Rivecour — (7,25 ; -1,00) :</strong> Grande ville humaine établie dans les plaines agricoles intérieures, sur les rives du même fleuve. Celui-ci s'écoule globalement vers l'ouest en direction d'Aldhaven et de la Mer de Jade.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Saillans — (-7,07 ; 7,07) :</strong> Hameau de pêcheurs isolé sur la côte nord-ouest, encaissé entre falaises de schiste et zones de marais salants.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>L'Immensité Grise :</strong> Steppe immense située au nord et au nord-est d'Aldhaven. Elle est caractérisée par de hautes herbes sèches, des vents constants et de nombreux affleurements de roche basaltique noire. Les terres effectivement contrôlées par Ardélie n'en occupent qu'une faible bordure méridionale.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Tour Blanche — (2,12 ; 2,12) :</strong> Édifice isolé de la partie occidentale de l'Immensité Grise, entouré d'une oasis alimentée par des résurgences souterraines. Comptoir diplomatique et commercial majeur avec Gor-Kadar, gardé par <strong>vingt-quatre Golems de guerre lourds</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Marches orientales :</strong> Région de transition à l'est de Rivecour. L'axe principal traverse successivement <strong>Valdorne (8,59 ; -1,00)</strong>, <strong>Pont-Cassé (9,63 ; -1,00)</strong>, <strong>Rochebrune (11,04 ; -2,16)</strong> puis <strong>Deux-Couronnes (13,04 ; -2,16)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Deux-Couronnes — (13,04 ; -2,16) :</strong> Dernier village majeur avant le massif montagneux frontalier. Au-delà, la route devient beaucoup plus sinueuse et gagne progressivement de l'altitude.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Passe des Trois Bornes — (15,04 ; -2,16) :</strong> Col de haute montagne marquant la frontière naturelle entre Ardélie et Varethis.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Varethis :</strong> Royaume situé au-delà du massif. Sa capitale, Karsenne, se trouve en <strong>(19,04 ; -2,16)</strong> dans une haute vallée, plus basse que la Passe mais sensiblement plus élevée que les plaines d'Ardélie.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Archipel des Tempêtes :</strong> Ensemble d'îles volcaniques situé au large, à l'ouest et au nord-ouest des côtes connues. Les îles sont caractérisées par leurs reliefs volcaniques, leurs récifs, leurs brumes persistantes et, pour une grande partie d'entre elles, une végétation tropicale dense.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Camp des Pierres-Froides — (5,40 ; 13,20) :</strong> Ancien campement d'hivernage du Kraal Cendre-Claire, situé dans la steppe septentrionale au pied des Hautes-Lames, dévasté par le détachement de Dhor-Kez.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Brèche de Vard (entrée ouest) — (17,10 ; 23,40) :</strong> Défilé d'accès occidental des Hautes-Lames et entrée du chantier de Dhor-Kez ; la foreuse est disloquée et l'entrée du tunnel est scellée sous un effondrement massif de basalte.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Débouché est de la Brèche — (19,40 ; 24,10) :</strong> Sortie orientale du défilé souterrain des Hautes-Lames débouchant sur l'ouest de la Traverse.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Rivet-de-Givre — (21,20 ; 25,20) :</strong> Emplacement de l'ancien avant-poste de Dhor-Kez dans les Hautes-Lames, aujourd'hui en ruines.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Kadar-Rauk (Gor-Kadar) — (11,00 ; 26,50) :</strong> Capitale du Royaume Orque de Gor-Kadar, bâtie sur de hauts plateaux rocheux autour des Sources de Rauk (sources thermales géothermales). Siège du Palais du puy de la Voix-Couronne Kharza Peau-de-Neige. Reliée directement à Élyria par une arche magique permanente.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Élyria — (26,00 ; 28,60) :</strong> Capitale impériale, siège du Palais impérial d'Elkyriel et de la Maison des Sept Clefs.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Asten — (19,70 ; 29,20) :</strong> Sixième cité du Royaume de Traverse (Comté d'Asten). Cité restaurée en Cité-Jardin ; ses caves profondes abritent des araignées géantes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Puits de Veyr — (27,00 ; 24,30) :</strong> Neuvième cité du Royaume de Traverse (Comté du Puits de Veyr). Cité-puits verticale.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Lumérys — (19,40 ; 37,70) :</strong> Capitale d'Astréane, siège de la Première Accordée Aélis Vaer et de la Grande Académie de Magie. Reliée directement à Élyria par une arche magique permanente sur la Grande Esplanade d'Albâtre.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Kez-Bruma — (33,00 ; 23,10) :</strong> Cœur battant des grands ateliers et des fonderies de Dhor-Kez, administrée par Léonie Varc à la tête des Ateliers Liés. Reliée directement à Élyria par une arche magique permanente.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Orsenn — (33,70 ; 31,70) :</strong> Capitale du Royaume d'Orsenn, gouvernée par la reine vivante Maélis d'Orsenn. Reliée directement à Élyria par une arche magique permanente sur l'Esplanade des Rois.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h3 id="section-referentiel-trajets">Référentiel des trajets</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Les temps indiqués correspondent à des conditions ordinaires de déplacement, hors intempéries ou circonstances particulières. Les distances directes correspondent à la distance cartographique théorique entre deux lieux ; elles peuvent différer fortement du trajet réellement praticable lorsque le relief, les routes ou les obstacles imposent des détours.</p>
                <p><strong>Réseau des Portails Impériaux :</strong> Au sein de l'Empire de l'Enclave des Cinq Trônes, le réseau des arches magiques permanentes relie instantanément les dix cités de Traverse entre elles ainsi que la Forteresse-Monde. La Place Royale d'Élyria accueille désormais les arches directes vers les capitales des royaumes alliés de l'Empire (<strong>Lumérys</strong> pour Astréane, <strong>Kez-Bruma</strong> pour Dhor-Kez, <strong>Kadar-Rauk</strong> pour Gor-Kadar et <strong>Orsenn</strong> pour le royaume d'Orsenn). Les déplacements entre ces métropoles majeures sont instantanés, reléguant les voies terrestres, fluviales et lacustres au rôle de dessertes locales.</p>
                <p>Pour un trajet inverse, le temps reste identique et l'orientation est opposée, sauf pour la navigation fluviale lorsque le courant modifie la durée.</p>
            </div>
        <div class="card-end"></div>

        <h4>Capitales et grands axes</h4>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Trajet</th>
                            <th style="padding: 6px;">Orientation</th>
                            <th style="padding: 6px; text-align: right;">À pied</th>
                            <th style="padding: 6px; text-align: right;">À cheval</th>
                            <th style="padding: 6px;">Voie / particularités</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rivecour → Karsenne</strong></td><td style="padding: 6px;">Est global</td><td style="padding: 6px; text-align: right;">≈ 20,2 j par la route</td><td style="padding: 6px; text-align: right;">≈ 10,1 j théoriques</td><td style="padding: 6px;">≈ 11,85 j directs ; axe terrestre par Valdorne, Rochebrune, Deux-Couronnes et la Passe</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rivecour → Aldhaven</strong></td><td style="padding: 6px;">Ouest, légèrement Nord</td><td style="padding: 6px; text-align: right;">≈ 10 j par la route</td><td style="padding: 6px; text-align: right;">≈ 5 j par la route</td><td style="padding: 6px;">≈ 3 j par le fleuve dans le sens du courant ; ≈ 7,3 j directs</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Aldhaven → Rivecour</strong></td><td style="padding: 6px;">Est, légèrement Sud</td><td style="padding: 6px; text-align: right;">≈ 10 j par la route</td><td style="padding: 6px; text-align: right;">≈ 5 j par la route</td><td style="padding: 6px;">≈ 10 j par le fleuve contre le courant ; ≈ 7,3 j directs</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rivecour → Valdorne</strong></td><td style="padding: 6px;">Est</td><td style="padding: 6px; text-align: right;">≈ 1,34 j</td><td style="padding: 6px; text-align: right;">≈ 0,67 j</td><td style="padding: 6px;">Route principale via la bifurcation</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rivecour → Rochebrune</strong></td><td style="padding: 6px;">Est puis Sud-Est</td><td style="padding: 6px; text-align: right;">≈ 4,18 j par l'axe routier</td><td style="padding: 6px; text-align: right;">≈ 2,09 j</td><td style="padding: 6px;">≈ 3,96 j directs</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rochebrune → Karsenne</strong></td><td style="padding: 6px;">Est global</td><td style="padding: 6px; text-align: right;">≈ 16 j par la route</td><td style="padding: 6px; text-align: right;">≈ 8 j théoriques</td><td style="padding: 6px;">≈ 8 j directs ; via Deux-Couronnes et la Passe</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Valdorne → Rochebrune</strong></td><td style="padding: 6px;">Est puis Sud-Est</td><td style="padding: 6px; text-align: right;">≈ 2,84 j</td><td style="padding: 6px; text-align: right;">≈ 1,42 j</td><td style="padding: 6px;">Via Pont-Cassé ; ≈ 2,71 j directs</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rivecour → Kadar-Rauk</strong></td><td style="padding: 6px;">Nord-Nord-Est global</td><td style="padding: 6px; text-align: right;">≈ 28 à 33 j par la steppe et les cols</td><td style="padding: 6px; text-align: right;">≈ 18 à 22 j (trajet mixte)</td><td style="padding: 6px;">Trajet complet impossible à cheval seul : montures utilisables dans la steppe jusqu'à la Brèche (≈ 14,5 j), puis traversée des hauts cols obligatoirement à pied (≈ 7 à 10 j) ; ≈ 27,8 j directs</td></tr>
                        <tr><td style="padding: 6px;"><strong>Nacrelac → Lumérys</strong></td><td style="padding: 6px;">Nord-Nord-Est</td><td style="padding: 6px; text-align: right;">≈ 7 à 8 j de marche</td><td style="padding: 6px; text-align: right;">≈ 3 à 4 j théoriques</td><td style="padding: 6px;">Route de montagne très escarpée par les gorges du Verre Creux ; ≈ 6,77 j directs</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>

        <h4>Villes, bourgs, villages et hameaux</h4>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Trajet</th>
                            <th style="padding: 6px;">Orientation</th>
                            <th style="padding: 6px; text-align: right;">À pied / navigation</th>
                            <th style="padding: 6px; text-align: right;">À cheval</th>
                            <th style="padding: 6px;">Voie / particularités</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rochebrune → Deux-Couronnes</strong></td><td style="padding: 6px;">Est</td><td style="padding: 6px; text-align: right;">≈ 2 j</td><td style="padding: 6px; text-align: right;">≈ 1 j</td><td style="padding: 6px;">Grande route vers Varethis</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Valdorne → Deux-Couronnes</strong></td><td style="padding: 6px;">Est puis Sud-Est puis Est</td><td style="padding: 6px; text-align: right;">≈ 4,84 j</td><td style="padding: 6px; text-align: right;">≈ 2,42 j</td><td style="padding: 6px;">Via Pont-Cassé et Rochebrune</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Aldhaven → Saillans</strong></td><td style="padding: 6px;">Nord-Ouest</td><td style="padding: 6px; text-align: right;">≈ 5 j navigation directe / ≈ 6 j route côtière sûre</td><td style="padding: 6px; text-align: right;">—</td><td style="padding: 6px;">Navigation ; détours dus aux récifs</td></tr>
                        <tr><td style="padding: 6px;"><strong>Haute-Rive → Kez-Bruma</strong></td><td style="padding: 6px;">Ouest-Sud-Ouest</td><td style="padding: 6px; text-align: right;">≈ 8 j par le défilé</td><td style="padding: 6px; text-align: right;">≈ 4 j théoriques</td><td style="padding: 6px;">Voie militaire pavée à travers le Défilé des Cuivres ; ≈ 7,82 j directs</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>

        <h4>Massif frontalier et lieux isolés</h4>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Trajet</th>
                            <th style="padding: 6px;">Orientation</th>
                            <th style="padding: 6px; text-align: right;">À pied</th>
                            <th style="padding: 6px; text-align: right;">À cheval</th>
                            <th style="padding: 6px;">Voie / particularités</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Deux-Couronnes → Passe des Trois Bornes</strong></td><td style="padding: 6px;">Est global</td><td style="padding: 6px; text-align: right;">≈ 7 j par la route</td><td style="padding: 6px; text-align: right;">≈ 3,5 j théoriques</td><td style="padding: 6px;">≈ 2 j directs ; route très sinueuse dans le massif</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Deux-Couronnes → Mornefond</strong></td><td style="padding: 6px;">Sud</td><td style="padding: 6px; text-align: right;">Itinéraire exact inconnu</td><td style="padding: 6px; text-align: right;">Itinéraire exact inconnu</td><td style="padding: 6px;">≈ 7 j équivalents en ligne droite ; ≈ 3,5 j théoriques à cheval si trajet direct</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rivecour → Tour Blanche</strong></td><td style="padding: 6px;">Nord-Ouest</td><td style="padding: 6px; text-align: right;">≈ 6 j</td><td style="padding: 6px; text-align: right;">≈ 3 j</td><td style="padding: 6px;">Sentiers et hors-piste</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rivecour → Forteresse du Patron</strong></td><td style="padding: 6px;">Nord-Ouest</td><td style="padding: 6px; text-align: right;">≈ 5,9 j</td><td style="padding: 6px; text-align: right;">≈ 3 j</td><td style="padding: 6px;">Aucune voie directe établie</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rivecour → Relais des Roches-Noires</strong></td><td style="padding: 6px;">Ouest, légèrement Nord</td><td style="padding: 6px; text-align: right;">≈ 7 j par la route</td><td style="padding: 6px; text-align: right;">≈ 3,5 j par la route</td><td style="padding: 6px;">≈ 2,1 j par le fleuve dans le sens du courant ; ≈ 5,1 j directs</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rivecour → Sanglier Gris</strong></td><td style="padding: 6px;">Sud-Ouest</td><td style="padding: 6px; text-align: right;">≈ 2 j</td><td style="padding: 6px; text-align: right;">≈ 1 j</td><td style="padding: 6px;">Route</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rivecour → Manoir des Épines Noires</strong></td><td style="padding: 6px;">Globalement Sud-Ouest</td><td style="padding: 6px; text-align: right;">≈ 4 j par la route</td><td style="padding: 6px; text-align: right;">≈ 2 j par la route</td><td style="padding: 6px;">Via le Sanglier Gris</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Aldhaven → Tour Blanche</strong></td><td style="padding: 6px;">Nord-Est</td><td style="padding: 6px; text-align: right;">3 j</td><td style="padding: 6px; text-align: right;">1,5 j</td><td style="padding: 6px;">Ancien chemin peu entretenu</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Aldhaven → Forteresse du Patron</strong></td><td style="padding: 6px;">Nord-Est</td><td style="padding: 6px; text-align: right;">5 j</td><td style="padding: 6px; text-align: right;">2,5 j</td><td style="padding: 6px;">Ancien chemin puis sentier</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Aldhaven → Relais des Roches-Noires</strong></td><td style="padding: 6px;">Est, très légèrement Sud</td><td style="padding: 6px; text-align: right;">≈ 3 j par la route</td><td style="padding: 6px; text-align: right;">≈ 1,5 j par la route</td><td style="padding: 6px;">≈ 3 j par le fleuve contre le courant ; ≈ 2,2 j directs</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Tour Blanche → Pierres-Froides</strong></td><td style="padding: 6px;">Nord-Nord-Est</td><td style="padding: 6px; text-align: right;">≈ 12 j</td><td style="padding: 6px; text-align: right;">≈ 6 j</td><td style="padding: 6px;">Steppe septentrionale</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Pierres-Froides → Brèche de Vard (entrée ouest)</strong></td><td style="padding: 6px;">Nord-Est global</td><td style="padding: 6px; text-align: right;">≈ 11 j</td><td style="padding: 6px; text-align: right;">≈ 5,5 j</td><td style="padding: 6px;">7 j dans l'Immensité à pied (ou ≈ 3,5 j à cheval), puis 4 j dans les cols</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Traversée du tunnel de la Brèche</strong></td><td style="padding: 6px;">Est-Nord-Est</td><td style="padding: 6px; text-align: right;">≈ 2,5 j</td><td style="padding: 6px; text-align: right;">—</td><td style="padding: 6px;">Galerie souterraine sous les Hautes-Lames (à pied ; actuellement scellée)</td></tr>
                        <tr><td style="padding: 6px;"><strong>Brèche de Vard → Kadar-Rauk</strong></td><td style="padding: 6px;">Nord-Ouest</td><td style="padding: 6px; text-align: right;">≈ 7 à 10 j</td><td style="padding: 6px; text-align: right;">—</td><td style="padding: 6px;">Traversée des hauts cols des Hautes-Lames</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>

        <h4>Marches orientales — trajets locaux</h4>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Trajet</th>
                            <th style="padding: 6px;">Orientation</th>
                            <th style="padding: 6px; text-align: right;">À pied</th>
                            <th style="padding: 6px; text-align: right;">À cheval</th>
                            <th style="padding: 6px;">Voie / particularités</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Valdorne → Bâtisse d'Orven et Colm</strong></td><td style="padding: 6px;">Ouest</td><td style="padding: 6px; text-align: right;">≈ 1/3 j</td><td style="padding: 6px; text-align: right;">≈ 1/6 j</td><td style="padding: 6px;">Liaison locale</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Valdorne → Grange des Trois-Saules</strong></td><td style="padding: 6px;">Est, très légèrement Sud</td><td style="padding: 6px; text-align: right;">≈ 0,17 j</td><td style="padding: 6px; text-align: right;">≈ 0,08 j</td><td style="padding: 6px;">Très proche de Valdorne</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Valdorne → Pont-Cassé</strong></td><td style="padding: 6px;">Est</td><td style="padding: 6px; text-align: right;">≈ 1,04 j</td><td style="padding: 6px; text-align: right;">≈ 0,52 j</td><td style="padding: 6px;">Grande route</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rochebrune → Bergerie sous Roche</strong></td><td style="padding: 6px;">Nord-Ouest</td><td style="padding: 6px; text-align: right;">≈ 2 j</td><td style="padding: 6px; text-align: right;">≈ 1 j</td><td style="padding: 6px;">Relation géographique par le secteur de Pont-Cassé</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rochebrune → Carrière de Beran</strong></td><td style="padding: 6px;">Sud</td><td style="padding: 6px; text-align: right;">≈ 2 h</td><td style="padding: 6px; text-align: right;">≈ 1 h</td><td style="padding: 6px;">Détour hors de la grande route</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rochebrune → Passe des Trois Bornes</strong></td><td style="padding: 6px;">Est global</td><td style="padding: 6px; text-align: right;">≈ 9 j par la route</td><td style="padding: 6px; text-align: right;">≈ 4,5 j théoriques</td><td style="padding: 6px;">≈ 4 j directs ; via Deux-Couronnes</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Tour Blanche → Forteresse du Patron</strong></td><td style="padding: 6px;">Nord-Est</td><td style="padding: 6px; text-align: right;">2 j</td><td style="padding: 6px; text-align: right;">1 j</td><td style="padding: 6px;">Sentier</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Tour Blanche → Relais des Roches-Noires</strong></td><td style="padding: 6px;">Sud, très légèrement Est</td><td style="padding: 6px; text-align: right;">≈ 2,5 j</td><td style="padding: 6px; text-align: right;">≈ 1,25 j</td><td style="padding: 6px;">Hors-piste</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Forteresse du Patron → Relais des Roches-Noires</strong></td><td style="padding: 6px;">Sud-Ouest</td><td style="padding: 6px; text-align: right;">≈ 4,1 j</td><td style="padding: 6px; text-align: right;">≈ 2,1 j</td><td style="padding: 6px;">Hors-piste en direct</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Tour Blanche → Cratère du Syndicat</strong></td><td style="padding: 6px;">Ouest</td><td style="padding: 6px; text-align: right;">4 h</td><td style="padding: 6px; text-align: right;">2 h</td><td style="padding: 6px;">Hors-piste</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Sanglier Gris → Manoir des Épines Noires</strong></td><td style="padding: 6px;">Sud</td><td style="padding: 6px; text-align: right;">≈ 2 j</td><td style="padding: 6px; text-align: right;">≈ 1 j</td><td style="padding: 6px;">Route</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Bâtisse d'Orven et Colm → Trois-Saules</strong></td><td style="padding: 6px;">Est</td><td style="padding: 6px; text-align: right;">≈ 1/2 j</td><td style="padding: 6px; text-align: right;">≈ 2 h</td><td style="padding: 6px;">Chemins secondaires</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Trois-Saules → Pont-Cassé</strong></td><td style="padding: 6px;">Est</td><td style="padding: 6px; text-align: right;">≈ 7 h</td><td style="padding: 6px; text-align: right;">≈ 3 h 30</td><td style="padding: 6px;">Axe local rejoignant la grande route</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Pont-Cassé → Bergerie sous Roche</strong></td><td style="padding: 6px;">Nord</td><td style="padding: 6px; text-align: right;">≈ 2 h</td><td style="padding: 6px; text-align: right;">≈ 1 h</td><td style="padding: 6px;">Écart depuis la route</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Pont-Cassé → Rochebrune</strong></td><td style="padding: 6px;">Sud-Est</td><td style="padding: 6px; text-align: right;">≈ 1,8 j</td><td style="padding: 6px; text-align: right;">≈ 0,9 j</td><td style="padding: 6px;">Grande route</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Carrière de Beran → Deux-Couronnes</strong></td><td style="padding: 6px;">Est, légèrement Nord</td><td style="padding: 6px; text-align: right;">≈ 2 j équivalents</td><td style="padding: 6px; text-align: right;">≈ 1 j</td><td style="padding: 6px;">Anciennes routes de carriers</td></tr>
                        <tr><td style="padding: 6px;"><strong>Passe des Trois Bornes → Karsenne</strong></td><td style="padding: 6px;">Est global</td><td style="padding: 6px; text-align: right;">≈ 7 j par la route</td><td style="padding: 6px; text-align: right;">≈ 3,5 j théoriques</td><td style="padding: 6px;">≈ 4 j directs ; première moitié sinueuse, puis descente rapide</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>

        <h4>Navigation maritime et Archipel des Tempêtes</h4>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Trajet</th>
                            <th style="padding: 6px;">Orientation</th>
                            <th style="padding: 6px; text-align: right;">Temps</th>
                            <th style="padding: 6px; text-align: right;">Distance cartographique</th>
                            <th style="padding: 6px;">Particularités</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Aldhaven → Saillans</strong></td><td style="padding: 6px;">Nord-Ouest</td><td style="padding: 6px; text-align: right;">≈ 5 j directs / ≈ 6 j par la route côtière sûre</td><td style="padding: 6px; text-align: right;">≈ 10 unités en trajet direct</td><td style="padding: 6px;">Détours dus aux récifs</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Saillans → premiers rivages connus de l'Archipel</strong></td><td style="padding: 6px;">Ouest</td><td style="padding: 6px; text-align: right;">≈ 3,1 j de navigation directe</td><td style="padding: 6px; text-align: right;">≈ 6,2 unités</td><td style="padding: 6px;">Premiers rivages : secteur de l'île secondaire des trafiquants</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Aldhaven → premiers rivages de l'Archipel</strong></td><td style="padding: 6px;">Ouest-Nord-Ouest</td><td style="padding: 6px; text-align: right;">≈ 7,5 j directs</td><td style="padding: 6px; text-align: right;">≈ 15 unités</td><td style="padding: 6px;">Haute mer</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Île secondaire → Crique Sanglante</strong></td><td style="padding: 6px;">Ouest</td><td style="padding: 6px; text-align: right;">≈ 4 h</td><td style="padding: 6px; text-align: right;">≈ 0,33 unité</td><td style="padding: 6px;">Navigation</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Crique Sanglante → baie de Vargo</strong></td><td style="padding: 6px;">Sud-Ouest</td><td style="padding: 6px; text-align: right;">≈ 1 j direct</td><td style="padding: 6px; text-align: right;">≈ 2 unités</td><td style="padding: 6px;">Navigation</td></tr>
                        <tr><td style="padding: 6px;"><strong>Crique Sanglante → Temple ogre</strong></td><td style="padding: 6px;">Ouest</td><td style="padding: 6px; text-align: right;">≈ 0,5 j direct</td><td style="padding: 6px; text-align: right;">≈ 1 unité</td><td style="padding: 6px;">Le trajet vécu en vol ne sert pas d'étalon</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h3 id="section-climat-milieux">Climat et grands milieux</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Côtes occidentales et Rivecour :</strong> Climat tempéré, allant de l'océanique au continental. Les hivers sont humides et les étés doux. Les brumes sont fréquentes sur la Mer de Jade.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Saillans :</strong> Littoral nord-ouest encaissé entre de hautes falaises de schiste et des marais salants. L'anse et les sentiers côtiers sont directement exposés aux conditions maritimes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Immensité Grise :</strong> Climat de steppe continental. Les étés sont torrides et secs, tandis que les hivers sont glacials et balayés par des vents cisaillants. Le printemps et l'automne sont très courts, avec des transitions brutales entre les saisons chaudes et froides. Le paysage est dominé par de hautes herbes sèches et jaunâtres, des affleurements basaltiques noirs et de vastes espaces ouverts soumis à des vents constants.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Plaines d'Ardélie et Marches orientales :</strong> Rivecour se trouve au cœur de plaines agricoles. Vers l'est, celles-ci se resserrent progressivement entre des collines d'ardoise avant de laisser place, au-delà de Deux-Couronnes, au massif montagneux frontalier.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Massif frontalier et Varethis :</strong> La route s'élève à travers le massif jusqu'à la Passe des Trois Bornes, col de haute montagne, puis redescend vers la haute vallée où se trouve Karsenne. Cette vallée est froide et demeure sensiblement plus élevée que les plaines d'Ardélie, tout en étant plus basse que la Passe.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Archipel des Tempêtes :</strong> Milieu insulaire volcanique au climat tropical étouffant. Les îles sont couvertes d'une végétation luxuriante souvent difficile à traverser et ponctuées de fumerolles sulfureuses. Leurs côtes sont généralement ceinturées de récifs coralliens et fréquemment noyées dans une brume persistante.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Hautes-Lames :</strong> Chaîne abrupte orientée NW-SE de pics sombres, glaciers et couloirs d'avalanches. Hiver rigoureux, fonte brutale en mars-avril rendant les cols boueux et dangereux, étés courts et secs en altitude.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Empire de l'Enclave des Cinq Trônes et Veines Chaudes :</strong> Vaste cuvette continentale régulée par un réseau géothermique et magique millénaire, <strong>les Veines Chaudes</strong>, dans lesquelles circule un fluide énergétique unique appelé <strong>l'Etherium</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li-level2"><em>Origine, monopole et infrastructure antique :</em> L'Etherium brut est <strong>exclusivement présent dans le sous-sol du Royaume de Traverse</strong>. L'ensemble du réseau de captage, de vannes cyclopéennes et de canalisations scellées traversant l'Enclave provient d'une <strong>civilisation précurseur inconnue</strong>, antérieure même aux premières dynasties naines. Les civilisations actuelles ne font qu'entretenir, exploiter et analyser ces infrastructures sans être capables d'en reproduire la technologie. Toute prospection en dehors du gisement géologique de Traverse est vaine, et forer de nouveaux accès hors du réseau préexistant demeure extrêmement hasardeux. Désormais, l'ensemble des cinq nations du bassin dépend du réseau régulé et assaini par la Couronne impériale d'Elkyriel.</p></div>
            <div class="rule-item"><p class="pseudo-li-level2"><em>Propriétés physiques et biologiques :</em> L'Etherium est un fluide caloporteur lourd, compressible pour actionner vérins et machineries, conducteur d'énergie magique pure, mais hautement volatil à l'air libre. À très faible dose, il nourrit les sols et adoucit le climat ; à forte dose brute non filtrée (au contact direct de prises ou de ruptures de conduites), il engendre de graves mutations corporelles et minérales. Le déploiement des <em>Filtres de l'Érudit</em> a assaini les réseaux urbains et agricoles de Traverse et se diffuse désormais dans toute l'Enclave, éliminant les mutations et créant des oasis tempérées verdoyantes (<em>Cités-Jardins</em>).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Forteresse-Monde et profondeurs :</strong> Les conditions thermiques varient fortement avec la profondeur et la proximité des secteurs géothermiques. Les premières strates restent tempérées à chaudes, puis la température augmente fortement dans les niveaux profonds. La Strate -4 atteint couramment <strong>150 à 200°C</strong> dans les secteurs exposés, tandis que ses galeries techniques permettent un transit à des températures plus faibles (50-60°C). La Strate -5 présente une température moyenne de <strong>28 à 30°C</strong>, mais des variations locales extrêmes allant d'environ <strong>10°C à près de 400°C</strong> selon la proximité du lac de roche en fusion et l'influence de l'Éther-Basalte.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h3 id="section-faune-populations">Faune et populations</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Surface - Immensité Grise :</strong> Herbivores (yacks, chevaux, marmottes). Prédateurs (loups gris 5-15, léopards solitaires nocturnes, aigles géants). Humanoïdes nomades (tribus Orques, clans d'Ogres 2-10, voyageurs isolés).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Hautes-Lames et Cols :</strong> Loups Géants (Worgs, notamment la meute de la Ravine Blanche), Drakes des Falaises nuançant leurs écailles sur les corniches, Drakes Rocheux dans les failles chaudes, ours bruns d'altitude.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Côtes et Maritime :</strong> Proches des ports (mouettes, goélands, crabes géants). Haute mer dangereuse (serpents de mer 10-40m, méduses géantes luminescentes, requins). Quelques équipages pirates et groupes isolés subsistent dans les îles brumeuses, sans retrouver l'ancienne puissance des Pirates des Brumes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Souterrains - La Forteresse-Monde et Nœud de Calde :</strong> Chauves-souris géantes, rats cavernicoles, serpents aveugles, Araignées Géantes et Araignées Géantes Colossales, Drakes Rocheux.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Dragons résidents répertoriés :</strong></p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Elkyriel-Aethelvahr :</strong> Dragon Noble (écailles d'adamantite gris anthracite mat à reflets dorés, aura bleu saphir piquetée d'étincelles d'or), Premier Empereur de l'Enclave des Cinq Trônes, maître de la Forteresse-Monde et de la Forge.</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Ilysthéra :</strong> Dragonne Noble (<em>La Dame des Brumes Hautes</em>), résidant dans son observatoire au-dessus de Lumérys (Astréane), alliée impériale.</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Kaldrielle :</strong> Dragonne Bestiale (<em>La Mère des Brasiers</em>), résidant dans les carrières géothermiques au nord-est de Kez-Bruma (Dhor-Kez), pacifiée, soumise et alliée impériale.</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Isilvrya :</strong> Dragonne Bestiale (<em>L'Aile d'Hiver</em>), occupant les hauts pics sauvages des Hautes-Lames au nord des Sources de Rauk (Gor-Kadar), soumise et alliée impériale.</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Nathalysse :</strong> Dragonne Noble (<em>La Dame aux Mille Parchemins</em>), vivant sous l'apparence mortelle de « Dame Thalysse de Mirande », curatrice et antiquaire à Élyria, compagne et alliée impériale.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h2 id="section-aldhaven">2. Aldhaven</h2>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : grande cité humaine portuaire.</strong></p></div>
            <div class="rule-item">
                <p>Vaste cité portuaire construite en amphithéâtre autour de son port naturel. Autrefois joyau du royaume, elle est progressivement abandonnée par la royauté et la noblesse depuis deux générations, laissant un vide de pouvoir comblé par les guildes criminelles et les seigneurs de guerre du commerce. L'autorité royale y est aujourd'hui faible ; les guildes criminelles, les réseaux clandestins et les grandes maisons commerciales contrôlent l'essentiel de ses quartiers.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-aldhaven-localisation">Localisation et environnement</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(0,00 ; 0,00)</strong>. Aldhaven constitue l'origine du système de coordonnées utilisé dans l'Atlas.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Cité portuaire de la façade occidentale d'Ardélie, ouverte sur la <strong>Mer de Jade</strong> et établie à l'extrémité aval du grand axe fluvial traversant le royaume.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Hydrographie :</strong> Le fleuve navigable reliant Rivecour à Aldhaven s'écoule globalement d'est en ouest avant de rejoindre la Mer de Jade. La navigation depuis Rivecour bénéficie du courant, tandis que la remontée vers l'intérieur des terres est beaucoup plus lente.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relief urbain :</strong> La cité est construite en amphithéâtre autour d'un port naturel. Son organisation épouse donc les pentes entourant le bassin portuaire.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Environnement régional :</strong> La Mer de Jade s'étend à l'ouest. L'Immensité Grise commence au nord et au nord-est de la cité, tandis que la route terrestre principale vers Rivecour part vers l'est.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Voies principales :</strong></p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers l'est : route terrestre et voie fluviale en direction du <strong>Relais des Roches-Noires</strong>, puis de <strong>Rivecour</strong> ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers le nord-est : ancien chemin peu entretenu menant à la <strong>Tour Blanche</strong>, puis sentiers vers la <strong>Forteresse du Patron</strong> ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers le nord-ouest : navigation côtière en direction des <strong>Saillans</strong> ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers l'ouest et le nord-ouest : routes maritimes de la Mer de Jade et accès aux premiers rivages connus de l'<strong>Archipel des Tempêtes</strong>.</p></div>
        <div class="card-end"></div>

        <h3 id="section-aldhaven-quartiers">Les Quartiers</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Port-Vieux :</strong> Docks de pierre noire usée par le sel, entrepôts délabrés. L'activité légitime s'y efface au profit de cargaisons non déclarées. Tavernes enfumées où se recrutent les équipages sans foi ni loi.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Basses-Écailles :</strong> Labyrinthe de ruelles étroites concentrant les maisons de passe, les tripots et les ateliers clandestins. Cœur de l'économie parallèle : esclavage récemment aboli mais dont les structures persistent, trafic clandestin de personnes, drogues et informations.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Haute-Ville (La Cité Morte) :</strong> Ancien quartier noble, composé de palais baroques aux fenêtres murées. La noblesse a fui. Les rues, étrangement silencieuses, sont patrouillées par des gardes privés corrompus.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Marché aux Fers (anciennement Marché aux Esclaves) :</strong> Vaste place ovale. L'abolition de l'esclavage a vidé cette place de son trafic principal, mais elle reste un point de convergence pour les mercenaires, les négociants d'armes et les tueurs à gages.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Sous-Sols :</strong> Réseau labyrinthique d'anciennes geôles royales, égouts majeurs et caves interconnectées. Accès condamnés mais connus des contrebandiers.</p></div>
        <div class="card-end"></div>

        <h3 id="section-aldhaven-presences">Présences Notables</h3>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Individu</th>
                            <th style="padding: 6px;">Espèce & sexe</th>
                            <th style="padding: 6px;">Présence ou fonction actuelle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Thorne</strong></td><td style="padding: 6px;">Nain (H)</td><td style="padding: 6px;">Forgeron commercial autonome à Aldhaven</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Maëva</strong></td><td style="padding: 6px;">Naine (F)</td><td style="padding: 6px;">Résidente, épouse de Thorne</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Fille de Thorne et Maëva</strong></td><td style="padding: 6px;">Naine (F)</td><td style="padding: 6px;">Résidente</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Kaelen</strong></td><td style="padding: 6px;">Humain (H)</td><td style="padding: 6px;">Capitaine du navire d'Elkyriel, présence périodique</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Alden</strong></td><td style="padding: 6px;">Humain (H)</td><td style="padding: 6px;">Marin sous les ordres de Kaelen, présence périodique</td></tr>
                        <tr><td style="padding: 6px;"><strong>2 Chevaliers</strong></td><td style="padding: 6px;">Humains (H)</td><td style="padding: 6px;">Garde permanente de la Forge d'Aldhaven (rotation de la Lance de Huit)</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>

        <h3 id="section-aldhaven-implantations">Implantations rattachées aux domaines d'Elkyriel</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Forge d'Aldhaven :</strong> production commerciale courante sous la direction de Thorne. Recrutement local pour la manutention et l'assistance ; livraisons par le Cercle de Téléportation sécurisé du sous-sol (Cercle n° 6 dissimulé derrière une cloison mobile).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Commerces et ateliers :</strong> une partie de la dizaine de petits établissements liés aux domaines d'Elkyriel se trouve à Aldhaven.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Installations équestres extérieures :</strong> une partie du cheptel total d'environ cent dix chevaux est accueillie dans des écuries et pâturages situés autour d'Aldhaven, sous la responsabilité de Dravenna et de ses palefreniers.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h2 id="section-saillans">3. Les Saillans</h2>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : hameau humain.</strong></p></div>
            <div class="rule-item">
                <p>Hameau de pêcheurs isolé sur la côte nord-ouest, encaissé entre falaises de schiste et marais salants. Environ quarante à cinquante habitants y vivent dans une autarcie préservée, garantissant le secret des lieux.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-saillans-localisation">Localisation et environnement</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(-7,07 ; 7,07)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Hameau côtier situé au nord-ouest d'Aldhaven, sur une portion isolée du littoral de la Mer de Jade.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relief :</strong> Le hameau occupe une anse encaissée entre de hautes falaises de schiste. Les falaises ferment principalement l'est et le sud du site et isolent fortement le hameau de l'intérieur des terres.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Milieu côtier :</strong> L'environnement immédiat associe falaises rocheuses, grève de gravier noir et marais salants. L'exposition maritime, les récifs et le relief côtier rendent les approches difficiles.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Accès terrestre :</strong> Aucune route ne relie directement les Saillans au reste du royaume. Les seuls passages terrestres sont des sentiers de falaises et de chèvres, dont certains nécessitent un équipement adapté.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Accès maritime :</strong></p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- depuis <strong>Aldhaven</strong> : environ <strong>5 jours de navigation sur une trajectoire maritime directe théorique</strong>, ou environ <strong>6 jours par la route côtière sûre</strong>, qui suit le littoral et contourne les récifs ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers l'ouest : les premiers rivages connus de l'<strong>Archipel des Tempêtes</strong> se trouvent à environ <strong>3,1 jours de navigation directe</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Position régionale :</strong> Les Saillans constituent l'un des derniers établissements humains connus de la côte nord-ouest avant les espaces maritimes menant vers l'Archipel des Tempêtes.</p></div>
        <div class="card-end"></div>

        <h3 id="section-saillans-topographie">Topographie & Architecture</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p>Anse en demi-lune de gravier noir. Falaises abruptes (50-80m) ferment l'est et le sud. Accès terrestre impossible sans équipement d'escalade.</p></div>
            <div class="rule-item"><p>Huttes basses en pierre sèche et toits de chaume tressé. Un unique quai de bois pourri. Pas de route, seulement des sentiers de chèvres.</p></div>
        <div class="card-end"></div>

        <h3 id="section-saillans-economie">Économie & Isolement</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p>Pêche artisanale, récolte d'algues comestibles et fabrication d'objets en bois flotté. L'économie repose sur le troc et la subsistance. La monnaie est presque absente. Une unique boulangerie est alimentée par le seul champ de blé du hameau.</p></div>
            <div class="rule-item"><p>N'apparaît sur aucune carte officielle. Son éloignement des routes commerciales et l'absence de ressources exploitables en font un lieu sans intérêt pour le pouvoir.</p></div>
        <div class="card-end"></div>

        <h3 id="section-saillans-presences">Présences Notables</h3>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Individu</th>
                            <th style="padding: 6px;">Espèce & sexe</th>
                            <th style="padding: 6px;">Présence ou fonction actuelle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Rose</strong></td><td style="padding: 6px;">Humaine (F)</td><td style="padding: 6px;">Boulangère et responsable du foyer</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Aldric</strong></td><td style="padding: 6px;">Humain (H)</td><td style="padding: 6px;">Garde et résident</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Seraphine</strong></td><td style="padding: 6px;">Humaine (F)</td><td style="padding: 6px;">Pâtissière, navette régulière entre la Forge et les Saillans</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Kaelen</strong></td><td style="padding: 6px;">Humain (H)</td><td style="padding: 6px;">Capitaine du navire d'Elkyriel, présence périodique</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Alden</strong></td><td style="padding: 6px;">Humain (H)</td><td style="padding: 6px;">Marin sous les ordres de Kaelen, présence périodique</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Lila</strong></td><td style="padding: 6px;">Humaine (F)</td><td style="padding: 6px;">Résidente, fille de Rose</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Milo</strong></td><td style="padding: 6px;">Humain (H)</td><td style="padding: 6px;">Résident, frère d'Elara</td></tr>
                        <tr><td style="padding: 6px;"><strong>Elara</strong></td><td style="padding: 6px;">Humaine (F)</td><td style="padding: 6px;">Résidente, sœur de Milo</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>

        <h3 id="section-saillans-cercle">Cercle de téléportation</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Une caverne isolée et dissimulée à l’abri des regards dans les falaises de schiste, à proximité du hameau des Saillans, abrite le <strong>Cercle de Téléportation n° 4</strong>. Celui-ci constitue l’un des points d’ancrage du réseau et peut ouvrir un passage vers n’importe quel autre Cercle.</p>
            </div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h2 id="section-immensite-grise">4. L'Immensité Grise</h2>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Région de steppes d'une étendue immense, couverte d'herbes hautes, sèches et jaunâtres, traversée par des vents constants et ponctuée de roches basaltiques noires dont elle tire son nom. La portion qui longe le nord d'Ardélie est déjà considérable à l'échelle du royaume, mais elle ne représente qu'une faible bordure méridionale de l'Immensité Grise.</p>
                <p>La Couronne d'Ardélie revendique l'ensemble des steppes, mais ses routes, postes et établissements n'en occupent réellement qu'une petite partie au sud. Au-delà, les immensités sont réputées sauvages. De vastes régions sont parcourues et tenues de fait par des clans orques sans royaume centralisé.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-immensite-situation">Situation et organisation géographique</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Position générale :</strong> L'Immensité Grise s'étend au nord et au nord-est d'Aldhaven et se prolonge très au-delà des limites effectivement contrôlées par Ardélie. La portion connue et fréquentée par les habitants du royaume n'en représente qu'une faible bordure méridionale.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Limite politique :</strong> La Couronne d'Ardélie revendique l'ensemble de la steppe, mais son contrôle réel se limite aux routes, établissements et secteurs méridionaux qu'elle est effectivement capable d'occuper ou de parcourir.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relief :</strong> Le paysage est majoritairement ouvert, constitué de vastes étendues herbeuses ponctuées d'affleurements basaltiques noirs, de rochers isolés et de reliefs volcaniques anciens.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Terrain et déplacements :</strong> Hors des quelques pistes et anciens chemins connus, les déplacements se font essentiellement à travers la steppe ouverte. Les grandes distances, l'absence de voies aménagées et les conditions climatiques constituent les principales contraintes de voyage.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Hydrographie :</strong> Les points d'eau sont suffisamment dispersés pour influencer les déplacements saisonniers des populations nomades. L'oasis de la Tour Blanche constitue l'un des points d'eau permanents connus de la partie occidentale de la steppe.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Principaux repères cartographiques :</strong></p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Tour Blanche — (2,12 ; 2,12) :</strong> dans la partie occidentale de la steppe ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Cratère du Syndicat — ≈ (1,95 ; 2,12) :</strong> directement à l'ouest de la Tour Blanche ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Forteresse du Patron — (3,54 ; 3,54) :</strong> au nord-est de la Tour Blanche.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relations avec Ardélie :</strong> Aldhaven se trouve au sud-ouest de la région connue. Rivecour est située plus au sud-est, dans les plaines intérieures, hors de la steppe proprement dite.</p></div>
        <div class="card-end"></div>

        <h3 id="section-immensite-geologie">Géologie et Points de Repère</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Tour Blanche :</strong> Structure isolée, ancien avant-poste de pierre blanchâtre, dominant la steppe. Sources thermales naturelles alimentant des bassins dans ses souterrains.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Cratère du Syndicat :</strong> Vaste excavation ouverte autrefois par la milice du Syndicat, composée d'anciens mercenaires du Patron devenus autonomes. Entourée de déblais, elle a créé accidentellement un accès vers les profondeurs. Le lieu n'est plus tenu par cette milice.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Rocs Noirs :</strong> Alignements de pierres volcaniques formant des obstacles naturels et des abris pour la faune.</p></div>
        <div class="card-end"></div>

        <h3 id="section-forteresse-du-patron">Forteresse du Patron</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : ancienne forteresse et siège du pouvoir du Patron.</strong></p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(3,54 ; 3,54)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Forteresse isolée située dans l'Immensité Grise, au nord-est de la Tour Blanche.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis la Tour Blanche :</strong> Environ <strong>2 jours à pied</strong> ou <strong>1 jour à cheval</strong>, vers le nord-est, par un sentier.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Aldhaven :</strong> Environ <strong>5 jours à pied</strong> ou <strong>2,5 jours à cheval</strong>, vers le nord-est, en suivant d'abord un ancien chemin puis des sentiers.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Rivecour :</strong> Environ <strong>5,9 jours à pied</strong> ou <strong>3 jours à cheval</strong>, vers le nord-ouest. Aucune voie directe établie ne relie les deux lieux.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers le Relais des Roches-Noires :</strong> Environ <strong>4,1 jours à pied</strong> ou <strong>2,1 jours à cheval</strong> par un trajet direct hors-piste vers le sud-ouest.</p></div>
            <div class="rule-item">
                <p><strong>Statut :</strong> La forteresse constituait le siège du Patron et de ses hommes. Le Patron y a été tué lors de l'assaut qui a mis fin à son pouvoir ; sa garde a été vaincue et les prisonniers qui y étaient retenus ont été libérés.</p>
                <p class="pseudo-li"><strong>Occupation actuelle :</strong> non établie (vide).</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-cratere-syndicat">Cratère du Syndicat</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : vaste excavation artificielle et accès aux profondeurs.</strong></p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>≈ (1,95 ; 2,12)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Le Cratère se trouve directement à l'ouest de la Tour Blanche, dans l'Immensité Grise.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis la Tour Blanche :</strong> Environ <strong>4 heures à pied</strong> ou <strong>2 heures à cheval</strong>, par un trajet hors-piste.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Aspect général :</strong> Vaste excavation entourée de déblais issus des travaux du Syndicat.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Accès souterrain :</strong> Les travaux d'excavation ont accidentellement percé la voûte de l'ancienne Forteresse-Monde, créant un accès depuis la surface vers ses profondeurs.</p></div>
            <div class="rule-item">
                <p><strong>Statut :</strong> Le site a été aménagé par le Syndicat lors de ses recherches de richesses enfouies. Ses forces y ont ensuite établi un camp retranché afin de contenir les créatures remontant des profondeurs. Les dernières forces organisées du Syndicat présentes dans le Cratère ont été détruites ou mises en fuite.</p>
                <p class="pseudo-li"><strong>Contrôle actuel :</strong> le Cratère n'est plus tenu par le Syndicat.</p>
                <p class="pseudo-li"><strong>Occupation actuelle :</strong> aucune.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-immensite-peuples">Peuples et Présences</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Outre la faune classique (voir section 1), l'Immensité Grise abrite de nombreuses populations orques dont les routes migratoires suivent les saisons et les points d'eau. Certaines vastes portions de la steppe constituent de véritables territoires orques de fait, parcourus ou occupés durablement par des clans sans autorité centrale commune. Leur présence est attestée par les campements, les pierres levées rituelles et les sillons d'anciens chariots.</p>
            </div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h2 id="section-mer-de-jade">5. La Mer de Jade</h2>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Eaux profondes d'un vert sombre presque noir par zones de grande profondeur. Courants marins complexes, influencés par des vents changeants.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-mer-de-jade-situation">Situation et organisation géographique</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Position générale :</strong> La Mer de Jade borde l'ouest d'Ardélie. Aldhaven est établi sur son littoral, à l'extrémité aval du grand fleuve navigable traversant le royaume.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Littoral nord-ouest :</strong> Les Saillans <strong>(-7,07 ; 7,07)</strong> se trouvent au nord-ouest d'Aldhaven, sur une côte accidentée marquée par les falaises et les récifs.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Archipel des Tempêtes :</strong> L'archipel s'étend plus à l'ouest, au large des Saillans et d'Aldhaven. Les îles connues ne représentent qu'une partie d'un ensemble insulaire beaucoup plus vaste et imparfaitement cartographié.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Premiers rivages connus de l'Archipel :</strong> Le secteur de l'île secondaire non nommée des trafiquants se situe en <strong>(-13,23 ; 7,07)</strong>, à environ <strong>3,1 jours de navigation directe à l'ouest des Saillans</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Repères cartographiques connus dans l'Archipel :</strong></p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Île secondaire non nommée des trafiquants — (-13,23 ; 7,07)</strong> ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Île de la Crique Sanglante — (-13,56 ; 7,07)</strong>, à l'ouest de l'île secondaire ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Île du Temple ogre en ruine — (-14,56 ; 7,07)</strong>, plus à l'ouest ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Île de la baie de Vargo — (-14,98 ; 5,66)</strong>, au sud-ouest de la Crique Sanglante.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Navigation depuis Aldhaven :</strong> Les premiers rivages connus de l'Archipel se trouvent à environ <strong>7,5 jours de navigation maritime directe</strong>, vers l'ouest-nord-ouest.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Contraintes maritimes :</strong> Les récifs, les brumes persistantes, les courants complexes et les barrières coralliennes rendent les approches insulaires plus difficiles que ne le suggèrent les seules distances cartographiques.</p></div>
        <div class="card-end"></div>

        <h3 id="section-archipel-des-tempetes">L'Archipel des Tempêtes</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Situé au nord-ouest, l'Archipel des Tempêtes regroupe une cinquantaine d'îlots volcaniques noirs émergeant d'une brume persistante. Le climat y est tropical étouffant, la végétation luxuriante formant une jungle impénétrable d'où s'élèvent des fumerolles sulfureuses. Chaque île est ceinturée d'une barrière de corail aux teintes variées — noir, pourpre, cramoisi — rendant l'approche maritime périlleuse pour les navires non initiés. Seules cinq îles sont répertoriées et exploitées par les commerçants et contrebandiers d'Aldhaven ; le reste demeure sauvage, hostile, et largement non cartographié.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Crique-aux-Bois (Île des Arbres-Rouges) —</strong> <em>village humain principalement indigène :</em> Village de bûcherons et charpentiers établi sur la côte orientale. Huttes sur pilotis surplombant une anse de stockage de troncs d'essences tropicales denses recherchées pour la construction navale. Sentiers taillés à la machette vers les coupes claires.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Basse-Eaux (Île du Corail-Noir) —</strong> <em>village humain principalement indigène :</em> Lagune protégée. Plongeurs spécialisés récoltant à la main les colonies de coraux noirs et pourpres tapissant les fonds peu profonds. Séchoirs à corail bordant la plage de gravier volcanique, odeur iodée âcre.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Port-Perle (Île des Larmes) —</strong> <em>village humain principalement indigène :</em> Crique sablonneuse. Pêcheurs pratiquant l'apnée pour extraire les perles d'huîtres géantes. Tri sur tables de bois avant chargement sur barges légères.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Crique-aux-Pierres (Île des Veines) —</strong> <em>village humain principalement indigène :</em> Hameau minier au pied d'une falaise noire. Galeries artisanales dans la roche volcanique pour l'extraction de gemmes brutes affleurant dans des filons rouges. Ateliers de taille rudimentaires sur place.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Cale Noire (Île du Fer-Lourd) —</strong> <em>village humain principalement indigène :</em> Village de forge pour l'extraction du minerai diamantin. Fourneaux à vent actionnés par la chaleur géothermique. Anse parsemée de laves noires refroidies, odeur de soufre permanente.</p></div>
            <div class="rule-item">
                <p>Les autres îlots ne figurent sur aucune carte officielle. La Crique Sanglante, sur un îlot voisin non répertorié, doit son nom aux coraux rouges sang qui teintent ses récifs. L'île aux Wyvernes, piton rocheux dénudé voisin de la Crique Sanglante, est infestée de wyvernes qui nichent dans les falaises et règnent en maîtres ; aucun débarquement n'y est envisageable. L'Île du Temple ogre en ruine <strong>(-14,56 ; 7,07)</strong> abrite le temple où se trouvait le cœur du « Projet Lysa ». Le site a depuis été entièrement purifié par le feu draconique ; le charnier rituel, le grimoire nécromantique, les fioles de sang et les artefacts qui s'y trouvaient ont été détruits. Le <strong>Cercle de Téléportation n° 5</strong> y est gravé dans la roche volcanique de la partie supérieure, accessible aux initiés. Il demeure utilisable comme les autres Cercles et est distinct de l’extrémité archipélagique du Portail du Grand Air. L'île du Temple Ogre en ruine se situe à l'ouest de la Crique Sanglante, à environ <strong>0,5 jour de navigation directe</strong>. Les brumes, les récifs et les courants peuvent toutefois rendre la traversée réelle plus longue que ne l'indique cette distance théorique. Les îlots restants abritent ponctuellement des villages humains principalement peuplés d'indigènes de l'archipel, tandis que leur jungle et leurs côtes restent majoritairement hostiles et peuplées d'une faune exotique peu répertoriée.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-wyvernes-archipel">Wyvernes</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Autorité :</strong> Toutes les wyvernes de l'Archipel se sont soumises à l'autorité d'Elkyriel.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Population :</strong> Environ cent quatre-vingts individus, dont une soixantaine de petits et jeunes spécimens. Leur répartition varie de deux à quatre wyvernes par île dans les zones sauvages.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Montures dressées :</strong> Soixante wyvernes adultes forment le corps d'élite de la Cavalerie des Wyvernes, armée et entraînée pour le choc aérien.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Comportement :</strong> Même dressées, les wyvernes restent des prédateurs dangereux pour les personnes étrangères à leurs cavalières et peuvent considérer comme une proie quiconque s'approche trop. Le dressage atténue ce comportement sans le supprimer.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Dynamique de population :</strong> Chez les wyvernes nourries et protégées, les affrontements territoriaux ont drastiquement diminué. Cette absence de prédation et de rivalité meurtrière favorise une croissance démographique rapide et continue.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Responsable :</strong> La Duchesse Faelia dirige leur doctrine d'emploi et la formation des cavalières, tandis que la Châtellenie des Volières assure les soins quotidiens et l'élevage dans l'Archipel.</p></div>
        <div class="card-end"></div>

        <h3 id="section-dangers-navigation-mer-jade">Dangers et Navigation</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Pirates des Brumes :</strong> Autrefois redoutables avec leurs flottilles d'éperonneurs légers opérant depuis les îlots non cartographiés du nord-ouest pour attaquer les cargos isolés. Leur force de frappe est aujourd'hui quasi inexistante : leur avant-poste de la Crique Sanglante a été ravagé par un grand groupe de Wyvernes, et l'intégralité de leur flotte a été envoyée par le fond dans la baie géothermique de l'Archipel des Tempêtes par le Dragon Véritable Elkyriel. Aucune flotte opérationnelle n'y demeure.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Serpents de Mer :</strong> Prédateurs de 30-40m, attirés par les vibrations des coques en bois.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Épaves Marchantes (Les Pagures) :</strong> Parmi les équipages naviguant près des récifs et des îlots nimbés de brouillard du nord-ouest, circulent des récits de « golems de corail » ou de « colosses de coquillages » arpentant silencieusement les hauts-fonds, souvent pris pour des esprits marins ou des hallucinations. Ces apparitions correspondent en réalité aux rares manifestations des Pagures, créatures abyssales collectionnant inlassablement corail, coquillages et matériaux récupérés afin d'agrandir leur exosquelette.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Araignées de palmiers géantes :</strong> Arachnides de la taille d'un chien, tissant leurs toiles entre les frondes des arbres de la jungle intérieure. Leur venin paralyse les muscles en quelques minutes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sangliers à crocs :</strong> Suidés noirs massifs des sous-bois tropicaux, solitaires et d'une agressivité instantanée. Leurs défenses dentées déchiquettent les chairs.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Scorpions de lave :</strong> Crustacés thermophiles vivant près des fumerolles et des rivières de lave refroidie. Leur dard injecte un venin provoquant une paralysie respiratoire.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Serpents-arbres :</strong> Vipères de deux mètres camouflées dans la végétation, dont la morsure est mortelle en moins d'une heure sans antidote.</p></div>
        <div class="card-end"></div>

        <h3 id="section-routes-maritimes">Routes Maritimes</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Route du Commerce (Aldhaven ↔ L'Archipel des Tempêtes) :</strong> Fréquentée, relativement protégée.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Route côtière vers les Saillans :</strong> Navigation vers le nord-ouest depuis Aldhaven. Environ <strong>5 jours par une trajectoire maritime directe théorique</strong> ou <strong>6 jours par la route côtière sûre</strong>, qui longe le littoral et contourne les récifs. Passage étroit entre récifs et falaises, connu uniquement des pêcheurs locaux et de quelques capitaines.</p></div>
        <div class="card-end"></div>

        <h3 id="section-mer-de-jade-presences">Présences Notables</h3>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Individu</th>
                            <th style="padding: 6px;">Espèce & sexe</th>
                            <th style="padding: 6px;">Présence ou fonction actuelle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Kaelen</strong></td><td style="padding: 6px;">Humain (H)</td><td style="padding: 6px;">Capitaine du navire d'Elkyriel, rotation maritime périodique</td></tr>
                        <tr><td style="padding: 6px;"><strong>Alden</strong></td><td style="padding: 6px;">Humain (H)</td><td style="padding: 6px;">Marin sous les ordres de Kaelen, rotation maritime périodique</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h2 id="section-rivecour">6. Rivecour</h2>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : grande ville humaine, capitale du royaume d'Ardélie.</strong></p></div>
            <div class="rule-item">
                <p>Vaste cité épanouie dans les plaines agricoles fertiles de l'est, sur les rives d'un fleuve navigable descendant des montagnes lointaines. Située à l'intérieur des terres, elle domine le commerce fluvial en amont d'Aldhaven.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-rivecour-localisation">Localisation et environnement</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(7,25 ; -1,00)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Grande ville intérieure établie dans les plaines agricoles d'Ardélie, sur les rives du grand fleuve navigable reliant l'intérieur du royaume à Aldhaven et à la Mer de Jade.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relief :</strong> Rivecour se trouve en terrain de plaine, nettement plus bas que les reliefs montagneux orientaux et que la haute vallée de Varethis.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Hydrographie :</strong> Le fleuve traverse la cité d'est en ouest. Son courant s'écoule globalement vers l'ouest, en direction d'Aldhaven et de la Mer de Jade.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Environnement régional :</strong> La ville est entourée de terres agricoles fertiles. Vers l'est commence l'axe menant aux Marches orientales ; vers le nord-ouest s'étend la direction de l'Immensité Grise et de la Tour Blanche.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Axes principaux :</strong></p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers l'ouest : route terrestre et voie fluviale vers le <strong>Relais des Roches-Noires</strong>, puis <strong>Aldhaven</strong> ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers l'est : grande route vers <strong>Valdorne</strong>, puis <strong>Pont-Cassé</strong>, <strong>Rochebrune</strong>, <strong>Deux-Couronnes</strong>, la <strong>Passe des Trois Bornes</strong> et finalement Varethis ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers le nord-ouest : sentiers et itinéraires hors-piste vers la <strong>Tour Blanche</strong> et la <strong>Forteresse du Patron</strong> ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers le sud-ouest : route menant à l'<strong>Auberge-relais du Sanglier Gris</strong>, puis au <strong>Manoir des Épines Noires</strong>.</p></div>
        <div class="card-end"></div>

        <h3 id="section-rivecour-structure">Géographie et Structure</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p>La cité s'organise en anneaux concentriques le long du fleuve qui la traverse d'est en ouest :</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Couronne :</strong> Quartier palatial sur la rive nord, dominé par les tours blanches du Palais Royal.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Quais de l'Or :</strong> Port fluvial intérieur où accostent les gabarries du commerce céréalier et les barges descendant vers Aldhaven.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Quartier des Marchands :</strong> Rues pavées abritant échoppes de maîtres artisans, apothicaires et tailleurs de soie.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Basse-Ville :</strong> Faubourgs agricoles aux rues de terre battue, entrepôts à grains et demeures des paysans.</p></div>
        <div class="card-end"></div>

        <h3 id="section-rivecour-points-interet">Points d'Intérêt</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Palais Royal :</strong> Structure baroque de pierre blanche et marbre gris, dominant le quartier de la Couronne.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Archives Occidentales :</strong> Section retirée des archives du Palais Royal, peu fréquentée en dehors des besoins administratifs. Elle dissimule l'accès à plusieurs passages de service réservés à la Couronne.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Cabinet Privé de la Régente :</strong> Petite pièce circulaire accessible par un passage secret depuis les Archives Occidentales. Kaelia l'utilise pour travailler ou recevoir confidentiellement certains interlocuteurs loin du protocole, des gardes et des regards de la Cour.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Forge Naine (voir section 6.1) :</strong> Massif de granit émergeant entre deux places commerçantes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>L'Amphithéâtre du Sénat :</strong> Bâtiment à colonnes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Thermes Publics :</strong> Établissements de bain fréquentés par la bourgeoisie.</p></div>
        <div class="card-end"></div>

        <h3 id="section-rivecour-presences">Présences Notables</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Roi Aldous</strong> – Palais Royal.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Reine Régente Kaelia</strong> – Palais Royal.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Grand Argentier Silas</strong> – Bureau du Trésor.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sénatrice Lucretia</strong> – Amphithéâtre du Sénat.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>L'Apothicaire</strong> – Quartier des Marchands.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Seigneur Valerius</strong> (noble et marchand) – Quartier noble.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Livia</strong> (fille de Valerius) – Quartier noble.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Thorek "La Gueule de Pierre"</strong> – Secteur industriel souterrain (fournitures).</p></div>
        <div class="card-end"></div>

        <h3 id="section-rivecour-presences-importantes">Présences actuelles importantes</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Odran Sorell</strong> – Ancien Grand Chancelier, destitué et condamné à mort, détenu sous garde royale dans l'attente de son exécution.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Maeron</strong> – Ancien chef local du réseau des Trois-Saules, condamné aux travaux forcés à perpétuité dans les salines royales ; actuellement détenu sous garde royale à Rivecour.</p></div>
        <div class="card-end"></div>

        <h3 id="section-rivecour-implantations">Implantations rattachées aux domaines d'Elkyriel</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Commerces et ateliers :</strong> une partie de la dizaine de petits établissements liés aux domaines d'Elkyriel se trouve à Rivecour.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Installations équestres extérieures :</strong> une partie du cheptel total d'environ cent dix chevaux est accueillie dans des écuries et pâturages situés autour de Rivecour, sous la responsabilité de Dravenna et de ses palefreniers.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h2 id="section-forge-naine-rivecour">6.1. La Forge naine de Rivecour</h2>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Contexte historique</strong></p></div>
            <div class="rule-item">
                <p>Unique structure naine de cette nature existant dans les territoires humains d'Ardélie. Bâtie il y a trois siècles, elle fut taillée dans le roc granitique. L'exode progressif des nains fut causé par les frictions avec la population humaine. Le dernier forgeron nain vendit la forteresse à Elkyriel contre une poignée de platine.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-forge-architecture">Architecture</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Extérieur :</strong> Bloc massif de granit brut ressemblant à un iceberg de pierre. Murs d'un mètre d'épaisseur, aucune fenêtre, unique accès par une double porte démesurée en bronze verdâtre.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Intérieur - Organisation Spatiale :</strong></p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>La Cour Intérieure :</strong> Puits de lumière vertical transformé en oasis féérique par la magie des résidents. Une fontaine de pierre occupe son centre. De grands arbres fruitiers, issus de variétés naines adaptées à la faible lumière, s'élèvent le long des parois et assurent nourriture et ombrage. Leurs fleurs attirent papillons, insectes multicolores et petits oiseaux. La pierre massive, les volumes et les ouvrages nains demeurent pleinement visibles, mais ils sont enlacés par une végétation vivante et soigneusement entretenue d'inspiration elfique. L'ensemble forme une alliance harmonieuse entre la solidité minérale naine et la douceur végétale elfique : l'espace est lumineux, calme, parfumé et particulièrement agréable à parcourir ou à habiter.</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>L'Atelier Forgeron :</strong> Galerie est, foyer encastré dans la roche, enclumes d'acier noir. Vastes rayonnages garnis d'armes et armures, incluant l'ancien équipement d'Elkyriel.</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Les Écuries Souterraines :</strong> Galerie ouest, vastes boxs taillés dans le roc. Moyens équestres répertoriés : 1 chariot bâché robuste, 4 chevaux de trait (robustes, adaptés aux climats rudes), 17 destriers caparaçonnés (chevaux de guerre lourds, élevés pour porter armures et rester calmes au combat), 12 chevaux de selles récupérés au Manoir des Épines Noires.</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Le Dépôt :</strong> Chambre sécurisée par des portes de pierre à mécanisme nain. Contient actuellement : l'incommensurable trésor de Glaur-Kaan (monceaux d'or, de gemmes, de soieries et d'objets d'art accumulés par le dragon) ; les vestiges bruts de son dépeçage (écailles, os, griffes et autres matériaux organiques du wyrm) ; le vaste stock de métaux rares et précieux (Fer Diamantin, Mithril, Acier Nain Traditionnel) ; le butin récupéré au Manoir des Épines Noires (vaisselle précieuse en argent et or, tissus de luxe, réserves de nourriture, armes et armures diverses, coffres de pièces d'or et d'argent, objets de valeur de la maison Valthor).</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Les Thermes :</strong> Vaste bassin de pierre à eau chaude alimentée par source géothermale captive. Des lotus aux pétales parfumés flottent à la surface tandis que des grappes de clochettes bleues lumineuses garnissent les parois humides, tamisant la brume de leur lueur purificatrice. Sol tapissé d'une mousse douce et moelleuse procurant la sensation de marcher sur du velours.</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- <strong>Quartiers de Vie :</strong> Galeries supérieures aménagées en chambres spacieuses. Des plantes grimpantes déroulent leurs cascades de clochettes bleues bioluminescentes le long des murs, continuant l'œuvre de purification et d'éclairage doux initié dans les salles d'eau.</p></div>
        <div class="card-end"></div>

        <h3 id="section-cercles-teleportation">Réseau des Cercles de Téléportation</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Secret :</strong> L’existence et la fonction du réseau demeurent secrètes hors du cercle des personnes qui l’utilisent ou en assurent la protection.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sécurité :</strong> Chaque Cercle est gravé dans un espace protégé par des mécanismes nains, des portes à verrous complexes, le contrôle de ses occupants ou l’isolement naturel du lieu. Le Cercle de Karsenne se trouve dans la cave privée de la parfumerie ; son accès matériel est contrôlé par les occupants de l’établissement et sa fonction n’est communiquée qu’aux personnes autorisées.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Principe du réseau :</strong> Chaque Cercle constitue un point d’ancrage et peut ouvrir une liaison temporaire vers n’importe quel autre Cercle. Une liaison désigne le passage créé entre deux Cercles ; elle ne constitue pas un Cercle supplémentaire.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Activation :</strong> Quelques gouttes de sang ouvrent un portail vers le Cercle choisi. Celui-ci se referme automatiquement après le passage de l’activateur.</p></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Cercle</th>
                            <th style="padding: 6px;">Localisation exacte</th>
                            <th style="padding: 6px;">Accès autorisé</th>
                            <th style="padding: 6px;">Statut actuel</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>1. Forge de Rivecour</strong></td><td style="padding: 6px;">Sous-sol sécurisé, galerie nord, derrière une porte à mécanisme nain</td><td style="padding: 6px;">Résidents de la Forge + Thorne, par messager</td><td style="padding: 6px;">Point d’ancrage opérationnel.</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>2. Tour Blanche</strong></td><td style="padding: 6px;">Tréfonds de la tour, salle des sources thermales</td><td style="padding: 6px;">Elkyriel, Faelia, Lysandra, Eryx</td><td style="padding: 6px;">Point d’ancrage opérationnel.</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>3. Strate -5</strong></td><td style="padding: 6px;">Chambre de maintenance, séparée de l’antre de Glaur-Kaan</td><td style="padding: 6px;">Elkyriel, Faelia en cas d’urgence</td><td style="padding: 6px;">Point d’ancrage opérationnel.</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>4. Saillans</strong></td><td style="padding: 6px;">Caverne dissimulée dans les falaises de schiste</td><td style="padding: 6px;">Rose, Elkyriel, Faelia, Aldric, enfants</td><td style="padding: 6px;">Point d’ancrage opérationnel.</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>5. Archipel des Tempêtes</strong></td><td style="padding: 6px;">Temple ogre en ruine, salle principale purifiée</td><td style="padding: 6px;">Elkyriel, Faelia, Vel’Shara, Nymira, Sariel</td><td style="padding: 6px;">Point d’ancrage opérationnel.</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>6. Forge d’Aldhaven</strong></td><td style="padding: 6px;">Sous-sol sécurisé de la vieille forge, derrière une cloison mobile</td><td style="padding: 6px;">Thorne, Elkyriel, Faelia, Eryx pour la logistique</td><td style="padding: 6px;">Point d’ancrage opérationnel.</td></tr>
                        <tr><td style="padding: 6px;"><strong>7. Karsenne</strong></td><td style="padding: 6px;">Cave de la parfumerie de maître Leirykle, dans le quartier des artisans</td><td style="padding: 6px;">Elkyriel, Lysandra, Faelia, Goran, Selyne Var ; autres passages uniquement sur autorisation expresse</td><td style="padding: 6px;">Point d’ancrage opérationnel.</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>

        <h3 id="section-portail-grand-air">Portail du Grand Air</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Nature :</strong> Version altérée des portails classiques, entièrement distincte du réseau des Cercles de Téléportation.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Extrémités :</strong> Il relie deux portails exclusivement associés l’un à l’autre. La première extrémité est une arche monumentale de basalte de 15 m située à l’est de la Strate -3 ; la seconde se trouve dans l’Archipel des Tempêtes et demeure distincte du Cercle 5.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Fonctionnement :</strong> Les deux portails restent ouverts en permanence. Ils ne permettent pas de choisir une autre destination ni de rejoindre les Cercles du réseau.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Effet :</strong> La liaison fait continuellement circuler la lumière solaire, l’air marin et la fraîcheur de l’Archipel vers la cité souterraine.</p></div>
        <div class="card-end"></div>

        <h3 id="section-forge-residents">Résidents rattachés à la Forge Naine</h3>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Individu</th>
                            <th style="padding: 6px;">Espèce & sexe</th>
                            <th style="padding: 6px;">Fonction actuelle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Elkyriel</strong></td><td style="padding: 6px;">Dragon (H), forme usuelle : Elfe (H)</td><td style="padding: 6px;">Propriétaire, Seigneur Mercenaire et Empereur de l'Enclave des Cinq Trônes</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Faelia</strong></td><td style="padding: 6px;">Elfe (F)</td><td style="padding: 6px;">Duchesse, Maréchale de la Couronne, première autorité en l'absence d'Elkyriel ; responsable de la Cavalerie des Wyvernes</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Eryx</strong></td><td style="padding: 6px;">Humain (H)</td><td style="padding: 6px;">Grand Intendant et coordinateur des moyens (supervision haute)</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Nymira</strong></td><td style="padding: 6px;">Elfe (F)</td><td style="padding: 6px;">Maîtresse des Archives et des Sceaux, cartographe et gestionnaire administrative</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Mila</strong></td><td style="padding: 6px;">Humaine (F)</td><td style="padding: 6px;">Intendante résidente des lieux et jardinière</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Roran</strong></td><td style="padding: 6px;">Nain (H)</td><td style="padding: 6px;">Assistant de forge et adjoint mécanique</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Doran</strong></td><td style="padding: 6px;">Humain (H)</td><td style="padding: 6px;">Assistant de forge et maintenance</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Dravenna</strong></td><td style="padding: 6px;">Orque (F)</td><td style="padding: 6px;">Grande Écuyère, responsable des chevaux, des écuries extérieures et des palefreniers</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Seraphine</strong></td><td style="padding: 6px;">Humaine (F)</td><td style="padding: 6px;">Pâtissière, navette régulière entre la Forge et les Saillans</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Vespera</strong></td><td style="padding: 6px;">Elfe (F)</td><td style="padding: 6px;">Surveillance interne et observation</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Liriel</strong></td><td style="padding: 6px;">Elfe (F)</td><td style="padding: 6px;">Musique et chant</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Lirael</strong></td><td style="padding: 6px;">Elfe (F)</td><td style="padding: 6px;">Musique et chant</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Lysa</strong></td><td style="padding: 6px;">Elfe (F)</td><td style="padding: 6px;">Aspirante Corbeau et spécialiste des drogues</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Néria</strong></td><td style="padding: 6px;">Humaine (F)</td><td style="padding: 6px;">Résidente libre</td></tr>
                        <tr><td style="padding: 6px;"><strong>2 Chevaliers</strong></td><td style="padding: 6px;">Humains (H)</td><td style="padding: 6px;">Garde permanente de l'unique entrée (Lance de Huit)</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>

        <h3 id="section-forge-presences-regulieres">Présences régulières à la Forge</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Lysandra :</strong> directrice des Corbeaux et du renseignement ; réside principalement à la Tour Blanche et rejoint régulièrement la Forge par le Cercle de Téléportation.</p></div>
        <div class="card-end"></div>

        <h3 id="section-forge-communaute-historique">Présences accueillies et communauté historique</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>La Forge a été le refuge initial des vingt témoins et rescapés de l'affaire Odran (les cinq des Trois-Saules, les six de la villa des Deux-Couronnes et les neuf de Mornefond). Après leur rétablissement, une partie a choisi de s'établir durablement à la Forge de Rivecour, tandis que les autres se sont réinstallés comme citoyens libres dans les villes et bourgs d'Ardélie (Rivecour, Valdorne, Rochebrune) ou sont retournés en Varethis.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-forge-particularites">Particularités & Fonctionnement</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li">Ventilation naturelle assurée par des conduits nains sophistiqués.</p></div>
            <div class="rule-item"><p class="pseudo-li">Température constante de 26-28°C.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sécurité :</strong> Protocole de fermeture hermétique activable par Goran ou Elkyriel. Vespera/Lysa assurent la détection précoce.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Production :</strong> Fabrication de pièces d'exception pour l'élite validée par Nymira. La production commerciale courante est assurée par la Forge d'Aldhaven.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Mercenaires de Goran (Détachement d'Ardélie) :</strong> Environ deux cent cinquante à trois cents combattants sous la livrée du marteau et de l'enclume, commandés sur le terrain par un capitaine de camp sous l'autorité de Goran, assurant discrètement la protection des comptoirs, ateliers, convois fluviaux et routes commerciales du sud, en coordination avec la Tour Blanche.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h2 id="section-forteresse-monde">7. Vestiges de l'ancienne Forteresse-Monde de l'Immensité Grise (10e Cité du Royaume de Traverse)</h2>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Système vertical antique d'origine naine ou pré-naine, enfoui sous l'Immensité Grise. Chaque strate forme un îlot d'aménagement nain au sein d'un vaste ensemble de roche et de cavernes naturelles s'étendant sur des kilomètres. Les secteurs aménagés n'occupent qu'une partie limitée de cette immensité souterraine. Reconnue officiellement comme la <strong>dixième cité du Royaume de Traverse</strong>, elle est gouvernée par la <strong>Comtesse Vel'Shara</strong>.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-forteresse-nomenclature">Principe de Nomenclature</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Les nains désignaient les grandes divisions verticales comme des Strates (strates géologiques exploitées), chacune subdivisée en Niveaux (niveaux d'aménagement horizontal). Les Strates négatives indiquent une profondeur géologique croissante. Cette numérotation ne détermine cependant pas leur ordre d'accès : le réseau souterrain est complexe et non linéaire, et certains itinéraires imposent de descendre dans une Strate plus profonde avant de pouvoir rejoindre une Strate géologiquement située plus haut. Les Niveaux sont numérotés -X1, -X2, etc. au sein de chaque Strate.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-forteresse-liaison-verticale">Infrastructure de Liaison Verticale</h3>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Type</th>
                            <th style="padding: 6px;">Description</th>
                            <th style="padding: 6px;">Strates Desservies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Grands escaliers monumentaux</strong></td><td style="padding: 6px;">Escaliers de pierre taillés dans le roc, largeur 10-15m, rampes de sécurité. Voie publique principale.</td><td style="padding: 6px;">Toutes les strates</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Puits à contrepoids</strong></td><td style="padding: 6px;">Puits verticaux avec plateforme de pierre contrebalancée par un poids de pierre descendant, actionné par levier. Transport de marchandises et personnes.</td><td style="padding: 6px;">Toutes les strates</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Cabines à vis sans fin</strong></td><td style="padding: 6px;">Cabines de pierre montant/descendant le long d'une vis d'Archimède en fer (tige hélicoïdale dans un cylindre de pierre), actionnée par manivelle depuis un poste fixe. Réservées aux ingénieurs et urgences.</td><td style="padding: 6px;">Strates -2 à -5</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Chariots à ornières</strong></td><td style="padding: 6px;">Voitures de pierre ou de bois renforcé, guidées par des rainures taillées dans le sol de pierre. Tirées par bêtes de somme ou hissées par treuil à contrepoids.</td><td style="padding: 6px;">Strates -1 à -3 (mines)</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Conduits de service</strong></td><td style="padding: 6px;">Passages étroits (1-2m) pour techniciens, reliant les stations de maintenance. Non publics.</td><td style="padding: 6px;">Toutes les strates</td></tr>
                        <tr><td style="padding: 6px;"><strong>Échelles de secours</strong></td><td style="padding: 6px;">Échelons de fer scellés dans la roche, accès d'urgence.</td><td style="padding: 6px;">Toutes les strates</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>

        <h3 id="section-forteresse-protection-thermique">Protection Thermique — Traversée de la Strate -4</h3>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Équipement</th>
                            <th style="padding: 6px;">Description</th>
                            <th style="padding: 6px;">Usage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Sas thermique double</strong></td><td style="padding: 6px;">Deux portes étanches en pierre massive avec chambre intermédiaire de transition de température (60°C → 150°C → 60°C)</td><td style="padding: 6px;">Entrée/sortie de la strate</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Tenue de protection naine</strong></td><td style="padding: 6px;">Combinaison de cuir épais + fibres de roche, scellée aux jointures. Masque à tuyau (tuyau de cuir long plongeant dans une poche d'air frais en amont, outre de cuir gonflée manuellement)</td><td style="padding: 6px;">Traversée des zones à 150-200°C</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Chariots de pierre couverts</strong></td><td style="padding: 6px;">Caisses de pierre épaisse (30-40cm) sur roues de fer, guidées par ornières, tirées par bêtes de somme. Ventilation par trompes à air (sacs de cuir actionnés par pédale depuis l'intérieur)</td><td style="padding: 6px;">Transport de marchandises et personnes non équipées</td></tr>
                        <tr><td style="padding: 6px;"><strong>Galeries d'aération</strong></td><td style="padding: 6px;">Canaux parallèles aux ponts, où circule de l'eau froide des nappes souterraines par gravité, maintenant une température viable ~40°C</td><td style="padding: 6px;">Passage technique permanent pour ingénieurs</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="rule-item">
                <p><strong>Traversée de la Strate -4 :</strong> Les ingénieurs nains traversaient la Strate -4 via les galeries d'aération et les sas, jamais par les ponts exposés sauf en cas d'urgence, avec tenue de protection et masque à tuyau. Les Automates et Golems effectuaient les tâches de maintenance sur les ponts et conduits exposés. Les Kobolds utilisent aujourd'hui les mêmes galeries d'aération, découvertes puis détournées ; leur ventilation rudimentaire laisse certaines zones atteindre 50 à 70°C, température supportable pour les Ogres et les Kobolds les plus endurcis mais mortelle pour des organismes plus fragiles.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-structure-verticale-detaillee">Structure Verticale Détaillée</h3>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Strate</th>
                            <th style="padding: 6px;">Profondeur</th>
                            <th style="padding: 6px;">Temp. ambiante</th>
                            <th style="padding: 6px;">Temp. transit</th>
                            <th style="padding: 6px;">Fonction</th>
                            <th style="padding: 6px;">Aménagements principaux</th>
                            <th style="padding: 6px;">Secteurs scellés</th>
                            <th style="padding: 6px;">Espaces naturels & dangers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Strate 0</strong></td><td style="padding: 6px;">0m</td><td style="padding: 6px;">18-20°C</td><td style="padding: 6px;">18-20°C</td><td style="padding: 6px;">Défense / Filtrage</td><td style="padding: 6px;">Couloir d'accès titanesque (30-40m de large, 20m de haut), partiellement effondré puis obstrué intentionnellement par les nains lors de l'abandon. Coursives latérales sur 3 niveaux de hauteur pour défense par le flanc. Galeries de contre-mine en surplomb. Salle de contrôle des herses et ponts-levis. Postes de garde en retrait des éboulements.</td><td style="padding: 6px;">Souterrains de débordement, magasins d'armes de siège scellés.</td><td style="padding: 6px;">Grottes adjacentes, galeries non taillées s'étendant sur des kilomètres. Faune souterraine naviguant entre surface et sous-sol (chauves-souris géantes, rats cavernicoles, serpents aveugles).</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Strate -1</strong></td><td style="padding: 6px;">-100 à -300m</td><td style="padding: 6px;">20-25°C</td><td style="padding: 6px;">20-25°C</td><td style="padding: 6px;">Vie Autonome / Défense Avancée</td><td style="padding: 6px;">Casemates et meurtrières intégrées aux parois. Herses et ponts-levis intérieurs. Terrasses de cultures souterraines : champignons géants (2-3m), lichens fluorescents. Aqueducs canalisant les rivières souterraines par gravité. Écuries souterraines pour bêtes de trait. Forge légère. Casernes de garnison. Entrepôts de réserves alimentaires et d'eau.</td><td style="padding: 6px;">Salles de quarantaine, prisons militaires, magasins de graines scellés.</td><td style="padding: 6px;">Cavernes non cultivées avec champignons sauvages. Rivières souterraines non canalisées. Puits secondaires abandonnés colonisés par les <strong>Araignées Géantes et Colossales</strong>.</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Strate -2</strong></td><td style="padding: 6px;">-400 à -700m</td><td style="padding: 6px;">25-30°C</td><td style="padding: 6px;">25-30°C</td><td style="padding: 6px;">Mémoire / Nécropole</td><td style="padding: 6px;">Vastes halls rectangulaires aux piliers massifs. Salles de momification (bassins d'embaumement chimique). Tombes monumentales : sarcophages de pierre scellée, cryptes familiales. Automates et Golems. Archives funéraires : registres des lignées.</td><td style="padding: 6px;">—</td><td style="padding: 6px;">Galeries naturelles connectées à la nécropole par effondrements ou puits non sécurisés. Une <strong>Liche</strong> s'y est établie dans les cryptes profondes avec ses gardes momifiés.</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Strate -3</strong></td><td style="padding: 6px;">-800 à -1000m</td><td style="padding: 6px;">30-40°C (32°C cité)</td><td style="padding: 6px;">32°C</td><td style="padding: 6px;"><strong>Habitat Principal & Forges (10e Cité)</strong></td><td style="padding: 6px;"><strong>Cité fortifiée & Forges lourdes :</strong> Dômes résidentiels, halls de rassemblement, grandes forges, ateliers d'armurerie, joaillerie et maçonnerie, thermes géothermaux publics. Mines actives et entrepôts de métaux précieux. Reliée au réseau de portails permanents de Traverse.</td><td style="padding: 6px;">Galeries de mine abandonnées, ateliers fermés, quartiers scellés, réserves de la Couronne oubliées.</td><td style="padding: 6px;">Veines de minerai précieux (mithril, adamantite, fer diamantin, fer lunaire). Cavernes naturelles aménagées en décharges ou en pâturages souterrains pour bêtes de somme.</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Strate -4</strong></td><td style="padding: 6px;">-1000 à -1300m</td><td style="padding: 6px;">150-200°C</td><td style="padding: 6px;">50-60°C (aération) / 40°C (eau)</td><td style="padding: 6px;">Captage Énergétique / Géothermie</td><td style="padding: 6px;">Ponts et passerelles naines enjambant la faille. Stations de captage : conduits verticaux canalisant la chaleur vers les étages supérieurs par cheminées naturelles et vis d'Archimède en pierre. Sas de maintenance : chambres isolées pour ingénieurs. Échelles d'accès et cabines à vis sans fin.</td><td style="padding: 6px;">Conduits secondaires, bassins de régulation abandonnés, stations de captage désaffectées.</td><td style="padding: 6px;">Faille verticale vitrifiée de 300m de dénivelé. Parois de verre volcanique lisse et réfléchissant. Ponts naturels de basalte cristallin, arêtes suspendues. Geysers de vapeur sulfurique. <strong>Drakes Rocheux</strong> (camouflés sur les parois).</td></tr>
                        <tr><td style="padding: 6px;"><strong>Strate -5</strong></td><td style="padding: 6px;">-1300 m à -1600 m</td><td style="padding: 6px;">Moyenne 28-30°C / Var. locales 10-400°C</td><td style="padding: 6px;">20°C (maintenance)</td><td style="padding: 6px;">Régulation Énergétique</td><td style="padding: 6px;">Chambre de maintenance : vannes géantes en bronze actionnées par manivelles, marques de niveau gravées indiquant le remplissage des bassins. Conduits principaux : arrivée de la chaleur depuis la faille, distribution vers 5 canaux ascendants par gravité et vis d'Archimède. Sas isolé : mur de pierre épais (2-3m), porte de pierre massive étanche à la chaleur. <strong>Cercle de Téléportation n° 3</strong>.</td><td style="padding: 6px;">Galeries de service derrière les conduits, salle des machines auxiliaires.</td><td style="padding: 6px;">Caverne géante adjacente : antre de Glaur-Kaan, lac de roche en fusion entourant un îlot central de basalte solidifié. Présence d'<strong>Éther-Basalte</strong>, une plante grimpante capable de croître dans des conditions extrêmes, absorbant la chaleur du magma pour se nourrir et refroidissant globalement la caverne.</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>

        <h3 id="section-forteresse-precisions-structurelles">Précisions structurelles</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p><strong>Strate -2 — Cryptes profondes :</strong> Une <strong>Liche</strong> s'est établie dans les cryptes profondes de la nécropole depuis des siècles, après l'abandon nain. Elle anime les momies naines conservées et les cadavres d'intrus afin d'en faire les gardes de son domaine.</p>
            </div>
            <div class="rule-item">
                <p><strong>Strate -4 — Traversée :</strong> Le grand escalier monumental ne traverse pas directement la faille. Il s'arrête à un palier de transit sur la rive naine, d'où partent les ponts nains enjambant la faille et une cabine à vis sans fin de secours descendant le long de la paroi vitrifiée jusqu'au palier opposé. L'escalier reprend ensuite de l'autre côté vers la Strate -5. Les ponts sont exposés à une température de 150 à 200°C.</p>
            </div>
            <div class="rule-item">
                <p><strong>Strate -5 — Station de maintenance :</strong> Les nains avaient creusé jusqu'à cette profondeur non pour y habiter, mais pour exploiter la géothermie. La chambre de maintenance permettait aux ingénieurs de réguler les vannes alimentant les thermes et les forges des strates supérieures, la distribution reposant sur la gravité et des vis d'Archimède en pierre. Lorsque Glaur-Kaan s'est installé dans la caverne adjacente, les conduits ont été rompus. Les Kobolds de son culte ont réalisé des réparations de fortune afin de créer un sas supportable où ils pratiquaient leurs rituels, séparé de la caverne du dragon par une porte de pierre massive. Le Cercle de Téléportation est gravé dans cette chambre de maintenance, et non dans l'antre elle-même.</p>
            </div>
            <div class="rule-item">
                <p><strong>Strate -5 — État thermique actuel de la caverne :</strong> La température de la caverne n'est pas uniforme. Elle se maintient en moyenne entre 28 et 30°C grâce à l'Éther-Basalte, une plante grimpante capable de croître dans des conditions extrêmes. Ses racines se développent directement dans la roche en fusion, dont elle absorbe la chaleur pour se nourrir. Cette propriété abaisse fortement la température autour de la plante et constitue la principale cause du refroidissement général de la caverne. Selon l'emplacement exact, la température peut toutefois varier d'environ 10°C dans les secteurs les plus refroidis à près de 400°C au voisinage immédiat du lac de roche en fusion. Celui-ci demeure actif et entoure un îlot de basalte solidifié situé en son centre. La chambre de maintenance reste maintenue à environ 20°C.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-colonie-strate-3">État actuel de la colonie (Strate -3 — Cité fortifiée et habitée)</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Occupation :</strong> Dômes résidentiels occupés par les colons, artisans et personnes libérées.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Portail du Grand Air :</strong> À l’est de l’avenue principale, l’une des deux extrémités exclusives du Portail du Grand Air forme une arche de basalte de 15 m. Elle demeure ouverte en permanence vers sa seconde extrémité, située dans l’Archipel des Tempêtes et distincte du Cercle 5. La liaison inonde la cité de lumière solaire, de vent marin et d’une brise rafraîchissante, maintenant la strate à environ 32 °C. La continuité visuelle et climatique créée par l’arche donne l’illusion que la cité est bâtie dans les falaises côtières de l’Archipel plutôt qu’au cœur des profondeurs sous la steppe, contribuant à préserver le secret de son emplacement réel.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Place Royale et Portails :</strong> À l’est de l’avenue principale, la grande place centrale de granit poli accueille le <strong>cercle des neuf arches royales de Traverse</strong> (reliant instantanément la Forteresse-Monde à chacune des neuf cités de surface) ainsi que l'arche monumentale du <strong>Portail du Grand Air</strong> (arche de basalte de 15 m ouverte en permanence vers l’Archipel des Tempêtes, distincte du Cercle 5). Cette configuration exceptionnelle inonde la cité souterraine de lumière solaire, d’air marin et d’une brise rafraîchissante maintenant la strate à environ 32 °C, tout en assurant un débit ininterrompu de colons, d'artisans et de convois miniers lourds vers l'ensemble du royaume.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Infrastructures :</strong> Grand monte-charge de l'Est opérationnel, avec contrepoids de pierre, poulies de bronze et câbles de chanvre.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Défenses extérieures :</strong> Le sas principal de la Strate 0 mesure 30 m de large. Il comprend des meurtrières renforcées, une herse de fer nain blindée de plaques de bronze de 0,5 m et des galeries de contre-mine préparées à l'effondrement. La Strate -1 dispose de ponts-levis et de réserves de goudron bouillant.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Défenses intérieures :</strong> Des herses et des barricades de fer ferment les accès verticaux secondaires de la Strate -3. Elles isolent la cité des araignées géantes de la Strate -1 et des morts-vivants de la Strate -2.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sécurité :</strong> Les frontières intérieures et les accès scellés sont surveillés par <strong>Les Spectres de la Pierre</strong> (Kobolds Traqueurs équipés de cuir de Wyverne teintés gris-basalte, entraînés par Sariel).</p></div>
        <div class="card-end"></div>

        <h3 id="section-forteresse-mines-production">Mines et production</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Galeries exploitées :</strong> faible partie des galeries accessibles de la Strate -3.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Extraction :</strong> dirigée par les familles naines et Roran ; les Kobolds prospectent les passages étroits et les Ogres déplacent les charges lourdes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Production minière :</strong> pierre, pierres semi-précieuses et précieuses, minerais communs, rares et exotiques. De très rares filons de mithril, d'adamantite, de minerai diamantin et de minerai lunaire existent dans le réseau ; tous ces minerais doivent être raffinés avant utilisation et leur exploitation constitue une ressource particulièrement précieuse.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Ateliers de production :</strong> grandes forges de la Cité-Monde à forte capacité de production.</p></div>
        <div class="card-end"></div>

        <h3 id="section-population-forces-forteresse">Population et forces de la forteresse-monde (Strate -3 d'Habitation)</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Reconnue comme la dixième cité du Royaume de Traverse, la Strate -3 constitue une véritable Cité-Monde souterraine dont la <strong>population totale permanente avoisine désormais les 15 000 habitants</strong>, additionnant les différentes espèces unies sous l'autorité de la Comtesse Vel'Shara et reliées au royaume par le Portail royal :</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Kobolds (environ 7 000 individus) :</strong> Première composante démographique de la cité, en pleine expansion démographique (portées nombreuses et jeunes en formation accélérée). Dirigés par leurs Shamans, ils vouent un culte absolu au Roi-Dragon Elkyriel et assurent la prospection, l'entretien des conduits et une part essentielle de l'artisanat minier.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Citoyens libres multiraciaux (environ 7 500 individus) :</strong> Elfes, Humains, Nains et Orques libres. Ce groupe réunit le noyau historique des personnes libérées du Manoir et des Fers Noirs, désormais enrichi de nombreuses familles d'artisans, forgerons, maçons, mineurs et fermiers souterrains installés depuis les autres cités de Traverse via le réseau des Portails.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Communauté Ogre (environ 165 individus) :</strong> Environ 150 Ogres Brutes et 15 Ogres-Mages, pleinement intégrés à la vie civile et aux chantiers de la colonie sous l'autorité directe de Vel'Shara.</p></div>
        <div class="card-end"></div>

        <h4>Les Forces Militaires de la Forteresse</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>L'Escouade d'Intervention de la Forge :</strong> Escouade d'élite multi-espèces menée par Goran (Goran, 4 chevaliers humains de la Lance de Huit, la gladiatrice orque Dravenna, le nain Roran, l'éclaireuse elfe Sariel et 2 Ogres Brutes sous l'égide de Vel'Shara). Équipement commun : armure de la Forge et tabard noir brodé d'un marteau d'argent au-dessus d'une enclume.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Lance de Huit :</strong> 4 Chevaliers d'élite humains en armure de plaques d'Acier Nain Traditionnel en garnison de rotation (les 4 autres étant affectés à la protection des forges de Rivecour et d'Aldhaven).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Spectres de la Pierre :</strong> 400 Kobolds Traqueurs d'élite équipés de cuir de Wyverne gris-basalte (entraînés et commandés par Sariel pour la surveillance des tréfonds et des frontières intérieures).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Gardes de l'Ombre :</strong> 25 Ogres Brutes d'élite (massues forgées et armures renforcées de plaques naines) sous les ordres directs de Vel'Shara.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Collège des Temples :</strong> 24 Kobolds Shamans dédiés à la régulation thermique et à la culture de l'Éther-Basalte.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Tributs de labeur :</strong> Contingents d'automates/golems de traction et de morts-vivants déployés selon les besoins des chantiers insalubres et des mines profondes sous la supervision des ingénieurs et nécromanciens (issus du parc mobilisable de 1 200 golems et 10 000 corps répartis à travers le royaume).</p></div>
        <div class="card-end"></div>

        <h4>Responsables, spécialistes et personnels rattachés</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Elkyriel :</strong> Dragon véritable (forme usuelle : elfe) — Empereur de l'Enclave des Cinq Trônes, propriétaire et maître de la Forteresse-Monde.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Faelia :</strong> Elfe (F) — Duchesse, Maréchale, soutien magique et maître d'armes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Nymira :</strong> Elfe (F) — Archiviste et cartographe.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sariel :</strong> Elfe (F) — Éclaireuse des tréfonds et formatrice des Spectres de la Pierre.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vel'Shara :</strong> Ogre-Mage (F) — Comtesse de la Forteresse-Monde, gouverneure et maîtresse alchimiste de la Strate -3 ; responsable des populations ogres et koboldes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Goran :</strong> Humain (H) — Chevalier, Connétable et commandant des forces militaires ordinaires.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Eryx :</strong> Humain (H) — Grand Intendant général (QG à la Forge de Rivecour mais liaisons régulières).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Eirik :</strong> Humain (H) — Responsable en chef des cuisines de la Forteresse-Monde.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Borin :</strong> Humain (H) — Maître charpentier de reconstruction.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Roran :</strong> Nain (H) — Colosse, ancien mineur, adjoint aux ateliers de mécanique naine.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Thalira :</strong> Humaine (F) — Guérisseuse et médecin de la colonie.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Liora :</strong> Elfe (F) — Alchimiste et herboriste de la colonie.</p></div>
        <div class="card-end"></div>

        <h4>Intégration et colonisation civile</h4>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Les personnes initialement libérées du Manoir et des Fers Noirs constituent les pionniers de la cité souterraine. Ils sont désormais pleinement assimilés et forment, avec les arrivants de Traverse, la communauté des 7 500 citoyens libres actifs dans les ateliers, cultures et services urbains.</p>
            </div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h2 id="section-relais-roches-noires">8. Le Relais des Roches-Noires</h2>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(2,15 ; -0,35)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Auberge fortifiée et carrefour militaire situé sur le grand axe terrestre et fluvial reliant Aldhaven à Rivecour. Le Relais se trouve nettement plus près d'Aldhaven que de Rivecour.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relief :</strong> L'établissement occupe un plateau basaltique noirâtre dominant le fleuve navigable. La roche volcanique locale est à l'origine de son nom.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Hydrographie :</strong> Le fleuve longe le secteur et s'écoule globalement depuis Rivecour vers Aldhaven et la Mer de Jade. Le Relais constitue donc également une halte pour la navigation fluviale.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Aldhaven :</strong> Environ <strong>3 jours à pied</strong> ou <strong>1,5 jour à cheval</strong> par la route, vers l'est très légèrement au sud. La remontée du fleuve contre le courant demande également environ <strong>3 jours</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Rivecour :</strong> Environ <strong>7 jours à pied</strong> ou <strong>3,5 jours à cheval</strong> par la route, vers l'ouest légèrement au nord. La descente du fleuve dans le sens du courant demande environ <strong>2,1 jours</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers la Tour Blanche :</strong> La Tour Blanche se trouve au nord, très légèrement à l'ouest, à environ <strong>2,5 jours à pied</strong> ou <strong>1,25 jour à cheval</strong> par un trajet hors-piste.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers la Forteresse du Patron :</strong> La Forteresse du Patron se situe au nord-est du Relais ; un trajet direct hors-piste représente environ <strong>4,1 jours à pied</strong> ou <strong>2,1 jours à cheval</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Fonction géographique :</strong> Le Relais sert à la fois de point de ravitaillement des convois terrestres, de halte fluviale et de point de transition entre l'axe civilisé Aldhaven–Rivecour et les itinéraires menant vers l'Immensité Grise.</p></div>
        <div class="card-end"></div>

        <h3 id="section-relais-structure">Structure et Organisation</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Ensemble architectural hybride : Immense corps principal de pierre basaltique locale, courtine défensive entourant une cour, et campement extérieur de tentes et abris temporaires en bois et pierre sèche.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-relais-fonction">Fonction</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Seul lieu structuré de recrutement militaire entre les deux cités. Neutralité strictement imposée : les gardes du Relais (mercenaires retraités payés par une taxe sur les contrats) interdisent formellement tout règlement de compte sous peine de bannissement définitif.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-grand-tableau">Le Grand Tableau</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Mur d'affichage monumental en chêne noir ciré, protégé des intempéries par un auvent, situé dans la cour. Système tripartite par codes de couleur :</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Épingles Noires :</strong> Missions à haut risque, traques et contrats de guerre.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Épingles Grises :</strong> Contrats standards, gardes de caravanes et escortes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Épingles Blanches :</strong> Services civils et non-martiaux.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h2 id="section-tour-blanche">9. La Tour Blanche</h2>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Monolithe de pierre blanchâtre d'une hauteur impressionnante dominant la steppe occidentale, entouré d'une oasis luxuriante alimentée par des résurgences géothermales. Cet édifice très ancien a été bâti par une civilisation inconnue et dans un but initial qui demeure un mystère.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-tour-blanche-localisation">Localisation et environnement</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(2,12 ; 2,12)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Édifice isolé situé dans la partie occidentale de l'Immensité Grise, sur sa bordure méridionale connue. La Tour Blanche se dresse au milieu de la steppe et constitue l'un de ses principaux repères fixes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Environnement :</strong> La tour domine un paysage ouvert de hautes herbes sèches, balayé par les vents et ponctué d'affleurements basaltiques noirs. À son pied, des résurgences souterraines alimentent une oasis de verdure qui contraste fortement avec la steppe environnante.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Accès depuis Aldhaven :</strong> Environ <strong>3 jours à pied</strong> ou <strong>1,5 jour à cheval</strong> vers le nord-est, par un ancien chemin peu entretenu.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Accès depuis Rivecour :</strong> Environ <strong>6 jours à pied</strong> ou <strong>3 jours à cheval</strong> vers le nord-ouest, principalement par sentiers et hors-piste.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Cratère du Syndicat — ≈ (1,95 ; 2,12) :</strong> Situé directement à l'ouest de la Tour Blanche, à environ <strong>4 heures à pied</strong> ou <strong>2 heures à cheval</strong>, hors-piste.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Forteresse du Patron — (3,54 ; 3,54) :</strong> Située au nord-est de la Tour Blanche, à environ <strong>2 jours à pied</strong> ou <strong>1 jour à cheval</strong>, par sentier.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relais des Roches-Noires — (2,15 ; -0,35) :</strong> Situé presque plein sud, très légèrement à l'est, à environ <strong>2,5 jours à pied</strong> ou <strong>1,25 jour à cheval</strong>, par un trajet hors-piste.</p></div>
        <div class="card-end"></div>

        <h3 id="section-tour-blanche-fonction-passee">Fonction passée, architecture et périmètre</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>La Tour Blanche a historiquement servi de <strong>prison dorée</strong>. Ses appartements intérieurs ont été richement et luxueusement aménagés afin de rendre la réclusion confortable et de masquer son caractère carcéral. À l'inverse, ses abords sont marqués par les ruines de plusieurs anciens avant-postes et structures défensives, conçus pour empêcher aussi bien l'évasion depuis la tour qu'une tentative de libération venue de l'extérieur.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-tour-blanche-souterrains-oasis">Souterrains et Oasis</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>L'Oasis :</strong> À la base de la tour, contrastant radicalement avec l'aridité de la steppe, s'étend une oasis de verdure luxuriante alimentée par des résurgences souterraines.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Souterrains :</strong> Les tréfonds de la tour abritent des sources thermales naturelles alimentant de vastes bassins de pierre, ainsi que le <strong>Cercle de Téléportation n° 2</strong> secret capable d’ouvrir un passage vers n’importe quel autre Cercle.</p></div>
        <div class="card-end"></div>

        <h3 id="section-tour-blanche-statut-actuel">Statut et occupation actuels</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Statut actuel :</strong> Centre névralgique du réseau d'espionnage des <strong>Corbeaux de Lysandra</strong> et <strong>comptoir diplomatique et commercial majeur</strong> entre les domaines d'Elkyriel et les Kraals du Royaume Orque de Gor-Kadar.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Échanges commerciaux :</strong> Échange d'armes, outils et pièces de forge de haute qualité contre des peaux, minéraux, baies et ingrédients d'altitude orques.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sécurité et garnison permanente :</strong> <strong>24 Golems de guerre lourds</strong> montent une garde ininterrompue et infranchissable autour de la tour et de l'oasis.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présence armée locale :</strong> La garde de la Tour Blanche et de son périmètre immédiat intègre, sous la direction des Corbeaux, des combattants aguerris issus des anciens réseaux du Patron et du Syndicat, désormais ralliés et disciplinés au service de Lysandra.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présence diplomatique :</strong> <strong>Rhazka Cendre-Claire</strong>, Parole de guerre orque, y réside en tant qu'ambassadrice permanente de Gor-Kadar auprès d'Elkyriel.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Lysandra :</strong> résidence principale à la Tour Blanche. Elle rejoint régulièrement la Forge de Rivecour et Élyria par le Cercle de Téléportation n° 2.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Réseau des Corbeaux :</strong> présent dans l'ensemble de l'Ardélie, jusque dans ses villes et villages ; en Varethis, son implantation est administrée par la cellule locale de Karsenne dirigée par Selyne Var.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Corbeaux véritables :</strong> de nombreux oiseaux sont présents en permanence au sommet de la tour, servant de messagers et d'observateurs.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Oasis :</strong> les Corbeaux autorisent les groupes nomades à y établir temporairement leurs campements. Les clans orques y séjournent régulièrement et commercent avec les occupants de la tour.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h2 id="section-marches-orientales">10. Les Marches orientales et la route de Varethis</h2>
        
        <h3 id="section-marches-organisation">10.1. Organisation géographique</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Les Marches orientales s'étendent à l'est de Rivecour. Les plaines agricoles de l'intérieur du royaume s'y prolongent d'abord largement, puis se resserrent progressivement entre des collines d'ardoise à mesure que l'on avance vers l'est.</p>
                <p>L'axe terrestre principal reliant Ardélie à Varethis traverse successivement :</p>
                <p><strong>Rivecour → Valdorne → Pont-Cassé → Rochebrune → Deux-Couronnes → Passe des Trois Bornes → Karsenne.</strong></p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Valdorne — (8,59 ; -1,00) :</strong> Petite ville située directement sur l'axe principal, à l'est de Rivecour.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Pont-Cassé — (9,63 ; -1,00) :</strong> Point de passage de la route orientale dans la vallée de la Veyre.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Rochebrune — (11,04 ; -2,16) :</strong> Bourg fortifié constituant l'un des principaux centres des Marches orientales.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Deux-Couronnes — (13,04 ; -2,16) :</strong> Dernier village majeur avant le massif montagneux frontalier.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Passe des Trois Bornes — (15,04 ; -2,16) :</strong> Col de haute montagne marquant la frontière naturelle entre Ardélie et Varethis.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Karsenne — (19,04 ; -2,16) :</strong> Ville située dans une haute vallée de l'autre côté du massif.</p></div>
            <div class="rule-item">
                <p>Entre Rivecour et Rochebrune, la route traverse principalement des plaines puis des régions de collines. À l'est de Rochebrune, elle poursuit globalement vers Deux-Couronnes. Au-delà du village commence le massif montagneux : la voie devient alors très sinueuse, empruntant vallées, lacets et contournements jusqu'à la Passe des Trois Bornes.</p>
                <p>Après la Passe, la route reste d'abord sinueuse dans les montagnes, puis descend plus directement vers la haute vallée de Varethis. Karsenne est située plus bas que la Passe, mais nettement plus haut que les plaines de Rivecour.</p>
                <p>De nombreuses voies secondaires se détachent de cet axe principal. Anciennes routes de carriers, chemins ruraux, pistes forestières et sentiers desservent notamment la Bâtisse d'Orven et de Colm, la Grange des Trois-Saules, la Bergerie sous Roche, la Carrière de Beran et d'autres sites des Marches.</p>
                <p>Les Salines de Mornefond sont nettement séparées de cet axe : elles se trouvent très au sud de Deux-Couronnes, aux coordonnées <strong>(13,04 ; -9,16)</strong>. Leur itinéraire terrestre exact depuis Rochebrune n'est actuellement pas établi.</p>
                <p><em>(Note régionale : Le royaume d'Ardélie et le royaume de Varethis comptent des centaines de hameaux, fermes fortifiées, prieurés et villages non répertoriés dans ce document).</em></p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-rochebrune">10.2. Rochebrune</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : bourg humain fortifié.</strong></p></div>
        <div class="card-end"></div>

        <h4>Localisation et environnement</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(11,04 ; -2,16)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Rochebrune est un bourg fortifié des Marches orientales, situé sur l'axe principal reliant Rivecour à Varethis. La route arrive depuis Pont-Cassé au nord-ouest et poursuit vers l'est en direction du village des Deux-Couronnes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relief :</strong> Le bourg se trouve dans la zone de transition entre les collines des Marches orientales et les reliefs qui annoncent progressivement le massif frontalier situé au-delà de Deux-Couronnes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Environnement :</strong> Les alentours associent terres d'élevage, collines pierreuses, anciennes zones d'extraction et voies utilisées par les convois traversant les Marches.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers Rivecour :</strong> Environ <strong>4,18 jours à pied</strong> ou <strong>2,09 jours à cheval</strong> par l'axe routier, vers l'ouest puis le nord-ouest.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers Valdorne :</strong> Environ <strong>2,84 jours à pied</strong> ou <strong>1,42 jour à cheval</strong>, via Pont-Cassé.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers Pont-Cassé :</strong> Environ <strong>1,8 jour à pied</strong> ou <strong>0,9 jour à cheval</strong>, vers le nord-ouest.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers Deux-Couronnes :</strong> Environ <strong>2 jours à pied</strong> ou <strong>1 jour à cheval</strong>, plein est par la grande route.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers la Passe des Trois Bornes :</strong> Environ <strong>9 jours à pied par la route</strong> ou <strong>4,5 jours théoriques à cheval</strong>, via Deux-Couronnes. La distance directe n'est que d'environ 4 jours de marche équivalents, le massif imposant ensuite d'importants détours.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Carrière de Beran — (11,04 ; -2,41) :</strong> Située plein sud de Rochebrune, à environ <strong>2 heures à pied</strong> ou <strong>1 heure à cheval</strong>, par un détour hors de la grande route.</p></div>
            <div class="rule-item">
                <p>Bourg d'environ deux mille habitants. Les maisons sont bâties en pierre brun-rouge. Les activités principales sont le passage des convois, l'élevage et les activités liées aux anciennes exploitations de pierre de la région.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Porte de l'Ouest :</strong> poste de péage, écuries et arrivée de la route venant de Pont-Cassé et de Rivecour.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Place des Tailleurs :</strong> marché, auberges et anciens bureaux liés à l'activité des carriers.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Auberge de la Couronne de Schiste :</strong> auberge luxueuse de Rochebrune.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Route orientale :</strong> grande route poursuivant vers Deux-Couronnes, puis vers le massif frontalier et Varethis.</p></div>
        <div class="card-end"></div>

        <h4>Présences notables et actuelles</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Alise :</strong> résidente de Rochebrune ; demeure habituellement chez son père dans la ville.</p></div>
        <div class="card-end"></div>

        <h3 id="section-valdorne">10.3. Valdorne</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : petite ville humaine.</strong></p></div>
        <div class="card-end"></div>

        <h4>Localisation et environnement</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(8,59 ; -1,00)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Valdorne est située directement sur l'axe principal reliant Rivecour aux Marches orientales et à Varethis.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relief :</strong> La ville est établie dans une vallée cultivée entre les premières collines d'ardoise. Elle marque la transition entre les grandes plaines agricoles de l'intérieur du royaume et les reliefs plus marqués des Marches orientales.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Environnement :</strong> Prés, vergers, terres cultivées et exploitations agricoles entourent directement la ville. Plus loin, les bois et les collines deviennent progressivement plus présents.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Voirie principale :</strong> La grande route traverse Valdorne d'ouest en est. Elle mène vers <strong>Rivecour</strong> à l'ouest et vers <strong>Pont-Cassé</strong>, puis <strong>Rochebrune</strong>, à l'est.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Voies secondaires :</strong> Plusieurs chemins ruraux et pistes locales desservent les fermes, bois, domaines et lieux isolés des environs, notamment la <strong>Bâtisse d'Orven et de Colm</strong> et la <strong>Grange des Trois-Saules</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Distances principales :</strong></p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers <strong>Rivecour</strong> : environ <strong>1,34 jour à pied</strong> ou <strong>0,67 jour à cheval</strong> ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers <strong>Rochebrune</strong> : environ <strong>2,84 jours à pied</strong> ou <strong>1,42 jour à cheval</strong>, via Pont-Cassé ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers <strong>Pont-Cassé</strong> : environ <strong>1,04 jour à pied</strong> ou <strong>0,52 jour à cheval</strong> ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers la <strong>Bâtisse d'Orven et de Colm</strong> : environ <strong>1/3 de jour à pied</strong> ou <strong>1/6 de jour à cheval</strong>, vers l'ouest ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers la <strong>Grange des Trois-Saules</strong> : environ <strong>0,17 jour à pied</strong> ou <strong>0,08 jour à cheval</strong>, vers l'est.</p></div>
            <div class="rule-item">
                <p>Valdorne reste moins importante que Rochebrune, mais joue un rôle local de desserte des fermes, hameaux et exploitations forestières de la région. Les constructions sont principalement en pierre locale et en bois, regroupées autour d'une place de marché et de quelques rues suffisamment larges pour les chariots.</p>
                <p class="pseudo-li"><strong>Activités principales :</strong> agriculture, élevage, exploitation forestière, artisanat courant et commerce local.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-carriere-beran">10.4. Carrière de Beran</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : ancienne carrière aménagée.</strong></p></div>
        <div class="card-end"></div>

        <h4>Localisation et environnement</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(11,04 ; -2,41)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Ancienne carrière située plein sud de Rochebrune, à l'écart de la grande route traversant les Marches orientales.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Accès depuis Rochebrune :</strong> Environ <strong>2 heures à pied</strong> ou <strong>1 heure à cheval</strong>, par un détour hors de la grande route.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relief et terrain :</strong> Le site est constitué de fronts de taille, de rampes de pierre et d'anciennes zones d'extraction. Plusieurs pistes et voies de carriers traversent les alentours.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sol et passages :</strong> Ornières, traces de passage de chevaux et anciens espaces utilisés par les convois de carriers.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Bâtiments et installations :</strong> Plusieurs constructions liées à l'ancienne exploitation subsistent, notamment des hangars ruinés, un ancien bureau de pesage et une forge aménagée dans la carrière.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Anciennes routes de carriers :</strong> Des voies issues de l'activité extractive permettent de poursuivre vers l'est, légèrement au nord, en direction de Deux-Couronnes. Le trajet Carrière de Beran → Deux-Couronnes représente environ <strong>2 jours de marche équivalents</strong> ou <strong>1 jour à cheval</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Usage connu :</strong> La carrière a servi de cache aux hommes de Beran Doss.</p></div>
        <div class="card-end"></div>

        <h3 id="section-batisse-orven-colm">10.5. Bâtisse d'Orven et de Colm</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : ancienne maison de carriers.</strong></p></div>
        <div class="card-end"></div>

        <h4>Localisation et environnement</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(8,26 ; -1,00)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Bâtisse isolée située à l'ouest de Valdorne, à proximité de la ville mais à l'écart de la grande route.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Accès depuis Valdorne :</strong> Environ <strong>1/3 de journée à pied</strong> ou <strong>1/6 de journée à cheval</strong>, vers l'ouest, par une liaison locale.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relief :</strong> La maison se trouve au fond d'une combe boisée traversée par un ancien chemin d'extraction. La combe ne possède qu'une sortie aisément praticable à cheval.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Bâtiments :</strong> Maison de carriers en pierre accompagnée d'une cour de terre, d'une petite écurie et d'une arrière-salle.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Grange attenante :</strong> Une grange est directement rattachée à l'habitation. Elle appartient au même ensemble bâti mais demeure totalement distincte de la <strong>Grange des Trois-Saules</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers la Grange des Trois-Saules :</strong> Celle-ci se trouve à l'est, à environ <strong>une demi-journée à pied</strong> ou <strong>2 heures à cheval</strong>, par des chemins secondaires.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>État actuel :</strong> bâtisse vide.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présences :</strong> aucune personne ni créature actuellement établie.</p></div>
        <div class="card-end"></div>

        <h3 id="section-trois-saules">10.6. Grange des Trois-Saules</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : grange isolée en ruine.</strong></p></div>
        <div class="card-end"></div>

        <h4>Localisation et environnement</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(8,76 ; -1,00)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Grange isolée située à l'est de Valdorne, à proximité de l'axe oriental mais accessible par des chemins secondaires.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Valdorne :</strong> Environ <strong>0,17 jour à pied</strong> ou <strong>0,08 jour à cheval</strong>, vers l'est.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis la Bâtisse d'Orven et de Colm :</strong> Environ <strong>une demi-journée à pied</strong> ou <strong>2 heures à cheval</strong>, vers l'est, par des chemins secondaires.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers Pont-Cassé :</strong> Environ <strong>7 heures à pied</strong> ou <strong>3 h 30 à cheval</strong>, vers l'est, par un axe local rejoignant la grande route.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Environnement :</strong> La grange se dresse derrière une levée de terre. Trois saules constituent son principal repère visuel depuis l'ancien chemin. Un pré voisin et plusieurs chemins secondaires occupent ses abords.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>État actuel :</strong> bâtiment incendié, charpente effondrée et sous-sols calcinés.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Créatures :</strong> aucune créature présente.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présences vivantes :</strong> aucune.</p></div>
        <div class="card-end"></div>

        <h3 id="section-pont-casse">10.7. Pont-Cassé de la Veyre</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : ancien pont de pierre et point de passage routier.</strong></p></div>
        <div class="card-end"></div>

        <h4>Localisation et environnement</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(9,63 ; -1,00)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Pont-Cassé se trouve sur l'axe principal des Marches orientales, entre Valdorne à l'ouest et Rochebrune au sud-est.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Valdorne :</strong> Environ <strong>1,04 jour à pied</strong> ou <strong>0,52 jour à cheval</strong>, vers l'est par la grande route.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis la Grange des Trois-Saules :</strong> Environ <strong>7 heures à pied</strong> ou <strong>3 h 30 à cheval</strong>, vers l'est, par un axe local rejoignant la grande route.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers Rochebrune :</strong> Environ <strong>1,8 jour à pied</strong> ou <strong>0,9 jour à cheval</strong>, vers le sud-est par la grande route.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers la Bergerie sous Roche :</strong> Environ <strong>2 heures à pied</strong> ou <strong>1 heure à cheval</strong>, vers le nord, par un écart depuis la route.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Hydrographie :</strong> Le pont franchissait la Veyre. Une crue a emporté son arche centrale, rendant le passage direct inutilisable.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Franchissement actuel :</strong> Un gué voisin demeure praticable à cheval.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Rive occidentale :</strong> ancienne route frontalière et talus pierreux.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Rive orientale :</strong> bois dense et sentiers de rive.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présences permanentes :</strong> aucune.</p></div>
        <div class="card-end"></div>

        <h3 id="section-bergerie-sous-roche">10.8. Bergerie sous Roche</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : ancienne bergerie troglodyte et refuge naturel.</strong></p></div>
        <div class="card-end"></div>

        <h4>Localisation et environnement</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(9,63 ; -0,75)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Ancienne bergerie troglodyte située plein nord de Pont-Cassé, à l'écart de la grande route et invisible depuis celle-ci.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Pont-Cassé :</strong> Environ <strong>2 heures à pied</strong> ou <strong>1 heure à cheval</strong>, vers le nord, par un écart depuis la route.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Rochebrune :</strong> Environ <strong>2 jours à pied</strong> ou <strong>1 jour à cheval</strong>, vers le nord-ouest, en passant par le secteur de Pont-Cassé.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relief :</strong> Le refuge est adossé au flanc d'une colline calcaire. Son entrée se confond avec la paroi rocheuse et la végétation environnante.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Environnement immédiat :</strong> Broussailles, blocs rocheux et relief calcaire dissimulent naturellement l'accès. Un ruisseau saisonnier existe à quelques centaines de pas vers l'ouest.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Accès extérieur :</strong> entrée dissimulée derrière un rideau de broussailles et deux énormes blocs tombés de la paroi. Ouverture d'environ 3 m de large se resserrant à un peu moins de 2 m entre les blocs. Défendable par deux personnes ; quelques pierres supplémentaires suffisent à former une barricade basse.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Salle principale :</strong> cavité irrégulière d'environ 15 m de profondeur sur 9 à 11 m de large. Voûte à près de 4 m au centre. Sol sec, pente ramenant l'eau de pluie vers l'extérieur. Anciens murets de pierres délimitant deux enclos effondrés. Traces d'ancienne occupation : paille noircie, foyer et crottes de mouton.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Galerie du fond :</strong> courte galerie de 5 à 6 m s'achevant contre un ancien éboulement. L'éboulement a été partiellement dégagé, révélant un passage étroit vers la grande cavité.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Grande cavité :</strong> salle naturelle de plusieurs dizaines de mètres, voûte à 6-7 m. Colonnes calcaires et blocs anciens. Vasque naturelle alimentée en continu par les infiltrations, formant une réserve d'eau claire. Une plage de pierre sèche occupe une partie de la cavité. Deux prolongements s'en détachent : une galerie descendante, humide et issue d'un ancien cours d'eau, et un passage ascendant, sec et parcouru d'un faible courant d'air, qui aboutit à une seconde issue obstruée.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Chambre cachée d'Avelin :</strong> sous le passage ascendant, une dalle circulaire d'environ 1 m dissimule un puits de 4 m menant à une petite chambre sèche de 3 m × 2 m. Avelin y est mort de soif. Ses ossements ont depuis été retirés et déposés à l'extérieur.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Seconde issue :</strong> amas de pierres et réseau dense de racines, peu épais. L'obstruction filtre une clarté extérieure et laisse circuler l'air ; elle peut être dégagée pour offrir une sortie secondaire.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Abords :</strong> un ruisseau saisonnier existe à quelques centaines de pas vers l'ouest.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>État actuel :</strong> refuge vide. L'accès extérieur demeure camouflé et la réserve d'eau naturelle reste en place.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présences :</strong> aucune présence permanente actuellement établie.</p></div>
        <div class="card-end"></div>

        <h3 id="section-moulin-brumecendre">10.9. Moulin de Brumecendre</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : moulin isolé.</strong></p></div>
        <div class="card-end"></div>

        <h4>Localisation et environnement</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Moulin établi sur un bras secondaire de la Veyre, à l'écart de la grande route des Marches orientales.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> non établies.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relation avec Pont-Cassé :</strong> le Moulin se trouve dans le réseau local des chemins et sentiers de rive liés à la Veyre, mais sa distance et son orientation précises depuis Pont-Cassé ne sont actuellement pas établies par le référentiel cartographique.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Accès :</strong> Le chemin principal évite le site ; des sentiers de rive permettent d'y accéder.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Hydrographie :</strong> Le moulin utilise un bras secondaire de la Veyre.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>État de l'installation :</strong> la roue fonctionne mal.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Bâtiments :</strong> moulin, habitation et remise.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présences :</strong> Ysilde et Edran.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présences hostiles permanentes :</strong> aucune.</p></div>
        <div class="card-end"></div>

        <h3 id="section-deux-couronnes-secteur">10.10. Deux-Couronnes</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Deux-Couronnes désigne à la fois un village des Marches orientales et le secteur environnant comprenant plusieurs lieux distincts qui portent également ce nom.</p>
            </div>
        <div class="card-end"></div>

        <h4>10.10.1. Village des Deux-Couronnes</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : village humain.</strong></p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(13,04 ; -2,16)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Dernier village majeur sur l'axe terrestre reliant Ardélie à Varethis avant l'entrée dans le massif montagneux frontalier.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Rochebrune :</strong> Environ <strong>2 jours à pied</strong> ou <strong>1 jour à cheval</strong>, vers l'est par la grande route.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers la Passe des Trois Bornes :</strong> Environ <strong>7 jours à pied par la route</strong> ou <strong>3,5 jours théoriques à cheval</strong>. La Passe ne se trouve pourtant qu'à environ <strong>2 jours de marche équivalents en ligne droite</strong>, la différence provenant du caractère extrêmement sinueux de la route de montagne.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relief :</strong> Les environs du village marquent la transition entre les Marches orientales et le massif frontalier. Au-delà de Deux-Couronnes, la route gagne progressivement de l'altitude et emprunte vallées, lacets et contournements.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Voies principales :</strong></p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers l'ouest : grande route vers <strong>Rochebrune</strong>, puis Pont-Cassé et Valdorne ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers l'est : route montagneuse vers la <strong>Passe des Trois Bornes</strong>, puis Varethis ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- vers le sud : région menant aux <strong>Salines de Mornefond</strong>, dont l'itinéraire terrestre précis n'est pas actuellement établi ;</p></div>
            <div class="rule-item"><p class="pseudo-li-level2">- des anciennes routes de carriers rejoignent également le secteur depuis la <strong>Carrière de Beran</strong>.</p></div>
        <div class="card-end"></div>

        <h4>10.10.2. Chapelle des Deux-Couronnes</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : chapelle abandonnée.</strong></p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation générale :</strong> située dans les environs de Deux-Couronnes, mais distincte du village et de la Villa des Deux-Couronnes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> non établies.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Position précise :</strong> non établie.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Architecture :</strong> Les armes des deux Couronnes figurent sur son fronton.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>État actuel :</strong> abandonnée en surface.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sous-sol :</strong> une cache souterraine contient encore divers objets et du matériel liés à des activités clandestines.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présences permanentes :</strong> aucune.</p></div>
        <div class="card-end"></div>

        <h4>10.10.3. Villa des Deux-Couronnes</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : villa isolée.</strong></p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation générale :</strong> située dans les environs du village des Deux-Couronnes et distincte de la chapelle portant le même nom.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> non établies.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Position précise :</strong> non établie.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Fonction antérieure :</strong> site utilisé par le réseau d'Odran pour préparer une opération de faux drapeau contre Varethis.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>État actuel :</strong> le réseau qui l'occupait a été neutralisé.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présences permanentes :</strong> aucune actuellement établie.</p></div>
        <div class="card-end"></div>

        <h3 id="section-salines-mornefond">10.11. Salines de Mornefond</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : ancien complexe minier souterrain.</strong></p></div>
        <div class="card-end"></div>

        <h4>Localisation et environnement</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(13,04 ; -9,16)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Les Salines de Mornefond se trouvent très au sud de Deux-Couronnes, nettement à l'écart de l'axe principal reliant Rochebrune, Deux-Couronnes et la Passe des Trois Bornes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Position relative :</strong> Elles se trouvent pratiquement plein sud du village des Deux-Couronnes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Distance directe :</strong> Environ <strong>7 jours de marche équivalents</strong> en ligne droite depuis Deux-Couronnes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Trajet théorique à cheval :</strong> Environ <strong>3,5 jours</strong> si un itinéraire direct et praticable existait.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Accès terrestre :</strong> L'itinéraire terrestre exact reliant Mornefond à Rochebrune ou à Deux-Couronnes n'est actuellement pas établi.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Nature du site :</strong> Anciennes galeries de sel formant un complexe minier ancien, ramifié et important, mais ne constituant pas une cité souterraine.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Ancienne fonction :</strong> conservation de captifs, animation de cadavres, préparation de convois et recherches liées à la lichification.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Installations :</strong> cellules, salle d'embaumement, ossuaire, espaces d'archives et chambre profonde liée aux recherches de lichification.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Chambre profonde :</strong> aucun focalisateur achevé ni aucune liche active n'y sont présents.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Conditions :</strong> air sec, faible humidité et décomposition ralentie.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>État actuel :</strong> complexe sécurisé et vide de toute présence permanente.</p></div>
        <div class="card-end"></div>

        <h3 id="section-passe-trois-bornes-varethis">10.12. Passe des Trois Bornes et Varethis</h3>
        
        <h4>Passe des Trois Bornes</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : col de haute montagne et passage frontalier.</strong></p></div>
        <div class="card-end"></div>

        <h5>Localisation et environnement</h5>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(15,04 ; -2,16)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> La Passe des Trois Bornes constitue le principal passage à travers le massif montagneux séparant Ardélie de Varethis.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Frontière :</strong> Le col se trouve sur la frontière naturelle entre les royaumes d'Ardélie et de Varethis. Aucune marche neutre distincte n'est actuellement établie entre les deux royaumes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relief :</strong> La Passe constitue le point le plus élevé actuellement établi sur cet axe. La route y parvient après une longue montée à travers le massif depuis Deux-Couronnes, puis redescend vers la haute vallée de Varethis.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Deux-Couronnes :</strong> Environ <strong>7 jours à pied par la route</strong> ou <strong>3,5 jours théoriques à cheval</strong>. La distance directe n'est pourtant que d'environ <strong>2 jours de marche équivalents</strong>, la différence provenant des nombreux lacets, vallées et contournements imposés par le relief.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Rochebrune :</strong> Environ <strong>9 jours à pied par la route</strong> ou <strong>4,5 jours théoriques à cheval</strong>, via Deux-Couronnes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers Karsenne :</strong> Environ <strong>7 jours à pied par la route</strong> ou <strong>3,5 jours théoriques à cheval</strong>. La distance directe représente environ <strong>4 jours de marche équivalents</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Route vers Varethis :</strong> La première partie de la descente reste sinueuse dans le massif ; la seconde rejoint plus directement la haute vallée.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Repères :</strong> Trois monolithes se dressent au niveau de la Passe.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Contrôle de la route :</strong> Un fort de péage contrôle la voie principale.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Passages secondaires :</strong> Des sentiers de chevriers permettent le passage de petits groupes.</p></div>
        <div class="card-end"></div>

        <h5>Fort de la Passe des Trois Bornes</h5>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : fort frontalier et poste de péage contrôlant la route principale.</strong></p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Le fort est établi directement au niveau de la Passe et contrôle la voie principale entre Ardélie et Varethis.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Fonction :</strong> Contrôle frontalier, péage, surveillance de la route et cantonnement d’une garnison permanente.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Installations attestées :</strong> ouvrages défensifs contrôlant la route, espaces de garnison et ancien bâtiment de stockage.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Garnison actuelle :</strong> Garnison humaine de Varethis commandée par le <strong>capitaine Caldrin</strong>, qui retrouve son grade et le commandement du fort à la fin du commandement temporaire d’Elkyriel. Le <strong>lieutenant Brenor</strong>, vétéran aux tempes grisonnantes, demeure l’un des principaux cadres de la garnison.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Accès actuel :</strong> Le passage civil est ouvert sous le contrôle de la garnison ; les troupes et convois armés restent soumis à son autorisation et aux règles frontalières de Varethis.</p></div>
        <div class="card-end"></div>

        <h4>Varethis</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : royaume humain situé à l'est du massif frontalier.</strong></p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Karsenne — (19,04 ; -2,16) :</strong> Cité royale humaine.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation de Karsenne :</strong> La ville se trouve dans une haute vallée, de l'autre côté du massif.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Altitude relative :</strong> Karsenne est nettement plus élevée que les plaines d'Ardélie, mais plus basse que la Passe des Trois Bornes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relation avec Ardélie :</strong> La route terrestre principale relie Karsenne à la Passe, puis à Deux-Couronnes, Rochebrune, Pont-Cassé, Valdorne et finalement à Rivecour.</p></div>
            <div class="rule-item">
                <p><strong>Dorn-Khazad</strong> est une cité-État naine indépendante développée dans les profondeurs sous les terres de Varethis. Son domaine est essentiellement souterrain et ne relève pas du roi de Varethis.</p>
            </div>
        <div class="card-end"></div>

        <h5>Karsenne</h5>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : grande cité royale humaine.</strong></p></div>
        <div class="card-end"></div>

        <h6>Localisation et environnement</h6>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(19,04 ; -2,16)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> La capitale se trouve dans une haute vallée à l’est du massif frontalier.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Altitude relative :</strong> Elle est nettement plus élevée que les plaines d’Ardélie, mais plus basse que la Passe des Trois Bornes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Accès occidental :</strong> La route principale remonte vers la Passe des Trois Bornes, puis rejoint Deux-Couronnes, Rochebrune, Pont-Cassé, Valdorne et Rivecour.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Climat :</strong> Climat de haute vallée froid, cohérent avec l’altitude déjà établie pour Varethis.</p></div>
        <div class="card-end"></div>

        <h6>Défenses et structure attestées</h6>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Enceinte :</strong> La ville possède des remparts défendus par une garde capable de mobiliser rapidement archers et balistes contre une menace aérienne.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Quartier royal :</strong> Un quartier royal distinct est établi à l’intérieur de la ville et comprend le palais de la Couronne.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Quartier des artisans :</strong> Secteur commerçant comprenant des ateliers, des habitations professionnelles et la parfumerie de maître Leirykle.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Marché aux esclaves :</strong> Karsenne possède un marché où la vente d’esclaves demeure légale en Varethis. Son emplacement exact dans la ville n’est pas établi.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Porte occidentale, écuries et relais :</strong> La porte occidentale dessert les routes quittant la capitale vers la Passe et les domaines environnants. Des écuries royales et un relais de messagers sont établis à proximité.</p></div>
        <div class="card-end"></div>

        <h5>Parfumerie de maître Leirykle</h5>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : maison, atelier artisanal et commerce de luxe.</strong></p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Établissement situé entre le quartier des artisans et la ville haute de Karsenne, à proximité de la porte occidentale, des écuries royales et du relais des messagers.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Propriétaire public :</strong> Maître Leirykle, parfumeur humain.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Propriétaire réel :</strong> Elkyriel. Leirykle est l’apparence humaine et l’identité commerciale qu’il emploie à Karsenne.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Organisation du bâtiment :</strong> Boutique ouverte sur la rue, espaces d’habitation, atelier, verrerie, distillerie, cour intérieure, étage et cave.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Productions :</strong> Parfums de qualité exceptionnelle, compositions végétales, flacons et objets en cristal soufflé, taillé ou gravé. L’établissement vise une clientèle aisée, bourgeoise et noble.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Statut commercial :</strong> Fournisseur reconnu de la Maison royale de Varethis.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Cercle de Téléportation :</strong> Le <strong>Cercle de Téléportation n° 7</strong> permanent est gravé dans la cave et peut ouvrir un passage vers n’importe quel autre Cercle.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sécurité actuelle :</strong> La sécurité discrète de l'établissement et du cercle est assurée sous contrat local en liaison étroite avec la cellule des Corbeaux de Selyne Var, sans donner à l’établissement l’apparence d’une forteresse ni imposer systématiquement une escorte aux employés.</p></div>
        <div class="card-end"></div>

        <h6>Présences et fonctions régulières</h6>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Individu</th>
                            <th style="padding: 6px;">Espèce & sexe</th>
                            <th style="padding: 6px;">Présence ou fonction actuelle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Leirykle</strong></td><td style="padding: 6px;">Humain en apparence (H)</td><td style="padding: 6px;">Propriétaire public, maître parfumeur et identité de couverture d’Elkyriel ; présence intermittente</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Solenne Varin</strong></td><td style="padding: 6px;">Humaine (F)</td><td style="padding: 6px;">Direction technique, herboristerie, matières premières, distillation et tenue courante de l'échoppe</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Kordran Fergivre</strong></td><td style="padding: 6px;">Nain (H)</td><td style="padding: 6px;">Fabrication, taille et gravure des flacons et objets de cristal</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Mirelle Auvray</strong></td><td style="padding: 6px;">Humaine (F)</td><td style="padding: 6px;">Trésorière Générale de Traverse ; visites privées et inspections financières périodiques</td></tr>
                        <tr><td style="padding: 6px;"><strong>Selyne Var</strong></td><td style="padding: 6px;">Humaine (F)</td><td style="padding: 6px;">Administration de la cellule locale des Corbeaux de Varethis et coordination de la sécurité</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>

        <h5>Palais royal de Karsenne</h5>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : palais royal et siège de la Couronne de Varethis.</strong></p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Le palais se trouve dans le quartier royal de la capitale.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Fonction :</strong> Résidence de la reine Ysoria et siège principal de la Couronne de Varethis.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Espaces attestés :</strong> grande cour intérieure, salons privés destinés aux entretiens, quartiers réservés aux invités de marque et accès secondaires permettant de rejoindre les jardins.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Ancien jardin :</strong> Un ancien jardin se trouve derrière le palais. Il comprend des arbres et une vaste zone d’herbe suffisamment dégagée pour permettre l’atterrissage prudent d’une wyverne. Le jardin communique avec le palais par au moins un accès latéral.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Esplanade occidentale :</strong> Une ancienne esplanade d’entraînement est établie près des remparts occidentaux de la capitale et offre suffisamment d’espace pour faire approcher ou décoller une grande créature volante.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présences principales :</strong> Reine Ysoria ; prince Méléandre. Maëra réside actuellement au palais ou dans son environnement immédiat.</p></div>
        <div class="card-end"></div>

        <h5>Domaine de Clairval</h5>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : grand domaine rural rattaché aux domaines de Vaulnes.</strong></p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Environ cinq lieues au sud-est de Karsenne.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Organisation :</strong> Manoir, bâtiments administratifs, cour des intendants, terres cultivées, granges, celliers et installations liées aux convois de grains et de cire.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Activité :</strong> Production et administration agricoles destinées notamment à l’approvisionnement de la Cour de Varethis.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présence notable :</strong> Eliane Var y vit librement sous le nom d’Aline Varet. Elle est rémunérée, logée et employée à l’intendance des comptes.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h2 id="section-axe-sud-ouest">11. Axe sud-ouest de Rivecour</h2>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Une route quitte la région de Rivecour vers le sud-ouest et dessert successivement l'Auberge-relais du Sanglier Gris puis le Manoir des Épines Noires.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-sanglier-gris">11.1. Auberge-relais du Sanglier Gris</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : auberge-relais.</strong></p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(5,84 ; -2,41)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Relais routier situé au sud-ouest de Rivecour.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Rivecour :</strong> Environ <strong>2 jours à pied</strong> ou <strong>1 jour à cheval</strong>, par la route.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Vers le Manoir des Épines Noires :</strong> Environ <strong>2 jours à pied</strong> ou <strong>1 jour à cheval</strong>, plein sud, par la route.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Usage attesté :</strong> L'auberge a servi d'étape à Elkyriel et Liriel lors de leur voyage vers le Manoir des Épines Noires.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>État actuel :</strong> auberge-relais en activité normale.</p></div>
        <div class="card-end"></div>

        <h3 id="section-manoir-epines-noires">11.2. Manoir des Épines Noires</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : domaine seigneurial.</strong></p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Coordonnées :</strong> <strong>(5,84 ; -4,41)</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Situation :</strong> Manoir situé plein sud de l'Auberge-relais du Sanglier Gris.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis Rivecour :</strong> Environ <strong>4 jours à pied</strong> ou <strong>2 jours à cheval</strong> par la route, via le Sanglier Gris.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Depuis le Sanglier Gris :</strong> Environ <strong>2 jours à pied</strong> ou <strong>1 jour à cheval</strong>, vers le sud.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Ancien propriétaire :</strong> Baron Eldric Valthor.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Ancienne occupation :</strong> Le domaine était tenu par le Baron, son intendant et une garnison, et servait notamment à la détention d'esclaves.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Dernier état connu :</strong> Le Baron, son intendant et sa garnison ont été tués. Les captifs ont été libérés et évacués, et les biens de valeur du domaine ont été emportés.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Occupation actuelle :</strong> non établie (domaine abandonné/vide).</p></div>
        <div class="card-end"></div>
    `;

})();
