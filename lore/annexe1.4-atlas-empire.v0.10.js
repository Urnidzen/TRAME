/**
 * TRAME - Annexe 1.4 : Atlas (Empire de l'Enclave des Cinq Trônes)
 * Version : v0.10
 * Hautes-Lames, Gor-Kadar, Traverse (10 cités dont Forteresse-Monde), Astréane, Dhor-Kez, Orsenn
 * État de référence : Automne 1250
 */

window.TRAME_Atlas = window.TRAME_Atlas || {};

(function() {

    window.TRAME_Atlas.EMPIRE_HTML = `
        <!-- ======================================================== -->
        <!-- 3. EMPIRE DE L'ENCLAVE DES CINQ TRÔNES -->
        <!-- ======================================================== -->
        <h2 id="section-empire-enclave">Empire de l'Enclave des Cinq Trônes et les Veines Chaudes</h2>
        <div class="card-start"></div>
            <div class="rule-item">
                <p><em>L'Enclave des Cinq Trônes constitue un vaste bassin continental fermé, désormais unifié sous le titre d'<strong>Empire de l'Enclave des Cinq Trônes</strong> sous la souveraineté de Sa Majesté Impériale Elkyriel-Aethelvahr. La géopolitique entière de l'Empire repose sur l'acheminement de l'Etherium assaini, dont l'unique gisement géologique se trouve sous les terres de Traverse et dont les conduites souterraines traversent les frontières depuis des âges oubliés.</em></p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-hautes-lames">Les Hautes-Lames et les Accès Occidentaux</h3>
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

        <h3 id="section-gor-kadar">Royaume Orque de Gor-Kadar</h3>
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

        <h3 id="section-royaume-traverse">Royaume de Traverse (Cœur de l'Empire)</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Territoire central et siège de la couronne impériale de <strong>Sa Majesté Impériale Elkyriel-Aethelvahr</strong>. Le royaume compte environ 380 000 habitants répartis entre ses 9 cités de surface et la Forteresse-Monde (10e cité).</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Réseau des Portails et Cités-Jardins :</strong> Les dix cités du royaume sont interconnectées par des places royales circulaires accueillant chacune neuf arches monumentales de basalte permanentes, assurant un transit instantané et continu dans tout le royaume. Les cités ont été réaménagées en Cités-Jardins luxuriantes où des forêts suspendues, des canaux tempérés et des essences végétales purifient l'air urbain.</p></div>
            <div class="rule-item"><p class="pseudo-li-level2"><em>La Place Royale d'Élyria (Carrefour Impérial) :</em> La place monumentale de la capitale accueille, en plus des neuf arches internes, les <strong>arches permanentes internationales</strong> reliant directement Élyria aux capitales des royaumes alliés de l'Empire : <strong>Lumérys</strong> (Astréane), <strong>Kez-Bruma</strong> (Dhor-Kez), <strong>Kadar-Rauk</strong> (Gor-Kadar) et <strong>Orsenn</strong> (Royaume d'Orsenn).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Nœud de Calde et le Monopole de l'Etherium :</strong> Complexe souterrain antique colossal bâti par une civilisation précurseur inconnue. C'est ici, et exclusivement dans le sous-sol de Traverse, que prend sa source l'Etherium brut. Régulé et assaini par les <em>Filtres de l'Érudit</em>, il alimente l'ensemble de l'Empire sans provoquer de mutations.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Hydrographie :</strong> Le fleuve Avar traverse la vallée centrale d'ouest en est. Au nord s'étend le Lac Mirant, séparant Traverse d'Orsenn et d'Astréane.</p></div>
        <div class="card-end"></div>

        <h4 id="section-traverse-cites">Les Cités du Royaume de Traverse</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>1. Élyria — (26,00 ; 28,60) :</strong> Capitale impériale. Siège du Palais impérial d'Elkyriel, du Conseil des Sceaux (Eryx, Nymira, Mirelle Auvray), de l'autorité du prévôt Olan Vespre, des quais marchands et de la Maison des Sept Clefs (dirigée sous tutelle par Salomé d'Arqueval). Résidence de la dragonne <strong>Nathalysse</strong> (« Dame Thalysse de Mirande ») et compagne de harem Myrène.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>2. Calde-sur-Rive — (24,70 ; 29,40) :</strong> Comté de Calde, gouverné par le <strong>Comte Pell</strong>. Port sur le Lac Mirant et gardienne inébranlable des accès souterrains au Nœud de Calde.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>3. Clair-Verger — (24,80 ; 26,70) :</strong> Comté de Clair-Verger, gouverné par le <strong>Comte Dhorg</strong> (orque colossal à 4 bras). Cité de canaux fortifiés, d'écluses et de ponts marchands.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>4. Grands-Vergers — (28,30 ; 27,80) :</strong> Comté de Grands-Vergers, gouverné par la <strong>Comtesse Sera</strong>. Ville-pont contrôlant le viaduc de l'Avar et d'immenses silos céréaliers stratégiques.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>5. Rive-Noire — (34,20 ; 29,40) :</strong> Comté de Rive-Noire, gouverné par la <strong>Comtesse Ysel</strong> assistée de la <strong>Baronne Rhea</strong> (tribunaux populaires et milice urbaine).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>6. Asten — (19,70 ; 29,20) :</strong> Comté d'Asten, gouverné par le <strong>Comte Enric</strong> (au torse minéral indestructible). Cité-Jardin dont les fondations rocheuses abritent une colonie d'araignées géantes étroitement surveillée.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>7. Haute-Rive — (40,80 ; 22,50) :</strong> Comté de Haute-Rive, gouverné par la <strong>Comtesse Maura</strong> assistée de la <strong>Baronne Lise</strong>. Verrou militaire du Défilé des Cuivres face à Dhor-Kez, armé de dix golems de guerre et d'une foreuse titan.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>8. Bois-Serein — (35,30 ; 23,70) :</strong> Comté de Bois-Serein, gouverné par la <strong>Comtesse Siane</strong> assistée de la <strong>Baronne Naela</strong>. Capitale des soies impériales, du tissage d'art et de la sylviculture protégée.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>9. Puits de Veyr — (27,00 ; 24,30) :</strong> Comté du Puits de Veyr, gouverné par la <strong>Comtesse Virelle Senn</strong>. Cité-puits verticale abritant la grande flotte marchande confisquée à Jorund Pellain.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>10. Forteresse-Monde :</strong> Dixième cité souterraine du royaume, gouvernée par la <strong>Comtesse Vel'Shara</strong>.</p></div>
        <div class="card-end"></div>

        <h4 id="section-forteresse-monde">Forteresse-Monde (10e Cité de Traverse)</h4>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Système vertical antique d'origine naine ou pré-naine enfoui sous les steppes de l'Immensité Grise, reconnu officiellement comme la dixième cité du Royaume de Traverse et gouverné par l'ogre-mage <strong>Comtesse Vel'Shara</strong>. Cité souterraine florissante d'environ <strong>15 000 habitants permanents</strong> (7 000 kobolds, 7 500 citoyens libres multiraciaux, 165 ogres).</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Liaisons verticales :</strong> Grands escaliers monumentaux (15 m de large), puits à contrepoids, cabines à vis sans fin et galeries d'aération sécurisées.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Place Royale & Portail du Grand Air (Strate -3) :</strong> La grande place centrale de granit poli accueille le cercle des neuf arches royales reliées aux autres cités de surface, ainsi que l'arche monumentale de basalte de 15 m du <strong>Portail du Grand Air</strong>. Ouverte en permanence sur l'Archipel des Tempêtes, elle inonde les profondeurs de lumière solaire et d'une brise marine rafraîchissante (maintenant la strate à 32°C).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Mines & Ateliers :</strong> Forges de haute technologie extrayant et façonnant métaux rares et précieux (mithril, adamantite, fer diamantin, fer lunaire) sous la direction de Roran et des familles naines.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Personnels rattachés :</strong> Vel'Shara (gouverneure et maîtresse alchimiste), Sariel (éclaireuse et formatrice des Spectres de la Pierre), Eirik (cuisines), Borin (charpente), Thalira (médecin), Liora (herboriste).</p></div>
        <div class="card-end"></div>

        <h5 id="section-tableau-strates">Grand tableau des Strates Souterraines</h5>
        <div class="card-start"></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Strate</th>
                            <th style="padding: 6px;">Profondeur</th>
                            <th style="padding: 6px;">Température</th>
                            <th style="padding: 6px;">Fonction</th>
                            <th style="padding: 6px;">Aménagements & Dangers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Strate 0</strong></td><td style="padding: 6px;">0 m</td><td style="padding: 6px;">18-20°C</td><td style="padding: 6px;">Défense / Filtrage</td><td style="padding: 6px;">Couloir d'accès titanesque (30-40 m de large), herses naines et galeries de contre-mine. Faune cavernicole (chauves-souris, rats géants).</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Strate -1</strong></td><td style="padding: 6px;">-100 à -300 m</td><td style="padding: 6px;">20-25°C</td><td style="padding: 6px;">Vie Autonome / Défense</td><td style="padding: 6px;">Terrasses de cultures souterraines (champignons géants, lichens), aqueducs. Puits abandonnés colonisés par les Araignées Géantes.</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Strate -2</strong></td><td style="padding: 6px;">-400 à -700 m</td><td style="padding: 6px;">25-30°C</td><td style="padding: 6px;">Nécropole / Mémoire</td><td style="padding: 6px;">Halls rectangulaires monumentaux, cryptes familiales. Une Liche séculaire y réside avec ses momies naines de garde.</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Strate -3</strong></td><td style="padding: 6px;">-800 à -1000 m</td><td style="padding: 6px;">32°C (cité)</td><td style="padding: 6px;"><strong>10e Cité & Forges</strong></td><td style="padding: 6px;">Cité fortifiée habitée, dômes résidentiels, forges lourdes, thermes géothermaux publics. Place Royale des Portails et Portail du Grand Air.</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>Strate -4</strong></td><td style="padding: 6px;">-1000 à -1300 m</td><td style="padding: 6px;">150-200°C</td><td style="padding: 6px;">Captage Géothermique</td><td style="padding: 6px;">Faille vitrifiée franchie par ponts de basalte et sas thermiques (transit viable à 40-50°C via conduits d'aération). Geysers et Drakes Rocheux.</td></tr>
                        <tr><td style="padding: 6px;"><strong>Strate -5</strong></td><td style="padding: 6px;">-1300 à -1600 m</td><td style="padding: 6px;">28-30°C (moyenne)</td><td style="padding: 6px;">Régulation Énergétique</td><td style="padding: 6px;">Vannes géantes en bronze, <strong>Cercle de Téléportation n° 3</strong>. Antre de Glaur-Kaan (lac de magma refroidi par les racines d'Éther-Basalte).</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>

        <h4 id="section-traverse-forces">Forces Militaires de Traverse</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Garde de la Traverse (Armée mobile) :</strong> 20 000 combattants multiraciaux sous les ordres de la Duchesse Faelia (Maréchale) et du Duc Goran (Connétable).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Garnisons locales comtales :</strong> 46 000 soldats répartis entre les dix cités sous l'autorité des Comtes et Comtesses.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Garde des Veines :</strong> 2 000 soldats d'élite équipés de filtres et d'amulettes (commandés sur le terrain par Armand Vellec sous la direction technique de Vel'Shara).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Ordre de l'Adamant :</strong> 80 chevaliers d'élite formant la garde impériale directe.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Cavalerie des Wyvernes :</strong> 60 cavalières d'élite montées sur wyvernes sous les ordres directs de Faelia.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Spectres de la Pierre :</strong> 400 kobolds traqueurs d'élite vêtus de cuir de wyverne gris-basalte (commandés par Sariel) assurant la garde des frontières souterraines.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Tributs de labeur :</strong> 1 200 golems de travail et 10 000 morts-vivants cantonnés aux chantiers insalubres et aux mines profondes.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h3 id="section-astreane">Concordat d'Astréane</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Royaume magique du nord (environ 620 000 habitants, 8 000 combattants) articulé autour du cristal et des focalisateurs de lumière. L'esclavage et la servitude pour dettes sont totalement abolis, les Sans-Étincelle jouissant de la pleine liberté sans taxe magique. Gouverné souverainement par la Première Accordée <strong>Aélis Vaer</strong>, vassale de la Couronne impériale, tandis que l'officière <strong>Sévra Noll</strong> commande la milice des Veilleurs de Verre.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Lumérys — (19,40 ; 37,70) :</strong> Capitale bâtie en terrasses de marbre blanc et tours luminescentes. La Grande Esplanade d'Albâtre accueille l'arche magique permanente reliée directement à <strong>Élyria</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Grande Académie de Magie :</strong> Établie dans l'ancien Dôme des Sept Foyers, consacrée à l'enseignement arcanique pur ouvert à tous les citoyens.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Val-Opale — (18,20 ; 38,50) :</strong> Immense vallée de serres magiques produisant des récoltes continues.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Nacrelac — (18,40 ; 31,00) :</strong> Cité lacustre de pierre noire sur le Lac Mirant, foyer des grands ateliers de lentilles et cristaux des Liants.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Dragon résident :</strong> <strong>Ilysthéra</strong>, Dragonne Noble (<em>La Dame des Brumes Hautes</em>), résidant à l'Observatoire sommital de Lumérys, alliée et amante d'Elkyriel.</p></div>
        <div class="card-end"></div>

        <h3 id="section-dhor-kez">Ligues de Dhor-Kez</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Confédération de six grandes cités d'ateliers et de fonderies à l'est (environ 480 000 habitants, 12 000 soldats et ouvriers armés), réputée pour sa technologie à vapeur, ses forages et ses cœurs de golems. Les dettes héréditaires sont abolies et l'ancien Premier Syndic corrompu Dhoran Vesk a été condamné aux travaux forcés à perpétuité. La gestion civile et industrielle est assurée par <strong>Léonie Varc</strong> à la tête de la commune des <strong>Ateliers Liés</strong> sous tutelle impériale.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Kez-Bruma — (33,00 ; 23,10) :</strong> Cité monumentale de hauts-fourneaux superposés. La Place des Grandes Fonderies accueille l'arche magique permanente reliée à <strong>Élyria</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Dhor-Siphon — (31,90 ; 19,60) & Kez-Marteau — (35,40 ; 20,90) :</strong> Cités de forages profonds et de manufactures métallurgiques lourdes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Dragon résident :</strong> <strong>Kaldrielle</strong>, Dragonne Bestiale (<em>La Mère des Brasiers</em>), nichant dans les carrières géothermiques au nord-est de Kez-Bruma, pacifiée, soumise et alliée d'Elkyriel.</p></div>
        <div class="card-end"></div>

        <h3 id="section-orsenn">Royaume d'Orsenn</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Royaume fluvial des plaines basses (environ 710 000 vivants et 190 000 morts actifs ; 9 000 soldats vivants et jusqu'à 35 000 corps mobilisables). L'économie repose sur la nécromancie légale régie par la <strong>Loi des corps</strong>, désormais restreinte au don volontaire consenti et aux peines pénales. Gouverné souverainement par la reine vivante <strong>Maélis d’Orsenn</strong>, alliée intime d'Elkyriel et membre de l'Empire. La destruction définitive des Quatre Liches Conseillères par Elkyriel a restitué l'intégralité du pouvoir civil à la Couronne vivante.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Orsenn — (33,70 ; 31,70) :</strong> Capitale découpée de canaux rectilignes. L'Esplanade des Rois accueille l'arche magique permanente reliée directement à <strong>Élyria</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Val-Morne — (37,30 ; 29,50) :</strong> Port d'attache des convois de barges funéraires et transit fluvial avec Traverse.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Roseaux Noirs — (31,70 ; 33,80) :</strong> Vastes domaines agricoles irrigués exploités par des équipes de travailleurs cadavériques.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>
    `;

})();
