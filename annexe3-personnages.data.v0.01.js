/**
 * TRAME - Annexe 3 : Personnages
 * Version : v0.02
 * Base de données exhaustive et moteur de rendu dynamique
 * État de référence : Automne 1250
 */

window.TRAME_Personnages = (function() {

    const PRESENTATION_HTML = `
        <h2 id="section-presentation">Présentation</h2>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>ANNEXE 3 : PERSONNAGES</strong></p></div>
            <div class="rule-item">
                <p>Cette annexe présente l’état factuel des personnages à l'<strong>Automne 1250</strong>. Les personnages vivants sont classés selon leur domicile habituel ou leur principal lieu de rattachement durable. Ceux qui n’en possèdent aucun sont regroupés selon leur situation générale, sans transformer une destination projetée en domicile établi. Les personnes mortes sont regroupées dans un chapitre distinct. Elle rassemble les informations générales et durables utiles pour interpréter chaque personnage : identité, espèce, domicile habituel, fonction, apparence, caractère, histoire personnelle lorsqu'elle éclaire sa situation présente, rapports avec Elkyriel et avec les autres personnages, ainsi que les capacités, motivations, projets de vie ou particularités importantes. Cette annexe n’est pas une chronologie ni un suivi des déplacements et des actions en cours. Les voyages, événements récents, lieux de présence temporaires, déroulements de scènes et étapes successives d’une intrigue relèvent d'autres Annexes. Un événement n’est rappelé ici que lorsqu’il est nécessaire pour comprendre durablement un personnage, une relation ou sa situation générale.</p>
            </div>
        <div class="card-end"></div>
        <div class="page-break"></div>
    `;

    const REF_ELKYRIEL_HTML = `
        <h2 id="section-ref-elkyriel-rapports-a-elkyriel">REF-ELKYRIEL — Rapports à Elkyriel</h2>
        <div class="card-start"></div>
            <div class="rule-item">
                <p>Les personnes ayant retrouvé grâce à lui leur liberté ou leur dignité, ou dont il a sauvé la vie, éprouvent envers lui une profonde reconnaissance, confiance, affection et admiration. En prenant ensuite durablement soin d’elles tout en protégeant leur libre arbitre, il renforce encore cet attachement, qui évolue en une loyauté et un dévouement puissants, durables et pleinement choisis, constituant une forme d’idolâtrie affective, sans dimension religieuse ni sectaire. Elles recherchent volontiers sa proximité, désirent lui être utiles et le considèrent comme leur bienfaiteur et leur protecteur.</p>
            </div>
            <div class="rule-item">
                <p>Son humour quotidien réduit la distance créée par sa puissance et instaure avec son entourage une familiarité complice. La camaraderie naît naturellement auprès de ceux qu’il fréquente durablement : ils plaisantent avec lui, le taquinent et lui apportent librement leur point de vue. Lorsqu’il devient sérieux, le contraste donne davantage de poids à ses paroles et réaffirme immédiatement son autorité.</p>
            </div>
            <div class="rule-item">
                <p>Chez les enfants, l’attachement prend la forme d’une admiration héroïque et d’un lien paternel. Ils recherchent naturellement son affection, son attention et son approbation.</p>
            </div>
            <div class="rule-item">
                <p>Chez les femmes adultes, cet attachement prend généralement la forme d’une forte attirance amoureuse et sexuelle qui, lorsqu’Elkyriel les courtise, s’épanouit naturellement en relations intimes librement désirées et pleinement assumées. La place exceptionnelle qu’Elkyriel occupe à leurs yeux les conduit généralement à ne désirer aucun autre homme, tout en acceptant ses autres amantes ; celles qui sont ouvertes aux relations féminines peuvent devenir amantes d’autres femmes de son cercle, ces rapprochements étant favorisés par leur attachement commun et les expériences collectives initiées par Elkyriel. Leur complicité peut les conduire à prendre elles-mêmes l’initiative de séductions entre femmes ou de relations à plusieurs, par désir, par jeu ou pour faire plaisir à Elkyriel et attiser son désir. Elles se considèrent ainsi davantage comme des compagnes, des amantes et des complices que comme des rivales.</p>
            </div>
            <div class="rule-item">
                <p>Les fiches individuelles ajoutent leurs particularités aux éléments ci-dessus.</p>
            </div>
        <div class="card-end"></div>
        <div class="page-break"></div>
    `;

    // Dictionnaire central de tous les personnages avec TAGS d'indexation complets
    const PNJ = {
        mila: {
            id: "perso-mila",
            nom: "Mila",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: false, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humaine, féminin.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Prostituée dans une maison de passe d’Aldhaven.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Intendante des lieux et jardinière de la Forge naine de Rivecour. Ayant pris la relève d'Eryx suite à l'installation permanente de ce dernier à Élyria, elle assure désormais en pleine autonomie la gestion domestique quotidienne, la tenue des réserves et l'accueil des hôtes du sanctuaire d'Ardélie.",
            physique: "Cheveux bruns, denses et bouclés, ramenés sur une épaule ; iris vert délavé et petite cicatrice pâle près de la lèvre inférieure. Silhouette aux hanches et cuisses épaisses, poitrine lourde et traits marqués par la fatigue de son ancienne condition.",
            histoire: "Confidente de Lysa et connaissance du milieu des maisons de passe. Après la mort du Patron, elle survécut aux guerres de gangs d’Aldhaven en se soumettant aux règles de la nouvelle Matrone. Elkyriel lui offrit un emploi digne et un abri à la Forge.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        lysa: {
            id: "perso-lysa",
            nom: "Lysa",
            tags: { espece: "elfe", rangs: ["officier"], harem: true, intime: true, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Elfe, féminin.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Esclave prostituée d’un noble allié du Patron, maintenue sous emprise par la drogue ; plus tard captive des Pirates des Brumes.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (initiée de longue date).",
            fonction: "Aspirante Corbeau, messagère discrète et spécialiste des drogues sous la tutelle de Lysandra.",
            physique: "Traits délicats, lèvres rose carmin, peau de porcelaine et longue chevelure violet profond. Silhouette élancée aux formes très généreuses. Garde-robe : tenues d’apparat et soieries légères héritées de sa formation de courtisane.",
            histoire: "Courtisane de luxe ; connaissance approfondie des drogues. Libérée une première fois par Elkyriel, elle drogua son ancien maître afin de survivre. Le navire de contrebande qui l’emportait fit naufrage ; capturée par les Pirates des Brumes, elle fut ensuite délivrée du navire amiral de Vargo.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Relation intime ; compagne du harem libre.",
            rapports_autres: "Rapport à Faelia : attraction intense, fascination et sentiment de sécurité."
        },
        liriel: {
            id: "perso-liriel",
            nom: "Liriel",
            tags: { espece: "elfe", rangs: ["civil"], harem: true, intime: true, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Elfe, féminin, 27 ans.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Courtisane de luxe, captive des Pirates des Brumes, libérée de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapée de la Crique Sanglante).",
            fonction: "Musique et chant ; assistance légère auprès de Mila.",
            physique: "Cheveux argentés et silhouette très généreuse.",
            caractere: "Très timide, facilement impressionnée et encore peu sûre d’elle, mais capable d’efforts visibles pour surmonter sa peur.",
            histoire: "Captive des Pirates des Brumes, libérée de la Crique Sanglante par Elkyriel et réunie avec sa sœur jumelle.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Relation intime ; compagne du harem libre.",
            rapports_autres: "Sœur jumelle de Lirael, retrouvée après leurs captivités respectives. Rapport à Faelia : forte attirance. Très intimidée par elle et se sentant inférieure à elle, Liriel cherche néanmoins à explorer timidement ce désir."
        },
        lirael: {
            id: "perso-lirael",
            nom: "Lirael",
            tags: { espece: "elfe", rangs: ["civil"], harem: true, intime: true, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Elfe, féminin.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Esclave personnelle du baron Eldric Valthor au Manoir des Épines Noires.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (mise dans la confidence par sa sœur jumelle Liriel, préserve farouchement ce secret).",
            fonction: "Musique et chant ; aide à Liriel et Mila.",
            caractere: "Calme en apparence, profondément marquée par sa servitude, silencieuse et observatrice.",
            histoire: "Motivations actuelles : se reconstruire après ses années de servitude, protéger et soutenir sa sœur jumelle Liriel, et exprimer sa gratitude envers Elkyriel.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Relation intime ; compagne du harem libre. Elle exprime ses sentiments avec davantage de réserve que sa sœur.",
            rapports_autres: "Sœur jumelle de Liriel qu’elle protège et soutient."
        },
        vespera: {
            id: "perso-vespera",
            nom: "Vespera",
            tags: { espece: "elfe", rangs: ["officier"], harem: false, intime: false, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Elfe, féminin, 23 ans.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Acrobate, captive des Pirates des Brumes, libérée de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapée de la Crique Sanglante).",
            fonction: "Surveillance interne et observation.",
            physique: "Cheveux bleu nuit et corps athlétique.",
            caractere: "Discrète, silencieuse et timide dans les échanges directs. Curieuse, espiègle et voyeuriste, elle aime observer les scènes intimes et peut se caresser si elle demeure discrète.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        dravenna: {
            id: "perso-dravenna",
            nom: "Dravenna",
            tags: { espece: "orque", rangs: ["artisan", "officier"], harem: false, intime: false, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Orque, féminin, 30 ans.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Gladiatrice, captive des Pirates des Brumes, libérée de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapée de la Crique Sanglante).",
            fonction: "Grande Écuyère des Domaines Extérieurs ; membre de l’Escouade d’intervention de la Forge.",
            physique: "Peau vert mousse et corps puissant, sculpté par le combat.",
            caractere: "Fière, directe et franche.",
            histoire: "Contrairement aux guerriers de Traverse qui s'enferment dans des cités de pierre, Dravenna a trouvé sa liberté et sa rédemption dans les grands espaces et les plaines d'Ardélie. Après des années de boucherie subies dans les fosses de gladiateurs, le bruit des armes la dégoûte. Élever, dresser et soigner les destriers caparaçonnés est devenu sa véritable passion et son havre de paix. Elle a expressément refusé un titre de cour ou un commandement de garnison en Traverse pour rester auprès de ses chevaux. Elle est la maîtresse incontestée de l'élevage équestre d'Ardélie, fournissant les montures d'exception aux messagers et aux mercenaires de Goran, tout en constituant avec les gardes de la Lance de Huit le bouclier défensif de la Forge de Rivecour en cas d'attaque extérieure. Motivations actuelles : prendre soin des chevaux, préserver son sanctuaire de liberté en pleine nature, et accompagner ponctuellement Elkyriel lors de ses expéditions.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        seraphine: {
            id: "perso-seraphine",
            nom: "Seraphine",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["ardelie_forge", "ardelie_saillans"], domicile_id: "ardelie_forge" },
            espece_genre: "Humaine, féminin, 25 ans.",
            domicile: "Forge naine de Rivecour, avec des séjours réguliers aux Saillans.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale), séjours réguliers aux Saillans.",
            condition_anterieure: "Aubergiste, captive des Pirates des Brumes, libérée de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapée de la Crique Sanglante).",
            fonction: "Pâtissière et responsable d’une partie des réserves alimentaires ; navette régulière entre la Forge et les Saillans.",
            physique: "Rousse flamboyante aux formes généreuses.",
            caractere: "Douce, serviable, timide et joyeuse en cuisine.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        roran: {
            id: "perso-roran",
            nom: "Roran",
            tags: { espece: "nain", rangs: ["artisan", "officier"], harem: false, intime: false, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Nain, masculin, 27 ans.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Mineur, captif des Pirates des Brumes, libéré de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapé de la Crique Sanglante).",
            fonction: "Assistant de forge et adjoint aux ateliers de mécanique naine ; membre de l’Escouade d’intervention de la Forge.",
            physique: "Colosse d’une grande force physique.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        doran: {
            id: "perso-doran",
            nom: "Doran",
            tags: { espece: "humain", rangs: ["artisan", "officier"], harem: false, intime: false, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humain, masculin, 45 ans.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Soldat, captif des Pirates des Brumes, libéré de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapé de la Crique Sanglante).",
            fonction: "Assistant de forge chargé du trempage, de l’affûtage, de la maintenance du matériel et de la sécurité immédiate de l’atelier.",
            histoire: "Motivations actuelles : devenir garde du sanctuaire.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        ancien_soldat_deux_couronnes: {
            id: "perso-ancien-soldat-de-la-villa-des-deux-couronnes",
            nom: "Ancien soldat de la villa des Deux-Couronnes",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humain, masculin.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Ancien soldat devenu convoyeur, enlevé sur les routes et détenu dans la villa des Deux-Couronnes.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble et préserve ce secret.",
            fonction: "Escorte, convoyeur et garde de la communauté de la Forge.",
            histoire: "Intention : rester à la Forge et mettre son expérience de soldat et de convoyeur au service des déplacements, des escortes et de la sécurité de la communauté.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        jeune_apprenti_deux_couronnes: {
            id: "perso-jeune-apprenti-de-la-villa-des-deux-couronnes",
            nom: "Jeune apprenti de la villa des Deux-Couronnes",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humain, masculin, jeune adulte.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Apprenti artisan voyageant vers Varethis avant son enlèvement et sa détention dans la villa des Deux-Couronnes.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble et préserve ce secret.",
            fonction: "Apprenti artisan aux ateliers de la Forge.",
            histoire: "Intention : rester à la Forge afin d'y poursuivre son apprentissage et trouver un maître capable de compléter sa formation avant de décider où il souhaitera exercer son métier.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        voyageuse_deux_couronnes: {
            id: "perso-voyageuse-liberee-de-la-villa-des-deux-couronnes",
            nom: "Voyageuse libérée de la villa des Deux-Couronnes",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: false, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humaine, féminin.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Voyageuse isolée, enlevée sur les routes et détenue dans la villa des Deux-Couronnes.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble et préserve ce secret.",
            fonction: "Résidente libre de la communauté de la Forge.",
            histoire: "Intention : reconstruire une vie stable à la Forge avant de décider si elle souhaite s'y établir définitivement ou repartir ailleurs.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        trois_ouvriers_mornefond: {
            id: "perso-trois-anciens-ouvriers-des-salines-de-mornefond",
            nom: "Trois anciens ouvriers des salines de Mornefond",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humains, masculins.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Ouvriers des salines, capturés puis détenus à Mornefond par le réseau d'Odran.",
            secret_draconique: "Savent qu'Elkyriel est un Dragon Noble et préservent ce secret.",
            fonction: "Ouvriers manuels à la Forge.",
            histoire: "Intention : s'établir durablement à la Forge et y reprendre une activité de travail manuel, en restant ensemble après leur captivité à Mornefond.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        palefrenier_mornefond: {
            id: "perso-palefrenier-libere-de-mornefond",
            nom: "Palefrenier libéré de Mornefond",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humain, masculin.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Capturé dans un relais puis détenu à Mornefond.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble et préserve ce secret.",
            fonction: "Palefrenier aux écuries de la Forge sous l'autorité de Dravenna.",
            histoire: "Intention : s'établir à la Forge et reprendre son métier auprès des chevaux et des autres montures de la communauté, sous l'autorité de Dravenna.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        soigneuse_mornefond: {
            id: "perso-soigneuse-liberee-de-mornefond",
            nom: "Soigneuse libérée de Mornefond",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humaine, féminin.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Soigneuse itinérante capturée puis détenue à Mornefond.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble et préserve ce secret.",
            fonction: "Soigneuse résidente de la communauté de la Forge.",
            histoire: "Intention : rester à la Forge afin d'y exercer son savoir de soigneuse auprès de ses habitants et des anciens captifs. Elle n'exclut pas de reprendre un jour une vie itinérante.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        anciens_captifs_trois_saules: {
            id: "perso-anciens-captifs-des-trois-saules",
            nom: "Anciens captifs des Trois-Saules",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: false, secret: false, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Tous humains.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Grange des Trois-Saules, où ils étaient détenus par le réseau de Maeron.",
            secret_draconique: "Ignorent sa nature de Dragon Noble.",
            fonction: "Résidents libres accueillis à la Forge.",
            histoire: "Libres et accueillis à la Forge. Regroupe Toren, la femme aux cheveux noirs, l'homme âgé, le jeune homme et la jeune femme décrits individuellement."
        },
        toren: {
            id: "perso-toren",
            nom: "Toren",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humain, masculin, d’âge moyen.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Captif aux Trois-Saules.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Organisation pratique et garde de la communauté de la Forge.",
            caractere: "Vigoureux, pragmatique et lucide. Il sait prendre des décisions fermes sans cruauté.",
            histoire: "Intention : s'établir durablement à la Forge et mettre son expérience de l'organisation et de la garde au service de sa communauté.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        femme_cheveux_noirs: {
            id: "perso-femme-aux-cheveux-noirs",
            nom: "Femme aux cheveux noirs",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: false, secret: false, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humaine, féminin.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Groupe des anciens captifs libérés aux Trois-Saules.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Intendance et organisation interne à la Forge.",
            physique: "Cheveux noirs, regard dur et voix ferme.",
            caractere: "Méthodique, directe et peu tolérante envers le mensonge.",
            histoire: "Intention : s'établir à la Forge et y trouver une activité durable où son sens de l'organisation, son attention et son caractère ferme pourront être utiles.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        homme_age: {
            id: "perso-homme-age",
            nom: "Homme âgé",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: false, secret: false, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humain, masculin, âge avancé.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Groupe des anciens captifs libérés aux Trois-Saules.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Participation aux activités communes selon ses forces.",
            caractere: "Observateur, peu loquace et attentif aux contradictions.",
            histoire: "Intention : rester à la Forge et y reconstruire une vie stable, en participant aux activités communes dans la mesure de ses forces.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        jeune_homme: {
            id: "perso-jeune-homme",
            nom: "Jeune homme",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: false, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humain, masculin.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Groupe des anciens captifs libérés aux Trois-Saules.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Apprenti polyvalent à la Forge.",
            physique: "Jeune homme encore marqué par sa captivité.",
            caractere: "Pratique et moins endurci que Toren.",
            histoire: "Intention : rester à la Forge et apprendre un métier afin de construire une vie indépendante. Il n'a pas encore choisi l'activité dans laquelle il souhaite se former.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        jeune_femme: {
            id: "perso-jeune-femme",
            nom: "Jeune femme",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: false, secret: false, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humaine, féminin.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Groupe des anciens captifs libérés aux Trois-Saules.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Résidente libre en convalescence et aide légère.",
            physique: "Jeune femme amaigrie, généralement silencieuse.",
            caractere: "Réservée, mais pertinente lorsqu’elle intervient.",
            histoire: "Intention : rester à la Forge, reprendre des forces puis choisir elle-même l'activité et la place qu'elle souhaite y occuper.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        neria: {
            id: "perso-neria",
            nom: "Néria",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: true, secret: false, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Humaine, féminin.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            condition_anterieure: "Retenue par des trafiquants avant d’être libérée par Elkyriel.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Résidente libre et autonome de la Forge.",
            physique: "Jeune femme humaine aux longs cheveux, d’une beauté remarquable.",
            histoire: "Libre. Après avoir découvert la Forge, elle a choisi d’y rester de sa propre initiative.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Attirance réciproque, flirt et relation intime occasionnelle, libre et sans engagement exclusif. Elle ne fait pas partie du harem royal d'Élyria."
        },
        ronce: {
            id: "perso-ronce",
            nom: "Ronce",
            tags: { espece: "animal", rangs: ["autre"], harem: false, intime: false, secret: false, lieux: ["ardelie_forge"], domicile_id: "ardelie_forge" },
            espece_genre: "Mule, féminin.",
            domicile: "Forge naine de Rivecour.",
            domicile_complet: "Forge naine de Rivecour (Résidence principale permanente).",
            fonction: "Mule de bât et compagne d'expédition d'Elkyriel.",
            caractere: "Ironique, prudente et capable d’initiatives simples et cohérentes.",
            histoire: "Mule fournie à Elkyriel par Kaelia, à la demande d’Elkyriel. Revenue à la Forge avec Elkyriel. Elle a transporté pendant l’enquête une échoppe ambulante complète, composée de fers à cheval, marteaux, outils, pièces de forge, marchandises de grande qualité, provisions, outres, couvertures, matériel de voyage et ouvrages prestigieux. Sa charge demeure toujours limitée afin de ne pas l’épuiser.",
            rapport_elkyriel: "Compagne de route familière. Ses paroles animales ne sont comprises par les humanoïdes que grâce à Langage animal ou à une capacité équivalente."
        },
        lance_de_huit: {
            id: "perso-lance-de-huit",
            nom: "Lance de Huit",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["traverse_10e_cite", "ardelie_forge", "ardelie_aldhaven"], domicile_id: "traverse_10e_cite" },
            espece_genre: "Huit humains, masculins.",
            domicile: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            domicile_complet: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise). Rotations permanentes de garde à Rivecour et Aldhaven.",
            condition_anterieure: "Anciens gardes recrutés au Relais des Roches-Noires.",
            secret_draconique: "Ignorent sa nature de Dragon Noble.",
            fonction: "Officiers d’élite de la Couronne et chevaliers instructeurs. Deux membres assurent en permanence la garde de la Forge naine de Rivecour et deux celle de la forge d’Aldhaven, par roulement régulier. Lorsqu'ils ne sont pas en mission extérieure ou en faction aux sanctuaires d'Ardélie, ils forment le noyau d'encadrement des troupes régulières et résident à la Forteresse-Monde.",
            physique: "Harnois complet en Acier Nain Traditionnel, écu d’acier, lance, arbalète lourde et destrier caparaçonné. Leur tabard noir porte un marteau d’argent au-dessus d’une enclume.",
            rapport_elkyriel: "Fidélité absolue et fraternelle envers Elkyriel et Faelia."
        },
        lysandra: {
            id: "perso-lysandra",
            nom: "Lysandra",
            tags: { espece: "humain", rangs: ["duc", "officier"], harem: true, intime: true, secret: true, lieux: ["ardelie_tour_blanche", "ardelie_forge", "traverse_elyria"], domicile_id: "ardelie_tour_blanche" },
            espece_genre: "Humaine, féminin.",
            domicile: "Tour Blanche ; séjours réguliers à la Forge naine de Rivecour et au Palais royal d’Élyria.",
            domicile_complet: "Tour Blanche (Résidence principale) ; séjours réguliers à la Forge naine de Rivecour et au Palais royal d’Élyria par le réseau des Cercles de Téléportation.",
            condition_anterieure: "Fille du Patron, cloîtrée par lui dans la Tour Blanche depuis son plus jeune âge.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (gardienne et complice du secret).",
            fonction: "Duchesse ; Voix des Ombres. Directrice des Corbeaux et gardienne des secrets de l'Empire.",
            physique: "Peau blanche, yeux violets et longue chevelure noire de jais. Elle porte généralement des robes vaporeuses soulignant sa silhouette fine. Sa voix est cristalline.",
            caractere: "Mystique, intense et dépourvue de morale conventionnelle.",
            histoire: "Fondatrice et directrice d’un réseau d’espionnage dont les membres sont appelés les Corbeaux. Lysandra est l'oreille, l'œil et l'instinct d'Elkyriel. N'ayant aucune affinité pour l'art occulte de la nécromancie, elle n'exerce aucune fonction technique ni logistique sur les dix mille corps de labeur d'Orsenn. En revanche, en tant que Voix des Ombres, elle veille à la sûreté du royaume et à la traque des espions, gardant un œil vigilant sur les maîtres-scelleurs et nécromanciens étrangers détachés en Traverse : inscrits dans les registres noirs, épiés et cernés par ses Corbeaux, aucun d'eux ne peut conspirer contre la Couronne sans être neutralisé par son réseau. Projet actuel à Karsenne : l’implantation des Corbeaux à Karsenne est en place ; Selyne Var en centralise les informations depuis le quartier des artisans. Capacités magiques : Lysandra a appris à lancer des sorts. Elle connaît notamment Langage animal, qu’elle utilise pour communiquer directement avec les véritables corbeaux qu’elle dresse. Ceux-ci peuvent ainsi lui servir de messagers et de témoins capables de lui rapporter leurs observations. Focalisateur : elle emploie un chapelet pour lancer ses sorts. Vénération supposée : Lysandra n’a jamais précisé si l’usage de ce chapelet correspond à une véritable dévotion ni à qui celle-ci s’adresserait. Ses proches supposent qu’elle vénère Elkyriel, sans qu’elle l’ait explicitement confirmé.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Amante, compagne du harem libre et partenaire de confiance pour le renseignement.",
            rapports_autres: "Rapport à Faelia : amante et complice. Rapport à Eryx : relation exclusivement professionnelle. Eryx était historiquement son meilleur Corbeau ; leur collaboration repose sur une confiance ancienne et un respect mutuel."
        },
        reine_kaelia: {
            id: "perso-reine-kaelia-d-ardelie",
            nom: "Reine Kaelia d’Ardélie",
            tags: { espece: "humain", rangs: ["souverain"], harem: false, intime: true, secret: false, lieux: ["ardelie_rivecour_palais"], domicile_id: "ardelie_rivecour_palais" },
            espece_genre: "Humaine, féminin, d’âge mûr.",
            domicile: "Palais royal de Rivecour.",
            domicile_complet: "Palais royal de Rivecour (Résidence principale permanente).",
            secret_draconique: "Ignore totalement qu'Elkyriel est un Dragon Noble et l'Empereur de Traverse.",
            fonction: "Reine régente d’Ardélie et dirigeante effective du royaume.",
            physique: "Femme au maintien souverain, généralement vêtue d’une robe rigide à corset noir et cramoisi. Ses yeux gris polaire reflètent une intelligence froide et calculatrice.",
            caractere: "Cérébrale, pragmatique et maîtresse d’elle-même. Elle considère l’argent comme un instrument de puissance et de stabilité plutôt que comme une fin personnelle. Elle protège les intérêts de la Couronne et mesure les conséquences politiques de chaque décision.",
            histoire: "Elle toléra autrefois l’esclavage pour les revenus qu’il procurait à l’armée, puis en acta l’abolition lorsqu’Elkyriel apporta une solution économique supérieure. Elle dirige le royaume malgré l’effacement progressif d’Aldous.",
            rapport_elkyriel: "Elkyriel est son amant secret. Elle le considère comme politiquement dangereux par son influence, mais sincèrement désintéressé dans son refus des terres, des charges et de la vassalité, et profondément loyal envers ceux qu’il protège. Avec Aldous, elle a reconnu son titre de Seigneur Mercenaire et son indépendance. Leur intimité et leur confiance personnelle se sont renforcées, sans exclusivité ni engagement politique. Préférences intimes : Kaelia apprécie particulièrement les plaisirs anaux et porte volontiers un bijou conçu pour cet usage.",
            rapports_autres: "Rapport à Aldous : respect, protection et dette. Elle ne sait plus elle-même si leur lien relève encore de l’amour ou seulement du devoir."
        },
        roi_aldous: {
            id: "perso-roi-aldous-d-ardelie",
            nom: "Roi Aldous d’Ardélie",
            tags: { espece: "humain", rangs: ["souverain"], harem: false, intime: false, secret: false, lieux: ["ardelie_rivecour_palais"], domicile_id: "ardelie_rivecour_palais" },
            espece_genre: "Humain, masculin, vieillissant.",
            domicile: "Palais royal de Rivecour.",
            domicile_complet: "Palais royal de Rivecour (Résidence principale permanente).",
            secret_draconique: "Ignore totalement qu'Elkyriel est un Dragon Noble et l'Empereur de Traverse.",
            fonction: "Roi d’Ardélie.",
            physique: "Ancien grand guerrier désormais voûté et apathique, généralement engoncé dans des robes pourpres.",
            caractere: "Peu sensible aux souffrances de son peuple et obsédé par la construction de monuments capables de préserver son nom dans l’Histoire.",
            rapport_elkyriel: "L’offrande des Éternelles frappées à son effigie l’a rendu politiquement dépendant de la Forge et extrêmement favorable à Elkyriel. Avec Kaelia, il a reconnu son titre de Seigneur Mercenaire et son indépendance."
        },
        silas: {
            id: "perso-silas",
            nom: "Silas",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["ardelie_rivecour_palais"], domicile_id: "ardelie_rivecour_palais" },
            espece_genre: "Humain, masculin.",
            domicile: "Rivecour.",
            domicile_complet: "Rivecour (Bureau du Trésor du Palais royal).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Grand Argentier d’Ardélie.",
            physique: "Morphologie squelettique, robe grise et noire austère, doigts fréquemment tachés d’encre.",
            caractere: "Homme de chiffres lucide et méthodique.",
            rapport_elkyriel: "Il a établi le contrat d’exclusivité des Éternelles : mille pièces remises à la Couronne et une conservée par Elkyriel."
        },
        odran_sorell: {
            id: "perso-odran-sorell",
            nom: "Odran Sorell",
            tags: { espece: "humain", rangs: ["autre"], harem: false, intime: false, secret: false, lieux: ["ardelie_rivecour_palais"], domicile_id: "ardelie_rivecour_palais" },
            espece_genre: "Humain, masculin, vieillissant.",
            domicile: "Rivecour.",
            domicile_complet: "Rivecour (Geôles du Palais royal sous garde armée).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Ancien Grand Chancelier d’Ardélie et serviteur de longue date de l’État. Il supervisait les actes sensibles, les correspondances diplomatiques, les chiffres, les itinéraires et les archivistes autorisés.",
            physique: "Cheveux gris coupés courts, visage étroit, tenue impeccable et mains toujours gantées de cuir noir. Sa voix reste basse et mesurée, même lorsqu’il menace.",
            caractere: "Austère, méthodique, avare de paroles et gardant chacun de ses secrets hermétiquement séparé des autres.",
            histoire: "Nécromancien demeuré humain, il préparait sa lichification au prix de centaines ou milliers de vies. Il organisa l’enlèvement de Méléandre, la falsification d’actes royaux, un complot sous fausse bannière et une guerre destinée à lui fournir morts, blessés et captifs. Il compromit Maël Corven avant de le faire assassiner et relever comme zombie. Situation actuelle : destitué, privé de ses privilèges et condamné à mort. Il demeure détenu sous garde royale pour des interrogatoires complémentaires avant son exécution."
        },
        lucretia: {
            id: "perso-lucretia",
            nom: "Lucretia",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["ardelie_rivecour_senat"], domicile_id: "ardelie_rivecour_senat" },
            espece_genre: "Humaine, féminin.",
            domicile: "Rivecour.",
            domicile_complet: "Rivecour (Amphithéâtre du Sénat).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Sénatrice d'Ardélie.",
            caractere: "Noble humaniste, longtemps minoritaire dans son opposition à l’esclavage.",
            histoire: "L’abolition de l’esclavage a réalisé son principal objectif politique. Elle a assisté à l’audience contre Odran."
        },
        valerius: {
            id: "perso-valerius",
            nom: "Valerius",
            tags: { espece: "humain", rangs: ["noble", "artisan"], harem: false, intime: false, secret: false, lieux: ["ardelie_rivecour_noble"], domicile_id: "ardelie_rivecour_noble" },
            espece_genre: "Humain, masculin.",
            domicile: "Quartier noble de Rivecour.",
            domicile_complet: "Quartier noble de Rivecour (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Seigneur et riche négociant en soie.",
            caractere: "Abolitionniste par conviction morale, mais peu courageux face à la violence.",
            rapport_elkyriel: "Crainte respectueuse et admiration pour son ascension. Il a fourni une couverture financière et logistique au mouvement abolitionniste."
        },
        livia: {
            id: "perso-livia",
            nom: "Livia",
            tags: { espece: "humain", rangs: ["noble"], harem: false, intime: false, secret: false, lieux: ["ardelie_rivecour_noble"], domicile_id: "ardelie_rivecour_noble" },
            espece_genre: "Humaine, féminin, jeune adulte.",
            domicile: "Quartier noble de Rivecour.",
            domicile_complet: "Quartier noble de Rivecour (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Noble résidente, fille de Valerius.",
            rapport_elkyriel: "Attirance et vive curiosité pour Elkyriel.",
            rapports_autres: "Rapport à Valerius : fille de Valerius. Rapport à Faelia : fascination pour sa liberté, sa beauté et son assurance."
        },
        apothicaire: {
            id: "perso-l-apothicaire",
            nom: "L’Apothicaire",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: false, lieux: ["ardelie_rivecour_marchands"], domicile_id: "ardelie_rivecour_marchands" },
            espece_genre: "Humaine, féminin.",
            domicile: "Rivecour.",
            domicile_complet: "Quartier des Marchands de Rivecour (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Apothicaire du quartier des Marchands.",
            physique: "Femme à la silhouette charnue, vêtue d’une robe de coton léger, aux mains imprégnées de sucs végétaux.",
            rapport_elkyriel: "Client fortuné qu’elle a averti des dangers liés à la milice de Vane et aux réseaux esclavagistes."
        },
        marchande_deux_couronnes: {
            id: "perso-marchande-liberee-de-la-villa-des-deux-couronnes",
            nom: "Marchande libérée de la villa des Deux-Couronnes",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["ardelie_rivecour_marchands"], domicile_id: "ardelie_rivecour_marchands" },
            espece_genre: "Humaine, féminin.",
            domicile: "Rivecour.",
            domicile_complet: "Rivecour (Résidence principale permanente).",
            condition_anterieure: "Marchande itinérante de petit matériel, enlevée sur les routes et détenue dans la villa des Deux-Couronnes.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble et préserve ce secret.",
            fonction: "Commerçante, marchande de petit matériel.",
            histoire: "Intention : s'établir à Rivecour et ouvrir une petite échoppe de matériel courant afin de poursuivre son activité commerciale sans reprendre une vie entièrement itinérante.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        artisan_cuir_mornefond: {
            id: "perso-artisan-du-cuir-libere-de-mornefond",
            nom: "Artisan du cuir libéré de Mornefond",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["ardelie_rivecour_marchands"], domicile_id: "ardelie_rivecour_marchands" },
            espece_genre: "Humain, masculin.",
            domicile: "Rivecour.",
            domicile_complet: "Rivecour (Résidence principale permanente).",
            condition_anterieure: "Capturé puis détenu à Mornefond.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble et préserve ce secret.",
            fonction: "Artisan du cuir, atelier de tannerie et maroquinerie.",
            histoire: "Intention : s'établir à Rivecour et ouvrir, seul ou avec d'autres artisans, un atelier de travail du cuir.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        thorek: {
            id: "perso-thorek",
            nom: "Thorek",
            tags: { espece: "nain", rangs: ["artisan"], harem: false, intime: false, secret: false, lieux: ["ardelie_rivecour_marchands"], domicile_id: "ardelie_rivecour_marchands" },
            espece_genre: "Nain, masculin.",
            domicile: "Rivecour.",
            domicile_complet: "Rivecour (Quartier des Marchands, Comptoir de Thorek).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Fournisseur de minerais en tout genre : communs, rares et même exceptionnels.",
            histoire: "Surnom : La Gueule de Pierre.",
            rapport_elkyriel: "Leur contrat secret garantit l’approvisionnement en minerais d'exceptions."
        },
        rose: {
            id: "perso-rose",
            nom: "Rose",
            tags: { espece: "humain", rangs: ["artisan"], harem: true, intime: true, secret: true, lieux: ["ardelie_saillans"], domicile_id: "ardelie_saillans" },
            espece_genre: "Humaine, féminin, environ 35 à 40 ans.",
            domicile: "Les Saillans.",
            domicile_complet: "Les Saillans (Résidence principale permanente).",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (confidente de cœur depuis les origines).",
            fonction: "Boulangère et responsable du foyer des Saillans.",
            physique: "Longs cheveux châtains parsemés de mèches grises, yeux gris doux et patients, taches de rousseur sur le nez et les pommettes. Silhouette solide de travailleuse, taille fine, hanches rondes et poitrine lourde. Elle porte souvent un tablier de boulangère.",
            caractere: "Calme, généreuse et apaisante.",
            histoire: "Elle quitta Aldhaven avec Aldric et les enfants pour s’établir aux Saillans.",
            rapport_elkyriel: "Amante, compagne du harem libre et refuge affectif. La bonté de Rose et de Lila a profondément influencé sa manière de protéger les personnes abandonnées. Elle accepte ses autres relations.",
            rapports_autres: "Rapport à Faelia : amante. Elle apprécie l’audace que Faelia l’encourage à assumer. Rapport à Aldric : ami d’enfance devenu frère d’adoption ; soutien mutuel et confiance absolue. Mère de Lila."
        },
        aldric: {
            id: "perso-aldric",
            nom: "Aldric",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: true, lieux: ["ardelie_saillans"], domicile_id: "ardelie_saillans" },
            espece_genre: "Humain, masculin, d’âge mûr.",
            domicile: "Les Saillans.",
            domicile_complet: "Les Saillans (Résidence principale permanente).",
            condition_anterieure: "Prisonnier libéré par Elkyriel.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble.",
            fonction: "Garde du foyer et résident protecteur des Saillans.",
            physique: "Carrure solide de paysan ou d’ancien soldat, traits usés par sa captivité et regard affûté.",
            rapport_elkyriel: "Voir REF-ELKYRIEL.",
            rapports_autres: "Rapport à Rose : ami d’enfance et frère d’adoption. Rapport aux enfants : figure d’oncle protecteur et complice pour Lila, Milo et Elara."
        },
        lila: {
            id: "perso-lila",
            nom: "Lila",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: false, secret: false, lieux: ["ardelie_saillans"], domicile_id: "ardelie_saillans" },
            espece_genre: "Humaine, féminin, environ 8 ans.",
            domicile: "Les Saillans.",
            domicile_complet: "Les Saillans (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Enfant du foyer.",
            rapport_elkyriel: "Voir REF-ELKYRIEL (admiration héroïque et lien paternel).",
            rapports_autres: "Fille de Rose."
        },
        milo: {
            id: "perso-milo",
            nom: "Milo",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: false, secret: false, lieux: ["ardelie_saillans"], domicile_id: "ardelie_saillans" },
            espece_genre: "Humain, masculin, environ 6 à 7 ans.",
            domicile: "Les Saillans.",
            domicile_complet: "Les Saillans (Résidence principale permanente).",
            condition_anterieure: "Orphelin détenu dans les geôles du Patron, libéré par Elkyriel et Faelia.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Enfant du foyer.",
            rapport_elkyriel: "Voir REF-ELKYRIEL (admiration héroïque et lien paternel).",
            rapports_autres: "Frère d’Elara."
        },
        elara: {
            id: "perso-elara",
            nom: "Elara",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: false, secret: false, lieux: ["ardelie_saillans"], domicile_id: "ardelie_saillans" },
            espece_genre: "Humaine, féminin, environ 6 à 7 ans.",
            domicile: "Les Saillans.",
            domicile_complet: "Les Saillans (Résidence principale permanente).",
            condition_anterieure: "Orpheline détenue dans les geôles du Patron, libérée par Elkyriel et Faelia.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Enfant du foyer.",
            rapport_elkyriel: "Voir REF-ELKYRIEL (admiration héroïque et lien paternel).",
            rapports_autres: "Sœur de Milo."
        },
        kaelen: {
            id: "perso-kaelen",
            nom: "Kaelen",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: false, lieux: ["ardelie_aldhaven_port", "ardelie_saillans", "mer_jade_archipel"], domicile_id: "ardelie_aldhaven_port" },
            espece_genre: "Humain, masculin.",
            domicile: "Son navire, avec des présences périodiques à Aldhaven, aux Saillans et dans l’Archipel des Tempêtes.",
            domicile_complet: "Son navire, avec des présences périodiques à Aldhaven, aux Saillans et dans l’Archipel des Tempêtes.",
            condition_anterieure: "Prisonnier des hommes du Patron, libéré par Elkyriel avant le 15 juillet 1247.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Capitaine du navire d’Elkyriel.",
            physique: "Silhouette maigre et élastique, mains calleuses de marin.",
            histoire: "Marin et contrebandier d'expérience.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        alden: {
            id: "perso-alden",
            nom: "Alden",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["ardelie_aldhaven_port", "ardelie_saillans", "mer_jade_archipel"], domicile_id: "ardelie_aldhaven_port" },
            espece_genre: "Humain, masculin, 29 ans.",
            domicile: "Son navire, avec des présences périodiques à Aldhaven, aux Saillans et dans l’Archipel des Tempêtes.",
            domicile_complet: "Son navire, avec des présences périodiques à Aldhaven, aux Saillans et dans l’Archipel des Tempêtes.",
            condition_anterieure: "Captif des Pirates des Brumes, libéré de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapé de la Crique Sanglante).",
            fonction: "Charpentier naval et marin sous les ordres de Kaelen.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        thorne: {
            id: "perso-thorne",
            nom: "Thorne",
            tags: { espece: "nain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["ardelie_aldhaven_forge"], domicile_id: "ardelie_aldhaven_forge" },
            espece_genre: "Nain, masculin, 38 ans.",
            domicile: "Aldhaven.",
            domicile_complet: "Aldhaven (Forge commerciale d'Aldhaven, Résidence principale permanente).",
            condition_anterieure: "Captif des Pirates des Brumes, libéré de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapé de la Crique Sanglante).",
            fonction: "Maître forgeron commercial autonome de la forge d’Aldhaven.",
            physique: "Très puissant physiquement.",
            histoire: "Après le traumatisme de la séparation d'avec son épouse et sa fille lors de sa capture par les pirates, Thorne a fait le vœu absolu de ne plus jamais quitter les siens. Forgeron traditionnel d'une compétence éprouvée, il est entièrement dévoué à son atelier urbain et de marine à Aldhaven. Il n'a aucun goût pour la politique, les expéditions lointaines ou les hautes arcanes. Il gère la production commerciale courante d'Elkyriel sur la côte ouest, forme des apprentis locaux et assure avec une fidélité silencieuse la protection du Cercle de téléportation n° 6 dissimulé dans son sous-sol. Motivations actuelles : reconstruire sa vie familiale, réussir la forge d’Aldhaven, ne plus jamais être séparé de sa famille et devenir un forgeron digne de confiance.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Respect de forgeron à forgeron.",
            rapports_autres: "Époux de Maëva et père de leur fille."
        },
        maeva: {
            id: "perso-maeva",
            nom: "Maëva",
            tags: { espece: "nain", rangs: ["civil"], harem: false, intime: false, secret: true, lieux: ["ardelie_aldhaven_forge"], domicile_id: "ardelie_aldhaven_forge" },
            espece_genre: "Naine, féminin.",
            domicile: "Aldhaven.",
            domicile_complet: "Aldhaven (Forge d'Aldhaven, Résidence principale permanente).",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (mise dans la confidence par Thorne).",
            fonction: "Résidente, intendance du foyer familial de la forge.",
            rapports_autres: "Épouse de Thorne et mère de leur fille."
        },
        fille_thorne_maeva: {
            id: "perso-fille-de-thorne-et-maeva",
            nom: "Fille de Thorne et Maëva",
            tags: { espece: "nain", rangs: ["civil"], harem: false, intime: false, secret: false, lieux: ["ardelie_aldhaven_forge"], domicile_id: "ardelie_aldhaven_forge" },
            espece_genre: "Naine, féminin, enfant.",
            domicile: "Aldhaven.",
            domicile_complet: "Aldhaven (Forge d'Aldhaven, Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Enfant du foyer.",
            rapports_autres: "Fille de Thorne et Maëva."
        },
        varek: {
            id: "perso-varek",
            nom: "Varek",
            tags: { espece: "humain", rangs: ["autre"], harem: false, intime: false, secret: false, lieux: ["ardelie_marches_routes"], domicile_id: "ardelie_marches_routes" },
            espece_genre: "Humain, masculin.",
            domicile: "Routes des Marches orientales (coupe-gorge après Valdorne).",
            domicile_complet: "Routes des Marches orientales (coupe-gorge après Valdorne).",
            secret_draconique: "Ignore totalement la nature d'Elkyriel.",
            fonction: "Chef de la bande de brigands rencontrée par Elkyriel, dans un coupe-gorge situé sur la route après Valdorne.",
            histoire: "Après négociation et le paiement d’une pièce d’or, Varek lui révéla que sept étrangers à cheval étaient passés neuf jours plus tôt. Ils transportaient six caisses blanches dont provenaient des bruits ou des crissements laissant supposer un contenu vivant, et se dirigeaient vers Rochebrune par les anciennes carrières. Situation actuelle : aucune évolution ultérieure n’est établie.",
            rapport_elkyriel: "Relation ponctuelle et intéressée, limitée à cette négociation."
        },
        charretier_deux_couronnes: {
            id: "perso-charretier-libere-de-la-villa-des-deux-couronnes",
            nom: "Charretier libéré de la villa des Deux-Couronnes",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["ardelie_marches_routes"], domicile_id: "ardelie_marches_routes" },
            espece_genre: "Humain, masculin.",
            domicile: "Valdorne.",
            domicile_complet: "Valdorne (Résidence principale permanente).",
            condition_anterieure: "Enlevé sur les routes et détenu dans la villa des Deux-Couronnes.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble et préserve ce secret.",
            fonction: "Charretier et transporteur routier.",
            histoire: "Intention : retourner à Valdorne et reprendre son activité de charretier lorsqu'il se sentira prêt à reprendre la route.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        ouvriere_agricole_deux_couronnes: {
            id: "perso-ouvriere-agricole-liberee-de-la-villa-des-deux-couronnes",
            nom: "Ouvrière agricole libérée de la villa des Deux-Couronnes",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["ardelie_marches_routes"], domicile_id: "ardelie_marches_routes" },
            espece_genre: "Humaine, féminin.",
            domicile: "Environs ruraux de Rochebrune.",
            domicile_complet: "Environs ruraux de Rochebrune (Résidence principale permanente).",
            condition_anterieure: "Enlevée sur les routes et détenue dans la villa des Deux-Couronnes.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble et préserve ce secret.",
            fonction: "Ouvrière agricole, travaux des champs.",
            histoire: "Intention : retourner dans les environs de Rochebrune et chercher à s'y établir durablement dans une activité agricole, avec l'espoir de travailler un jour pour son propre foyer plutôt que comme simple ouvrière.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        beran_doss: {
            id: "perso-beran-doss",
            nom: "Beran Doss",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: false, lieux: ["ardelie_rochebrune"], domicile_id: "ardelie_rochebrune" },
            espece_genre: "Humain, masculin, environ 50 ans.",
            domicile: "Rochebrune.",
            domicile_complet: "Rochebrune (Résidence principale).",
            condition_anterieure: "Prévôt de péage, révoqué pour extorsion.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Marchand de chevaux avant le démantèlement du réseau.",
            physique: "Homme massif aux épaules larges, au cou épais et au ventre contenu sous des vêtements de marchand soigneusement entretenus. Cheveux gris très courts, moustache sombre grisonnante et nez anciennement brisé. Ses mains de cavalier sont larges et calleuses.",
            caractere: "Courtois lorsqu’il dissimule ses intentions, brutal lorsqu’il se croit en position de force. Son sourire affable disparaît dès qu’il ne le juge plus utile.",
            histoire: "Intermédiaire régional du réseau d’Odran, il coordonnait des agents, des relais et des caisses entre Rochebrune, la Veyre et Mornefond. Il recevait des ordres chiffrés sans rencontrer directement Odran."
        },
        orven: {
            id: "perso-orven",
            nom: "Orven",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: false, lieux: ["ardelie_rochebrune"], domicile_id: "ardelie_rochebrune" },
            espece_genre: "Humain, masculin.",
            domicile: "Aucun domicile habituel actuellement établi depuis son départ de la combe de Rochebrune.",
            domicile_complet: "Aucun domicile habituel actuellement établi depuis son départ de la combe de Rochebrune.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Ancien contremaître des carrières.",
            histoire: "Trompé par de faux agents royaux, il accepta de cacher une caisse sans savoir qu’elle contenait un zombie. Il fut ensuite menacé et contraint de fuir avec son fils. Intention : refaire sa vie avec Colm, probablement dans les Marches orientales, sans avoir encore arrêté leur futur lieu d'installation ni leur activité.",
            rapports_autres: "Père protecteur de Colm."
        },
        colm: {
            id: "perso-colm",
            nom: "Colm",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: false, lieux: ["ardelie_rochebrune"], domicile_id: "ardelie_rochebrune" },
            espece_genre: "Humain, masculin, adulte.",
            domicile: "Aucun domicile habituel actuellement établi depuis son départ de la combe de Rochebrune.",
            domicile_complet: "Aucun domicile habituel actuellement établi depuis son départ de la combe de Rochebrune.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Habitué aux chevaux et aux chemins des carrières.",
            histoire: "Il aida son père à déplacer la caisse et à enfermer le zombie sans participer consciemment au complot. Intention : refaire sa vie aux côtés d'Orven, probablement dans les Marches orientales ; leur futur lieu d'installation et l'activité qu'ils y exerceront restent à déterminer.",
            rapports_autres: "Fils loyal et solidaire d'Orven."
        },
        deux_carriers_mornefond: {
            id: "perso-deux-carriers-liberes-de-mornefond",
            nom: "Deux carriers libérés de Mornefond",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["ardelie_rochebrune"], domicile_id: "ardelie_rochebrune" },
            espece_genre: "Humains, masculins.",
            domicile: "Région de Rochebrune.",
            domicile_complet: "Région de Rochebrune (Résidence principale permanente).",
            condition_anterieure: "Capturés puis détenus à Mornefond.",
            secret_draconique: "Savent qu'Elkyriel est un Dragon Noble et préservent ce secret.",
            fonction: "Carriers et tailleurs de pierre.",
            histoire: "Intention : retourner dans la région de Rochebrune et reprendre un travail de carrière, de taille ou d'extraction dans un établissement sans lien avec l'ancien réseau.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        maeron: {
            id: "perso-maeron",
            nom: "Maeron",
            tags: { espece: "humain", rangs: ["autre"], harem: false, intime: false, secret: false, lieux: ["ardelie_rochebrune"], domicile_id: "ardelie_rochebrune" },
            espece_genre: "Humain, masculin, environ 40 ans.",
            domicile: "Secteur de Rochebrune et relais des Trois-Saules (Actuellement sous garde royale à Rivecour avant transfert aux salines royales).",
            domicile_complet: "Secteur de Rochebrune et relais des Trois-Saules (Actuellement sous garde royale à Rivecour avant transfert aux salines royales).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Chef local du réseau clandestin à la Grange des Trois-Saules.",
            physique: "Homme de taille moyenne, sec et nerveux. Cheveux châtains clairsemés, barbe courte irrégulière et yeux bruns constamment mobiles. Son apparence quelconque lui permet de passer pour un contremaître ou un voyageur. Une ancienne cicatrice oblique marque la peau sous son oreille gauche.",
            caractere: "Prudent, calculateur et menteur dès qu’il pense pouvoir en tirer avantage.",
            histoire: "Condamné aux travaux forcés à perpétuité dans les salines royales, sans possibilité de libération. Il demeure actuellement sous garde royale à Rivecour avant l’exécution de sa peine.",
            rapports_autres: "Autorité clandestine et fonctionnelle fondée sur la chaîne d’ordres, la discipline et l’intérêt commun, sans loyauté affective."
        },
        joren: {
            id: "perso-joren",
            nom: "Joren",
            tags: { espece: "humain", rangs: ["autre"], harem: false, intime: false, secret: false, lieux: ["ardelie_rochebrune"], domicile_id: "ardelie_rochebrune" },
            espece_genre: "Humain, masculin.",
            domicile: "Secteur de Rochebrune.",
            domicile_complet: "Secteur de Rochebrune.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Messager de Beran Doss.",
            histoire: "Il transporta jusqu’à la villa des Deux-Couronnes un message scellé du symbole de la tour fendue. Situation actuelle : vu pour la dernière fois vivant au matin du lundi 18 mai 1248, quittant la villa des Deux-Couronnes après avoir remis le message. Son parcours ultérieur est inconnu."
        },
        alise: {
            id: "perso-alise",
            nom: "Alise",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: true, secret: false, lieux: ["ardelie_rochebrune"], domicile_id: "ardelie_rochebrune" },
            espece_genre: "Humaine, féminin, 19 ans.",
            domicile: "Demeure de son père à Rochebrune.",
            domicile_complet: "Rochebrune (Demeure de son père, Résidence principale permanente).",
            secret_draconique: "Ignore totalement qu'Elkyriel est un Dragon Noble et l'Empereur de Traverse (le connaît uniquement sous l’identité d’Urnidzen).",
            fonction: "Fille de notable, citoyenne libre de Rochebrune.",
            physique: "Très longs cheveux châtains descendant jusqu'aux hanches, yeux vert noisette et traits fins encore marqués par la jeunesse. Silhouette élancée et très féminine, aux proportions d'environ 90/60/85, avec une taille particulièrement fine.",
            caractere: "Vive, volontaire et indépendante. Elle supporte mal que d'autres décident à sa place et peut devenir téméraire lorsqu'elle est poussée par la colère ou le besoin de comprendre. Son humour et son répondant restent présents même dans les situations difficiles.",
            histoire: "Fille d'un ancien associé d'Edren Vaulnier. Elle fut enlevée afin de servir de moyen de pression contre son père, qui conservait des documents compromettants liés à leurs anciennes affaires. La révélation de ce passé a profondément modifié le regard qu'elle porte sur son père sans rompre leur lien affectif.",
            rapport_elkyriel: "Elle le connaît uniquement sous l’identité d’Urnidzen. Reconnaissance, confiance, complicité et forte attirance réciproque ; leur relation sexuelle est ponctuelle, consentie et sans engagement. Elle ignore qu’Urnidzen est Elkyriel et qu’il est un Dragon Noble.",
            rapports_autres: "Rapport à son père : amour filial toujours présent, mais confiance ébranlée par les secrets qu'il lui a cachés. Elle refuse que cet amour soit confondu avec un pardon ou une approbation de ses actes."
        },
        ysoria: {
            id: "perso-reine-ysoria-de-varethis",
            nom: "Reine Ysoria de Varethis",
            tags: { espece: "humain", rangs: ["souverain"], harem: false, intime: true, secret: false, lieux: ["varethis_palais"], domicile_id: "varethis_palais" },
            espece_genre: "Humaine, féminin, 28 ans.",
            domicile: "Palais royal de Karsenne.",
            domicile_complet: "Palais royal de Karsenne (Résidence principale permanente).",
            secret_draconique: "Ignore qu'Elkyriel est un Dragon Noble et le souverain suprême d'un empire continental à l'Est.",
            fonction: "Reine de Varethis.",
            physique: "Grande et élancée, aux longues jambes, à la taille étroite et aux hanches marquées, avec une poitrine généreuse mais proportionnée. Visage ovale aux pommettes hautes, nez droit et fin, lèvres pleines et peau claire au ton naturellement chaud. Ses yeux bleu-gris très clair, presque argentés sous certaines lumières, sont cerclés d’un anneau plus sombre. Ses cheveux très longs, épais et châtain profond portent de légers reflets cuivrés. Habitude vestimentaire : Ysoria ne porte jamais de sous-vêtements.",
            caractere: "Souveraine attentive et assurée sans raideur. Elle apprécie la franchise, supporte la contradiction lorsqu’elle n’est pas humiliante et sait employer l’humour pour réduire la distance créée par son rang. Elle tient fortement à conserver son libre choix dans sa vie personnelle.",
            histoire: "Cousine de Méléandre, elle fut couronnée après sa disparition et la mort du roi Roderan II, dans le cadre de la succession alors légalement reconnue. Après le retour de Méléandre, elle a conservé la couronne dans le cadre d’un accord dynastique accepté par les deux cousins.",
            rapport_elkyriel: "Rapport personnel : relation romantique et sexuelle secrète, fondée sur une forte attirance, la franchise, le jeu et une confiance personnelle croissante. Ysoria distingue cette relation de ses décisions de Reine. Aucun engagement politique ni exclusivité n’est établi. Rapport institutionnel : elle reconnaît son titre de Seigneur Mercenaire et son indépendance. Aucun accord général n’a été conclu avec le conseil de Varethis. Connaissances sur Elkyriel : Ysoria sait que maître Leirykle est une apparence humaine d’Elkyriel et qu’il peut changer entièrement de visage.",
            rapports_autres: "Rapport à Méléandre : cousin et premier prince du sang. Ysoria demeure reine et Méléandre est reconnu comme son héritier actuel. Certaines décisions particulièrement sensibles nécessitent encore leurs deux sceaux."
        },
        meleandre: {
            id: "perso-prince-meleandre-de-varethis",
            nom: "Prince Méléandre de Varethis",
            tags: { espece: "humain", rangs: ["souverain", "noble"], harem: false, intime: false, secret: false, lieux: ["varethis_palais"], domicile_id: "varethis_palais" },
            espece_genre: "Humain, masculin, adulte.",
            domicile: "Palais royal de Karsenne.",
            domicile_complet: "Palais royal de Karsenne (Résidence principale permanente).",
            secret_draconique: "Ignore la nature draconique et le statut impérial d'Elkyriel.",
            fonction: "Premier prince du sang et héritier actuel de la reine Ysoria.",
            physique: "Homme d’une trentaine d’années, grand et élancé, au port naturellement droit. Cheveux brun sombre coupés aux épaules, yeux bleu-gris et traits fins devenus plus sévères depuis sa captivité. Son maintien, sa diction et ses gestes trahissent son éducation princière même dans une tenue ordinaire.",
            caractere: "Instruit, fier sans être inconscient, entraîné au protocole et à l’équitation. Sa captivité l’a rendu méfiant. Il préfère la concertation aux décisions solitaires.",
            histoire: "Enlevé durant une mission diplomatique, il devait être assassiné dans une mise en scène destinée à faire accuser Kaelia et provoquer une guerre. Elkyriel le retrouva et le guérit entièrement. Identité de couverture — Darian : Méléandre a choisi de se faire passer pour un épéiste aventurier nommé Darian afin de voyager anonymement.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Les épreuves traversées ensemble ont consolidé une amitié et une fraternité de terrain profondes. Méléandre lui accorde une grande confiance personnelle, soutient la pertinence du titre de Seigneur Mercenaire et reconnaît pleinement son rôle dans la prévention de la guerre. Il sait qu’Elkyriel et Ysoria se sont embrassés et protège ce secret.",
            rapports_autres: "Rapport à Maëra : camaraderie de voyage devenue relation amoureuse établie. Rapport à Ysoria : cousine et reine de Varethis. Après son retour, Méléandre a reconnu son règne. Il est officiellement rétabli comme premier prince du sang et héritier actuel ; certaines décisions sensibles nécessitent encore leurs deux sceaux."
        },
        gautier_valcroix: {
            id: "perso-connetable-gautier-de-valcroix",
            nom: "Connétable Gautier de Valcroix",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["varethis_palais"], domicile_id: "varethis_palais" },
            espece_genre: "Humain, masculin.",
            domicile: "Karsenne.",
            domicile_complet: "Karsenne (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Connétable de Varethis et membre du conseil royal.",
            caractere: "Courageux, professionnel et préoccupé par la sécurité du royaume comme par la survie des soldats placés sous son autorité. Il ne se dérobe pas devant un interlocuteur puissant.",
            rapport_elkyriel: "Respect mutuel prudent, fondé sur un échange franc malgré leurs désaccords. Elkyriel reconnaît la légitimité de ses préoccupations militaires et le considère comme le conseiller qui lui a paru le plus sincère, sans prétendre connaître ses véritables intentions."
        },
        renaud_vaulnes: {
            id: "perso-renaud-de-vaulnes",
            nom: "Renaud de Vaulnes",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["varethis_palais"], domicile_id: "varethis_palais" },
            espece_genre: "Humain, masculin.",
            domicile: "Non établi ; il réside en Varethis.",
            domicile_complet: "Non établi ; il réside en Varethis.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Membre du conseil royal de Varethis.",
            rapport_elkyriel: "Relation officielle marquée par la défiance. Renaud insiste sur la conduite à tenir lorsque des forces d’Elkyriel entrent en Varethis hors d’une situation préalablement définie. Elkyriel juge cette insistance excessive et soupçonne une volonté de compliquer la négociation, sans disposer de preuve."
        },
        chanceliere_varethis: {
            id: "perso-chanceliere-de-varethis",
            nom: "Chancelière de Varethis",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["varethis_palais"], domicile_id: "varethis_palais" },
            espece_genre: "Humaine, féminin.",
            domicile: "Karsenne.",
            domicile_complet: "Karsenne (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Chancelière et membre du conseil royal de Varethis. Son nom personnel n’est pas établi.",
            rapport_elkyriel: "Relation hostile depuis qu’elle l’a qualifié d’« étranger » sans reconnaître son rang ni lui accorder les marques de respect dues à un seigneur officiellement reçu. Son refus initial de reconnaître l’affront a profondément dégradé leur relation et contribué au retrait d’Elkyriel des négociations."
        },
        maera: {
            id: "perso-maera",
            nom: "Maëra",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["varethis_palais"], domicile_id: "varethis_palais" },
            espece_genre: "Humaine, féminin.",
            domicile: "Karsenne (Palais royal de Karsenne ou environnement immédiat).",
            domicile_complet: "Karsenne (Palais royal de Karsenne ou environnement immédiat).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Éclaireuse et combattante expérimentée.",
            caractere: "Indépendante, pragmatique, directe et volontiers mordante. Elle exprime souvent son affection ou son inquiétude par des remarques sèches plutôt que par de grandes déclarations.",
            histoire: "Éclaireuse et combattante aguerrie.",
            rapport_elkyriel: "Amitié, confiance de terrain et camaraderie affirmées. Une période de tension liée à leurs désaccords pendant la crise du col s’est terminée par une réconciliation franche ; leur relation a retrouvé sa familiarité.",
            rapports_autres: "Rapport à Méléandre : camaraderie devenue relation amoureuse établie."
        },
        solenne_varin: {
            id: "perso-solenne-varin",
            nom: "Solenne Varin",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: false, lieux: ["varethis_parfumerie"], domicile_id: "varethis_parfumerie" },
            espece_genre: "Humaine, féminin, environ 50 ans.",
            domicile: "Maison et parfumerie de maître Leirykle, dans le quartier des artisans de Karsenne.",
            domicile_complet: "Maison et parfumerie de maître Leirykle, dans le quartier des artisans de Karsenne (Résidence principale permanente).",
            condition_anterieure: "Réduite en esclavage pour dettes, puis achetée et immédiatement affranchie par Leirykle.",
            secret_draconique: "Sait que Leirykle est Elkyriel, mais ignore sa nature de Dragon Noble.",
            fonction: "Herboriste et distillatrice en chef de la parfumerie. Ayant pris la direction quotidienne de l'établissement suite à la promotion de Mirelle Auvray en Traverse, elle supervise les cueillettes, les compositions florales, l'accueil courant de la clientèle aisée et la vente des pièces de cristal façonnées par Kordran.",
            rapport_elkyriel: "Reconnaissance, soulagement et confiance professionnelle envers celui qui lui a rendu sa liberté et permet à son savoir-faire de retrouver une valeur reconnue."
        },
        kordran_fergivre: {
            id: "perso-kordran-fergivre",
            nom: "Kordran Fergivre",
            tags: { espece: "nain", rangs: ["artisan"], harem: false, intime: false, secret: false, lieux: ["varethis_parfumerie"], domicile_id: "varethis_parfumerie" },
            espece_genre: "Nain, masculin.",
            domicile: "Maison et parfumerie de maître Leirykle, dans le quartier des artisans de Karsenne.",
            domicile_complet: "Maison et parfumerie de maître Leirykle, dans le quartier des artisans de Karsenne (Résidence principale permanente).",
            condition_anterieure: "Condamné puis réduit en esclavage après avoir refusé de participer à la fabrication de faux sceaux ; acheté et immédiatement affranchi par Leirykle.",
            secret_draconique: "Sait que Leirykle est Elkyriel, mais ignore sa nature de Dragon Noble.",
            fonction: "Maître verrier et artisan du cristal de la parfumerie. Il produit, souffle, taille et décore le cristal afin de créer des flacons de luxe et d’autres œuvres d'art pour la haute société de Varethis.",
            caractere: "Fier de son métier, attentif à la qualité des matières et hostile à l’usage criminel de son art.",
            rapport_elkyriel: "Reconnaissance et respect d’artisan envers celui qui l’a libéré et lui transmet un nouveau savoir-faire sans lui retirer la maîtrise de ses propres créations."
        },
        selyne_var: {
            id: "perso-selyne-var",
            nom: "Selyne Var",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["varethis_corbeaux"], domicile_id: "varethis_corbeaux" },
            espece_genre: "Humaine, féminin, environ 30 ans.",
            domicile: "Karsenne (Varethis).",
            domicile_complet: "Karsenne (Varethis, quartier des artisans, Résidence principale permanente).",
            condition_anterieure: "Intendante des convois et du matériel de la villa des Deux-Couronnes, recrutée sous la contrainte par le réseau d’Odran.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Maîtresse de la cellule des Corbeaux de Varethis depuis le quartier des artisans de Karsenne ; coordination de la sécurité discrète entourant la parfumerie de maître Leirykle et son Cercle de téléportation.",
            physique: "Grande et mince, visage étroit et fatigué, teint pâle et mains tachées d’encre. Ses très longs cheveux châtains sont généralement attachés bas dans son dos. Ses yeux sont gris. Son maintien précis et contrôlé se fissure lorsqu’elle perd la maîtrise d’une situation.",
            histoire: "Le réseau d’Odran avait enlevé sa sœur cadette Eliane puis menaçait de s’en prendre à elle afin de contraindre Selyne à préparer des ordres, répartir du matériel et transmettre des instructions. Capturée lors de la destruction de la villa, Selyne révéla finalement son identité et coopéra avec les autorités. Elkyriel a depuis retrouvé Eliane vivante, libre et employée au domaine de Clairval sous le nom d’Aline Varet. Après avoir retrouvé sa sœur libre à Clairval, Selyne a mis son remarquable sens de l'intendance et des écritures au service de Lysandra.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. La crainte initiale éprouvée envers celui qui l’avait libérée a laissé place à une confiance prudente et à une profonde reconnaissance après qu’il a tenu sa promesse de rechercher Eliane et lui a personnellement rapporté sa lettre.",
            rapports_autres: "Rapport à Eliane Var : sœur aînée profondément attachée à sa cadette. Leur séparation et la croyance qu’Eliane demeurait captive ont gouverné tous ses choix depuis sa libération."
        },
        eliane_var: {
            id: "perso-eliane-var-dite-aline-varet",
            nom: "Eliane Var, dite Aline Varet",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: false, secret: false, lieux: ["varethis_clairval"], domicile_id: "varethis_clairval" },
            espece_genre: "Humaine, féminin, environ 20 ans.",
            domicile: "Domaine de Clairval (Varethis).",
            domicile_complet: "Domaine de Clairval (Varethis, Résidence principale permanente).",
            condition_anterieure: "Enlevée afin de contraindre sa sœur Selyne à travailler pour le réseau d’Odran, elle fut ensuite abandonnée avec d’autres captifs à l’approche des forces de Varethis.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Employée libre, rémunérée et logée au sein de l’intendance des comptes de Clairval, où elle est estimée pour sa compétence.",
            histoire: "Identité d’emprunt : Aline Varet, nom employé afin de cacher son identité et de protéger Selyne. Croyant Selyne toujours prisonnière, elle dissimula son identité. Les responsables de Clairval lui proposèrent librement un emploi après avoir découvert ses compétences (lecture, écriture, calcul et tenue de comptes).",
            rapport_elkyriel: "Prudence initiale envers Leirykle, puis gratitude après qu’il lui a appris que Selyne était vivante et libre.",
            rapports_autres: "Rapport à Selyne : sœur cadette profondément attachée à son aînée. Elle a dissimulé son identité pendant des mois parce qu’elle croyait que la révéler mettrait Selyne en danger."
        },
        lieutenant_brenor: {
            id: "perso-lieutenant-brenor",
            nom: "Lieutenant Brenor",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["varethis_trois_bornes"], domicile_id: "varethis_trois_bornes" },
            espece_genre: "Humain, masculin.",
            domicile: "Fort de la Passe des Trois Bornes.",
            domicile_complet: "Fort de la Passe des Trois Bornes (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Lieutenant de la garnison du fort frontalier.",
            physique: "Vétéran aux tempes grisonnantes.",
            caractere: "Compétent, fiable, pragmatique et habitué aux réalités du commandement militaire.",
            rapport_elkyriel: "Respect professionnel et confiance de terrain. Pendant le commandement temporaire d’Elkyriel, il devint son principal relais et fut traité comme le capitaine de fait du fort en raison de sa compétence."
        },
        capitaine_caldrin: {
            id: "perso-capitaine-caldrin",
            nom: "Capitaine Caldrin",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["varethis_trois_bornes"], domicile_id: "varethis_trois_bornes" },
            espece_genre: "Humain, masculin.",
            domicile: "Fort de la Passe des Trois Bornes.",
            domicile_complet: "Fort de la Passe des Trois Bornes (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Capitaine de la garnison et commandant du fort de la Passe des Trois Bornes.",
            caractere: "Courageux, mais insuffisamment compétent pour exercer le commandement qu’il occupait. Il a accepté sa destitution sans se soustraire au service.",
            rapport_elkyriel: "Durant son commandement temporaire de la Passe, Elkyriel l’a privé de ses galons après plusieurs fautes de commandement. Caldrin a accepté la sanction et servi comme simple soldat jusqu’au départ d’Elkyriel, en commençant à regagner une partie du respect de ses camarades."
        },
        voyageur_mornefond: {
            id: "perso-voyageur-libere-de-mornefond",
            nom: "Voyageur libéré de Mornefond",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: false, secret: true, lieux: ["varethis_ailleurs"], domicile_id: "varethis_ailleurs" },
            espece_genre: "Humain, masculin.",
            domicile: "Varethis.",
            domicile_complet: "Varethis (sans domicile plus précis établi).",
            condition_anterieure: "Voyageur capturé puis détenu à Mornefond.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble et préserve ce secret.",
            fonction: "Voyageur indépendant.",
            histoire: "Intention : retourner dans son royaume et reprendre la vie qu'il menait avant sa capture.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        kharza_peau_de_neige: {
            id: "perso-kharza-peau-de-neige",
            nom: "Kharza Peau-de-Neige",
            tags: { espece: "orque", rangs: ["souverain"], harem: false, intime: false, secret: false, lieux: ["gorkadar_kadar_rauk"], domicile_id: "gorkadar_kadar_rauk" },
            espece_genre: "Orque, féminin, 35 ans.",
            domicile: "Palais du puy de stone à Kadar-Rauk, capitale du Royaume Orque de Gor-Kadar.",
            domicile_complet: "Palais du puy de stone à Kadar-Rauk, capitale du Royaume Orque de Gor-Kadar (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble. Bien que les captifs de Rivet-de-Givre en résidence surveillée aux Sources de Rauk affirment tous avoir été vaincus par un Dragon aux écailles gris anthracite mat, les Orques traitent officiellement ces propos comme des délires de vaincus justifiant leur défaite, même si la parfaite concordance de leurs récits commence à éveiller de discrets soupçons.",
            fonction: "Voix-Couronne de Gor-Kadar (Souveraine suprême du Royaume Orque).",
            physique: "Très haute (1m95), carrure imposante et majestueuse. Peau d'un vert clair très argenté, yeux bleu sombre profonds, cheveux d'un blanc pur descendant jusqu'au bas du dos, courtes défenses d'ivoire cerclées d'anneaux d'or.",
            histoire: "Équipement précieux : porte à la ceinture l'épée à deux mains en Fer Lunaire Veyra-Kadar (« L'Éclat du Serment »), forgée et offerte par Elkyriel.",
            rapport_elkyriel: "Alliance suprême, estime politique immense et fraternité de sang solennellement jurée devant le Cercle des Paroles. Elle a honoré son couronnement à Élyria. Elle et sa suite circulent librement dans la vallée de la Traverse et y sont tenues pour membres de la famille royale."
        },
        rhazka_cendre_claire: {
            id: "perso-rhazka-cendre-claire",
            nom: "Rhazka Cendre-Claire",
            tags: { espece: "orque", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["gorkadar_haut_bois", "ardelie_tour_blanche"], domicile_id: "gorkadar_haut_bois" },
            espece_genre: "Orque, féminin, 31 ans.",
            domicile: "Haut-Bois / Tour Blanche.",
            domicile_complet: "Haut-Bois (Gor-Kadar) / Tour Blanche (Immensité Grise).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Parole de guerre de Haut-Bois et Ambassadrice principale de Gor-Kadar auprès d'Elkyriel à la Tour Blanche.",
            physique: "Athlétique, peau vert sombre, yeux ambrés, chevelure noire tressée de laine blanche. Sa cicatrice au flanc est complètement guérie.",
            rapport_elkyriel: "Profonde gratitude, respect d'alliée et amitié de terrain."
        },
        vessa_orm: {
            id: "perso-vessa-orm",
            nom: "Vessa Orm",
            tags: { espece: "nain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["gorkadar_sources_rauk"], domicile_id: "gorkadar_sources_rauk" },
            espece_genre: "Naine, féminin, 71 ans.",
            domicile: "Sources de Rauk.",
            domicile_complet: "Sources de Rauk (Gor-Kadar, Résidence surveillée permanente).",
            condition_anterieure: "Ancienne intendante de Rivet-de-Givre et agente de Salomé d'Arqueval.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (témoin direct de sa forme draconique lors de la prise de Rivet-de-Givre).",
            fonction: "Otage diplomatique et comptable sous garde orque aux Sources de Rauk.",
            histoire: "Après avoir livré les registres secrets de la Maison des Sept Clefs à Elkyriel et témoigné contre Merek Voln devant le Cercle des Paroles, sa vie a été épargnée. Elle gère la comptabilité des réparations financières exigées de Dhor-Kez sous la surveillance des Orques."
        },
        captifs_rivet_givre: {
            id: "perso-captifs-de-rivet-de-givre-32-ouvriers-civils-et-42-gardes",
            nom: "Captifs de Rivet-de-Givre (32 ouvriers civils et 42 gardes)",
            tags: { espece: "humain", rangs: ["artisan", "officier"], harem: false, intime: false, secret: true, lieux: ["gorkadar_sources_rauk"], domicile_id: "gorkadar_sources_rauk" },
            espece_genre: "Nains et humains, masculins et féminins (74 personnes au total).",
            domicile: "Sources de Rauk.",
            domicile_complet: "Sources de Rauk (Gor-Kadar, Résidence surveillée permanente).",
            condition_anterieure: "Ouvriers civils et soldats de la garnison de Rivet-de-Givre pour les Ligues de Dhor-Kez.",
            secret_draconique: "Savent tous qu'Elkyriel est un Dragon Noble (ont vu le Dragon aux écailles anthracite mat les terrasser à Rivet-de-Givre ; leurs récits sont tenus pour des délires par les gardes orques).",
            fonction: "Ouvriers de réparation et main-d'œuvre sous surveillance.",
            histoire: "Maintenus en résidence surveillée et travaux de réparation aux Sources de Rauk par Gor-Kadar, servant de garantie diplomatique et financière face aux Ligues de Dhor-Kez."
        },
        isilvrya: {
            id: "perso-isilvrya",
            nom: "Isilvrya",
            tags: { espece: "dragon", rangs: ["autre"], harem: false, intime: false, secret: true, lieux: ["gorkadar_hautes_lames"], domicile_id: "gorkadar_hautes_lames" },
            espece_genre: "Dragonne Bestiale, féminin.",
            domicile: "Cimes sauvages des Hautes-Lames, au nord des Sources de Rauk (Gor-Kadar).",
            domicile_complet: "Cimes sauvages des Hautes-Lames, au nord des Sources de Rauk (Gor-Kadar).",
            secret_draconique: "Sait pertinemment qu'Elkyriel est un Dragon Noble (lui est soumise après un duel singulier au cirque du Pic Borgne).",
            fonction: "Prédatrice boréale, soumise et alliée impériale d'Elkyriel.",
            physique: "Forme draconique : prédatrice boréale athlétique, nerveuse et profilée, plus fine et agile que les mâles de son espèce, taillée pour la chasse dans les vents violents. Écailles denses d'un bleu glacier profond et uni, s'adoucissant en un subtil dégradé vers un bleu givré. Cornes droites et pointues, crête dorsale affûtée.",
            histoire: "Titre draconique : L'Aile d'Hiver. Nature du Souffle : Souffle de Givre Boréal (un torrent cryogénique liquide qui gèle instantanément la chair et fait éclater les roches sous la violence du froid). Statut : soumise et alliée impériale d'Elkyriel.",
            rapport_elkyriel: "Soumise à l'autorité du Dragon Noble Elkyriel et alliée impériale. Elle reconnaît sa suprématie de mâle dominant après son duel au cirque du Pic Borgne et respecte son domaine."
        },
        aelis_vaer: {
            id: "perso-aelis-vaer",
            nom: "Aélis Vaer",
            tags: { espece: "humain", rangs: ["souverain"], harem: false, intime: true, secret: false, lieux: ["astreane_lumerys"], domicile_id: "astreane_lumerys" },
            espece_genre: "Humaine, féminin.",
            domicile: "Lumérys (Astréane).",
            domicile_complet: "Lumérys (Astréane, Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Première Accordée, dirigeante civile et spirituelle du Concordat d’Astréane, vassale de la Couronne impériale.",
            rapport_elkyriel: "Vassale soumise et amante impériale après le traité tripartite d'Orsenn."
        },
        sevra_noll: {
            id: "perso-sevra-noll",
            nom: "Sévra Noll",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["astreane_lumerys"], domicile_id: "astreane_lumerys" },
            espece_genre: "Humaine, féminin.",
            domicile: "Lumérys (Astréane).",
            domicile_complet: "Lumérys (Astréane, Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Capitaine générale, à la tête de la milice des Veilleurs de Verre pour le maintien de l'ordre et la protection du peuple Sans-Étincelle.",
            rapport_elkyriel: "Ralliée et soumise à l'autorité impériale après la leçon des quais de Nacrelac."
        },
        ilysthera: {
            id: "perso-ilysthera",
            nom: "Ilysthéra",
            tags: { espece: "dragon", rangs: ["autre"], harem: false, intime: true, secret: true, lieux: ["astreane_lumerys"], domicile_id: "astreane_lumerys" },
            espece_genre: "Dragonne Noble, féminin.",
            domicile: "Observatoire sommital de Lumérys (Astréane).",
            domicile_complet: "Observatoire sommital de Lumérys (Astréane, Résidence principale permanente).",
            secret_draconique: "Connaît et partage sa véritable nature draconique.",
            fonction: "Gardienne céleste, alliée impériale et amante d'Elkyriel.",
            physique: "Forme draconique : dragonne serpentine et gracieuse, très fine et racée, aux lignes aérodynamiques taillées pour le vol en haute altitude. Écailles lisses d'un blanc nacré uniforme, éclat opalescent. Longues cornes d'albâtre effilées.",
            histoire: "Titre draconique : La Dame des Brumes Hautes. Nature du Souffle : Souffle d'Éclair (faisceau électrique pur et aveuglant). Statut : alliée impériale et amante d'Elkyriel.",
            rapport_elkyriel: "Alliée impériale et amante. Elle connaît et partage sa véritable nature draconique."
        },
        leonie_varc: {
            id: "perso-leonie-varc",
            nom: "Léonie Varc",
            tags: { espece: "nain", rangs: ["artisan"], harem: false, intime: false, secret: false, lieux: ["dhorkez_kez_bruma"], domicile_id: "dhorkez_kez_bruma" },
            espece_genre: "Naine, féminin.",
            domicile: "Kez-Bruma (Dhor-Kez).",
            domicile_complet: "Kez-Bruma (Dhor-Kez, Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Dirigeante de la commune des Ateliers Liés, gérant le pouvoir civil et les manufactures libres, sous tutelle impériale d'Elkyriel.",
            rapport_elkyriel: "Placée sous tutelle impériale après la reddition des fonderies."
        },
        dhoran_vesk: {
            id: "perso-dhoran-vesk",
            nom: "Dhoran Vesk",
            tags: { espece: "nain", rangs: ["autre"], harem: false, intime: false, secret: false, lieux: ["dhorkez_kez_bruma"], domicile_id: "dhorkez_kez_bruma" },
            espece_genre: "Nain, masculin.",
            domicile: "Mines de fond de Dhor-Kez.",
            domicile_complet: "Mines de fond de Dhor-Kez (Bagne minier perpétuel).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Forçat mineur de fond ; ancien Premier Syndic des Ligues de Dhor-Kez.",
            histoire: "Déchu de son titre et condamné aux travaux forcés à perpétuité comme mineur de fond dans ses anciennes exploitations suite à ses crimes et complots.",
            rapport_elkyriel: "Condamné."
        },
        kaldrielle: {
            id: "perso-kaldrielle",
            nom: "Kaldrielle",
            tags: { espece: "dragon", rangs: ["autre"], harem: false, intime: false, secret: true, lieux: ["dhorkez_kez_bruma"], domicile_id: "dhorkez_kez_bruma" },
            espece_genre: "Dragonne Bestiale, féminin.",
            domicile: "Carrières géothermiques au nord-est de Kez-Bruma (Dhor-Kez).",
            domicile_complet: "Carrières géothermiques au nord-est de Kez-Bruma (Dhor-Kez).",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble.",
            fonction: "Gardienne tellurique, pacifiée, soumise et alliée impériale d'Elkyriel.",
            physique: "Forme draconique : dragonne tellurique au corps puissant, musclé et félin. Écailles d'un noir d'obsidienne mat, veinures rouge-orange incandescent pulsant de chaleur.",
            histoire: "Titre draconique : La Mère des Brasiers. Nature du Souffle : Souffle de Magma (roche liquide brûlante à plus de 1 200°C mêlée à des gaz sulfuriques). Statut : pacifiée, soumise et alliée impériale d'Elkyriel.",
            rapport_elkyriel: "Pacifiée et soumise à l'autorité du Dragon Noble Elkyriel après son intervention au fortin de Haute-Rive."
        },
        maelis_orsenn: {
            id: "perso-maelis-d-orsenn",
            nom: "Reine Maélis d’Orsenn",
            tags: { espece: "humain", rangs: ["souverain"], harem: false, intime: true, secret: false, lieux: ["orsenn_capitale"], domicile_id: "orsenn_capitale" },
            espece_genre: "Humaine, féminin, 42 ans.",
            domicile: "Palais royal d'Orsenn.",
            domicile_complet: "Palais royal d'Orsenn (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Reine souveraine du Royaume d’Orsenn.",
            histoire: "Longtemps reléguée au rôle de façade par les Quatre Liches de la Chambre des Derniers Contrats, elle a recouvré la plénitude de son pouvoir civil après leur élimination par Elkyriel dans la Crypte du Premier Sceau.",
            rapport_elkyriel: "Alliée intime souveraine, amante passionnée et membre de l'Empire."
        },
        elkyriel: {
            id: "perso-elkyriel-personnage-joueur",
            nom: "Elkyriel (Personnage Joueur)",
            tags: { espece: "dragon", rangs: ["souverain"], harem: false, intime: false, secret: true, lieux: ["traverse_elyria"], domicile_id: "traverse_elyria" },
            espece_genre: "Dragon Noble, masculin.",
            domicile: "Palais impérial d’Élyria (avec séjours réguliers à la Forge de Rivecour et à la Forteresse-Monde).",
            domicile_complet: "Palais impérial d’Élyria (Résidence principale), Forge de Rivecour et Forteresse-Monde.",
            secret_draconique: "Est lui-même le Dragon Noble originel.",
            fonction: "Premier Empereur de l’Empire de l’Enclave des Cinq Trônes, souverain de Traverse, maître de la Forteresse-Monde et de la Forge.",
            histoire_draconique_titres: `
                <div class="rule-item"><p class="pseudo-li"><strong>Nom d'âme draconique :</strong> <strong>Elkyriel-Aethelvahr</strong>, dit <strong>« l'Adamantin »</strong>.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2"><em>Usage entre initiés (ceux qui savent qu'il est dragon) :</em> Utilisé avec respect et vénération par Vel'Shara, les Ogres et Kobolds de la Strate -3, ainsi que les proches initiés lors des rassemblements secrets.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2"><em>Usage dans l'intimité :</em> Simplement <strong>« Elkyriel »</strong> (utilisé par les femmes du harem libre, ses amantes et son foyer, sans protocole ni barrière).</p></div>
                <div class="rule-item"><p class="pseudo-li"><strong>Titres et statut selon le lieu et les connaissances locales :</strong></p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Dans l’Empire de l’Enclave des Cinq Trônes (Traverse, Astréane, Dhor-Kez, Orsenn) :</strong> <em>« Sa Majesté Impériale Elkyriel-Aethelvahr, Premier Empereur de l’Enclave des Cinq Trônes »</em> et Roi de Traverse. Connu et vénéré comme un souverain bienfaiteur ; les peuples, les comtes et les dirigeants vassaux <strong>ignorent</strong> sa nature draconique.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>À Gor-Kadar (Royaume Orque) :</strong> <em>« Elkyriel, Empereur de l’Enclave, Roi de Traverse et Frère de Sang de la Couronne »</em>. Allié suprême de la Voix-Couronne Kharza Peau-de-Neige, qui le tient pour un allié elfe d'exception et <strong>ignore</strong> sa forme de dragon.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>En Ardélie et à Varethis (Royaumes de l'Ouest et du Sud) :</strong> <em>« Seigneur Mercenaire Elkyriel »</em>. Les cours royales (Kaelia, Aldous, Ysoria) le reconnaissent comme un chef militaire indépendant d'élite, mais <strong>ignorent totalement</strong> l'existence de l’Empire, du Royaume de Traverse et sa condition de dragon.</p></div>
                <div class="rule-item"><p class="pseudo-li"><strong>Reconnaissance politique :</strong></p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- Empire de l’Enclave : autorité impériale suprême (Traverse au cœur de l'Empire ; Astréane, Dhor-Kez et Orsenn sous tutelle ou alliance impériale).</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- Gor-Kadar (Kharza Peau-de-Neige) : Frère de Sang et Allié Suprême de la Couronne Orque, allié de l’Empire.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- Ardélie (Aldous &amp; Kaelia) : titre de Seigneur Mercenaire et indépendance reconnus ; ignorance totale de l’Empire et de Traverse.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- Varethis (Ysoria) : titre de Seigneur Mercenaire reconnu ; ignorance totale de l’Empire et de Traverse.</p></div>
            `,
            physique: "Forme véritable : Dragon colossal aux épaisses écailles d’adamantite gris anthracite mat, presque noires, parsemées de quelques reflets dorés, doté de quatre pattes puissantes, de grandes ailes membraneuses et d’une longue queue terminée en fer de lance. Sa tête massive porte des cornes majestueuses et de larges mâchoires aux crocs acérés. Ses yeux dorés ont des pupilles verticales. Au repos, il émet un léger halo bleu saphir traversé de petites étincelles dorées ; lorsqu'il active sa magie ou combat, cette lueur bleue s'intensifie brusquement et projette d'intenses arcs de lumière dorée. Malgré sa masse, il possède une agilité redoutable sur terre, dans les airs et sous l’eau. Forme elfique habituelle : silhouette haute d’environ 1,90 m, athlétique et dense. Visage aux traits fins, yeux bleus intenses parsemés de reflets dorés et très longs cheveux blonds descendant jusqu’au bas du dos, partiellement tressés. Sous cette forme, il conserve les altérations de l’Etherium hors l’aspect des écailles, qu’il peut néanmoins rappeler. Forme humaine connue : homme d’âge mûr aux cheveux courts grisonnants et à la barbe de quelques jours. Ses traits sont marqués, sa silhouette robuste et sa posture volontairement légèrement voûtée. Ses yeux demeurent bleus, intenses et vigilants, parfois traversés d’un discret reflet doré.",
            histoire: "Identité de couverture — Urnidzen : Druide elfe à l’apparence et au comportement distincts. Facétieux, volontiers excentrique et mystérieux, il répond souvent aux questions par des doubles sens qui entretiennent l’incertitude sur ce qui est vrai ou faux. Identité de couverture — Leirykle : Maître parfumeur humain établi dans le quartier des artisans de Karsenne. Elkyriel exerce réellement cette activité et possède publiquement la parfumerie sous cette identité. Leirykle est une anagramme d’Elkyriel. Etherium : après exposition volontaire au Nœud de Calde-sur-Rive (mai 1249), il a dirigé le flux vers sa nature. Les écailles durcissent jusqu’à l’adamantite. Il peut fondre sa peau dans la pierre, refermer une plaie au repos, garder la force d’une grande taille sans changer de gabarit, former ou modifier un membre comme on lève un bras. Son souffle n’est plus un feu : il porte le même flux, consume ce qu’il touche, et nulle immunité connue n’y résiste. Il a nommé le liquide source Etherium. Particularités : immunité absolue au feu. Sa magie est innée ; il peut lancer ses sorts sans focalisateur. Sa métamorphose humanoïde est utilisable à volonté, sans fatigue notable.",
            caractere: "Ses décisions appartiennent au joueur. Il se montre généralement séduisant, généreux et protecteur envers ses proches, mais impitoyable envers ses ennemis.",
            rapport_elkyriel: `
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Faelia :</strong> Première compagne, amante, partenaire de combat et première autorité du harem libre comme de la Forge. Leur relation est connue et assumée.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Rose :</strong> Amante et foyer affectif. La bonté de Rose et de Lila a profondément influencé sa manière de protéger les personnes abandonnées.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Lysandra :</strong> Amante et partenaire de confiance pour le renseignement ; Voix des Ombres du royaume.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Nymira :</strong> Relation intime ; Maîtresse des Archives et des Sceaux.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Sariel :</strong> Relation intime.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Kaelia :</strong> Amante secrète. Leur relation repose sur une forte attirance et une confiance personnelle croissante, sans exclusivité ni engagement politique. Dans leur intimité, Kaelia apprécie particulièrement les plaisirs anaux et porte volontiers un bijou conçu pour cet usage. Elle ignore le Royaume de Traverse et la nature draconique.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Néria :</strong> Attirance réciproque et flirt assumé. Elkyriel l’a libérée de trafiquants et Néria a ensuite choisi de rester à la Forge pour l’instant. Leur relation a déjà comporté des gestes intimes et un baiser, sans engagement exclusif établi.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Ysoria :</strong> Relation romantique et sexuelle secrète, fondée sur une forte attirance, la franchise, le jeu et une confiance personnelle croissante. Aucun engagement politique ni exclusivité n’est établi ; tous deux distinguent leur relation personnelle des décisions de la Couronne. Elle ignore le Royaume de Traverse et la nature draconique.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Alise :</strong> Attirance réciproque et relation sexuelle ponctuelle, librement consentie et sans engagement. Alise connaît Elkyriel uniquement sous l’identité d’Urnidzen et ignore sa nature draconique.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Talyra :</strong> Compagne, amante et Duchesse, Cartographe Royale. En juillet 1249, leur dispute a provoqué son départ et l'attaque de la villa par leurs ennemis. À son retour, après avoir libéré les siens, Elkyriel a personnellement demandé aux autres membres de la maison d'apaiser leur rancœur en pardonnant, et a agi avec patience et tendresse pour que Talyra parvienne à se pardonner à elle-même. Leur lien en est ressorti renforcé. Elle ignore sa nature de Dragon Noble.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Sera :</strong> Compagne, amante et Comtesse de Grands-Vergers.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Pell :</strong> Compagnon d’armes et Comte de Calde-sur-Rive.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Myrène :</strong> Amante ; Elfe rencontrée à Élyria alors qu’elle portait le collier.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Siane :</strong> Compagne et amante ; Comtesse de Bois-Serein.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Lethielle :</strong> Amante ; compagne du harem libre.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Mireva :</strong> Relation intime, hors du harem libre.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Nathalysse :</strong> Compagne intime et amante. Dragonne Noble vivant à Élyria sous les traits de « Dame Thalysse de Mirande ».</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Ilysthéra :</strong> Alliée et amante. Dragonne Noble résidant à l’Observatoire sommital de Lumérys en Astréane.</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Rapport à Maélis d’Orsenn :</strong> Alliée intime et amante. Reine vivante d’Orsenn rétablie dans son autorité pleine.</p></div>
            `,
            secret_draconique_liste: `
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Savent :</strong> Faelia, Lysandra, Lysa, Nymira, Sariel, Liriel, Lirael, l'ensemble des captifs rescapés de la Crique Sanglante (Thorne, Alden, Roran, Doran, Seraphine, Vespera, Eirik, Borin, Thalira, Liora, Alyndra, Kaela, Fiora), Vel'Shara (ainsi que les Kobolds et Ogres de la Forteresse-Monde), les rescapés de Mornefond et des Deux-Couronnes, Vessa Orm et les 74 captifs de Rivet-de-Givre, ainsi que les dragons résidents alliés ou soumis (Nathalysse, Ilysthéra, Kaldrielle, Isilvrya).</p></div>
                <div class="rule-item"><p class="pseudo-li-level2">- <strong>Ignorent :</strong> Talyra, Sera, Siane, Naela, Myrène, Lethielle, Rhea, Ysel, Maura, Lise, Néria, Mireva, Kaelen, Pell, Dhorg, Enric, Virelle Senn, Olan Vespre, Salomé d'Arqueval, les rescapés des Trois-Saules, Kharza Peau-de-Neige (et les Orques de Gor-Kadar), Reine Kaelia, Roi Aldous, Reine Ysoria, Prince Méléandre, Maëra, Alise, Reine Maélis d’Orsenn, Première Accordée Aélis Vaer, Sévra Noll, Léonie Varc et Dhoran Vesk.</p></div>
            `
        },
        faelia: {
            id: "perso-faelia",
            nom: "Faelia",
            tags: { espece: "elfe", rangs: ["duc", "officier"], harem: true, intime: true, secret: true, lieux: ["traverse_elyria", "mer_jade_archipel"], domicile_id: "traverse_elyria" },
            espece_genre: "Elfe, féminin.",
            domicile: "Palais royal d’Élyria.",
            domicile_complet: "Palais royal d’Élyria (Résidence principale permanente).",
            condition_anterieure: "Ancienne esclave sexuelle du Patron.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (confidente et gardienne absolue du secret).",
            fonction: "Duchesse ; Maréchale de la Couronne. Cheffe suprême de la Cavalerie des Wyvernes (60 cavalières d'élite) et Première dame du harem libre d'Élyria (considérée comme première épouse).",
            physique: "Visage ovale aux traits elfiques affinés, peau hâlée et satinée parsemée de taches de rousseur sur le nez, iris dorés et longue chevelure rousse descendant jusqu’aux genoux, souvent portée en tresses complexes ornées de fleurs séchées. Silhouette svelte et athlétique aux formes généreuses. Son parfum évoque la forêt. Garde-robe : harnois complet pour le combat et les déplacements dangereux ; robes légères taillées dans des matières précieuses dans les lieux sûrs. Elle refuse les pantalons et les sous-vêtements et assume volontiers sa nudité dans l’intimité.",
            caractere: "Entreprenante, directe et franche. Elle assume sa beauté et sait employer l’attention qu’elle suscite.",
            histoire: "Combattante d'exception et arcaniste, Faelia laisse la gestion de l'infanterie à l'expérience de Goran. Son rôle est de frapper depuis les airs : lors des batailles, elle mène elle-même la charge des soixante cavalières sur wyvernes et sème la panique chez l'ennemi. L'élevage et l'entretien des cent quatre-vingts wyvernes dans l'archipel sont laissés à des dresseurs. Faelia ne s'y rend que pour dompter les bêtes les plus rétives et adouber les nouvelles cavalières. Première dame auprès d'Elkyriel, elle veille sur la maisonnée du palais. Grâce à sa magie naturelle, elle peut comprendre et parler d'instinct aux animaux.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Première compagne, amante, partenaire de combat et première dame du harem libre. Sa confiance envers lui est absolue et sa loyauté aveugle.",
            rapports_autres: "Rapport à Rose : amante, attirée par son calme et ses formes généreuses. Rapport à Lysa : forte attirance physique ; attitude possessive et protectrice depuis son sauvetage. Rapport à Lysandra : amante et complice de confiance. Rapport à Nymira : attirance réciproque et relation intime. Sexualité : bisexuelle et libertine. Elle ne désire qu'Elkyriel parmi les hommes et reste libre d'entretenir des relations avec des femmes."
        },
        talyra: {
            id: "perso-talyra",
            nom: "Talyra",
            tags: { espece: "elfe", rangs: ["duc"], harem: true, intime: true, secret: false, lieux: ["traverse_elyria"], domicile_id: "traverse_elyria" },
            espece_genre: "Elfe, féminin.",
            domicile: "Palais royal d’Élyria.",
            domicile_complet: "Palais royal d’Élyria (Résidence principale permanente).",
            condition_anterieure: "Cartographe indépendante traquée par les Sept Clefs.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Duchesse ; Cartographe Royale.",
            physique: "Éclat d’une jeune adulte elfe. Silhouette harmonieuse, svelte aux courbes généreuses. Peau bronze doré parsemée de taches de rousseur lumineuses. Iris émeraude. Très longs cheveux blond polaire descendant jusqu’aux genoux, portés en tresses complexes ornées de fleurs séchées au parfum de forêt chaude.",
            histoire: "Cartographe de terrain et archère d'élite. Talyra a révélé une compétence géographique et topographique unique lors de ses expéditions dans les cols secrets et les failles de l'Enclave. Dans un empire où le contrôle des corridors montagneux, des conduites antiques d'Etherium et des voies d'accès est une question de survie, sa science est une arme stratégique capitale. Elle dirige la Chancellerie des cartes et le corps royal des arpenteurs et géomètres de la Couronne, fixant le cadastre des dix cités et planifiant le tracé des voies pavées impériales. Totalement réconciliée avec le foyer d'Elkyriel après les doutes de juillet 1249, elle assume son rang ducal avec dignité, déléguant les arpentages de routine à ses élèves pour se consacrer aux relevés secrets de l'Empire.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Compagne du harem libre et amante. Sexualité : relation intime avec Elkyriel, y compris des moments partagés avec Sera ; elle accepte les autres amantes du cercle.",
            rapports_autres: "Rapport à Sera : camarade de route, amante dans le même cercle. Rapport à Pell : camarade de route et de maison."
        },
        eryx: {
            id: "perso-eryx",
            nom: "Eryx",
            tags: { espece: "humain", rangs: ["duc", "officier"], harem: false, intime: false, secret: false, lieux: ["traverse_elyria"], domicile_id: "traverse_elyria" },
            espece_genre: "Humain, masculin.",
            domicile: "Palais royal d’Élyria.",
            domicile_complet: "Palais royal d’Élyria (Résidence principale permanente).",
            condition_anterieure: "Maître de logistique et agent d'élite des Corbeaux de Lysandra.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Grand Intendant du Royaume et Grand Sénéchal d’Élyria. Premier magistrat de la capitale et intendant des affaires civiles de la Couronne.",
            physique: "Homme âgé et distingué. Ses yeux ont retrouvé la vue grâce à la magie de restauration d’Elkyriel. Présence sobre et discrète.",
            caractere: "Distingué, discret, méthodique et incorruptible.",
            histoire: "Miraculeusement guéri de sa cécité par Elkyriel après de rudes épreuves en Ardélie, Eryx en a tiré un calme et une distinction inaltérables. Rompu aux rouages secrets de l'État, il gouverne la cité marchande d'Élyria avec une rigueur exemplaire. Il préside le collège des magistrats, fait veiller sur la paix des rues par le prévôt Olan Vespre, promulgue les édits avec Nymira et règle les dépenses du royaume avec Mirelle Auvray. Son intégrité et son refus des privilèges lui valent le respect des corporations et des humbles. Il a confié la tenue de la Forge de Rivecour à Mila pour se vouer tout entier à la capitale.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Dévotion absolue.",
            rapports_autres: "Rapport à Lysandra : collaborateur historique de confiance mutuelle, sans lien sentimental."
        },
        nymira: {
            id: "perso-nymira",
            nom: "Nymira",
            tags: { espece: "elfe", rangs: ["duc", "officier"], harem: true, intime: true, secret: true, lieux: ["traverse_elyria"], domicile_id: "traverse_elyria" },
            espece_genre: "Elfe, féminin, 26 ans.",
            domicile: "Palais royal d’Élyria.",
            domicile_complet: "Palais royal d’Élyria (Résidence principale permanente).",
            condition_anterieure: "Scribe, captive des Pirates des Brumes, libérée de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapée de la Crique Sanglante).",
            fonction: "Maîtresse des Archives et des Sceaux de la Couronne impériale. Siège au Conseil des Sceaux avec Eryx et Mirelle Auvray.",
            physique: "Très longs cheveux noirs et beauté froide.",
            caractere: "Méticuleuse, réservée et précise.",
            histoire: "Talents : Savoir académique +1 ; Perception +1.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Relation intime ; compagne du harem libre.",
            rapports_autres: "Rapport à Faelia : attirance réciproque et relation intime. Rapport à Sariel : relation libertine, discrète et charnelle, sans exclusivité ni jalousie. Toutes deux restent libres. Rapport à Vel’Shara : respect intellectuel mutuel et collaboration autour des textes anciens, des cartes et des traductions."
        },
        mirelle_auvray: {
            id: "perso-mirelle-auvray-2",
            nom: "Mirelle Auvray",
            tags: { espece: "humain", rangs: ["duc", "officier"], harem: false, intime: false, secret: false, lieux: ["traverse_elyria", "varethis_parfumerie"], domicile_id: "traverse_elyria" },
            espece_genre: "Humaine, féminin, 33 ans.",
            domicile: "Palais royal d’Élyria ; visites périodiques à Karsenne.",
            domicile_complet: "Palais royal d’Élyria (Résidence principale permanente) ; visites périodiques à Karsenne.",
            condition_anterieure: "Employée de commerce sachant lire, écrire, compter et tenir des registres ; réduite en esclavage pour dettes à Karsenne, puis achetée et immédiatement affranchie par Leirykle.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Trésorière Générale du Royaume et membre du Conseil des Sceaux.",
            caractere: "Méthodique, professionnelle, incorruptible et ferme.",
            histoire: "Victime dans son passé de l'usure et des artifices de créances trompeurs qui l'avaient privée de sa liberté, Mirelle a une haine viscérale de la fraude et du gaspillage. Lors de l'installation de la parfumerie de Karsenne, sa rigueur comptable infaillible a impressionné Elkyriel. À l'été 1249, chargée d'éplucher et d'inspecter les livres de la Maison des Sept Clefs, elle a traqué le moindre vol avec une efficacité redoutable. Élevée au rang de Trésorière Générale de Traverse, elle ne calcule pas chaque centime en personne : elle règne sur la Chambre des Comptes d'Élyria, contrôlant les impôts des Comtés, la solde des armées et les dépenses du Trésor impérial. Elle a confié la boutique de Karsenne à Solenne Varin pour se consacrer pleinement au Trésor impérial.",
            rapport_elkyriel: "Profonde reconnaissance et loyauté absolue."
        },
        goran: {
            id: "perso-goran",
            nom: "Goran",
            tags: { espece: "humain", rangs: ["duc", "officier"], harem: false, intime: false, secret: false, lieux: ["traverse_elyria"], domicile_id: "traverse_elyria" },
            espece_genre: "Humain, masculin.",
            domicile: "Palais royal d’Élyria / Grand Quartier Général de la Garde.",
            domicile_complet: "Palais royal d’Élyria / Grand Quartier Général de la Garde (Résidence principale permanente).",
            condition_anterieure: "Capitaine mercenaire et vétéran d'infanterie.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Duc ; Connétable des Marches. Organisateur en chef et commandant de l'armée de terre (Garde de la Traverse, 20 000 soldats), commandant de la Lance de Huit et de l'Escouade d'intervention.",
            physique: "Visage taillé à la serpe, silhouette imposante, regard perçant et corps marqué de multiples cicatrices de guerre.",
            histoire: "Vétéran aguerri, Goran a forgé l'armée impériale. Il a réussi l'exploit de faire combattre côte à côte des humains, des nains, des elfes, des orques et des ogres sous la même bannière du marteau et de l'enclume, leur imposant une discipline de fer et en les dotant d'un équipement de grande qualité. Entièrement absorbé par le commandement de ses vingt mille soldats et la garde des frontières, il a laissé ses anciens mercenaires d'Ardélie à un lieutenant aux Roches-Noires, et la garde de Karsenne aux hommes de Selyne Var. Homme de terrain rustique, il vit au milieu de ses troupes et méprise les fards de la cour.",
            rapport_elkyriel: "Fraternité d'armes indéfectible et loyauté absolue envers Elkyriel et Faelia."
        },
        myrene: {
            id: "perso-myrene",
            nom: "Myrène",
            tags: { espece: "elfe", rangs: ["autre"], harem: true, intime: true, secret: false, lieux: ["traverse_elyria"], domicile_id: "traverse_elyria" },
            espece_genre: "Elfe, féminin.",
            domicile: "Palais royal d’Élyria.",
            domicile_complet: "Palais royal d’Élyria (Résidence principale permanente).",
            condition_anterieure: "Serveuse collierée d’une auberge de passage à Élyria.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Compagne du harem libre d'Élyria.",
            physique: "Éclat d’une jeune adulte elfe. Peau hâlé satiné, taches de rousseur. Iris d’ambre. Très longs cheveux roux cuivré jusqu’aux genoux, tressés de fleurs séchées.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Amante et compagne du harem libre, libérée par lui.",
        },
        lethielle: {
            id: "perso-lethielle",
            nom: "Lethielle",
            tags: { espece: "elfe", rangs: ["autre"], harem: true, intime: true, secret: false, lieux: ["traverse_elyria"], domicile_id: "traverse_elyria" },
            espece_genre: "Elfe, féminin.",
            domicile: "Palais royal d’Élyria.",
            domicile_complet: "Palais royal d’Élyria (Résidence principale permanente).",
            condition_anterieure: "Esclave affranchie.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Compagne du harem libre d'Élyria.",
            physique: "Éclat d’une jeune adulte elfe. Peau bronze doré, taches de rousseur lumineuses. Iris d’or. Très longs cheveux vert canopée jusqu’aux genoux.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Amante et compagne du harem libre.",
            rapports_autres: "Rapport à Mireva : copine et complice."
        },
        nathalysse: {
            id: "perso-nathalysse",
            nom: "Nathalysse (Dame Thalysse de Mirande)",
            tags: { espece: "dragon", rangs: ["noble", "artisan"], harem: false, intime: true, secret: true, lieux: ["traverse_elyria"], domicile_id: "traverse_elyria" },
            espece_genre: "Dragonne Noble, féminin.",
            domicile: "Élyria.",
            domicile_complet: "Élyria (Résidence principale permanente).",
            secret_draconique: "Partage et connaît la véritable nature draconique d'Elkyriel.",
            fonction: "Curatrice des manuscrits rares, antiquaire impériale et archiviste de reliques.",
            physique: "Forme draconique : silhouette féminine longue, souple et élancée, d'une grande finesse aristocratique et d'une grâce aquatique et aérienne parfaite. Écailles lisses d'un violet améthyste profond et uniforme, avec un dégradé soyeux légèrement plus sombre et de très fines marbrures noires qui parcourent la surface. Cornes fines, torsadées et recourbées vers l'arrière.",
            histoire: "Titre draconique : La Dame aux Mille Parchemins. Identité mortelle d’emprunt : « Dame Thalysse de Mirande ». Nature du Souffle : Souffle Entropique (une onde de brume violacée accélérant l'érosion et dégradant instantanément la matière en poussière).",
            rapport_elkyriel: "Compagne intime, amante et alliée impériale."
        },
        olan_vespre: {
            id: "perso-olan-vespre",
            nom: "Olan Vespre",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["traverse_elyria_autorites"], domicile_id: "traverse_elyria_autorites" },
            espece_genre: "Humain, masculin.",
            domicile: "Élyria.",
            domicile_complet: "Élyria (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Prévôt d’Élyria, chargé de la justice ordinaire, de la surveillance des rues et de la répression des méfaits sous la tutelle du Grand Sénéchal Eryx. Ses dettes ont été effacées par la Couronne.",
            rapport_elkyriel: "Soumis et obéissant."
        },
        salome_d_arqueval: {
            id: "perso-salome-d-arqueval",
            nom: "Salomé d’Arqueval",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: false, lieux: ["traverse_elyria_autorites"], domicile_id: "traverse_elyria_autorites" },
            espece_genre: "Humaine, féminin.",
            domicile: "Maison des Sept Clefs, Élyria.",
            domicile_complet: "Maison des Sept Clefs, Élyria (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Administratrice commerciale de la Maison des Sept Clefs, placée sous tutelle impériale directe.",
            rapport_elkyriel: "Soumise à l'autorité royale."
        },
        mireva: {
            id: "perso-mireva",
            nom: "Mireva",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: true, secret: false, lieux: ["traverse_quais_elyria"], domicile_id: "traverse_quais_elyria" },
            espece_genre: "Humaine, féminin.",
            domicile: "Quais d’Élyria.",
            domicile_complet: "Quais d’Élyria (Résidence principale permanente).",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Batelière sur l'Avar.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Relation intime, hors du harem libre.",
            rapports_autres: "Copine et complice de Lethielle."
        },
        pell: {
            id: "perso-pell-calde",
            nom: "Pell",
            tags: { espece: "nain", rangs: ["comte"], harem: false, intime: false, secret: false, lieux: ["traverse_calde", "traverse_elyria"], domicile_id: "traverse_calde" },
            espece_genre: "Nain, masculin.",
            domicile: "Calde-sur-Rive ; présence régulière au Palais d’Élyria.",
            domicile_complet: "Calde-sur-Rive (Résidence principale permanente) ; présence régulière au Palais d’Élyria.",
            condition_anterieure: "Porteur aux quais de Calde, combattant au marteau.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Comte de Calde-sur-Rive.",
            physique: "Nain compact et massif, ossature dense, barbe noire et argent baguée de métal, mains de débardeur.",
            histoire: "Pell a combattu aux côtés d'Elkyriel dans la cuve du Nœud de Calde en mai 1249 : il a mesuré le danger mortel des altérations de l'Etherium et compris l'importance vitale des lieux. Nain d'instinct minéral, il sent la roche vivre et sait repérer une vanne prête à céder. Avant d'être Comte, il a déchargé les péniches du Lac Mirant pendant quinze ans : les mariniers, débardeurs et pêcheurs le considèrent comme l'un des leurs. Avec sa garnison, il garde fermement les accès secrets du Nœud souterrain, laissant les secrets des flux et de la vapeur aux maîtres ingénieurs nains et arcanistes royaux, et la conduite des eaux à la Capitainerie du Lac Mirant.",
            rapport_elkyriel: "Compagnon d’armes indéfectible et vassal direct.",
            rapports_autres: "Camarade de route et de maison de Talyra et Sera."
        },
        dhorg: {
            id: "perso-dhorg-clair-verger",
            nom: "Dhorg",
            tags: { espece: "orque", rangs: ["comte"], harem: false, intime: false, secret: false, lieux: ["traverse_clair_verger", "traverse_elyria"], domicile_id: "traverse_clair_verger" },
            espece_genre: "Orque, masculin.",
            domicile: "Clair-Verger ; présence régulière au Palais d’Élyria.",
            domicile_complet: "Clair-Verger (Résidence principale permanente) ; présence régulière au Palais d’Élyria.",
            condition_anterieure: "Esclave de force brute des quais d'Élyria, difforme.",
            secret_draconique: "Ignore sa nature de Dragon Noble. Il lui a demandé le silence sur ce qu’il verrait de lui.",
            fonction: "Comte de Clair-Verger.",
            physique: "Orque titanesque à la peau vert-mousse, quatre bras fonctionnels et musculature herculéenne.",
            histoire: "Guéri par Elkyriel qui a transformé sa mutation en quatre bras d'une puissance colossale, Dhorg a passé des années dans les cales et les écluses de l'Avar. Il connaît chaque courant, chaque digue et chaque ruse des bateliers. Clair-Verger étant une métropole d'écluses et de ponts marchands, Dhorg est un héros pour les milliers de débardeurs et de haleurs de la cité. De plus, son honneur orque répugne au mensonge : sa présence terrorise les trafiquants et les fraudeurs. Il délègue la rédaction des baux et les écritures fiscales à un Bailli civil royal, concentrant son énergie sur la sécurité des digues et le commandement de la garnison fluviale.",
            rapport_elkyriel: "Dévotion totale et fidélité de vassal.",
            rapports_autres: "Rapport à Enric : camarade d’enclos, de chambre puis de service."
        },
        sera: {
            id: "perso-sera-grands-vergers",
            nom: "Sera",
            tags: { espece: "humain", rangs: ["comte"], harem: true, intime: true, secret: false, lieux: ["traverse_grands_vergers", "traverse_elyria"], domicile_id: "traverse_grands_vergers" },
            espece_genre: "Humaine, féminin.",
            domicile: "Grands-Vergers ; présence régulière au Palais d’Élyria.",
            domicile_complet: "Grands-Vergers (Résidence principale permanente) ; présence régulière au Palais d’Élyria.",
            condition_anterieure: "Éclaireuse et archère des étendues sauvages.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Comtesse de Grands-Vergers.",
            physique: "Silhouette sèche et endurante, peau tannée, yeux gris-vert et arcade sourcilière cicatrisée. Mains d'archère.",
            histoire: "Grands-Vergers est la ville-pont maîtresse contrôlant le grand viaduc de l'Avar et abritant les immenses silos à grains de l'Empire. En tant qu'éclaireuse d'élite habituée à la surveillance des voies et aux dures privations, Sera possède l'œil aiguisé d'une sentinelle : rien ne franchit le fleuve sans son accord. Hissant la sécurité au premier rang, elle veille jalousement sur les réserves céréalières contre la pourriture, le pillage et la spéculation marchande. Elle délègue le pesage des cargaisons et la douane de pont à un Bureau des Douanes rattaché à la Trésorerie de Mirelle Auvray, commandant personnellement la garde des remparts et des archers.",
            rapport_elkyriel: "Compagne du harem libre, amante et vassale. Sexualité : relation intime avec Elkyriel, y compris des moments partagés avec Talyra ; elle accepte les autres amantes du cercle.",
            rapports_autres: "Camarade de route de Talyra et Pell."
        },
        enric: {
            id: "perso-enric-asten",
            nom: "Enric",
            tags: { espece: "humain", rangs: ["comte"], harem: false, intime: false, secret: false, lieux: ["traverse_asten", "traverse_elyria"], domicile_id: "traverse_asten" },
            espece_genre: "Humain, masculin.",
            domicile: "Asten ; présence régulière au Palais d’Élyria.",
            domicile_complet: "Asten (Résidence principale permanente) ; présence régulière au Palais d’Élyria.",
            condition_anterieure: "Débardeur d'Élyria affranchi.",
            secret_draconique: "Ignore sa nature de Dragon Noble. Il lui a demandé le silence sur ce qu’il verrait de lui.",
            fonction: "Comte d’Asten.",
            physique: "Homme de forte stature au torse minéral indestructible.",
            histoire: "Bâtie sur des fondations rocheuses complexes, Asten abrite dans ses catacombes nord une dangereuse colonie d'araignées géantes issues des failles. Grâce à sa mutation d'Etherium sublimée par Elkyriel, le torse et les flancs d'Enric sont recouverts d'une armure de roche lisse et continue, le rendant insensible aux crocs et aux venins des monstres. Il descend lui-même consolider les voûtes et sécuriser les sous-sols avec ses maçons. Son calme de roc et son honnêteté ouvrière rassurent le peuple. Il délègue l'arboriculture des Cités-Jardins à une Maîtrise horticole et l'administration civile à un Sénéchal de cité.",
            rapport_elkyriel: "Vassal direct d'une loyauté inaltérable.",
            rapports_autres: "Rapport à Dhorg : camarade d’enclos, de chambre puis de service."
        },
        maura: {
            id: "perso-maura-haute-rive",
            nom: "Maura",
            tags: { espece: "humain", rangs: ["comte"], harem: false, intime: false, secret: false, lieux: ["traverse_haute_rive", "traverse_elyria"], domicile_id: "traverse_haute_rive" },
            espece_genre: "Humaine, féminin, 32 ans.",
            domicile: "Haute-Rive ; présence régulière au Palais d’Élyria.",
            domicile_complet: "Haute-Rive (Résidence principale permanente) ; présence régulière au Palais d’Élyria.",
            condition_anterieure: "Servante de maison pendant six ans à Élyria.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Comtesse de Haute-Rive.",
            physique: "Traits posés, cheveux bruns relevés, mise noble et austère.",
            histoire: "Haute-Rive verrouille le Défilé des Cuivres face aux puissantes et corruptrices Ligues naines de Dhor-Kez. Confier cette forteresse à un général vénal risquait la trahison. Durant ses années de domesticité, Maura a acquis un sens rigoureux de l'intendance logistique et une haine farouche de l'esclavage : elle est totalement incorruptible devant l'or des syndics marchands. Son autorité calme et sa poigne d'administratrice contrôlent les approvisionnements et la loyauté de la place. La défense tactique des remparts et le maniement des troupes sont délégués à un Capitaine de garnison d'élite nommé par Goran, tandis que les sapeurs nains affranchis entretiennent les dix golems et la foreuse.",
            rapport_elkyriel: "Dévotion et fidélité de vassale.",
            rapports_autres: "Aînée et camarade de chambre de Lise depuis la maison achetée."
        },
        lise: {
            id: "perso-lise-haute-rive",
            nom: "Lise",
            tags: { espece: "humain", rangs: ["baron"], harem: false, intime: false, secret: false, lieux: ["traverse_haute_rive", "traverse_elyria"], domicile_id: "traverse_haute_rive" },
            espece_genre: "Humaine, féminin, 20 ans.",
            domicile: "Haute-Rive ; présence régulière au Palais d’Élyria.",
            domicile_complet: "Haute-Rive (Résidence principale permanente) ; présence régulière au Palais d’Élyria.",
            condition_anterieure: "Jeune servante collierée puis tisseuse à l'atelier d'Élyria.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Baronne, vassale de la Comtesse Maura à Haute-Rive.",
            physique: "Jeune femme fine aux cheveux blonds sombres et au regard vif.",
            histoire: "Empathique, attentive et dynamique, Lise seconde Maura en se consacrant à l'intégration des mineurs et ouvriers affranchis du défilé, aux ateliers civils et aux secours hospitaliers de la cité-frontière.",
            rapport_elkyriel: "Reconnaissance et loyauté.",
            rapports_autres: "Cadette et camarade de chambre de Maura depuis la maison achetée."
        },
        siane: {
            id: "perso-siane-bois-serein",
            nom: "Siane",
            tags: { espece: "elfe", rangs: ["comte"], harem: true, intime: true, secret: false, lieux: ["traverse_bois_serein", "traverse_elyria"], domicile_id: "traverse_bois_serein" },
            espece_genre: "Elfe, féminin.",
            domicile: "Bois-Serein ; présence régulière au Palais d’Élyria.",
            domicile_complet: "Bois-Serein (Résidence principale permanente) ; présence régulière au Palais d’Élyria.",
            condition_anterieure: "Esclave défigurée des bas-fonds d’Élyria.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Comtesse de Bois-Serein.",
            physique: "Beauté elfique éclatante, peau de porcelaine, longs cheveux violets jusqu'aux genoux tressés de fleurs séchées, yeux violets profonds.",
            histoire: "Ayant vu sa beauté elfique magnifiée au-delà du réel par la guérison d'Elkyriel, Siane a révélé un talent prodigieux pour le tissage d'art, la mécanique des métiers et l'exploitation des fibres rares. Elle a fait de Bois-Serein la capitale textile et artisanale de l'Empire (production des soies impériales et des toiles filtrantes). Son aura inspire le respect absolu des corporations. Elle délègue le commandement militaire de la garnison et des gardes forestiers à un Prévôt d'armes nommé par Goran, et la fiscalité à la Trésorerie impériale.",
            rapport_elkyriel: "Compagne du harem libre, amante et vassale. Sexualité : relation intime avec Elkyriel ; elle accepte les autres amantes du cercle.",
            rapports_autres: "Rapport à Naela : a demandé à dormir avec elle dès son arrivée à la maison ; elles partagent la chambre."
        },
        naela: {
            id: "perso-naela-bois-serein",
            nom: "Naela",
            tags: { espece: "elfe", rangs: ["baron"], harem: false, intime: false, secret: false, lieux: ["traverse_bois_serein", "traverse_elyria"], domicile_id: "traverse_bois_serein" },
            espece_genre: "Elfe, féminin.",
            domicile: "Bois-Serein ; présence régulière au Palais d’Élyria.",
            domicile_complet: "Bois-Serein (Résidence principale permanente) ; présence régulière au Palais d’Élyria.",
            condition_anterieure: "Esclave affranchie.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Baronne, vassale de la Comtesse Siane à Bois-Serein.",
            physique: "Longs cheveux rose pétale, yeux d'ambre et peau fine.",
            histoire: "Inséparable compagne de Siane, Naela s'est consacrée à la sylviculture raisonnée ceinturant la cité et dirige le réseau d'accueil et de réhabilitation des femmes affranchies de l'esclavage.",
            rapport_elkyriel: "Dévotion et loyauté.",
            rapports_autres: "Partage la chambre avec Siane."
        },
        ysel: {
            id: "perso-ysel-rive-noire",
            nom: "Ysel",
            tags: { espece: "humain", rangs: ["comte"], harem: false, intime: false, secret: false, lieux: ["traverse_rive_noire", "traverse_elyria"], domicile_id: "traverse_rive_noire" },
            espece_genre: "Humaine, féminin.",
            domicile: "Rive-Noire ; présence régulière au Palais d’Élyria.",
            domicile_complet: "Rive-Noire (Résidence principale permanente) ; présence régulière au Palais d’Élyria.",
            condition_anterieure: "Esclave affranchie de la maison Havel.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Comtesse de Rive-Noire.",
            physique: "Rousse, peau claire, yeux noisette, mise soignée.",
            histoire: "Échappée de la captivité, Ysel a développé une intuition humaine remarquable pour l'écoute des humbles. Elle a fondé à Rive-Noire les Tribunaux populaires d'équité, où ouvriers et mariniers sont protégés des abus des riches marchands. Elle conduit l'assistance civile et la concorde municipale. La défense des écluses fluviales est confiée à un Capitaine de garnison rattaché à Traverse.",
            rapport_elkyriel: "Vassale loyale et dévouée.",
            rapports_autres: "Partage le lit et la chambre avec Rhea depuis leur arrivée à la maison."
        },
        rhea: {
            id: "perso-rhea-rive-noire",
            nom: "Rhea",
            tags: { espece: "humain", rangs: ["baron", "officier"], harem: false, intime: false, secret: false, lieux: ["traverse_rive_noire", "traverse_elyria"], domicile_id: "traverse_rive_noire" },
            espece_genre: "Humaine, féminin.",
            domicile: "Rive-Noire ; présence régulière au Palais d’Élyria.",
            domicile_complet: "Rive-Noire (Résidence principale permanente) ; présence régulière au Palais d’Élyria.",
            condition_anterieure: "Esclave affranchie de la maison Havel.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Baronne, vassale de la Comtesse Ysel à Rive-Noire.",
            physique: "Brune aux épaules solides et au regard franc.",
            histoire: "Dotée d'un courage physique et d'une combativité naturelle (s'étant illustrée lors de l'attaque de Jorund Pellain), Rhea a été formée par les officiers de la Forge. Elle est la Prévôte en chef de la milice urbaine de Rive-Noire, réprimant d'une main de fer la pègre, les receleurs et les trafiquants sur les quais noirs.",
            rapport_elkyriel: "Fidélité absolue.",
            rapports_autres: "Partage le lit et la chambre avec Ysel depuis leur arrivée à la maison."
        },
        virelle_senn: {
            id: "perso-virelle-senn",
            nom: "Virelle Senn",
            tags: { espece: "humain", rangs: ["comte", "artisan"], harem: false, intime: false, secret: false, lieux: ["traverse_puits_veyr", "traverse_elyria"], domicile_id: "traverse_puits_veyr" },
            espece_genre: "Humaine, féminin.",
            domicile: "Puits de Veyr ; présence régulière au Palais d’Élyria.",
            domicile_complet: "Puits de Veyr (Résidence principale permanente) ; présence régulière au Palais d’Élyria.",
            condition_anterieure: "Épouse légitime de l'armateur négrier Jorund Pellain.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Comtesse du Puits de Veyr et Grande Armatrice de la flotte confisquée.",
            physique: "Femme d’âge mûr vive et élégante, mise patricienne raffinée.",
            histoire: "Seule issue de la haute bourgeoisie patricienne parmi les comtes, Virelle apporte à la Couronne la maîtrise indispensable des codes aristocratiques, des contrats maritimes et du grand négoce. C'était elle qui, dans l'ombre de son époux déchu, estimait la valeur des navires et les contrats sur les cargaisons. [...] Elle gère la flotte et la cité-puits avec brio, confiant les manœuvres à un Conseil de capitaines d'honneur et l'entretien des grands treuils et monte-charges à un Collège de maîtres ingénieurs.",
            rapport_elkyriel: "Vassale directe, gratitude politique immense."
        },
        vel_shara: {
            id: "perso-vel-shara",
            nom: "Vel’Shara",
            tags: { espece: "ogre", rangs: ["comte", "artisan"], harem: false, intime: false, secret: true, lieux: ["traverse_10e_cite", "ardelie_forteresse_geo", "mer_jade_archipel"], domicile_id: "traverse_10e_cite" },
            espece_genre: "Ogre-Mage, féminin.",
            domicile: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            domicile_complet: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            condition_anterieure: "Alchimiste et gardienne des savoirs des Précurseurs.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (vénération religieuse et complice de premier rang).",
            fonction: "Comtesse régnante de la Forteresse-Monde (10e cité de Traverse). Guide spirituelle des Ogres et des Kobolds, maîtresse alchimiste suprême de la Couronne impériale et Directrice technique et alchimique de la Garde des Veines.",
            physique: "Colosse athlétique de trois mètres, peau pourpre-indigo, deux cornes noires gravées de runes, yeux violets et voix profonde.",
            caractere: "Intelligente, sage, cultivée et attachée aux savoirs anciens.",
            histoire: "Recluse érudite des tréfonds issue des Isolationnistes, Vel'Shara vouait un culte sacré aux dragons bien avant l'arrivée d'Elkyriel. Sa pureté de sang et sa haute stature (3 mètres) en font la souveraine naturelle de la cité souterraine. Pour ne pas étouffer son génie scientifique sous l'administration quotidienne, elle délègue l'exploitation minière et la mécanique lourde aux familles naines de Roran et Borin, et la police interne aux shamans kobolds. Au sein de la Garde des Veines, elle ne commande pas les patrouilles militaires (charge confiée à Armand Vellec), mais définit la doctrine alchimique : c'est elle qui conçoit les Filtres de l'Érudit, analyse la toxicité de l'Etherium et prépare les résines de préservation sanitaire utilisées dans les mines chaudes. Capacités particulières : magie innée et intelligence supérieure.",
            rapport_elkyriel: "Dévotion spirituelle, intellectuelle et politique totale ; elle le révère comme le Dragon Suprême et le monarque légitime de la montagne et de Traverse. Elle connaît et protège farouchement son Secret Draconique.",
            rapports_autres: "Rapport à Nymira : respect intellectuel mutuel et collaboration régulière sur les manuscrits précurseurs."
        },
        armand_vellec: {
            id: "perso-armand-vellec",
            nom: "Armand Vellec",
            tags: { espece: "humain", rangs: ["officier"], harem: false, intime: false, secret: false, lieux: ["traverse_10e_cite", "ardelie_forteresse_geo", "varethis_parfumerie"], domicile_id: "traverse_10e_cite" },
            espece_genre: "Humain, masculin.",
            domicile: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise) / Quartier général de la Garde des Veines à Calde-sur-Rive.",
            domicile_complet: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise) / Quartier général de la Garde des Veines à Calde ; visites occasionnelles à Karsenne.",
            condition_anterieure: "Ancien sergent d'infanterie de Varethis, condamné comme déserteur puis réduit en esclavage après avoir ordonné une retraite salutaire pour sauver douze de ses hommes. Acheté et immédiatement affranchi par Leirykle en juillet 1248.",
            secret_draconique: "Ignore sa nature de Dragon Noble.",
            fonction: "Co-commandant de terrain de la Garde des Veines (deux mille soldats d'élite).",
            caractere: "Discipliné, protecteur, ayant le sens du sacrifice mesuré et le respect absolu de la vie de ses hommes.",
            histoire: "Elkyriel a su déceler en Armand une qualité militaire rarissime : le refus absolu de sacrifier ses hommes pour la gloire personnelle, allié à un sens aigu de la discipline de fer. C'est le profil exact requis pour commander des troupes patrouillant dans des boyaux obscurs exposés aux fuites toxiques d'Etherium. Promu en Traverse à la tête de la Garde des Veines, Armand s'est métamorphosé en un commandant respecté et rigoureux : il gère le casernement, les relèves de garde, la tenue des masques et la surveillance tactique des vannes à travers tout le royaume, tandis que Vel'Shara en assure la direction scientifique et alchimique. Il a définitivement transmis la sécurité de la parfumerie de Karsenne à des gardes locaux sous l'œil des Corbeaux.",
            rapport_elkyriel: "Reconnaissance et loyauté militaire totale envers l'homme qui a lavé son honneur et lui a confié un commandement d'élite."
        },
        sariel: {
            id: "perso-sariel",
            nom: "Sariel",
            tags: { espece: "elfe", rangs: ["officier"], harem: true, intime: true, secret: true, lieux: ["traverse_10e_cite", "ardelie_forteresse_geo", "mer_jade_archipel"], domicile_id: "traverse_10e_cite" },
            espece_genre: "Elfe, féminin, 24 ans.",
            domicile: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            domicile_complet: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            condition_anterieure: "Pisteuse forestière, esclave au Manoir des Épines Noires.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (initiée de la Strate -3).",
            fonction: "Éclaireuse des tréfonds, jardinière féerique et capitaine formatrice des Spectres de la Pierre.",
            physique: "Cheveux couleur ambre tressés, yeux vert forêt, peau dorée portant de légères cicatrices claires.",
            histoire: "Talents : Aptitude féline +1 ; Survie +1. Motivations actuelles : se rendre utile, explorer le monde sauvage et honorer la liberté qu’Elkyriel lui a rendue.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Relation intime ; compagne du harem libre.",
            rapports_autres: "Rapport à Nymira : relation libertine, discrète et charnelle, sans exclusivité ni jalousie. Toutes deux restent libres."
        },
        eirik: {
            id: "perso-eirik",
            nom: "Eirik",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["traverse_10e_cite", "ardelie_forteresse_geo"], domicile_id: "traverse_10e_cite" },
            espece_genre: "Humain, masculin, 33 ans.",
            domicile: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            domicile_complet: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            condition_anterieure: "Cuisinier, captif des Pirates des Brumes, libéré de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapé de la Crique Sanglante).",
            fonction: "Responsable en chef des cuisines de la Forteresse-Monde.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        borin: {
            id: "perso-borin",
            nom: "Borin",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["traverse_10e_cite", "ardelie_forteresse_geo"], domicile_id: "traverse_10e_cite" },
            espece_genre: "Humain, masculin, 51 ans.",
            domicile: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            domicile_complet: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            condition_anterieure: "Charpentier, captif des Pirates des Brumes, libéré de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapé de la Crique Sanglante).",
            fonction: "Maître charpentier chargé de la reconstruction et des grands ouvrages d'art souterrains.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        thalira: {
            id: "perso-thalira",
            nom: "Thalira",
            tags: { espece: "humain", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["traverse_10e_cite", "ardelie_forteresse_geo"], domicile_id: "traverse_10e_cite" },
            espece_genre: "Humaine, féminin, 31 ans.",
            domicile: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            domicile_complet: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            condition_anterieure: "Captive des Pirates des Brumes, libérée de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapée de la Crique Sanglante).",
            fonction: "Sage-femme, guérisseuse et médecin de la colonie souterraine.",
            physique: "Brune aux formes généreuses.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        liora: {
            id: "perso-liora",
            nom: "Liora",
            tags: { espece: "elfe", rangs: ["artisan"], harem: false, intime: false, secret: true, lieux: ["traverse_10e_cite", "ardelie_forteresse_geo"], domicile_id: "traverse_10e_cite" },
            espece_genre: "Elfe, féminin, 34 ans.",
            domicile: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            domicile_complet: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            condition_anterieure: "Tenancière, captive des Pirates des Brumes, libérée de la Crique Sanglante.",
            secret_draconique: "Sait qu'Elkyriel est un Dragon Noble (rescapée de la Crique Sanglante).",
            fonction: "Alchimiste et herboriste de la colonie, travaillant en liaison avec Vel'Shara.",
            physique: "Beauté sophistiquée et cheveux auburn.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        autres_captifs_crique: {
            id: "perso-autres-captifs-liberes-de-la-crique-sanglante",
            nom: "Autres captifs libérés de la Crique Sanglante",
            tags: { espece: "elfe", rangs: ["civil"], harem: false, intime: false, secret: true, lieux: ["traverse_10e_cite", "ardelie_forteresse_geo"], domicile_id: "traverse_10e_cite" },
            espece_genre: "Elfes et humains.",
            domicile: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            domicile_complet: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            condition_anterieure: "Captifs sélectionnés pour leur beauté, leur force ou leurs savoir-faire par les Pirates des Brumes.",
            secret_draconique: "Savent qu'Elkyriel est un Dragon Noble (sauvés directement par sa forme draconique).",
            fonction: "Citoyens libres intégrés à la colonie souterraine.",
            histoire: "Composition : Alyndra, elfe de 29 ans et ancienne danseuse de cour ; Kaela, elfe de 28 ans et ancienne chasseuse ; Fiora, humaine de 19 ans ; ainsi que les personnes déjà établies dans les autres lieux selon leur domicile actuel.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        },
        liberes_manoir: {
            id: "perso-liberes-du-manoir-des-epines-noires",
            nom: "Libérés du Manoir des Épines Noires",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: false, secret: true, lieux: ["traverse_10e_cite", "ardelie_forteresse_geo"], domicile_id: "traverse_10e_cite" },
            espece_genre: "Vingt-trois personnes de plusieurs espèces.",
            domicile: "Forteresse-Monde, Strate -3 (Sariel et 21 autres) ; Lirael à la Forge de Rivecour.",
            domicile_complet: "Forteresse-Monde, Strate -3 (Sariel et 21 autres personnes) ; Lirael réside à la Forge de Rivecour.",
            condition_anterieure: "Esclaves du baron Eldric Valthor.",
            secret_draconique: "Savent qu'Elkyriel est un Dragon Noble pour les résidents de la Strate -3.",
            fonction: "Bâtisseurs, jardiniers, bouchers et assistants d’ateliers.",
            rapport_elkyriel: "Voir REF-ELKYRIEL. Pour certains, cette relation demeure mêlée à une crainte révérencielle.",
        },
        anciens_esclaves_fers_noirs: {
            id: "perso-anciens-esclaves-liberes-des-fers-noirs",
            nom: "Anciens esclaves libérés des Fers Noirs",
            tags: { espece: "humain", rangs: ["civil"], harem: false, intime: false, secret: true, lieux: ["traverse_10e_cite", "ardelie_forteresse_geo"], domicile_id: "traverse_10e_cite" },
            espece_genre: "Plus de trente humains, elfes et nains.",
            domicile: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            domicile_complet: "Forteresse-Monde, Strate -3 (10e Cité de Traverse, sous l'Immensité Grise).",
            condition_anterieure: "Esclaves détenus par la Confrérie des Fers Noirs à Rivecour.",
            secret_draconique: "Savent qu'Elkyriel est un Dragon Noble (initiés par leur intégration à la Strate -3).",
            fonction: "Travaux de déblayage, reconstruction et subsistance dans la colonie.",
            rapport_elkyriel: "Voir REF-ELKYRIEL."
        }
    };

    // Dictionnaire des Personnages Morts (texte d'origine scrupuleusement conservé mot pour mot)
    const MORTS = {
        le_patron: {
            id: "perso-le-patron",
            nom: "Le Patron",
            espece_genre: "Humain, masculin.",
            fonction_anterieure: "Magicien et dirigeant d’un vaste réseau criminel et esclavagiste.",
            histoire_personnelle: "Vaincu par Elkyriel puis exécuté par son ancienne esclave Faelia le 19 juillet 1247.",
            situation_actuelle: "Mort."
        },
        glaur_kaan: {
            id: "perso-glaur-kaan",
            nom: "Glaur-Kaan",
            espece_genre: "Dragon Noble Ancien, masculin.",
            histoire_personnelle: "Vaincu en duel singulier par Elkyriel à la Strate -5 de la Forteresse-Monde le 30 décembre 1247. Son cœur a été dévoré par Elkyriel, provoquant l'éveil draconique de ce dernier.",
            situation_actuelle: "Mort."
        },
        vargo: {
            id: "perso-vargo",
            nom: "Vargo",
            espece_genre: "Humain, masculin.",
            fonction_anterieure: "Marchand d'esclaves et allié des pirates.",
            histoire_personnelle: "Flotte coulée dans l'Archipel des Tempêtes par Elkyriel sous forme de dragon. Brûlé sur son navire amiral le 16 mars 1248.",
            situation_actuelle: "Mort."
        },
        la_jeune_liche: {
            id: "perso-la-jeune-liche",
            nom: "La Jeune Liche",
            espece_genre: "Mort-vivant, féminin.",
            histoire_personnelle: "Détruite en plein vol par Elkyriel sous forme draconique sur le navire amiral de Vargo le 16 mars 1248.",
            situation_actuelle: "Détruite."
        },
        avelin: {
            id: "perso-avelin",
            nom: "Avelin",
            espece_genre: "Humain, masculin.",
            histoire_personnelle: "Messager mort de soif dans la chambre secrète de la Bergerie sous Roche, laissant le coffret de preuves de l'affaire Odran.",
            situation_actuelle: "Mort ; ossements inhumés sous le ciel par Elkyriel."
        },
        mael_corven: {
            id: "perso-mael-corven",
            nom: "Maël Corven",
            espece_genre: "Humain, masculin.",
            fonction_anterieure: "Archiviste aux Archives Occidentales de Rivecour.",
            histoire_personnelle: "Compromis par Odran Sorell, assassiné puis relevé comme zombie pour effacer les traces.",
            situation_actuelle: "Mort et purifié."
        },
        garran_brenn: {
            id: "perso-garran-brenn",
            nom: "Garran & Brenn",
            espece_genre: "Humains, masculins.",
            histoire_personnelle: "Guetteurs du réseau de Maeron, abattus d'une flèche par Elkyriel près de la Grange des Trois-Saules le 12 mai 1248.",
            situation_actuelle: "Morts et enterrés."
        },
        jorund_pellain: {
            id: "perso-jorund-pellain",
            nom: "Jorund Pellain",
            espece_genre: "Humain, masculin.",
            fonction_anterieure: "Armateur négrier d'Élyria.",
            histoire_personnelle: "Auteur de tentatives d'agression et de trahison. Dénoncé par son épouse Virelle Senn, il a été jugé et exécuté publiquement à l'automne 1249.",
            situation_actuelle: "Mort (exécuté)."
        },
        albe_cendre: {
            id: "perso-albe-cendre",
            nom: "Albe Cendre",
            espece_genre: "Humaine, féminin.",
            fonction_anterieure: "Maîtresse de l’Atelier des Trois Navettes.",
            histoire_personnelle: "Instigatrice du vol des métiers à tisser d'Elkyriel et de fausses accusations. Jugée pour trahison, elle a été exécutée publiquement à l'automne 1249.",
            situation_actuelle: "Morte (exécutée)."
        },
        gaudric_fer_de_puits: {
            id: "perso-gaudric-fer-de-puits",
            nom: "Gaudric Fer-de-Puits",
            espece_genre: "Humain lourdement muté, masculin.",
            fonction_anterieure: "Ancien chevalier de la garnison du Nœud de Calde.",
            histoire_personnelle: "Tué par Elkyriel au fond de la cuve du Nœud en mai 1249.",
            situation_actuelle: "Mort."
        },
        veyle_lysa: {
            id: "perso-veyle-lysa-de-traverse",
            nom: "Veyle & Lysa de Traverse",
            espece_genre: "Humains, masculin et féminin.",
            fonction_anterieure: "Dirigeants corrompus d’Élyria.",
            histoire_personnelle: "Éliminés lors du coup d'État d'Elkyriel le 19 juillet 1249.",
            situation_actuelle: "Morts."
        },
        ioven_krel: {
            id: "perso-ioven-krel",
            nom: "Ioven Krel",
            espece_genre: "Humain, masculin.",
            fonction_anterieure: "Associé vénal de la Maison des Sept Clefs.",
            histoire_personnelle: "Éliminé lors de la prise de pouvoir d'Elkyriel à Élyria en juillet 1249.",
            situation_actuelle: "Mort."
        },
        merek_voln: {
            id: "perso-merek-voln",
            nom: "Merek Voln",
            espece_genre: "Humain, masculin.",
            fonction_anterieure: "Commandant militaire de Dhor-Kez à Rivet-de-Givre.",
            histoire_personnelle: "Responsable du massacre des Pierres-Froides. Condamné à mort et exécuté selon la loi du Graal à Kadar-Rauk en mars 1249.",
            situation_actuelle: "Mort (exécuté)."
        },
        quatre_liches: {
            id: "perso-les-quatre-liches-conseilleres",
            nom: "Les Quatre Liches Conseillères d’Orsenn",
            composition: "Dame Verrine, Archiviste Edran, Silex le Patient, Aube-Sans-Souffle.",
            espece_genre: "Morts-vivants (Liches séculaires).",
            histoire_personnelle: "Dirigeantes occultes d'Orsenn et créatrices d'armes nécromantiques géantes. Attirées dans un piège dans la Crypte du Premier Sceau à l'été 1250, elles ont été totalement anéanties et pulvérisées par Elkyriel sous sa forme hybride draconique.",
            situation_actuelle: "Détruites définitivement."
        },
        malakor_morwen_vaelis: {
            id: "perso-malakor-morwen-vaelis",
            nom: "Malakor du Foyer Ardent, Morwen & Dame Vaelis",
            espece_genre: "Archimages humains et elfes du Concordat d'Astréane.",
            histoire_personnelle: "Instigateurs de la mutinerie armée du Dôme des Sept Foyers contre les réformes d'Elkyriel à l'été 1250. Privés de magie par le champ d'extinction arcanique royal, ils ont été condamnés par le peuple de Lumérys et décapités sur l'Esplanade d'Albâtre.",
            situation_actuelle: "Morts (exécutés)."
        }
    };
    /**
     * Transforme automatiquement le nom de l'espèce en lien cliquable avec loupe 🔍
     */
    function formatEspeceGenreWithLinks(p) {
        if (!p || !p.espece_genre) return '';
        let txt = p.espece_genre;
        const safeName = (p.nom || '').replace(/'/g, "\\'");

        // Table des correspondances vers Livret 2 ou Livret 5
        const links = [
            { regex: /\b(Elfes et humains)\b/gi, doc: 'livret2', sec: 'section-especes-communes' },
            { regex: /\b(Dragonne Noble|Dragon Noble)\b/gi, doc: 'livret5', sec: 'section-creatures' },
            { regex: /\b(Dragonne Bestiale|Dragon Bestial)\b/gi, doc: 'livret5', sec: 'section-creatures' },
            { regex: /\b(Ogres-Mages|Ogre-Mage)\b/gi, doc: 'livret2', sec: 'section-ogres-mages' },
            { regex: /\b(Pagures|Pagure)\b/gi, doc: 'livret2', sec: 'section-pagures' },
            { regex: /\b(Elfe|Elfes)\b/gi, doc: 'livret2', sec: 'section-elfes' },
            { regex: /\b(Nains|Naine|Nain)\b/gi, doc: 'livret2', sec: 'section-nains' },
            { regex: /\b(Orques|Orque)\b/gi, doc: 'livret2', sec: 'section-orques' },
            { regex: /\b(Humains|Humaines|Humaine|Humain)\b/gi, doc: 'livret2', sec: 'section-humains' }
        ];

        for (const item of links) {
            if (item.regex.test(txt)) {
                txt = txt.replace(item.regex, (match) => {
                    return `<span onclick="navigateToDocSection('${item.doc}', '${item.sec}', 'lore_personnages', '${p.id}', '${safeName}')" style="color:#7c2d12; text-decoration:underline; cursor:pointer; font-weight:bold;" title="Voir la description dans le Codex">${match} 🔍</span>`;
                });
                break;
            }
        }

        return txt;
    }

    /**
     * Moteur de rendu unifié d'une fiche personnage
     */
    function renderCard(p, customTitleLevel, customLocationLabel) {
        if (!p) return '';
        const hTag = customTitleLevel || 'h6';
        let html = `<${hTag} id="${p.id}" class="pnj-title">${p.nom}</${hTag}>\n<div class="card-start"></div>\n`;

        if (p.espece_genre) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Espèce et genre :</strong> ${formatEspeceGenreWithLinks(p)}</p></div>\n`;
        }

        const loc = customLocationLabel || p.domicile_complet || p.domicile;
        if (loc) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Domicile habituel &amp; Fréquentation :</strong> ${loc}</p></div>\n`;
        }

        if (p.condition_anterieure) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Condition antérieure :</strong> ${p.condition_anterieure}</p></div>\n`;
        }

        if (p.secret_draconique) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Secret draconique :</strong> ${p.secret_draconique}</p></div>\n`;
        }

        if (p.fonction) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Fonction, titre ou métier :</strong> ${p.fonction}</p></div>\n`;
        }

        if (p.histoire_draconique_titres) {
            html += p.histoire_draconique_titres + '\n';
        }

        if (p.physique) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Physique &amp; Allure :</strong> ${p.physique}</p></div>\n`;
        }

        if (p.caractere) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Caractère :</strong> ${p.caractere}</p></div>\n`;
        }

        if (p.histoire) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Histoire &amp; Faits marquants :</strong> ${p.histoire}</p></div>\n`;
        }

        if (p.rapport_elkyriel) {
            if (p.rapport_elkyriel.startsWith('<div')) {
                html += p.rapport_elkyriel + '\n';
            } else {
                html += `    <div class="rule-item"><p class="pseudo-li"><strong>Rapport à Elkyriel :</strong> ${p.rapport_elkyriel}</p></div>\n`;
            }
        }

        if (p.rapports_autres) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Rapports aux autres personnages :</strong> ${p.rapports_autres}</p></div>\n`;
        }

        if (p.secret_draconique_liste) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Secret draconique (Liste nominative et précise) :</strong></p></div>\n` + p.secret_draconique_liste + '\n';
        }

        html += `<div class="card-end"></div>\n`;
        return html;
    }

    /**
     * Moteur de rendu unifié d'une fiche de personnage mort
     */
    function renderDeadCard(d) {
        if (!d) return '';
        let html = `<h6 id="${d.id}" class="pnj-title">${d.nom}</h6>\n<div class="card-start"></div>\n`;

        if (d.composition) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Composition :</strong> ${d.composition}</p></div>\n`;
        }

        if (d.espece_genre) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Espèce et genre :</strong> ${d.espece_genre}</p></div>\n`;
        }

        if (d.fonction_anterieure) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Fonction antérieure :</strong> ${d.fonction_anterieure}</p></div>\n`;
        }

        if (d.histoire_personnelle) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Histoire personnelle :</strong> ${d.histoire_personnelle}</p></div>\n`;
        }

        if (d.situation_actuelle) {
            html += `    <div class="rule-item"><p class="pseudo-li"><strong>Situation actuelle :</strong> ${d.situation_actuelle}</p></div>\n`;
        }

        html += `<div class="card-end"></div>\n`;
        return html;
    }

    // Fonction utilitaire de tri alphabétique français
    function trierParNom(liste) {
        return liste.sort((a, b) => a.nom.localeCompare(b.nom, 'fr', { sensitivity: 'base' }));
    }

    /**
     * VUE 1 : Classement par Régions & Fiefs (Trié A-Z)
     */
    function buildRegionView() {
        let html = PRESENTATION_HTML + REF_ELKYRIEL_HTML;
        const allP = Object.values(PNJ);

        const lieux = [
            { h: 2, id: "royaume-ardelie", title: "1. Royaume d’Ardélie", intro: "Royaume occidental bordé par la Mer de Jade, traversé d'est en ouest par l'axe fluvial reliant Rivecour à Aldhaven. La royauté et les cours ignorent l'existence de l'Empire de Traverse et considèrent Elkyriel comme un Seigneur Mercenaire indépendant." },
            { h: 3, id: "lieu-rivecour", title: "Rivecour" },
            { h: 4, id: "lieu-la-forge-naine-de-rivecour", title: "La Forge naine de Rivecour", tag: "ardelie_forge" },
            { h: 4, id: "sous-palais-royal", title: "Palais royal de Rivecour", tag: "ardelie_rivecour_palais" },
            { h: 4, id: "sous-senat", title: "Sénat de Rivecour", tag: "ardelie_rivecour_senat" },
            { h: 4, id: "sous-quartier-noble", title: "Quartier noble de Rivecour", tag: "ardelie_rivecour_noble" },
            { h: 4, id: "sous-quartier-des-marchands", title: "Quartier des Marchands de Rivecour", tag: "ardelie_rivecour_marchands" },

            { h: 3, id: "lieu-aldhaven", title: "Aldhaven" },
            { h: 4, id: "sous-forge-d-aldhaven", title: "Forge d’Aldhaven", tag: "ardelie_aldhaven_forge", tagSecondaire: "ardelie_aldhaven" },
            { h: 4, id: "sous-port-et-navire-aldhaven", title: "Port et navire d’Aldhaven", tag: "ardelie_aldhaven_port" },

            { h: 3, id: "lieu-les-saillans", title: "Les Saillans", tag: "ardelie_saillans" },

            { h: 3, id: "lieu-immensite-grise", title: "L’Immensité Grise" },
            { h: 4, id: "lieu-tour-blanche", title: "Tour Blanche", tag: "ardelie_tour_blanche" },
            { h: 4, id: "lieu-souterrains-immensite-forteresse-monde", title: "Souterrains de l’Immensité Grise (Forteresse-Monde)", tag: "ardelie_forteresse_geo", intro: "<strong>Situation géographique physique :</strong> Bien que gouvernée politiquement comme la 10e Cité du Royaume de Traverse et reliée par le Portail du Grand Air à l'Archipel des Tempêtes, la Forteresse-Monde est une structure minérale antique enfouie verticalement sous les steppes de l'Immensité Grise (accessible depuis la surface par le Cratère du Syndicat)." },

            { h: 3, id: "lieu-mer-de-jade-et-archipel", title: "La Mer de Jade & Archipel des Tempêtes" },
            { h: 4, id: "sous-archipel-navire-kaelen", title: "Navigation & Navire d'Elkyriel", tag: "ardelie_aldhaven_port" },
            { h: 4, id: "sous-archipel-debouche-portail-grand-air", title: "Débouché du Portail du Grand Air (Liaison Forteresse-Monde)", tag: "mer_jade_archipel", intro: "<strong>Liaison directe permanente :</strong> L'extrémité insulaire du Portail du Grand Air s'ouvre sur les falaises de l'Archipel des Tempêtes, reliant sans interruption les eaux tropicales à l'arche monumentale de basalte de la Strate -3 de la Forteresse-Monde. Ce portail assure un flux thermique continu d'air marin et de clarté solaire vers la cité souterraine." },

            { h: 3, id: "lieu-marches-orientales", title: "Les Marches orientales" },
            { h: 4, id: "sous-routes-des-marches-orientales", title: "Routes des Marches orientales & Valdorne", tag: "ardelie_marches_routes" },
            { h: 4, id: "sous-rochebrune", title: "Rochebrune", tag: "ardelie_rochebrune" },

            { h: 2, id: "royaume-varethis", title: "2. Royaume de Varethis", intro: "Royaume humain établi dans une haute vallée froide à l'est du massif montagneux frontalier. La royauté et les grands seigneurs de Varethis ignorent l'existence de l'Empire de Traverse et considèrent Elkyriel comme un Seigneur Mercenaire indépendant." },
            { h: 3, id: "lieu-karsenne", title: "Karsenne" },
            { h: 4, id: "lieu-palais-royal-de-karsenne", title: "Palais royal de Karsenne", tag: "varethis_palais" },
            { h: 4, id: "sous-parfumerie-de-maitre-leirykle", title: "Parfumerie de maître Leirykle", tag: "varethis_parfumerie" },
            { h: 4, id: "lieu-selyne-var-cellule-des-corbeaux", title: "Cellule des Corbeaux de Karsenne", tag: "varethis_corbeaux" },
            { h: 3, id: "lieu-domaine-de-clairval", title: "Domaine de Clairval", tag: "varethis_clairval" },
            { h: 3, id: "lieu-passe-des-trois-bornes", title: "Passe des Trois Bornes (Frontière)", tag: "varethis_trois_bornes" },
            { h: 3, id: "lieu-ailleurs-en-varethis", title: "Ailleurs en Varethis", tag: "varethis_ailleurs" },

            { h: 2, id: "empire-cinq-trones", title: "3. Empire de l'Enclave des Cinq Trônes", intro: "Vaste espace continental unifié sous l'autorité souveraine de <strong>Sa Majesté Impériale Elkyriel-Aethelvahr</strong>, articulé autour du réseau magique et thermique des Veines Chaudes et de l'Etherium. L'Empire fédère cinq nations : le Royaume de Traverse (siège impérial direct), le Royaume Orque de Gor-Kadar, le Concordat d'Astréane, les Ligues de Dhor-Kez et le Royaume d'Orsenn." },
            { h: 3, id: "empire-royaume-traverse", title: "Royaume de Traverse (Cœur de l'Empire)" },
            { h: 4, id: "lieu-palais-royal-d-elyria", title: "Élyria (Capitale Impériale & Palais)", tag: "traverse_elyria" },
            { h: 4, id: "lieu-elyria-autorites-civiles-commerciales", title: "Élyria (Autorités Civiles & Commerciales)", tag: "traverse_elyria_autorites" },
            { h: 4, id: "lieu-quais-d-elyria", title: "Quais d’Élyria", tag: "traverse_quais_elyria" },

            { h: 4, id: "section-comtes-urbains-traverse", title: "Les Comtés Urbains de Traverse" },
            { h: 4, id: "lieu-calde-sur-rive", title: "Calde-sur-Rive", tag: "traverse_calde" },
            { h: 4, id: "lieu-clair-verger", title: "Clair-Verger", tag: "traverse_clair_verger" },
            { h: 4, id: "lieu-grands-vergers", title: "Grands-Vergers", tag: "traverse_grands_vergers" },
            { h: 4, id: "lieu-asten", title: "Asten", tag: "traverse_asten" },
            { h: 4, id: "lieu-haute-rive", title: "Haute-Rive", tag: "traverse_haute_rive" },
            { h: 4, id: "lieu-bois-serein", title: "Bois-Serein", tag: "traverse_bois_serein" },
            { h: 4, id: "lieu-rive-noire", title: "Rive-Noire", tag: "traverse_rive_noire" },
            { h: 4, id: "lieu-puits-de-veyr", title: "Puits de Veyr", tag: "traverse_puits_veyr" },
            { h: 4, id: "lieu-traverse-10e-cite-forteresse-monde", title: "10e Cité de Traverse (Forteresse-Monde)", tag: "traverse_10e_cite", intro: "<strong>Statut politique impérial :</strong> Intégrée officiellement comme la dixième cité du Royaume de Traverse et gouvernée par la Comtesse Vel'Shara, la Forteresse-Monde est reliée à la Place Royale d'Élyria et aux neuf autres cités par le réseau des arches magiques permanentes de Traverse. Elle est établie physiquement dans les strates géologiques sous l'Immensité Grise et communique avec l'Archipel des Tempêtes par le Portail du Grand Air." },

            { h: 3, id: "empire-royaume-gor-kadar", title: "Royaume Orque de Gor-Kadar", intro: "Royaume d'altitude exclusivement orque établi sur les hauts plateaux septentrionaux, gouverné par la démocratie des Kraals et le Cercle des Paroles. Royaume frère de sang, allié et intégré à la structure de l'Empire des Cinq Trônes." },
            { h: 4, id: "lieu-kadar-rauk", title: "Kadar-Rauk (Capitale)", tag: "gorkadar_kadar_rauk" },
            { h: 4, id: "lieu-haut-bois", title: "Haut-Bois", tag: "gorkadar_haut_bois" },
            { h: 4, id: "lieu-sources-de-rauk", title: "Sources de Rauk", tag: "gorkadar_sources_rauk" },
            { h: 4, id: "lieu-hautes-lames-gor-kadar", title: "Cimes des Hautes-Lames", tag: "gorkadar_hautes_lames" },

            { h: 3, id: "empire-royaume-astreane", title: "Concordat d'Astréane", intro: "Royaume magique du nord articulé autour de la manipulation des cristaux et de la lumière. L'esclavage et la servitude pour dettes y sont totalement abolis sous la tutelle impériale d'Elkyriel." },
            { h: 4, id: "sous-astreane-lumerys", title: "Lumérys (Capitale)", tag: "astreane_lumerys" },

            { h: 3, id: "empire-royaume-dhor-kez", title: "Ligues de Dhor-Kez", intro: "Confédération naine et industrieuse de grands ateliers métallurgiques, de forages et de fonderies. Le pouvoir oligarchique des Conclaves a été brisé et placé sous tutelle impériale au profit des Ateliers Liés." },
            { h: 4, id: "sous-dhor-kez-kez-bruma", title: "Kez-Bruma (Capitale) & Carrières", tag: "dhorkez_kez_bruma" },

            { h: 3, id: "empire-royaume-orsenn", title: "Royaume d'Orsenn", intro: "Royaume des plaines basses fluviales où la nécromancie légale régit la Loi des corps. La royauté vivante a été restaurée dans sa plénitude après la destruction des Quatre Liches par Elkyriel." },
            { h: 4, id: "sous-orsenn-orsenn", title: "Orsenn (Capitale)", tag: "orsenn_capitale" }
        ];

        lieux.forEach(item => {
            html += `<h${item.h} id="${item.id}">${item.title}</h${item.h}>\n`;

            if (item.intro) {
                html += `<div class="card-start"></div><div class="rule-item"><p>${item.intro}</p></div><div class="card-end"></div>\n`;
            }

            if (item.tag) {
                const tagList = [item.tag, item.tagSecondaire].filter(Boolean);

                // 1. Présence principale triée de A à Z
                const principaux = trierParNom(allP.filter(p => p.tags && tagList.includes(p.tags.domicile_id)));
                if (principaux.length > 0) {
                    html += `<h5>Présence principale</h5>\n`;
                    principaux.forEach(p => {
                        html += renderCard(p);
                    });
                }

                // 2. Présence secondaire triée de A à Z
                const secondaires = trierParNom(allP.filter(p => {
                    if (!p.tags || !p.tags.lieux) return false;
                    const estPresent = tagList.some(t => p.tags.lieux.includes(t));
                    const estDomicilieIci = tagList.includes(p.tags.domicile_id);
                    return estPresent && !estDomicilieIci;
                }));

                if (secondaires.length > 0) {
                    html += `<h5>Présence secondaire</h5>\n`;
                    secondaires.forEach(p => {
                        html += renderCard(p);
                    });
                }
            }
        });

        return html;
    }
 
    /**
     * VUE 2 : Index Alphabétique (A-Z)
     * Affiche l'ensemble des fiches complètes triées alphabétiquement par leur nom.
     */
    function buildAlphaView() {
        let html = PRESENTATION_HTML + REF_ELKYRIEL_HTML;
        html += `<h2>Index Alphabétique des Personnages (A-Z)</h2>\n`;

        const list = Object.values(PNJ).sort((a, b) => a.nom.localeCompare(b.nom, 'fr', { sensitivity: 'base' }));
        list.forEach(p => {
            html += renderCard(p, 'h3');
        });
        return html;
    }

    /**
     * VUE 3 : Par Titres & Statuts Politiques (Trié A-Z)
     */
    function buildTitreView() {
        let html = PRESENTATION_HTML + REF_ELKYRIEL_HTML;
        html += `<h2>Personnages par Titres &amp; Statuts Politiques</h2>\n`;

        const categories = [
            { id: "titres-souverains", titre: "Souverains Régnants &amp; Régents", filter: p => p.tags && p.tags.rangs && p.tags.rangs.includes('souverain') },
            { id: "titres-ducs", titre: "Ducs &amp; Conseil Impérial des Sceaux", filter: p => p.tags && p.tags.rangs && p.tags.rangs.includes('duc') },
            { id: "titres-comtes", titre: "Comtes &amp; Barons des Cités de Traverse", filter: p => p.tags && p.tags.rangs && (p.tags.rangs.includes('comte') || p.tags.rangs.includes('baron')) },
            { id: "titres-militaires", titre: "Officiers Militaires, Sécurité &amp; Renseignement", filter: p => p.tags && p.tags.rangs && p.tags.rangs.includes('officier') },
            { id: "titres-artisans", titre: "Artisans Maîtres, Négociants &amp; Logistique", filter: p => p.tags && p.tags.rangs && p.tags.rangs.includes('artisan') }
        ];

        const allP = Object.values(PNJ);
        categories.forEach((cat, idx) => {
            const list = trierParNom(allP.filter(cat.filter));
            if (list.length > 0) {
                if (idx > 0) html += `<div class="page-break"></div>`;
                html += `<h3 id="${cat.id}">${cat.titre}</h3>\n`;
                list.forEach(p => { html += renderCard(p, 'h4'); });
            }
        });

        return html;
    }

    /**
     * VUE 4 : Par Espèces (Trié A-Z)
     */
    function buildEspeceView() {
        let html = PRESENTATION_HTML + REF_ELKYRIEL_HTML;
        html += `<h2>Personnages par Espèces</h2>\n`;

        const especes = [
            { id: "espece-dragons", titre: "Dragons (Nobles &amp; Bestiaux)", filter: p => p.tags && p.tags.espece === 'dragon' },
            { id: "espece-elfes", titre: "Elfes", filter: p => p.tags && p.tags.espece === 'elfe' },
            { id: "espece-humains", titre: "Humains", filter: p => p.tags && p.tags.espece === 'humain' },
            { id: "espece-nains", titre: "Nains", filter: p => p.tags && p.tags.espece === 'nain' },
            { id: "espece-orques", titre: "Orques", filter: p => p.tags && p.tags.espece === 'orque' },
            { id: "espece-ogres", titre: "Ogres-Mages", filter: p => p.tags && p.tags.espece === 'ogre' },
            { id: "espece-animaux", titre: "Animaux", filter: p => p.tags && p.tags.espece === 'animal' }
        ];

        const allP = Object.values(PNJ);
        especes.forEach((esp, idx) => {
            const list = trierParNom(allP.filter(esp.filter));
            if (list.length > 0) {
                if (idx > 0) html += `<div class="page-break"></div>`;
                html += `<h3 id="${esp.id}">${esp.titre}</h3>\n`;
                list.forEach(p => { html += renderCard(p, 'h4'); });
            }
        });

        return html;
    }

    /**
     * VUE 5 : Cercle Intime & Harem libre (Trié A-Z) - Scindé en deux sous-sections
     */
    function buildHaremView() {
        let html = PRESENTATION_HTML + REF_ELKYRIEL_HTML;
        html += `<h2>Cercle Intime &amp; Harem d’Elkyriel</h2>\n`;
        html += `<div class="card-start"><div class="rule-item"><p>Ce chapitre rassemble toutes les compagnes, amantes et figures ayant partagé une intimité amoureuse ou sexuelle avec Elkyriel, scindées entre les membres du harem libre et les relations intimes indépendantes ou diplomatiques hors harem :</p></div></div>\n`;

        const allP = Object.values(PNJ);
        const haremLibre = trierParNom(allP.filter(p => p.tags && p.tags.harem === true && p.tags.intime === true));
        const horsHarem = trierParNom(allP.filter(p => p.tags && p.tags.intime === true && !p.tags.harem));

        html += `<h3 id="harem-libre">1. Harem libre &amp; Foyer partagé (${haremLibre.length})</h3>\n`;
        haremLibre.forEach(p => {
            html += renderCard(p, 'h4');
        });

        html += `<div class="page-break"></div><h3 id="harem-hors">2. Relations intimes hors harem (${horsHarem.length})</h3>\n`;
        horsHarem.forEach(p => {
            html += renderCard(p, 'h4');
        });

        return html;
    }

    /**
     * VUE 6 : Secret Draconique (Trié A-Z)
     */
    function buildSecretView() {
        let html = PRESENTATION_HTML + REF_ELKYRIEL_HTML;
        html += `<h2>Secret Draconique</h2>\n`;

        const allP = Object.values(PNJ);
        const savent = trierParNom(allP.filter(p => p.tags && p.tags.secret === true));
        const ignorent = trierParNom(allP.filter(p => !p.tags || p.tags.secret !== true));

        html += `<h3 id="secret-savent">Ceux qui savent qu'Elkyriel est un Dragon Noble (${savent.length})</h3>\n`;
        savent.forEach(p => { html += renderCard(p, 'h4'); });

        html += `<div class="page-break"></div><h3 id="secret-ignorent">Ceux qui ignorent sa véritable nature draconique (${ignorent.length})</h3>\n`;
        ignorent.forEach(p => { html += renderCard(p, 'h4'); });

        return html;
    }
 
    /**
     * VUE 7 : Personnages Morts (Trié A-Z)
     */
    function buildMortsView() {
        let html = PRESENTATION_HTML + REF_ELKYRIEL_HTML;
        html += `<h2>Personnages Morts</h2>\n`;
        html += `<div class="card-start"><div class="rule-item"><p>Registre des figures et adversaires décédés ou détruits au cours des événements :</p></div></div>\n`;

        const mortsTries = trierParNom(Object.values(MORTS));
        mortsTries.forEach(d => {
            html += renderDeadCard(d);
        });

        return html;
    }
    
    /**
     * Générateur d'Index dynamique pour la Sidebar (Trié A-Z)
     */
    function getIndex(viewMode) {
        const mode = viewMode || 'region';
        const allP = Object.values(PNJ);

        // 1. Index Alphabétique général (A-Z)
        if (mode === 'alpha') {
            return trierParNom(allP).map(p => ({ id: p.id, title: p.nom, level: 1 }));
        }

        // 2. Par Titres & Statuts (A-Z sous chaque rang)
        if (mode === 'titre') {
            const categories = [
                { id: "titres-souverains", title: "Souverains & Régents", filter: p => p.tags && p.tags.rangs && p.tags.rangs.includes('souverain') },
                { id: "titres-ducs", title: "Ducs & Conseil des Sceaux", filter: p => p.tags && p.tags.rangs && p.tags.rangs.includes('duc') },
                { id: "titres-comtes", title: "Comtes & Barons", filter: p => p.tags && p.tags.rangs && (p.tags.rangs.includes('comte') || p.tags.rangs.includes('baron')) },
                { id: "titres-militaires", title: "Officiers & Renseignement", filter: p => p.tags && p.tags.rangs && p.tags.rangs.includes('officier') },
                { id: "titres-artisans", title: "Artisans & Logistique", filter: p => p.tags && p.tags.rangs && p.tags.rangs.includes('artisan') }
            ];

            const indexList = [];
            categories.forEach(cat => {
                const list = trierParNom(allP.filter(cat.filter));
                if (list.length > 0) {
                    indexList.push({ id: cat.id, title: `${cat.title} (${list.length})`, level: 1 });
                    list.forEach(p => {
                        indexList.push({ id: p.id, title: p.nom, level: 2 });
                    });
                }
            });
            return indexList;
        }

        // 3. Par Espèces (A-Z sous chaque espèce)
        if (mode === 'espece') {
            const especes = [
                { id: "espece-dragons", title: "Dragons", filter: p => p.tags && p.tags.espece === 'dragon' },
                { id: "espece-elfes", title: "Elfes", filter: p => p.tags && p.tags.espece === 'elfe' },
                { id: "espece-humains", title: "Humains", filter: p => p.tags && p.tags.espece === 'humain' },
                { id: "espece-nains", title: "Nains", filter: p => p.tags && p.tags.espece === 'nain' },
                { id: "espece-orques", title: "Orques", filter: p => p.tags && p.tags.espece === 'orque' },
                { id: "espece-ogres", title: "Ogres-Mages", filter: p => p.tags && p.tags.espece === 'ogre' },
                { id: "espece-animaux", title: "Animaux", filter: p => p.tags && p.tags.espece === 'animal' }
            ];

            const indexList = [];
            especes.forEach(esp => {
                const list = trierParNom(allP.filter(esp.filter));
                if (list.length > 0) {
                    indexList.push({ id: esp.id, title: `${esp.title} (${list.length})`, level: 1 });
                    list.forEach(p => {
                        indexList.push({ id: p.id, title: p.nom, level: 2 });
                    });
                }
            });
            return indexList;
        }

        // 4. Cercle Intime & Harem (2 sous-groupes A-Z)
        if (mode === 'harem') {
            const haremLibre = trierParNom(allP.filter(p => p.tags && p.tags.harem === true && p.tags.intime === true));
            const horsHarem = trierParNom(allP.filter(p => p.tags && p.tags.intime === true && !p.tags.harem));

            const indexList = [];
            indexList.push({ id: "harem-libre", title: `Harem libre & Foyer (${haremLibre.length})`, level: 1 });
            haremLibre.forEach(p => {
                indexList.push({ id: p.id, title: p.nom, level: 2 });
            });

            indexList.push({ id: "harem-hors", title: `Relations hors harem (${horsHarem.length})`, level: 1 });
            horsHarem.forEach(p => {
                indexList.push({ id: p.id, title: p.nom, level: 2 });
            });

            return indexList;
        }

        // 5. Secret Draconique (A-Z sous chaque groupe)
        if (mode === 'secret') {
            const savent = trierParNom(allP.filter(p => p.tags && p.tags.secret === true));
            const ignorent = trierParNom(allP.filter(p => !p.tags || p.tags.secret !== true));

            const indexList = [];
            indexList.push({ id: "secret-savent", title: `Ceux qui savent (${savent.length})`, level: 1 });
            savent.forEach(p => {
                indexList.push({ id: p.id, title: p.nom, level: 2 });
            });

            indexList.push({ id: "secret-ignorent", title: `Ceux qui ignorent (${ignorent.length})`, level: 1 });
            ignorent.forEach(p => {
                indexList.push({ id: p.id, title: p.nom, level: 2 });
            });

            return indexList;
        }

        // 6. Personnages Morts (A-Z)
        if (mode === 'morts') {
            return trierParNom(Object.values(MORTS)).map(d => ({ id: d.id, title: d.nom, level: 1 }));
        }

        // 7. Mode Régions & Fiefs (A-Z sous chaque lieu)
        const structureGeographique = [
            { id: "royaume-ardelie", title: "1. Royaume d’Ardélie", level: 1 },
            { id: "lieu-rivecour", title: "Rivecour", level: 2 },
            { id: "lieu-la-forge-naine-de-rivecour", title: "La Forge naine", level: 3, tag: "ardelie_forge" },
            { id: "sous-palais-royal", title: "Palais royal", level: 3, tag: "ardelie_rivecour_palais" },
            { id: "sous-senat", title: "Sénat", level: 3, tag: "ardelie_rivecour_senat" },
            { id: "sous-quartier-noble", title: "Quartier noble", level: 3, tag: "ardelie_rivecour_noble" },
            { id: "sous-quartier-des-marchands", title: "Quartier des Marchands", level: 3, tag: "ardelie_rivecour_marchands" },
            
            { id: "lieu-aldhaven", title: "Aldhaven", level: 2 },
            { id: "sous-forge-d-aldhaven", title: "Forge d’Aldhaven", level: 3, tag: ["ardelie_aldhaven_forge", "ardelie_aldhaven"] },
            { id: "sous-port-et-navire-aldhaven", title: "Port et navire", level: 3, tag: "ardelie_aldhaven_port" },
            
            { id: "lieu-les-saillans", title: "Les Saillans", level: 2, tag: "ardelie_saillans" },
            
            { id: "lieu-immensite-grise", title: "L’Immensité Grise", level: 2 },
            { id: "lieu-tour-blanche", title: "Tour Blanche", level: 3, tag: "ardelie_tour_blanche" },
            { id: "lieu-souterrains-immensite-forteresse-monde", title: "Forteresse-Monde (Souterrains)", level: 3, tag: "ardelie_forteresse_geo" },
            
            { id: "lieu-mer-de-jade-et-archipel", title: "Mer de Jade & Archipel", level: 2 },
            { id: "sous-archipel-navire-kaelen", title: "Navire d’Elkyriel", level: 3, tag: "ardelie_aldhaven_port" },
            { id: "sous-archipel-debouche-portail-grand-air", title: "Débouché Portail du Grand Air", level: 3, tag: "mer_jade_archipel" },
            
            { id: "lieu-marches-orientales", title: "Marches orientales", level: 2 },
            { id: "sous-routes-des-marches-orientales", title: "Routes & Valdorne", level: 3, tag: "ardelie_marches_routes" },
            { id: "sous-rochebrune", title: "Rochebrune", level: 3, tag: "ardelie_rochebrune" },
            
            { id: "royaume-varethis", title: "2. Royaume de Varethis", level: 1 },
            { id: "lieu-karsenne", title: "Karsenne", level: 2 },
            { id: "lieu-palais-royal-de-karsenne", title: "Palais royal", level: 3, tag: "varethis_palais" },
            { id: "sous-parfumerie-de-maitre-leirykle", title: "Parfumerie de Leirykle", level: 3, tag: "varethis_parfumerie" },
            { id: "lieu-selyne-var-cellule-des-corbeaux", title: "Cellule des Corbeaux", level: 3, tag: "varethis_corbeaux" },
            { id: "lieu-domaine-de-clairval", title: "Domaine de Clairval", level: 2, tag: "varethis_clairval" },
            { id: "lieu-passe-des-trois-bornes", title: "Passe des Trois Bornes", level: 2, tag: "varethis_trois_bornes" },
            { id: "lieu-ailleurs-en-varethis", title: "Ailleurs en Varethis", level: 2, tag: "varethis_ailleurs" },
            
            { id: "empire-cinq-trones", title: "3. Empire des Cinq Trônes", level: 1 },
            { id: "empire-royaume-traverse", title: "Royaume de Traverse", level: 2 },
            { id: "lieu-palais-royal-d-elyria", title: "Élyria (Capitale & Palais)", level: 3, tag: "traverse_elyria" },
            { id: "lieu-elyria-autorites-civiles-commerciales", title: "Autorités Civiles & Commerciales", level: 3, tag: "traverse_elyria_autorites" },
            { id: "lieu-quais-d-elyria", title: "Quais d’Élyria", level: 3, tag: "traverse_quais_elyria" },
            
            { id: "section-comtes-urbains-traverse", title: "Les Comtés Urbains", level: 3 },
            { id: "lieu-calde-sur-rive", title: "Calde-sur-Rive", level: 4, tag: "traverse_calde" },
            { id: "lieu-clair-verger", title: "Clair-Verger", level: 4, tag: "traverse_clair_verger" },
            { id: "lieu-grands-vergers", title: "Grands-Vergers", level: 4, tag: "traverse_grands_vergers" },
            { id: "lieu-asten", title: "Asten", level: 4, tag: "traverse_asten" },
            { id: "lieu-haute-rive", title: "Haute-Rive", level: 4, tag: "traverse_haute_rive" },
            { id: "lieu-bois-serein", title: "Bois-Serein", level: 4, tag: "traverse_bois_serein" },
            { id: "lieu-rive-noire", title: "Rive-Noire", level: 4, tag: "traverse_rive_noire" },
            { id: "lieu-puits-de-veyr", title: "Puits de Veyr", level: 4, tag: "traverse_puits_veyr" },
            { id: "lieu-traverse-10e-cite-forteresse-monde", title: "10e Cité (Forteresse-Monde)", level: 3, tag: "traverse_10e_cite" },
            
            { id: "empire-royaume-gor-kadar", title: "Royaume de Gor-Kadar", level: 2 },
            { id: "lieu-kadar-rauk", title: "Kadar-Rauk", level: 3, tag: "gorkadar_kadar_rauk" },
            { id: "lieu-haut-bois", title: "Haut-Bois", level: 3, tag: "gorkadar_haut_bois" },
            { id: "lieu-sources-de-rauk", title: "Sources de Rauk", level: 3, tag: "gorkadar_sources_rauk" },
            { id: "lieu-hautes-lames-gor-kadar", title: "Cimes des Hautes-Lames", level: 3, tag: "gorkadar_hautes_lames" },
            
            { id: "empire-royaume-astreane", title: "Concordat d'Astréane", level: 2 },
            { id: "sous-astreane-lumerys", title: "Lumérys", level: 3, tag: "astreane_lumerys" },
            
            { id: "empire-royaume-dhor-kez", title: "Ligues de Dhor-Kez", level: 2 },
            { id: "sous-dhor-kez-kez-bruma", title: "Kez-Bruma & Carrières", level: 3, tag: "dhorkez_kez_bruma" },
            
            { id: "empire-royaume-orsenn", title: "Royaume d'Orsenn", level: 2 },
            { id: "sous-orsenn-orsenn", title: "Orsenn", level: 3, tag: "orsenn_capitale" }
        ];

        const indexList = [];
        structureGeographique.forEach(loc => {
            indexList.push({ id: loc.id, title: loc.title, level: loc.level });

            if (loc.tag) {
                const tagsCherches = Array.isArray(loc.tag) ? loc.tag : [loc.tag];
                const occupants = trierParNom(allP.filter(p => p.tags && p.tags.lieux && tagsCherches.some(t => p.tags.lieux.includes(t))));
                occupants.forEach(p => {
                    indexList.push({ id: p.id, title: p.nom, level: loc.level + 1 });
                });
            }
        });

        return indexList;
    }
 
    /**
     * Point d'entrée pour index.html
     */
    function renderView(viewMode) {
        const mode = viewMode || 'region';
        if (mode === 'alpha') return buildAlphaView();
        if (mode === 'titre') return buildTitreView();
        if (mode === 'espece') return buildEspeceView();
        if (mode === 'harem') return buildHaremView();
        if (mode === 'secret') return buildSecretView();
        if (mode === 'morts') return buildMortsView();
        return buildRegionView();
    }

    return {
        renderView: renderView,
        getIndex: getIndex,
        PNJ: PNJ,
        MORTS: MORTS
    };

})();
