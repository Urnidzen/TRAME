/**
 * TRAME - Annexe 1.2 : Atlas (Partie 2)
 * Version : v0.10
 * L'Empire de l'Enclave des Cinq Trônes (Traverse, Gor-Kadar, Astréane, Dhor-Kez, Orsenn)
 * Moteur d'assemblage unifié et index dynamique pour la sidebar
 * État de référence : Automne 1250
 */

window.TRAME_Atlas = window.TRAME_Atlas || {};

(function() {

    // --- CHAPITRE 12 : L'EMPIRE DE L'ENCLAVE DES CINQ TRÔNES ---
    window.TRAME_Atlas.PARTIE_2_HTML = `
        <h2 id="section-empire-enclave">12. L'Empire de l'Enclave des Cinq Trônes et les Veines Chaudes</h2>
        <div class="card-start"></div>
            <div class="rule-item">
                <p><em>L'Enclave des Cinq Trônes constitue un espace fermé, désormais unifié sous le titre d'<strong>Empire de l'Enclave des Cinq Trônes</strong> sous la souveraineté de Sa Majesté Impériale Elkyriel-Aethelvahr. La géopolitique entière de l'Empire repose sur l'acheminement de l'Etherium assaini, dont l'unique gisement géologique se trouve sous les terres de Traverse et dont les conduites souterraines traversent les frontières depuis des âges oubliés.</em></p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-hautes-lames">12.1. Les Hautes-Lames et les Accès Occidentaux</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Chaîne de montagnes rocheuses, escarpées et glacées marquant la frontière nord-nord-est de l'Immensité Grise et isolant l'Enclave des Cinq Trônes. L'ancienne voie occidentale s'étant effondrée il y a plus de six générations, le massif ne se franchit en surface que par des hauts cols d'altitude dangereux, praticables uniquement à la belle saison.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Camp des Pierres-Froides — (5,40 ; 13,20) :</strong> Ancien camp d'hivernage orque ruiné en steppe ouverte au pied des Hautes-Lames, dévasté par le détachement de Dhor-Kez.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Brèche de Vard (entrée ouest) — (17,10 ; 23,40) :</strong> Défilé d'accès occidental des Hautes-Lames et entrée du chantier de Dhor-Kez ; la foreuse est disloquée et l'entrée du tunnel est scellée sous un effondrement massif de basalte. Le secteur en ruines demeure sous la surveillance distante des patrouilles orques de Gor-Kadar.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Débouché est de la Brèche — (19,40 ; 24,10) :</strong> Sortie orientale du défilé souterrain ouvrant sur l'ouest de la Traverse. Longueur du tunnel : ≈ 2,5 jours de marche à pied.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Rivet-de-Givre — (21,20 ; 25,20) :</strong> Ruines de l'ancien avant-poste de Dhor-Kez dans le massif.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Cloches de Glace — (16,80 ; 29,30) :</strong> Cavernes des hauts cols où le vent fait vibrer des colonnes de glace naturelle résonnantes ; ancien refuge de la voie haute.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Faune locale :</strong> Meute de la Ravine Blanche (9 Loups Géants/Worgs à 3 j au nord-est des Pierres-Froides), 4 Drakes des Falaises nichant sur les corniches rocheuses, 6 Drakes Rocheux dans les failles chaudes.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h3 id="section-gor-kadar">12.2. Royaume Orque de Gor-Kadar</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Royaume exclusivement orque établi sur les hauts plateaux septentrionaux (population estimée à environ 360 000 orques, mobilisant 16 000 guerriers répartis entre une multitude de camps, kraals d'estive et hameaux pastoraux). La société repose sur la démocratie des Kraals, le Cercle des Paroles et l'incapacité biologique des orques à mentir. L'alimentation thermique de la région provient d'exutoires et résurgences naturelles de surface marquant l'extrémité septentrionale des Veines Chaudes originaires de Traverse. Royaume allié frère de sang, pleinement intégré à la structure de l'Empire.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Kadar-Rauk — (11,00 ; 26,50) :</strong> Capitale du Royaume Orque de Gor-Kadar, bâtie sur de hauts plateaux rocheux autour des Sources de Rauk (sources thermales géothermales). Cité de pierre basse aux larges rampes ouvertes, abritant le <strong>Cercle des Paroles</strong> (amphithéâtre politique public) et le <strong>Palais du puy</strong> de la Voix-Couronne Kharza Peau-de-Neige (qui porte à sa ceinture l'épée en Fer Lunaire <em>Veyra-Kadar</em>). Reliée directement à la capitale Élyria par une arche magique permanente.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sources de Rauk — (12,90 ; 27,80) :</strong> Vastes bassins thermaux géothermaux, pâturages chauds et lieux de serment. Lieu de résidence surveillée des anciens otages de Dhor-Kez (Vessa Orm et sa suite).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Haut-Bois — (10,60 ; 29,70) :</strong> Foyer septentrional des éleveurs et tanneurs du clan de Rhazka.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Haut-Varek — (14,20 ; 28,80) :</strong> Ville thermale et grand marché de bétail ; dispose d'une enceinte fermée réservée au séjour des étrangers.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Gorge du Premier Serment — (13,90 ; 14,90) :</strong> Canyon rituel méridional dont les parois de roche portent gravées les répartitions anciennes des sources.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Dragon résident :</strong> <strong>Isilvrya</strong>, Dragonne Bestiale (<em>L'Aile d'Hiver</em>), alliée et soumise à Elkyriel, nichant dans les cimes sauvages au nord des Sources de Rauk.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h3 id="section-royaume-traverse">12.3. Le Royaume de Traverse (Cœur de l'Empire)</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Territoire central et siège de la couronne impériale de <strong>Sa Majesté Impériale Elkyriel-Aethelvahr</strong>. Le royaume compte environ 380 000 habitants répartis entre ses 9 cités de surface et la Forteresse-Monde (10e cité).</p>
            </div>
        <div class="card-end"></div>

        <h4>Infrastructures urbaines et magiques</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Réseau des Portails et Cités-Jardins :</strong> Les dix cités du royaume sont interconnectées par des places royales circulaires accueillant chacune un ensemble d'arches magiques permanentes, assurant un transit instantané et continu dans tout le royaume. Les cités ont été réaménagées en Cités-Jardins luxuriantes où des forêts suspendues, des canaux tempérés et des essences végétales purifient l'air urbain.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Places Royales des Portails :</strong> Cœur monumental de chaque cité, constitué d'une vaste esplanade circulaire de pierre claire arborée et entourée de colonnades. La place est ceinturée par <strong>neuf arches monumentales de basalte</strong> de 15 m de haut, gravées de runes luminescentes et dédiées chacune de façon permanente à l'une des neuf autres cités du royaume. L'aménagement sépare nettement les allées piétonnes destinées aux voyageurs des voies pavées renforcées réservées aux convois de fret lourd et aux golems de traction. Le contrôle douanier et le filtrage des accès sont assurés en permanence par un détachement de la Garde des Portails, appuyé par des mages.</p></div>
            <div class="rule-item"><p class="pseudo-li-level2"><em>La Place Royale d'Élyria (Carrefour Impérial) :</em> La place monumentale de la capitale accueille, en plus des neuf arches internes, les <strong>arches permanentes internationales</strong> reliant directement Élyria aux capitales des royaumes alliés de l'Empire : <strong>Lumérys</strong> (Astréane), <strong>Kez-Bruma</strong> (Dhor-Kez), <strong>Kadar-Rauk</strong> (Gor-Kadar) et <strong>Orsenn</strong> (Royaume d'Orsenn).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Assainissement de l'Etherium :</strong> Utilisation des « Filtres de l'Érudit » et d'amulettes de protection sur les conduites, éliminant les mutations d'Etherium parmi les travailleurs.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le fleuve Avar :</strong> Grand axe fluvial traversant la vallée centrale de la Traverse d'ouest en est.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Lac Mirant :</strong> Vaste plan d'eau bordant la frontière nord de Traverse, la séparant d'Orsenn à l'est et d'Astréane à l'ouest ; une conduite sous-lacustre d'Etherium traverse ses profondeurs.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Nœud de Calde et le Monopole de l'Etherium :</strong> Complexe souterrain antique colossal de basalte et d'alliages inconnus, bâti par une civilisation précurseur mystérieuse. Il constitue la station maîtresse de pompage et de régulation de tout le Bassin. C'est ici, et exclusivement dans le sous-sol de Traverse, que prend sa source l'Etherium. Le Nœud régule les vannes primaires qui injectent le fluide sous pression dans les artères scellées alimentant l'ensemble de l'Empire. Les ingénieurs actuels se contentent d'assurer la maintenance préventive et d'analyser ce réseau sans pouvoir en reproduire les composants fondamentaux.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Réseau d'habitat :</strong> Outre les dix cités majeures (les neuf de surface et la Forteresse-Monde), la Traverse est sillonnée d'une multitude de bourgades, de villages et de stations secondaires.</p></div>
        <div class="card-end"></div>

        <h4>Les Cités du Royaume</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>1. Élyria — (26,00 ; 28,60) :</strong> Capitale impériale. Siège du <strong>Palais impérial d'Elkyriel</strong>, du Conseil des Sceaux (Eryx, Nymira, Mirelle Auvray), de l'autorité du prévôt Olan Vespre et de la <strong>Maison des Sept Clefs</strong> (placée sous tutelle impériale, dirigée par Salomé d'Arqueval). Le quartier des <em>Quais d’Élyria</em> forme le centre d'échange portuaire.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>2. Calde-sur-Rive — (24,70 ; 29,40) :</strong> Siège du <strong>Comté de Calde</strong>, gouverné par le <strong>Comte Pell</strong>. Gardienne inébranlable de l'accès au Nœud souterrain et port d'embarquement vers le Lac Mirant.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>3. Clair-Verger — (24,80 ; 26,70) :</strong> Siège du <strong>Comté de Clair-Verger</strong>, gouverné par le <strong>Comte Dhorg</strong>. Cité de canaux fortifiés, d'écluses et de ponts marchands.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>4. Grands-Vergers — (28,30 ; 27,80) :</strong> Siège du <strong>Comté de Grands-Vergers</strong>, gouverné par la <strong>Comtesse Sera</strong>. Ville-pont contrôlant le franchissement de l'Avar et d'immenses silos et entrepôts de réserves céréalières.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>5. Rive-Noire — (34,20 ; 29,40) :</strong> Siège du <strong>Comté de Rive-Noire</strong>, gouverné par la <strong>Comtesse Ysel</strong> assistée de la <strong>Baronne Rhea</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>6. Asten — (19,70 ; 29,20) :</strong> Siège du <strong>Comté d'Asten</strong>, gouverné par le <strong>Comte Enric</strong>. Cité restaurée en Cité-Jardin ; ses caves profondes et fondations rocheuses abritent une colonie d'araignées géantes étroitement surveillée.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>7. Haute-Rive — (40,80 ; 22,50) :</strong> Siège du <strong>Comté de Haute-Rive</strong>, gouverné par la <strong>Comtesse Maura</strong> assistée de la <strong>Baronne Lise</strong>, sur les marges orientales de Traverse. Le fortin d'écluse verrouille l'accès au Défilé des Cuivres vers Dhor-Kez ; ses remparts extérieurs ont été restaurés après le siège. La garnison militaire y est commandée par un capitaine d'élite rattaché à Goran, tandis que les sapeurs nains affranchis entretiennent les dix Golems de guerre reconfigurés et la foreuse titan réassemblée réemployés pour la défense de la Couronne.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>8. Bois-Serein — (35,30 ; 23,70) :</strong> Siège du <strong>Comté de Bois-Serein</strong>, gouverné par la <strong>Comtesse Siane</strong> assistée de la <strong>Baronne Naela</strong>. Capitale de la manufacture des soies impériales et de la sylviculture protégée.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>9. Puits de Veyr — (27,00 ; 24,30) :</strong> Neuvième cité du Royaume de Traverse (Comté du Puits de Veyr), gouvernée par la <strong>Comtesse Virelle Senn</strong>. Cité-puits verticale abritant la grande flotte marchande confisquée à Jorund Pellain.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>10. Forteresse-Monde :</strong> Dixième cité du royaume (voir section 7).</p></div>
        <div class="card-end"></div>

        <h4>Forces militaires du Royaume de Traverse</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Garde de la Traverse (Armée mobile) :</strong> 20 000 combattants multiraciaux sous les ordres de la Duchesse Faelia (Maréchale) et du Duc Goran (Connétable).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Garnisons locales comtales :</strong> 46 000 soldats répartis entre les dix cités sous l'autorité des Comtes et Comtesses.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Garde des Veines :</strong> 2 000 soldats d'élite équipés de filtres et d'amulettes, affectés à la protection des conduites et nœuds d'Etherium (commandement militaire de terrain assuré par Armand Vellec, sous la direction technique et alchimique de la Comtesse Vel'Shara).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Ordre de l'Adamant :</strong> 80 chevaliers d'élite assurant la garde impériale directe.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Cavalerie des Wyvernes :</strong> 60 cavalières d'élite montées sur wyvernes sous les ordres directs de la Maréchale Faelia.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Tributs de labeur :</strong> 1 200 golems de travail et 10 000 morts-vivants cantonnés aux chantiers insalubres et aux mines profondes (renforcés des parcs de machines et travailleurs réemployés à travers l'Empire).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Dragon résident :</strong> <strong>Nathalysse</strong>, Dragonne Noble vivant sous les traits de « Dame Thalysse de Mirande », curatrice de manuscrits et reliques à Élyria, compagne intime d'Elkyriel.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h3 id="section-astreane">12.4. Concordat d'Astréane</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Royaume du nord (environ 620 000 habitants, 8 000 combattants), dont la population se répartit traditionnellement entre les <em>Accordés</em> (lanceurs de sorts), les <em>Liants</em> (artisans du verre et des focalisateurs) et les <em>Sans-Étincelle</em> (travailleurs ordinaires sans affinité arcanique). L'esclavage et la servitude pour dettes sont totalement abolis, et les Sans-Étincelle jouissent de la pleine liberté civile sans taxe magique. Gouverné par la Première Accordée <strong>Aélis Vaer</strong>, vassale de la Couronne impériale, tandis que l'officière <strong>Sévra Noll</strong> commande la milice des Veilleurs de Verre pour garantir la sécurité publique et la protection du peuple. Le Concordat bénéficie d'approvisionnements massifs de grain de Traverse et du soutien des travailleurs d'Orsenn pour ses infrastructures.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Lumérys — (19,40 ; 37,70) :</strong> Capitale bâtie en terrasses de marbre blanc au pied de l'Observatoire sommital, articulée autour de serres de cristal et de hautes tours-focalisateurs luminescentes qui luisent sans flamme la nuit. La Grande Esplanade d'Albâtre accueille l'arche magique permanente reliant directement la cité à la Place Royale d'<strong>Élyria</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Grande Académie de Magie de Lumérys :</strong> Établie dans l'ancien Dôme des Sept Foyers. Privé de tout pouvoir politique, judiciaire et fiscal, le corps des mages y est exclusivement consacré à l'enseignement et à la recherche arcanique, ses cours étant ouverts à tous les citoyens d'Astréane.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Val-Opale — (18,20 ; 38,50) :</strong> Immense vallée de serres magiques. Ses infrastructures et fondations thermiques ont été rénovées et isolées par quinze mille corps de labeur d'Orsenn et soixante maîtres ingénieurs de Traverse sous la conduite conjointe de maîtres ingénieurs nains de Traverse et d'artisans Liants d'Astréane.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Nacrelac — (18,40 ; 31,00) :</strong> Cité lacustre de pierre noire sur le Lac Mirant, abritant les grands ateliers de verre, de cristal, de lentilles et de focalisateurs de la corporation des Liants.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Dragon résident :</strong> <strong>Ilysthéra</strong>, Dragonne Noble (<em>La Dame des Brumes Hautes</em>), résidant à l'Observatoire sommital de Lumérys, alliée et amante d'Elkyriel.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h3 id="section-dhor-kez">12.5. Ligues de Dhor-Kez</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Confédération de six grandes cités d'enclumes et d'ateliers mécaniques à l'est (environ 480 000 habitants, 12 000 soldats et ouvriers armés), caractérisée par une technologie avancée de la vapeur, des forages profonds, des presses, des rails et la maîtrise des cœurs de golems. Les dettes héréditaires et l'asservissement sont désormais abolis, les anciens registres ayant été brûlés. Le Conclave des Six Fumées a été dissous : le pouvoir civil et la gestion des ateliers sont assurés par <strong>Léonie Varc</strong> à la tête de la commune des <strong>Ateliers Liés</strong>, sous la tutelle impériale d'Elkyriel. L'ancien Premier Syndic Dhoran Vesk a été déchu de son titre et condamné aux travaux forcés à perpétuité comme mineur de fond dans ses anciennes exploitations.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Kez-Bruma — (33,00 ; 23,10) :</strong> Cité monumentale de hauts-fourneaux et d'ateliers superposés. Reliée directement à la capitale <strong>Élyria</strong> par une arche magique permanente sur la Place des Grandes Fonderies.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Dhor-Siphon — (31,90 ; 19,60) :</strong> Cité de forages construite autour du puits géothermique le plus profond du Bassin. Ses installations sont désormais reconverties dans l'exploitation de vapeur naturelle ordinaire, l'Etherium étant acheminé assaini depuis les conduites de Traverse.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Kez-Marteau — (35,40 ; 20,90) :</strong> Cité de forges et de manufactures métallurgiques lourdes, intégrée au réseau des Ateliers Liés.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Dragon résident :</strong> <strong>Kaldrielle</strong>, Dragonne Bestiale (<em>La Mère des Brasiers</em>), nichant dans les carrières géothermiques au nord-est de Kez-Bruma, pacifiée, soumise et alliée d'Elkyriel.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h3 id="section-orsenn">12.6. Royaume d'Orsenn</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Royaume des plaines basses du sud-est (environ 710 000 vivants et 190 000 morts actifs ; 9 000 soldats vivants et jusqu'à 35 000 corps mobilisables). L'économie repose sur la nécromancie légale régie par la <strong>Loi des corps</strong>, désormais en cours d'harmonisation avec le droit impérial (abolition définitive de l'ancienne servitude cadavérique pour dettes, le labeur des défunts étant désormais strictement restreint au don volontaire consenti et aux peines pénales). Gouverné souverainement par la reine vivante <strong>Maélis d'Orsenn</strong>, alliée intime d'Elkyriel et membre de l'Empire. Jusqu'à leur destruction définitive par Elkyriel, les Quatre Liches Conseillères (Dame Verrine, Archiviste Edran, Silex le Patient, Aube-Sans-Souffle) exerçaient la réalité du pouvoir en sous-main — reléguant la couronne vivante à une vitrine face au peuple — et contrôlaient respectivement les réseaux de labeur des défunts, la mémoire des contrats, la thermodynamique de Calde et la faction des Immortels ; leur disparition a ainsi restitué la totalité de l'autorité civile à la reine. Les bassins de saumure et nécropoles sont alimentés par le flux d'Etherium froid de Traverse, et les cités reçoivent des approvisionnements réguliers en grain.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Orsenn — (33,70 ; 31,70) :</strong> Capitale fluviale découpée de canaux rectilignes. L'Esplanade des Rois accueille l'arche magique permanente reliant directement la métropole à la Place Royale d'<strong>Élyria</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Val-Morne — (37,30 ; 29,50) :</strong> Port d'attache des convois de barges funéraires et point de transit fluvial avec Traverse.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Roseaux Noirs — (31,70 ; 33,80) :</strong> Vastes domaines agricoles irrigués exploités par des équipes de travailleurs cadavériques.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>
    `;
  /**
     * Moteur d'assemblage et de rendu unifié de l'Atlas
     */
    function renderView() {
        const p1 = window.TRAME_Atlas.PARTIE_1_HTML || '';
        const p2 = window.TRAME_Atlas.PARTIE_2_HTML || '';
        const fullContent = p1 + p2;

        if (typeof window.TRAME_Atlas.enrichirTexteAtlas === 'function') {
            return window.TRAME_Atlas.enrichirTexteAtlas(fullContent);
        }
        return fullContent;
    }

    /**
     * Index hiérarchique dynamique pour la barre latérale (Sidebar)
     */
    function getIndex() {
        return [
            { id: "section-vue-ensemble", title: "1. Vue d'ensemble de la région", level: 1 },
            { id: "section-geographie-generale", title: "Géographie générale & repères", level: 2 },
            { id: "section-referentiel-trajets", title: "Référentiel des trajets", level: 2 },
            { id: "section-climat-milieux", title: "Climat & grands milieux", level: 2 },
            { id: "section-faune-populations", title: "Faune & populations", level: 2 },

            { id: "section-aldhaven", title: "2. Aldhaven", level: 1 },
            { id: "section-aldhaven-localisation", title: "Localisation & environnement", level: 2 },
            { id: "section-aldhaven-quartiers", title: "Les Quartiers", level: 2 },
            { id: "section-aldhaven-presences", title: "Présences Notables", level: 2 },
            { id: "section-aldhaven-implantations", title: "Implantations d'Elkyriel", level: 2 },

            { id: "section-saillans", title: "3. Les Saillans", level: 1 },
            { id: "section-saillans-localisation", title: "Localisation & environnement", level: 2 },
            { id: "section-saillans-topographie", title: "Topographie & Architecture", level: 2 },
            { id: "section-saillans-economie", title: "Économie & Isolement", level: 2 },
            { id: "section-saillans-presences", title: "Présences Notables", level: 2 },
            { id: "section-saillans-cercle", title: "Cercle de téléportation", level: 2 },

            { id: "section-immensite-grise", title: "4. L'Immensité Grise", level: 1 },
            { id: "section-immensite-situation", title: "Situation géographique", level: 2 },
            { id: "section-immensite-geologie", title: "Géologie & Repères", level: 2 },
            { id: "section-forteresse-du-patron", title: "Forteresse du Patron", level: 2 },
            { id: "section-cratere-syndicat", title: "Cratère du Syndicat", level: 2 },
            { id: "section-immensite-peuples", title: "Peuples & Présences", level: 2 },

            { id: "section-mer-de-jade", title: "5. La Mer de Jade", level: 1 },
            { id: "section-mer-de-jade-situation", title: "Situation géographique", level: 2 },
            { id: "section-archipel-des-tempetes", title: "L'Archipel des Tempêtes", level: 2 },
            { id: "section-wyvernes-archipel", title: "Colonie des Wyvernes", level: 2 },
            { id: "section-dangers-navigation-mer-jade", title: "Dangers & Navigation", level: 2 },
            { id: "section-routes-maritimes", title: "Routes Maritimes", level: 2 },
            { id: "section-mer-de-jade-presences", title: "Présences Notables", level: 2 },

            { id: "section-rivecour", title: "6. Rivecour", level: 1 },
            { id: "section-rivecour-localisation", title: "Localisation & environnement", level: 2 },
            { id: "section-rivecour-structure", title: "Géographie & Structure", level: 2 },
            { id: "section-rivecour-points-interet", title: "Points d'Intérêt", level: 2 },
            { id: "section-rivecour-presences", title: "Présences Notables", level: 2 },
            { id: "section-rivecour-presences-importantes", title: "Présences importantes", level: 2 },
            { id: "section-rivecour-implantations", title: "Implantations d'Elkyriel", level: 2 },

            { id: "section-forge-naine-rivecour", title: "6.1. La Forge naine de Rivecour", level: 1 },
            { id: "section-forge-architecture", title: "Architecture & Salles", level: 2 },
            { id: "section-cercles-teleportation", title: "Réseau des 7 Cercles", level: 2 },
            { id: "section-portail-grand-air", title: "Portail du Grand Air", level: 2 },
            { id: "section-forge-residents", title: "Résidents rattachés", level: 2 },
            { id: "section-forge-presences-regulieres", title: "Présences régulières", level: 2 },
            { id: "section-forge-communaute-historique", title: "Communauté historique", level: 2 },
            { id: "section-forge-particularites", title: "Sécurité & Fonctionnement", level: 2 },

            { id: "section-forteresse-monde", title: "7. Forteresse-Monde (10e Cité)", level: 1 },
            { id: "section-forteresse-nomenclature", title: "Principe de Nomenclature", level: 2 },
            { id: "section-forteresse-liaison-verticale", title: "Liaisons verticales", level: 2 },
            { id: "section-forteresse-protection-thermique", title: "Protection Thermique (Strate -4)", level: 2 },
            { id: "section-structure-verticale-detaillee", title: "Grand tableau des Strates 0 à -5", level: 2 },
            { id: "section-forteresse-precisions-structurelles", title: "Précisions structurelles", level: 2 },
            { id: "section-colonie-strate-3", title: "Cité fortifiée (Strate -3)", level: 2 },
            { id: "section-forteresse-mines-production", title: "Mines & Production", level: 2 },
            { id: "section-population-forces-forteresse", title: "Population & Armées", level: 2 },

            { id: "section-relais-roches-noires", title: "8. Le Relais des Roches-Noires", level: 1 },
            { id: "section-relais-structure", title: "Structure & Organisation", level: 2 },
            { id: "section-relais-fonction", title: "Fonction & Neutralité", level: 2 },
            { id: "section-grand-tableau", title: "Le Grand Tableau", level: 2 },

            { id: "section-tour-blanche", title: "9. La Tour Blanche", level: 1 },
            { id: "section-tour-blanche-localisation", title: "Localisation & environnement", level: 2 },
            { id: "section-tour-blanche-fonction-passee", title: "Fonction passée & architecture", level: 2 },
            { id: "section-tour-blanche-souterrains-oasis", title: "Souterrains & Oasis", level: 2 },
            { id: "section-tour-blanche-statut-actuel", title: "Statut actuel & Corbeaux", level: 2 },

            { id: "section-marches-orientales", title: "10. Marches orientales & Varethis", level: 1 },
            { id: "section-marches-organisation", title: "10.1. Organisation géographique", level: 2 },
            { id: "section-rochebrune", title: "10.2. Rochebrune", level: 2 },
            { id: "section-valdorne", title: "10.3. Valdorne", level: 2 },
            { id: "section-carriere-beran", title: "10.4. Carrière de Beran", level: 2 },
            { id: "section-batisse-orven-colm", title: "10.5. Bâtisse d'Orven & Colm", level: 2 },
            { id: "section-trois-saules", title: "10.6. Grange des Trois-Saules", level: 2 },
            { id: "section-pont-casse", title: "10.7. Pont-Cassé de la Veyre", level: 2 },
            { id: "section-bergerie-sous-roche", title: "10.8. Bergerie sous Roche", level: 2 },
            { id: "section-moulin-brumecendre", title: "10.9. Moulin de Brumecendre", level: 2 },
            { id: "section-deux-couronnes-secteur", title: "10.10. Deux-Couronnes", level: 2 },
            { id: "section-salines-mornefond", title: "10.11. Salines de Mornefond", level: 2 },
            { id: "section-passe-trois-bornes-varethis", title: "10.12. Passe & Karsenne", level: 2 },

            { id: "section-axe-sud-ouest", title: "11. Axe sud-ouest de Rivecour", level: 1 },
            { id: "section-sanglier-gris", title: "11.1. Relais du Sanglier Gris", level: 2 },
            { id: "section-manoir-epines-noires", title: "11.2. Manoir des Épines Noires", level: 2 },

            { id: "section-empire-enclave", title: "12. Empire des Cinq Trônes", level: 1 },
            { id: "section-hautes-lames", title: "12.1. Les Hautes-Lames", level: 2 },
            { id: "section-gor-kadar", title: "12.2. Royaume de Gor-Kadar", level: 2 },
            { id: "section-royaume-traverse", title: "12.3. Royaume de Traverse (Cœur)", level: 2 },
            { id: "section-astreane", title: "12.4. Concordat d'Astréane", level: 2 },
            { id: "section-dhor-kez", title: "12.5. Ligues de Dhor-Kez", level: 2 },
            { id: "section-orsenn", title: "12.6. Royaume d'Orsenn", level: 2 }
        ];
    }

    // Export des méthodes publiques
    window.TRAME_Atlas.renderView = renderView;
    window.TRAME_Atlas.getIndex = getIndex;

})();
