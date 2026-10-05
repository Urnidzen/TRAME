/**
 * TRAME - Annexe 1.1 : Atlas (Vue d'ensemble)
 * Version : v0.10
 * Géographie générale, repères cartographiques, référentiel des trajets, climat et faune
 * État de référence : Automne 1250
 */

window.TRAME_Atlas = window.TRAME_Atlas || {};

(function() {

    window.TRAME_Atlas.VUE_ENSEMBLE_HTML = `
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

        <h2 id="section-vue-ensemble">Vue d'ensemble de la région</h2>
        
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
    `;

})();
