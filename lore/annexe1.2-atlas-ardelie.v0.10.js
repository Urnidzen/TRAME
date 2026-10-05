/**
 * TRAME - Annexe 1.2 : Atlas (Royaume d'Ardélie)
 * Version : v0.10
 * Rivecour, Forge naine, Cercles de téléportation, Aldhaven, Saillans, Immensité Grise,
 * Mer de Jade, Archipel des Tempêtes, Marches orientales et Axe Sud-Ouest
 * État de référence : Automne 1250
 */

window.TRAME_Atlas = window.TRAME_Atlas || {};

(function() {

    window.TRAME_Atlas.ARDELIE_HTML = `
        <!-- ======================================================== -->
        <!-- 1. ROYAUME D'ARDÉLIE -->
        <!-- ======================================================== -->
        <h2 id="royaume-ardelie">Royaume d'Ardélie</h2>

        <h3 id="section-rivecour">Rivecour (Capitale)</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : grande ville humaine, capitale du royaume d'Ardélie.</strong></p></div>
            <div class="rule-item">
                <p>Vaste cité épanouie dans les plaines agricoles fertiles de l'est, sur les rives d'un fleuve navigable descendant des montagnes lointaines. Située à l'intérieur des terres, elle domine le commerce fluvial en amont d'Aldhaven.</p>
            </div>
        <div class="card-end"></div>

        <h4 id="section-rivecour-localisation">Localisation et environnement</h4>
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

        <h4 id="section-rivecour-structure">Structure urbaine</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p>La cité s'organise en anneaux concentriques le long du fleuve qui la traverse d'est en ouest :</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Couronne :</strong> Quartier palatial sur la rive nord, dominé par les tours blanches du Palais Royal.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Quais de l'Or :</strong> Port fluvial intérieur où accostent les gabarres du commerce céréalier et les barges descendant vers Aldhaven.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Quartier des Marchands :</strong> Rues pavées abritant échoppes de maîtres artisans, apothicaires et tailleurs de soie.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Basse-Ville :</strong> Faubourgs agricoles aux rues de terre battue, entrepôts à grains et demeures des paysans.</p></div>
        <div class="card-end"></div>

        <h4 id="section-rivecour-points-interet">Points d'Intérêt</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Palais Royal :</strong> Structure baroque de pierre blanche et marbre gris, dominant le quartier de la Couronne.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Archives Occidentales :</strong> Section retirée des archives du Palais Royal, peu fréquentée en dehors des besoins administratifs. Elle dissimule l'accès à plusieurs passages de service réservés à la Couronne.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Cabinet Privé de la Régente :</strong> Petite pièce circulaire accessible par un passage secret depuis les Archives Occidentales. Kaelia l'utilise pour travailler ou recevoir confidentiellement certains interlocuteurs loin du protocole, des gardes et des regards de la Cour.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Forge Naine :</strong> Massif de granit émergeant entre deux places commerçantes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>L'Amphithéâtre du Sénat :</strong> Bâtiment à colonnes.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Thermes Publics :</strong> Établissements de bain fréquentés par la bourgeoisie.</p></div>
        <div class="card-end"></div>

        <h4 id="section-rivecour-presences">Présences Notables</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Roi Aldous</strong> – Palais Royal.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Reine Régente Kaelia</strong> – Palais Royal.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Grand Argentier Silas</strong> – Bureau du Trésor.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sénatrice Lucretia</strong> – Amphithéâtre du Sénat.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>L'Apothicaire</strong> – Quartier des Marchands.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Seigneur Valerius</strong> (noble et marchand) – Quartier noble.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Livia</strong> (fille de Valerius) – Quartier noble.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Thorek "La Gueule de Pierre"</strong> – Secteur industriel souterrain (fournitures).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Odran Sorell</strong> – Ancien Grand Chancelier, destitué et condamné à mort, détenu sous garde royale dans l'attente de son exécution.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Maeron</strong> – Ancien chef local du réseau des Trois-Saules, condamné aux travaux forcés à perpétuité dans les salines royales ; actuellement détenu sous garde royale à Rivecour.</p></div>
        <div class="card-end"></div>

        <h4 id="section-forge-naine-rivecour">La Forge naine de Rivecour</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Contexte historique :</strong> Unique structure naine de cette nature existant dans les territoires humains d'Ardélie. Bâtie il y a trois siècles, elle fut taillée dans le roc granitique. L'exode progressif des nains fut causé par les frictions avec la population humaine. Le dernier forgeron nain vendit la forteresse à Elkyriel contre une poignée de platine.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Extérieur :</strong> Bloc massif de granit brut ressemblant à un iceberg de pierre. Murs d'un mètre d'épaisseur, aucune fenêtre, unique accès par une double porte démesurée en bronze verdâtre.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Cour Intérieure :</strong> Puits de lumière vertical transformé en oasis féérique par la magie des résidents. Une fontaine de pierre occupe son centre, entourée d'arbres fruitiers nains et de fleurs attirant papillons et oiseaux chanteurs.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>L'Atelier Forgeron :</strong> Galerie est, foyer encastré dans la roche, enclumes d'acier noir et vastes rayonnages garnis d'armes et d'armures.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Écuries Souterraines :</strong> Boxs taillés dans le roc accueillant chevaux de trait et destriers caparaçonnés.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Dépôt :</strong> Chambre forte scellée par des portes naines, abritant le trésor et les dépouilles de Glaur-Kaan ainsi que les stocks de métaux précieux (mithril, adamantite, fer diamantin).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Thermes :</strong> Bassin géothermal alimenté en eau chaude naturelle, orné de lotus parfumés et de clochettes bleues lumineuses purificatrices.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Résidents rattachés :</strong> Mila (intendante et jardinière), Lysa, Liriel, Lirael, Vespera, Dravenna (Grande Écuyère), Seraphine, Roran, Doran, Toren, Néria, 2 Chevaliers de garde de la Lance de Huit.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Mercenaires de Goran (Détachement d'Ardélie) :</strong> Environ deux cent cinquante à trois cents combattants sous la livrée du marteau et de l'enclume, assurant discrètement la protection des comptoirs, ateliers, convois fluviaux et routes commerciales du sud.</p></div>
        <div class="card-end"></div>

        <h4 id="section-cercles-teleportation">Réseau des Cercles de Téléportation</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p>L’existence et la fonction du réseau demeurent secrètes hors du cercle des initiés. Chaque Cercle constitue un point d’ancrage et peut ouvrir une liaison temporaire vers n’importe quel autre Cercle après activation par quelques gouttes de sang.</p></div>
            <div class="rule-item table-row">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                    <thead>
                        <tr style="border-bottom: 2px solid #1c1917; text-align: left; font-family: 'Cinzel', serif;">
                            <th style="padding: 6px;">Cercle</th>
                            <th style="padding: 6px;">Localisation exacte</th>
                            <th style="padding: 6px;">Accès autorisé</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>1. Forge de Rivecour</strong></td><td style="padding: 6px;">Sous-sol sécurisé, galerie nord</td><td style="padding: 6px;">Résidents de la Forge</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>2. Tour Blanche</strong></td><td style="padding: 6px;">Tréfonds, salle des sources thermales</td><td style="padding: 6px;">Elkyriel, Faelia, Lysandra, Eryx</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>3. Strate -5</strong></td><td style="padding: 6px;">Chambre de maintenance géothermale</td><td style="padding: 6px;">Elkyriel, Faelia (urgence)</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>4. Saillans</strong></td><td style="padding: 6px;">Caverne dissimulée dans les falaises</td><td style="padding: 6px;">Rose, Elkyriel, Faelia, Aldric</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>5. Archipel des Tempêtes</strong></td><td style="padding: 6px;">Temple ogre purifié</td><td style="padding: 6px;">Elkyriel, Faelia, Vel’Shara, Nymira, Sariel</td></tr>
                        <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);"><td style="padding: 6px;"><strong>6. Forge d’Aldhaven</strong></td><td style="padding: 6px;">Sous-sol de la vieille forge</td><td style="padding: 6px;">Thorne, Elkyriel, Faelia, Eryx</td></tr>
                        <tr><td style="padding: 6px;"><strong>7. Karsenne</strong></td><td style="padding: 6px;">Cave de la parfumerie Leirykle</td><td style="padding: 6px;">Elkyriel, Lysandra, Faelia, Goran, Selyne Var</td></tr>
                    </tbody>
                </table>
            </div>
        <div class="card-end"></div>
        <div class="page-break"></div>

        <h3 id="section-aldhaven">Aldhaven</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : grande cité humaine portuaire — Coordonnées : (0,00 ; 0,00).</strong></p></div>
            <div class="rule-item">
                <p>Vaste cité portuaire construite en amphithéâtre autour de son port naturel sur la Mer de Jade, à l'extrémité aval du fleuve. Progressivement délaissée par la Couronne, elle est dominée de fait par les guildes criminelles et les grandes maisons commerciales.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Port-Vieux :</strong> Docks noirs usés par le sel, entrepôts délabrés et tavernes sans foi ni loi.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Basses-Écailles :</strong> Labyrinthe de ruelles étroites concentrant maisons de passe, tripots et ateliers clandestins.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>La Haute-Ville (Cité Morte) :</strong> Palais baroques désertés par la noblesse, patrouillés par des gardes privés corrompus.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Le Marché aux Fers :</strong> Vaste place ovale servant de lieu de recrutement pour mercenaires et tueurs à gages.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Les Sous-Sols :</strong> Réseau d'anciennes geôles royales et égouts majeurs interconnectés.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Implantations d'Elkyriel :</strong> Forge d'Aldhaven dirigée par le maître forgeron Thorne, son épouse Maëva et leur fille (abritant le <strong>Cercle de Téléportation n° 6</strong> au sous-sol), gardée par 2 Chevaliers de la Lance de Huit. Pâturages et écuries extérieures sous l'autorité de Dravenna. Étape portuaire du capitaine Kaelen et du marin Alden.</p></div>
        <div class="card-end"></div>

        <h3 id="section-saillans">Les Saillans</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : hameau côtier autarcique — Coordonnées : (-7,07 ; 7,07).</strong></p></div>
            <div class="rule-item">
                <p>Hameau de pêcheurs de quarante à cinquante habitants sur la côte nord-ouest, encaissé dans une anse de gravier noir au pied de falaises de schiste de 80 m de haut. Dépourvu de route d'accès, il vit dans un isolement préservé de tout regard.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Économie :</strong> Pêche artisanale, récolte d'algues comestibles, troc et subsistance. Une unique boulangerie alimentée par le seul champ de blé.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Présences :</strong> Rose (boulangère et responsable du foyer), Aldric (garde protecteur), Seraphine (navette régulière), Kaelen et Alden (présence périodique), les enfants Lila, Milo et Elara.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Cercle de Téléportation :</strong> Une caverne isolée dans les falaises de schiste abrite le <strong>Cercle n° 4</strong>.</p></div>
        <div class="card-end"></div>

        <h3 id="section-immensite-grise">L'Immensité Grise</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Vaste steppe continentale d'herbes sèches et de monolithes basaltiques s'étendant au nord d'Aldhaven. Territoire rude parcouru par les clans orques nomades.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Tour Blanche — (2,12 ; 2,12) :</strong> Ancien monolithe blanchâtre abritant une oasis thermale luxuriante. Centre névralgique du réseau d'espionnage des Corbeaux de Lysandra et comptoir commercial pacifié avec Gor-Kadar (représenté par l'ambassadrice Rhazka Cendre-Claire). Protégée par <strong>24 Golems de guerre lourds</strong>. Ses souterrains abritent des bassins thermaux et le <strong>Cercle n° 2</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Forteresse du Patron — (3,54 ; 3,54) :</strong> Ancienne place forte criminelle, vide depuis l'assaut et la mort du Patron.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Cratère du Syndicat — ≈ (1,95 ; 2,12) :</strong> Vaste excavation artificielle ayant accidentellement percé la voûte des strates souterraines de la Forteresse-Monde. Actuellement désertée.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Relais des Roches-Noires — (2,15 ; -0,35) :</strong> Auberge fortifiée en pierre basaltique dominant le fleuve à mi-chemin entre Aldhaven et Rivecour. Carrefour militaire neutre de recrutement affichant le Grand Tableau des contrats (épingles noires, grises et blanches).</p></div>
        <div class="card-end"></div>

        <h3 id="section-mer-de-jade">La Mer de Jade & Archipel des Tempêtes</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Eaux profondes d'un vert sombre bordant la façade ouest. L'Archipel des Tempêtes compte une cinquantaine d'îlots volcaniques recouverts d'une jungle tropicale étouffante, ceinturés de récifs coralliens et baignés de fumerolles sulfureuses.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Villages côtiers indigènes :</strong> Crique-aux-Bois (bois précieux), Basse-Eaux (corail noir), Port-Perle (perles géantes), Crique-aux-Pierres (gemmes volcaniques), La Cale Noire (minerai diamantin et forges géothermales).</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Colonie des Wyvernes :</strong> Près de 180 wyvernes soumises à Elkyriel, dont 60 adultes dressées composent l'élite de la Cavalerie aérienne sous le commandement de la Maréchale Faelia.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Île du Temple ogre purifié — (-14,56 ; 7,07) :</strong> Ancien site du projet nécromantique des pirates, entièrement nettoyé par le feu draconique. La salle haute abrite le <strong>Cercle de Téléportation n° 5</strong>.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Dangers maritimes :</strong> Serpents de mer géants (30 à 40 m), Pagures (Épaves marchantes), araignées de palmiers et scorpions de lave. La flotte des Pirates des Brumes a été entièrement coulée dans la baie géothermique par le dragon Elkyriel.</p></div>
        <div class="card-end"></div>

        <h3 id="section-marches-orientales">Les Marches orientales</h3>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Zone de transition resserrée entre collines d'ardoise et contreforts du massif frontalier. Traversée par le grand axe reliant Rivecour à Varethis :</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Valdorne — (8,59 ; -1,00) :</strong> Petite ville de plaine agricole et d'artisanat forestier.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Bâtisse d'Orven et Colm — (8,26 ; -1,00) :</strong> Ancienne maison de carriers au fond d'une combe boisée, désormais vide.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Grange des Trois-Saules — (8,76 ; -1,00) :</strong> Bâtiment incendié et sous-sol calciné ayant servi de cache au réseau clandestin de Maeron.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Pont-Cassé — (9,63 ; -1,00) :</strong> Pont écroulé sur la Veyre, franchissable par un gué.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Bergerie sous Roche — (9,63 ; -0,75) :</strong> Ancienne bergerie troglodyte et vaste refuge naturel camouflé sous la colline, doté d'une vasque d'eau claire pérenne.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Moulin de Brumecendre :</strong> Moulin isolé sur un bras secondaire de la Veyre, habité par Ysilde et Edran.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Rochebrune — (11,04 ; -2,16) :</strong> Bourg fortifié en pierre rouge de deux mille habitants, carrefour de péage et d'élevage. Résidence d'Alise.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Carrière de Beran — (11,04 ; -2,41) :</strong> Ancienne exploitation de pierre ayant servi de base arrière aux brigands de Beran Doss.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Deux-Couronnes — (13,04 ; -2,16) :</strong> Dernier grand village avant les lacets de haute montagne, comprenant également une chapelle abandonnée et une villa isolée.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Salines de Mornefond — (13,04 ; -9,16) :</strong> Complexe minier souterrain abandonné très au sud, vidé de toute présence nécromantique.</p></div>
        <div class="card-end"></div>

        <h3 id="section-axe-sud-ouest">Axe Sud-Ouest</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Auberge-relais du Sanglier Gris — (5,84 ; -2,41) :</strong> Halte d'étape sur la route méridionale.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Manoir des Épines Noires — (5,84 ; -4,41) :</strong> Ancien domaine fortifié du baron esclavagiste Eldric Valthor, désormais vidé et abandonné.</p></div>
        <div class="card-end"></div>
        <div class="page-break"></div>
    `;

})();
