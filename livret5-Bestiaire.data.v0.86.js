/**
 * TRAME - Livret 5 : Bestiaire
 * Base de données exhaustive et moteur d'indexation dynamique
 */

window.TRAME_Bestiaire = (function() {

    // Dictionnaire central de toutes les créatures avec textes intégraux
    const CREATURES = {
        // --- ARAIGNÉES ---
        araignee_geante: {
            id: "creature-araignee-geante",
            nom: "Géante",
            type: "Araignée",
            type_id: "section-araignees",
            type_label: "Araignées",
            dangerosite: "1",
            dangerosite_id: "danger-1",
            echelon: "Figurant",
            description: "Créature cauchemardesque de la taille d'un poney, généralement tapie au plafond ou dans les grands arbres.",
            allonge: "Distance (Toile), Moyenne (Pattes), Courte (Crochets).",
            stats: "Att: saisie +1, Pro: vs dir +1, Tal: Surv +1.",
            tactique: "Tente une Att saisie (Toile) pour entraver la cible avant de l'empoisonner avec une Att dir (crochets).",
            butin: "<strong>1 UB Peuple</strong> — En fouillant les restes de cocons à moitié dissous, on découvre les possessions des victimes précédentes : quelques pièces d'argent, un bijou simple, une arme courante comme une lance ou une dague en bon état, un outil de métier fonctionnel, ou divers petits objets de voyage (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple — une amulette en cuivre polie, un collier de perles de verre, une dague avec un fourreau usé mais une lame intacte, etc. — ou exceptionnellement enrichir ou appauvrir le butin par la malchance d'une victime : mendiant sans le sou, ou voyageur porteur d'une lettre scellée, d'un insigne ou d'une clé offrant une amorce narrative). La soie d'araignée est extrêmement solide et peut servir à fabriquer des cordes ou des vêtements particulièrement résistants et doux au toucher (soyeux). Les glandes à venin peuvent être extraites, mais l'opération est délicate (Test de Survie Difficulté 1)."
        },
        araignee_cameleon: {
            id: "creature-araignee-cameleon",
            nom: "Caméléon",
            type: "Araignée",
            type_id: "section-araignees",
            type_label: "Araignées",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Figurant",
            description: "Créature cauchemardesque de la taille d'un poney, change naturellement de couleur pour se fondre dans son environnement, généralement tapie au plafond ou dans les grands arbres.",
            allonge: "Distance (Toile), Moyenne (Pattes), Courte (Crochets).",
            stats: "Att: saisie +1, Pro: vs dir +1, Tal: Surv +1, Félin +1 (caméléon).",
            tactique: "Quasi invisible (corps qui se fond dans l'environnement), tente une Att saisie (Toile) pour entraver la cible avant de l'empoisonner avec une Att dir (crochets).",
            butin: "<strong>1 UB Riche</strong> — Dissimulés dans les enchevêtrements de soie qui adopte la teinte exacte de son environnement pour se fondre parfaitement dans le décor, les cocons et leur contenu ne se révèlent qu'à une observation minutieuse (Test de Perception Difficulté 1). Les dépouilles des victimes offrent leurs possessions habituelles de voyageur : quelques pièces d'argent, un bijou simple, une arme courante, un outil usuel, ou divers petits objets personnels (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple — une amulette en cuivre, un collier de perles de verre, une dague avec son fourreau, etc. — ou exceptionnellement enrichir ou appauvrir le butin par la malchance d'une victime : mendiant sans le sou, ou voyageur porteur d'une lettre scellée, d'un insigne ou d'une clé offrant une amorce narrative). La véritable valeur réside dans la soie caméléon elle-même : sa couleur s'adapte instantanément à son environnement pour se confondre avec les teintes environnantes, la rendant quasi invisible une fois tissée. Elle est extrêmement solide et d'une douceur soyeuse. Bien qu'on puisse l'utiliser pour fabriquer des cordes ou des vêtements résistants, on lui préférera la confection d'une cape de soie d'araignée caméléon (voir Livret 3, section Objets Magiques), ou exceptionnellement une toile de tente, afin de profiter pleinement de ses propriétés de dissimulation. Les glandes à venin peuvent être extraites, mais l'opération est délicate (Test de Survie Difficulté 1)."
        },
        araignee_colossale: {
            id: "creature-araignee-colossale",
            nom: "Colossale",
            type: "Araignée",
            type_id: "section-araignees",
            type_label: "Araignées",
            dangerosite: "2",
            dangerosite_id: "danger-2",
            echelon: "Majeur",
            description: "Une très vieille araignée géante qui au fil du temps est devenue encore plus grande et dangereuse, souvent à la tête d'une colonie d'araignées géantes.",
            allonge: "Distance (Toile), Moyenne (Crochets).",
            stats: "Att: saisie +2, dir +1, Pro: vs dir et saisie +1, tronc, mbre et tête +1 (Chitine, Dur: 6), Tal: Surv +1.",
            tactique: "Tente une Att saisie (Toile) pour entraver la cible avant de l'empoisonner avec une Att dir (crochets).",
            butin: "<strong>1 UB Riche</strong> — Au cœur de son antre, l'entassement de vastes cocons révèle les possessions de nombreuses victimes accumulées : plusieurs armes courantes, une collection de bijoux simples, outils de métiers variés, équipements de voyage et bourses contenant une quantité significative de pièces d'argent (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple — plusieurs amulettes en cuivre polies, colliers de perles de verre, dagues avec fourreaux usés mais lames intactes, etc. — ou y découvrir dissimulée parmi le lot une petite richesse inattendue : une bourse bien garnie, un bijou de meilleure facture, ou un objet singulier comme une lettre scellée, un insigne ou une clé offrant une amorce narrative). La grande quantité de soie récoltée sur ces cocons volumineux est extrêmement solide et peut servir à fabriquer des cordes ou des vêtements particulièrement résistants et doux au toucher (soyeux). Les glandes à venin peuvent être extraites des crochets massifs, mais l'opération est délicate (Test de Survie Difficulté 1)."
        },
        araignee_cameleon_colossale: {
            id: "creature-araignee-cameleon-colossale",
            nom: "Caméléon Colossale",
            type: "Araignée",
            type_id: "section-araignees",
            type_label: "Araignées",
            dangerosite: "2+",
            dangerosite_id: "danger-2-plus",
            echelon: "Majeur",
            description: "Une très vieille araignée géante qui au fil du temps est devenue encore plus grande et dangereuse, change naturellement de couleur pour se fondre dans son environnement, souvent à la tête d'une colonie d'araignées géantes caméléons.",
            allonge: "Distance (Toile), Moyenne (Crochets).",
            stats: "Att: saisie +2, dir +1, Pro: vs dir et saisie +1, tronc, mbre et tête +1 (Chitine, Dur: 6), Tal: Surv +1, Félin +2 (caméléon).",
            tactique: "Quasi invisible (corps qui se fond dans l'environnement), tente une Att saisie (Toile) pour entraver la cible avant de l'empoisonner avec une Att dir (crochets).",
            butin: "<strong>4 à 6 UB Riche</strong> — Dissimulés dans les enchevêtrements massifs de soie qui adopte la teinte exacte de son environnement pour se fondre parfaitement dans le décor, les vastes cocons et leur contenu ne se révèlent qu'à une observation minutieuse (Test de Perception Difficulté 1). L'entassement révèle les possessions de nombreuses victimes accumulées : plusieurs armes courantes, une collection de bijoux simples, outils de métiers variés, équipements de voyage et bourses contenant une quantité significative de pièces d'argent (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple — plusieurs amulettes en cuivre polies, colliers de perles de verre, dagues avec fourreaux usés mais lames intactes, etc. — ou y découvrir dissimulée parmi le lot une petite richesse inattendue : une bourse bien garnie, un bijou de meilleure facture, ou un objet singulier comme une lettre scellée, un insigne ou une clé offrant une amorce narrative). La grande quantité de soie caméléon récoltée, dont la couleur s'adapte instantanément à son environnement pour se confondre avec les teintes environnantes, est extrêmement solide et d'une douceur soyeuse. On lui préférera la confection d'une cape de soie d'araignée caméléon (voir Livret 3, section Objets Magiques), ou exceptionnellement une toile de tente, afin de profiter pleinement de ses propriétés de dissimulation. Les glandes à venin peuvent être extraites des crochets massifs, mais l'opération est délicate (Test de Survie Difficulté 1)."
        },
        araignee_drider: {
            id: "creature-araignee-drider",
            nom: "Drider",
            type: "Araignée",
            type_id: "section-araignees",
            type_label: "Araignées",
            dangerosite: "4+",
            dangerosite_id: "danger-4-plus",
            echelon: "Majeur",
            description: "Mutation rarissime d'une araignée colossale ayant développé une intelligence supérieure et un buste humanoïde chitiné, tout en conservant le gabarit agile d'une araignée géante. Vénérée comme une véritable divinité vivante par certaines peuplades ou gobelines, elle puise sa puissance magique directement dans la foi et les dévotions fanatiques de ses fidèles.",
            allonge: "Longue (Pattes antérieures effilées), Distance (Magie, Toile), Courte (Crochets).",
            stats: "Att: dir +4, saisie +4, Pro: vs dir et saisie +1, res tronc, mbre et tête +1, armure tronc, mbre et tête +3 (Chitine renforcée, Dur: 10), Tal: Surv +1, Percep +1, Félin +1, Sav Acad +1.",
            tactique: "Jamais seule, elle est systématiquement escortée par au moins 4 Araignées Géantes et 1 Araignée Colossale qui forment son premier cercle de protection. Au combat, elle use de contrôle mental pour briser la cohésion adverse, tout en restant à distance. En mêlée, elle utilise ses grandes pattes antérieures comme des piques pour empaler ses adversaires (Att: dir) à longue allonge, ou projette ses toiles pour immobiliser (Att: saisie) les cibles les plus dangereuses avant de leur injecter son venin.",
            butin: "<strong>1 UB Opulent</strong> — Au pied de son trône de toiles s'accumulent des décennies d'offrandes pieuses apportées par ses adorateurs et les dépouilles méthodiquement dépouillées de ses nombreuses victimes : monceaux de vaisselle liturgique en argent, joyaux anciens et parures royales arrachées aux captifs de marque, lingots d'or fondus grossièrement, armes cérémonielles ouvragées et bourses pleines (Le MJ peut librement varier la quantité et la nature des objets selon les besoins narratifs, par exemple un focalisateur magique intact, un parchemin scellé portant des secrets d'État, des parures princières ou un bijou familial offrant une accroche narrative).",
            autre_details: "<strong>• Magie Innée :</strong> Catalyseur vivant alimenté par la ferveur religieuse. Elle lance ses sorts sans focalisateur et peut maintenir un unique sort actif en permanence sans subir de malus de maintien (souvent utilisé pour maintenir sa <em>Métamorphose en humanoïde séduisant</em> ou son <em>Invisibilité</em>). Tout sort additionnel maintenu au-delà de ce premier sort provoque les effets et malus normaux.<br><strong>• Sorts connus :</strong> <em>Invisibilité</em>, <em>Métamorphose en humanoïde séduisant</em>, <em>Contrôle mental</em>, <em>Lecture des pensées</em>, <em>Télépathie</em>, <em>Dard de poison</em>, <em>Toile d'araignée</em>."
        },

        // --- BANDITS ---
        bandit_vaurien: {
            id: "creature-bandit-vaurien",
            nom: "Vaurien",
            type: "Bandit",
            type_id: "section-bandits",
            type_label: "Bandits",
            dangerosite: "1",
            dangerosite_id: "danger-1",
            echelon: "Figurant",
            description: "Brigand armé d'une hache ou d'une masse.",
            allonge: "Moyenne.",
            stats: "Att: cir +1, Tal: Fourb +1.",
            tactique: "Met tout son poids dans des coups larges pour briser la garde.",
            butin: "<strong>1 UB Peuple</strong> — Sur le corps ou dans les possessions du vaurien : une hache ou une masse de facture courante, une dague dans la ceinture, une bourse contenant quelques pièces d'argent, et divers objets de la vie de hors-la-loi (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple une longueur de corde solide, un masque de tissu pour dissimuler les traits, une flasque d'alcool, des dés marqués, une carte grossière de la région avec des croix au crayon, une liste de proies potentielles griffonnée sur un bout de parchemin, un insigne de milice volé, ou une bague tirée d'un doigt)."
        },
        bandit_brute: {
            id: "creature-bandit-brute",
            nom: "Brute",
            type: "Bandit",
            type_id: "section-bandits",
            type_label: "Bandits",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Évolué",
            description: "Colosse cicatrisé avec armure de cuir et hache lourde, souvent chef d'un groupe de Vaurien.",
            allonge: "Longue (Hache à deux mains).",
            stats: "Att: cir +1 et saisie +1, Pro: tronc et mbre +1 (Armure de cuir, Dur: 6).",
            tactique: "Privilégie les attaques lourdes (Att cir); utilise sa force pour une Att saisie et jeter au sol si l'adversaire esquive ou bloque trop.",
            butin: "<strong>1 UB Peuple</strong> — Sur la Brute ou dans ses affaires : une hache à deux mains, une armure de cuir, une bourse contenant une poignée de pièces d'argent, et divers objets de chef de petit groupe (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple un cornet ou un sifflet pour donner le signal, un petit livre de comptes griffonné, une outre de vin ou de bière, un jeu de dés en os, une longueur de corde pour lier les prisonniers, une amulette porte-bonheur, ou une marque de gang tatouée ou en médaillon).<br><strong>• Camp ou repaire :</strong> <strong>1 à 4 UB Peuple</strong> — Si la Brute et son groupe ont établi un campement (campement de route, grotte de fortune ou cavée forestière), son contenu varie selon leur activité récente. Il peut s'agir de simples provisions de subsistance (nourriture, boisson, couvertures, tentes rudimentaires), de butin récent encore mal rangé (sacs de marchandises volées, ballots de tissu, caisses d'outils), ou exceptionnellement d'une cage de transport contenant un esclave de labeur ou un prisonnier destiné à la rançon. Chaque campement doit refléter la spécialité momentanée du groupe : pillage de caravane, rançonnage de voyageurs, ou commerce de contrebande."
        },
        bandit_coupe_jarret: {
            id: "creature-bandit-coupe-jarret",
            nom: "Coupe-jarret",
            type: "Bandit",
            type_id: "section-bandits",
            type_label: "Bandits",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Figurant",
            description: "Brigand coutumier des pillages et des embuscades.",
            allonge: "Distance (Arc, Arbalète ou fronde) et Moyenne (Arme à une main) ou Courte (Dague).",
            stats: "Att: dir et saisie +1, Tal: Athlé et Félin +1.",
            tactique: "Leurs embuscades depuis une position dissimulée (Félin +1) sont redoutables et difficile à détecter pour éviter la surprise (attention l'avantage que confère une attaque surprise est redoutable pour les PJ, souvent mortelle).",
            butin: "<strong>1 UB Peuple</strong> — Sur le corps ou dissimulé dans ses cachettes : une dague affilée, un arc court ou une arbalète de poing avec quelques munitions, une sacoche contenant des outils de cambrioleur, et une bourse avec quelques pièces d'argent (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple un grappin léger, une fiole de poison, un capuchon de laine, une paire de gants sans doigts, une longueur de corde fine, un masque de cuir, un carnet de codes de rues, ou une clef de serrure)."
        },
        bandit_chef_de_bande: {
            id: "creature-bandit-chef-de-bande",
            nom: "Chef de bande",
            type: "Bandit",
            type_id: "section-bandits",
            type_label: "Bandits",
            dangerosite: "2+",
            dangerosite_id: "danger-2-plus",
            echelon: "Majeur",
            description: "Chef de groupe hétéroclite (divers types de bandits) ou homogène (même type de bandits) de bandits humains, peuvent parfois avec leur groupe s'associer à d'autres espèces ou groupe d'autres espèces.",
            allonge: "Distance (Arc, Arbalète ou fronde) et Moyenne (Arme à une main) ou Courte (Dague).",
            stats: "Att: dir et saisie +2, Pro: vs dir, cir et saisie +1, tronc et mbre +1 (Armure de cuir, Dur: 6), Tal: Percep, Athlé et Félin +1.",
            tactique: "Reste discret pour repérer l'ennemi le plus problématique et établir une stratégie pour l'occire rapidement.",
            butin: "<strong>1 UB Riche</strong> — Sur le chef ou dans ses affaires : une épée ou une hache de qualité, une armure de cuir bien entretenue, une bourse conséquente de pièces d'argent et quelques pièces d'or, des bijoux, et divers objets d'autorité et de gestion de troupe (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Riche : par exemple une carte détaillée d'un camp caché, un acte de propriété d'une maison de ville, un contrat d'esclave de maison, un insigne de milice ou de garde volé, une bague de sceau, une corne de signalisation, un registre de rançons payées, ou un coffret contenant des pièces d'or).<br><strong>• Camp ou repaire :</strong> <strong>3 à 7 UB Peuple</strong> — Si le Chef dispose d'un repaire établi (antre fortifié, camp retranché ou maison de maître occupée), sa nature dépend de l'orientation criminelle de la bande. Un repaire de rançonneurs abrite des prisonniers de valeur (nobles ou marchands) dans des cellules ou des cages, avec leurs effets personnels confisqués. Un comptoir de contrebande renferme des entrepôts de marchandises (tissus, armes, alcools, épices) empaquetées pour la revente. Un camp de traite contient des esclaves de labeur ou de maison sous bonne garde, avec les chaînes et contrats correspondants. Un simple refuge de brigands ne contiendra que des réserves de subsistance (nourriture, boisson, tentes) proportionnelles à la taille de la troupe. Le MJ détermine l'activité principale du repaire selon les besoins narratifs."
        },

        // --- CHEVAUX ---
        cheval_mule: {
            id: "creature-cheval-mule",
            nom: "Mule",
            type: "Cheval",
            type_id: "section-chevaux",
            type_label: "Chevaux",
            dangerosite: "0",
            dangerosite_id: "danger-0",
            echelon: "Figurant",
            description: "Bête de somme endurante, sûre sur les sentiers escarpés et peu coûteuse.",
            allonge: "Moyenne (Sabots).",
            stats: "Tal: Athlé, Surv et Percep +1.",
            tactique: "Tente de repousser violemment l'attaquant avec ses sabots. Ne peut pas attaquer si monté.",
            butin: "<strong>1 UB Peuple</strong> — Robuste et endurant, moins rapide qu'un cheval mais plus sûr sur les sentiers escarpés et moins coûteux à entretenir (Le MJ peut librement varier la qualité et l'état de l'animal selon ses besoins narratifs : par exemple une mule âgée mais résistante, une jeune têtue, ou une bête de somme docile).<br><strong>• Harnachement et chargement :</strong> <strong>0 à 1 UB Peuple</strong> — Si la mule est équipée (bât, selles de bât, ou simplement en liberté dans un enclos), on trouve un harnais de cuir simple avec des sacoches ou un bât contenant les effets de son propriétaire : de 1 UB Mendiant (sacoches vides ou percées, harnais rapiécé, quelques carottes fanées) à 1 UB Peuple (bourse avec pièces d'argent, outils de voyage, couverture, provisions, ou marchandises de colporteur)."
        },
        cheval_de_trait: {
            id: "creature-cheval-de-trait",
            nom: "De trait",
            type: "Cheval",
            type_id: "section-chevaux",
            type_label: "Chevaux",
            dangerosite: "0",
            dangerosite_id: "danger-0",
            echelon: "Figurant",
            description: "Cheval massif et puissant, destiné au labour et à la traction lourde.",
            allonge: "Moyenne (Sabots).",
            stats: "Tal: Athlé, Surv et Percep +1.",
            tactique: "Tente de repousser violemment l'attaquant avec ses sabots. Ne peut pas attaquer si monté.",
            butin: "<strong>2 UB Peuple</strong> — La bête massive et puissante, destinée au labour des champs ou au tirage de chariots lourds, possédant une force de traction considérable mais peu de vélocité (Le MJ peut librement varier la qualité et l'état de l'animal selon ses besoins narratifs : par exemple un cheval de labour lourd, un percheron de charroi, ou un bidet de ferme encore jeune).<br><strong>• Harnachement et attelage :</strong> <strong>0 à 1 UB Peuple</strong> — Si l'animal est harnaché (selon son usage : attelé à une charrette, sellé de bât, ou en box), on y trouve un harnais de traction renforcé, des traits de cuir épais, et dans les coffres du véhicule ou les sacoches les outils du voyageur ou du fermier : de 1 UB Mendiant (harnais usé aux coutures, charrette branlante vide) à 1 UB Peuple (outils agricoles solides, petite caisse de marchandises, provisions pour la route, ou couvertures de laine)."
        },
        cheval_de_monte: {
            id: "creature-cheval-de-monte",
            nom: "De monte",
            type: "Cheval",
            type_id: "section-chevaux",
            type_label: "Chevaux",
            dangerosite: "0",
            dangerosite_id: "danger-0",
            echelon: "Figurant",
            description: "Cheval rapide et endurant.",
            allonge: "Moyenne (Sabots).",
            stats: "Tal: Athlé, Surv et Percep +1.",
            tactique: "Tente de repousser violemment l'attaquant avec ses sabots. Ne peut pas attaquer si monté.",
            butin: "<strong>2 UB Peuple</strong> — La bête elle-même, monture rapide et endurante apte aux longues distances (Le MJ peut librement varier la qualité et l'état de l'animal selon ses besoins narratifs : par exemple un hongre calme, un étalon capricieux, ou une jument de valeur reproductrice).<br><strong>• Harnachement et affaires :</strong> <strong>0 à 1 UB Peuple</strong> — Si le cheval est équipé (ce qui dépend de son origine : monture active de voyageur, animal sellé en écurie, ou bête sauvage/non harnachée), on y trouve une selle basique en cuir et des rênes simples, ainsi que dans les sacoches les effets de son cavalier : de 1 UB Mendiant (harnais usé, sacoche vide ou contenant juste une pomme et une longueur de ficelle) à 1 UB Peuple (bourse avec quelques pièces d'argent, gourde pleine, couverture de laine roulée, corde solide, carte grossière de la région, ou couteau de métal)."
        },
        cheval_de_guerre: {
            id: "creature-cheval-de-guerre",
            nom: "De Guerre (Destrier)",
            type: "Cheval",
            type_id: "section-chevaux",
            type_label: "Chevaux",
            dangerosite: "1 (1+ barde)",
            dangerosite_id: "danger-1",
            echelon: "Évolué",
            description: "Cheval robuste et puissant, entraîné au combat.",
            allonge: "Moyenne (Sabots).",
            stats: "Att: dir +1, Tal: Athlé, Surv et Percep +1. Si barde: Pro tête, tronc et mbre +2 (Dur 8), Athlé 0.",
            tactique: "Tente de repousser violemment l'attaquant avec ses sabots, ne peut pas attaquer si monté.",
            butin: "<strong>1 UB Riche</strong> — Le destrier lui-même, cheval robuste et puissant, entraîné au combat, apte à porter un chevalier lourd et à résister aux tumultes de la mêlée (Le MJ peut librement varier la qualité et l'état de l'animal selon ses besoins narratifs : par exemple un hongre de bataille aguerri, un étalon de parade capricieux).<br><strong>• Harnachement et barda :</strong> <strong>0 à 1 UB Peuple</strong> — Le destrier porte une selle de qualité en cuir renforcé avec des rênes ornées, et les sacoches contiennent les effets d'un chevalier ou d'un noble : une bourse garnie de pièces d'argent et quelques pièces d'or, une pierre à aiguiser fine, une carte de patrouille ou un registre de comptes militaire, un insigne ou un sceau de maison noble, une flasque d'alcool de qualité, ou des rations de voyage (Le MJ peut librement varier la quantité, la diversité et l'état selon les besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Riche), plus 1 UB Riche si le destrier est bardé."
        },

        // --- DRAGONS ---
        dragon_bestial: {
            id: "creature-dragon-bestial",
            nom: "Dragon Bestial",
            type: "Dragon",
            type_id: "section-dragons",
            type_label: "Dragons",
            dangerosite: "5+",
            dangerosite_id: "danger-5-plus",
            echelon: "Majeur",
            description: "Immense reptile quadrupède et ailé dont la silhouette rappelle celle d'un Dragon Noble, bien que son corps soit généralement plus lourd, ses traits plus animaux et ses mouvements moins gracieux. Dépourvu de magie et de toute perception surnaturelle, il possède néanmoins des sens naturels particulièrement développés, une excellente mémoire et une véritable intelligence de prédateur. Il observe son territoire, apprend les habitudes de ses proies, reconnaît les pièges et sait attendre le moment favorable pour attaquer. Les individus les plus anciens peuvent se montrer particulièrement rusés, sans posséder le langage, la pensée abstraite ni les ambitions complexes d'un Dragon Noble.<br>Son organisme est adapté aussi bien à la terre ferme qu'aux milieux aquatiques. Il peut voler grâce à ses ailes puissantes, respirer sous l'eau, nager avec aisance et creuser la terre ou la roche friable à l'aide de ses griffes et de sa force prodigieuse. Sa vision nocturne et thermique lui permet de chasser dans l'obscurité, mais ces sens demeurent entièrement naturels et peuvent être trompés, aveuglés ou masqués.",
            allonge: "Distance (Souffle), Longue (Queue / Griffes / Morsure).",
            stats: "Att: dir +5 (Griffes, Morsure), cir +5 (Souffle, Queue, Ailes), saisie +5 (Serres, Mâchoires), Pro: res tronc, mbre et tête +2, armure tronc, mbre et tête +3 (Écailles et cuir, Dur: 20). Tal: Percep +1, Athlé +2, Félin +1, Surv +1.",
            tactique: "Prédateur territorial, patient et rusé, il évite de se jeter aveuglément sur une proie dont il ignore les capacités. Il observe les intrus, apprend leur comportement et exploite le relief, l'obscurité, les profondeurs ou les conditions météorologiques pour les attaquer au moment le plus favorable. Il utilise généralement son souffle pour disperser un groupe ou couper une retraite, puis saisit une proie isolée entre ses mâchoires ou dans ses serres afin de l'emporter. S'il rencontre une résistance inattendue, il peut battre en retraite, demeurer à distance et chercher une autre approche. Il ne comprend toutefois ni les raisonnements abstraits ni les stratégies complexes d'une créature pleinement consciente.",
            butin: "<strong>1 UB Opulent</strong> — Son immense dépouille fournit une grande quantité de cuir épais, d'écailles extrêmement résistantes, de crocs, de griffes et de substances organiques rares. Ses écailles et son cuir peuvent servir à confectionner des armures et des protections d'une qualité exceptionnelle, mais dépourvues de propriétés magiques. Les glandes alimentant son souffle peuvent être utilisées dans la préparation de poisons, d'acides, de combustibles, de remèdes ou de substances alchimiques selon sa lignée. Leur prélèvement exige un Test de Survie Difficulté 1 ; en cas d'échec, les glandes sont endommagées ou leur contenu expose directement celui qui tente de les extraire.<br><strong>• Antre :</strong> <strong>1 à 3 UB Riche</strong> — Le Dragon Bestial n'amasse pas volontairement les richesses et ne leur accorde aucune valeur. Son antre peut néanmoins contenir les possessions de nombreuses proies : armes et armures déformées, sacoches éventrées, bijoux, pièces de monnaie, restes de caravanes ou objets transportés par des voyageurs dévorés (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon l'âge de la créature, la fréquentation de son territoire et ses habitudes de chasse).",
            autre_details: "<strong>• Souffle :</strong> Une poche organique située dans sa gorge lui permet de projeter une substance ou une énergie naturelle dépendant de sa lignée, comme des flammes, un liquide corrosif, un nuage toxique ou un souffle glacé. Cette faculté est entièrement biologique et ne constitue pas un sort.<br><strong>• Sens naturels :</strong> Voit parfaitement dans le noir et distingue les sources de chaleur. Ses autres sens sont particulièrement développés, mais ne lui permettent ni de voir à travers la matière, ni de percevoir les flux magiques, les créatures invisibles ou ce qui échappe normalement aux sens physiques.<br><strong>• Autre :</strong> Vol, nage et creusement dans la terre, le sable, les éboulis et les roches suffisamment friables. Amphibie. Respiration aquatique. Possède une immunité naturelle en rapport avec la couleur de ses écailles et la nature de son souffle (ex. : rouge, immunité au feu)."
        },
        dragon_noble: {
            id: "creature-dragon-noble",
            nom: "Dragon Noble",
            type: "Dragon",
            type_id: "section-dragons",
            type_label: "Dragons",
            dangerosite: "6+",
            dangerosite_id: "danger-6-plus",
            echelon: "Majeur",
            description: "Une entité millénaire dont l'existence même est liée aux flux magiques du monde. Sa présence impose généralement la terreur ou le respect absolu. Il peut être confondu avec le Dragon bestial auquel sa silhouette peut ressembler. Extrêmement puissant mais aussi étonnamment agile, que ce soit sur terre, dans les airs, ou sous les eaux les plus profondes. En usant de magie (via un sort de métamorphose qu'il maintient sans malus), il peut prendre l'apparence d'un humain ou de toute autre créature, en appliquant les règles générales de la Métamorphose détaillées au Livret 2 (le choix de la forme est limité par sa plus haute statistique de combat ; il perd ses facultés morphologiques physiques comme son armure d'écailles de +3, mais conserve l'intégralité de ses capacités d'essence magique).<br>Les Dragons maléfiques ont souvent des centaines de Kobold voir plusieurs milliers pour les plus anciens, qui sont à leur service et leur vouent une adoration sans limites",
            allonge: "Distance (Souffle / Magie), Longue (Queue / Griffes / Morsure).",
            stats: "Att: dir +6 (Magie, Griffes, Morsure), cir +6 (Souffle, Queue, Ailes), saisie +6 (Serres, Mâchoires), Pro: res tronc, mbre et tête +3, armure tronc, mbre et tête +3 (Écailles et cuir, Dur: 20).",
            tactique: "Particulièrement intelligent, il est capable d'une grande capacité d'adaptation et de réponse stratégique à toutes les situations. Généralement territorial, avide de richesses et collectionneur. Pas un seul Dragon Noble ne se ressemble au niveau de ses idéaux que de ses habitudes (certains sont bienveillants, d'autres neutres ou purement maléfiques).",
            butin: "<strong>1 à 4 UB Crésus</strong> Dans l'antre du prédateur millénaire s'accumulent les richesses de siècles de pillage et de tributs : lingots de métaux précieux, gemmes étincelantes, pièces d'or et d'argent en cascades, coffrets d'ébène et d'ivoire, oeuvres d'art (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Crésus : par exemple des titres de propriété de domaines entiers, des réseaux de traite d'esclaves, des focalisateurs magiques anciens, ou des armures de chevaliers vaincus). Ses écailles d'une dureté exceptionnelle et son cuir sont utilisables pour la confection d'armures et de protections magiques, sans oublier son sang pour des potions et son cœur pour un rituel risqué (voir Livret 3).",
            autre_details: "<strong>• Magie Innée :</strong> Catalyseur vivant. Il lance ses sorts sans focalisateur et peut maintenir un unique sort actif en permanence sans subir de malus de maintien (généralement utilisé pour altérer son environnement direct : brume, chaleur ou froid extrême, pousse accélérée de végétaux fleuris, etc.). Tout sort additionnel maintenu au-delà de ce premier sort sans malus de maintien provoque les effets et malus normaux.<br><strong>• Talents :</strong> Percep +2, Sav Acad +1, Athlé +2, Félin +1, Surv +1.<br><strong>• Perception surnaturelle :</strong> Sa vue, son ouïe, son odorat, son goût et son toucher surpassent les capacités sensorielles de toute créature animale. Il voit parfaitement dans le noir le plus total et à travers la matière, perçoit les vibrations et distingue un spectre lumineux élargi lui permettant notamment de voir les sources de chaleur.<br><strong>• Autre :</strong> Vol, nage, creuse dans la terre et la roche, aussi bien qu'il marche. Respiration aquatique. Possède une immunité en rapport à la couleur de ses écailles (ex. : rouge, immunité au feu)."
        },
        dragon_wyverne: {
            id: "creature-dragon-wyverne",
            nom: "Wyverne",
            type: "Dragon",
            type_id: "section-dragons",
            type_label: "Dragons",
            dangerosite: "2+",
            dangerosite_id: "danger-2-plus",
            echelon: "Figurant",
            description: "Prédateur aérien reptilien mesurant près de neuf mètres de long de la gueule au bout de la queue. Son corps musculeux, recouvert d'épaisses écailles ternes, est dépourvu de pattes avant : celles-ci forment de vastes ailes membraneuses. Au sol, elle se dresse sur deux puissantes pattes arrière dotées de serres capables de broyer une cage thoracique. Sa mâchoire est garnie d'innombrables crocs acérés, et sa très longue queue articulée se termine par un dard effilé suintant un venin mortel.",
            allonge: "Longue (Dard empoisonné, Morsure, Serres).",
            stats: "Att: dir +2 (Dard) et saisie +2 (Serres, Morsure). Pro: armure tête, tronc et mbre +2 (Écailles dures, Dur: 10). Tal: Athlé +1.",
            tactique: "Fond sur sa proie en piqué pour la verrouiller dans ses serres ou ses mâchoires (Att: saisie) afin de l'empêcher de fuir ou de l'emporter dans les airs. Une fois la cible immobilisée, elle frappe implacablement avec sa queue (Att: dir). En cas d'Impact avec le dard, le poison fulgurant foudroie la victime. Si la blessure n'entraîne pas une mort immédiate, le venin impose le désavantage de -1 à toutes les actions (paralysie partielle, nécrose) et nécessite des soins en extrême urgence (Magie de Restauration ou antidote préparé via le talent Survie/Savoir) pour survivre.",
            butin: "<strong>1 UB Riche</strong> — Le cuir épais de la wyverne, matériau prestigieux pour la confection d'armures de cuir de grande qualité, ainsi que les glandes à venin permettant de préparer un poison redoutable (extraction délicate, Test de Survie Difficulté 1).<br><strong>• Nid :</strong> <strong>1 UB Peuple</strong> — Accessible uniquement après un Test d'Athlétisme ou d'Aptitude Féline Difficulté 1 pour gravir le piton rocheux, l'affleurement de basalte ou les ruines où la bête a établi sa tanière. Au fond du nid gisent les restes non digérés de proies récentes : os rongés, lambeaux d'armure, et sacoches déchirées contenant les effets personnels des malheureux (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple une bourse contenant quelques pièces d'argent, un bracelet en bronze, une dague émoussée par les sucs digestifs, une bague prise sur un doigt, ou une carte trempée mais lisible)."
        },

        // --- DRAKES ---
        drake_rocheux: {
            id: "creature-drake-rocheux",
            nom: "Rocheux",
            type: "Drake",
            type_id: "section-drakes",
            type_label: "Drakes",
            dangerosite: "0+",
            dangerosite_id: "danger-0-plus",
            echelon: "Figurant",
            description: "Gros lézard trapu aux écailles rocheuses de la taille d'un cheval.",
            allonge: "Moyenne (Morsure).",
            stats: "Pro: tronc, mbre et tête +2 (Globale, Dur: 8), vs saisie +1, Tal: Félin et Surv +1.",
            tactique: "Reste immobile parmi les rochers, avec lesquels il se confond, en attendant qu'une proie s'approche à portée de sa morsure. S'il attaque sans avoir été détecté, il bénéficie d'un Avantage Tactique de +1 à sa première attaque. Peu rapide, il ne poursuit pas une proie qui lui échappe.",
            butin: "<strong>1 UB Peuple</strong> — Dissimulé parmi les rochers où le lézard guettait, ou dans son terrier voisin, on trouve les possessions des malheureuses proies surprises par son attaque soudaine : quelques pièces d'argent éparpillées, un bijou simple, une arme ou un outil échappé des mains tremblantes (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple une bourse en cuir contenant une poignée de pièces, un bracelet de bronze, une dague au fourreau simple, ou une amulette en cuivre). Les écailles de la bête, semblables à des morceaux de roche, sont trop lourdes pour être utilisées dans la confection d'armures. Ses crocs et griffes sont utilisables en trophées, mais dénués de valeur marchande significative.",
            autre_details: "<strong>Autre :</strong> Immunité au feu."
        },
        drake_des_marais: {
            id: "creature-drake-des-marais",
            nom: "Des Marais",
            type: "Drake",
            type_id: "section-drakes",
            type_label: "Drakes",
            dangerosite: "0+",
            dangerosite_id: "danger-0-plus",
            echelon: "Figurant",
            description: "Gros lézard amphibie au corps allongé, de la taille d'un cheval. Ses écailles vert sombre et brun vaseux, couvertes de filaments semblables à des algues, se confondent avec les eaux stagnantes et la végétation des marais.",
            allonge: "Moyenne (Morsure).",
            stats: "Pro: tronc, mbre et tête +2 (Globale, Dur: 8), vs saisie +1, Tal: Félin et Surv +1.",
            tactique: "Demeure immobile dans les eaux peu profondes, seuls ses yeux et ses excroissances dépassant parmi les roseaux. S'il attaque sans avoir été détecté, il bénéficie d'un Avantage Tactique de +1 à sa première attaque. Il saisit sa proie entre ses mâchoires et tente de l'entraîner sous l'eau. Peu rapide, il ne poursuit pas une proie qui lui échappe.",
            butin: "<strong>1 UB Peuple</strong> — Enfouis dans la vase ou retenus parmi les racines proches de son repaire, les restes de ses proies peuvent contenir quelques pièces d'argent, un bijou simple, une arme ou un outil rongé par l'humidité (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple). Ses écailles épaisses, semblables à de la pierre couverte de vase et de végétation, sont trop lourdes et trop rigides pour permettre la confection d'une armure. Ses crocs et ses griffes peuvent servir de trophées, mais sont dénués de valeur marchande significative.",
            autre_details: "<strong>Autre :</strong> Amphibie. Respiration aquatique."
        },
        drake_des_falaises: {
            id: "creature-drake-des-falaises",
            nom: "Des Falaises",
            type: "Drake",
            type_id: "section-drakes",
            type_label: "Drakes",
            dangerosite: "0+",
            dangerosite_id: "danger-0-plus",
            echelon: "Figurant",
            description: "Drake massif de la taille d'un cheval, doté de larges membranes reliant ses membres à ses flancs. Ses épaisses écailles grises, striées et irrégulières reproduisent les teintes et les aspérités de la roche contre laquelle il s'aplatit.",
            allonge: "Moyenne (Morsure, Percussion).",
            stats: "Pro: tronc, mbre et tête +2 (Globale, Dur: 8), vs saisie +1, Tal: Félin et Surv +1.",
            tactique: "Reste plaqué contre une paroi ou un promontoire rocheux en attendant qu'une proie passe en contrebas. Il se laisse alors tomber, utilisant ses membranes comme des freins pour orienter et ralentir sa chute, puis les replie trois ou quatre mètres au-dessus de sa cible afin de s'abattre sur elle de tout son poids. S'il attaque sans avoir été détecté, il bénéficie d'un Avantage Tactique de +1 à sa première attaque. Peu rapide, il ne poursuit pas une proie qui lui échappe.",
            butin: "<strong>1 UB Peuple</strong> — Dans une anfractuosité de la falaise reposent parfois les possessions de ses anciennes proies : quelques pièces d'argent, un bijou simple, une arme ou divers objets de voyage brisés par leur chute (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple). Ses écailles épaisses, semblables à des fragments de roche, sont trop lourdes et trop rigides pour permettre la confection d'une armure. Ses membranes sont résistantes lorsqu'elles sont tendues, mais leur masse et leur épaisseur les rendent impropres au travail du cuir.",
            autre_details: "<strong>Autre :</strong> Incapable de voler. Ses membranes lui permettent seulement de ralentir sa chute en planant maladroitement."
        },
        drake_fouisseur: {
            id: "creature-drake-fouisseur",
            nom: "Fouisseur",
            type: "Drake",
            type_id: "section-drakes",
            type_label: "Drakes",
            dangerosite: "0+",
            dangerosite_id: "danger-0-plus",
            echelon: "Figurant",
            description: "Drake aveugle de la taille d'un cheval, doté d'un crâne renforcé et de pattes antérieures démesurées terminées par de longues griffes. Ses écailles mates et granuleuses prennent la couleur de la terre, du sable ou des éboulis dans lesquels il s'enfouit.",
            allonge: "Moyenne (Morsure, Griffes).",
            stats: "Pro: tronc, mbre et tête +2 (Globale, Dur: 8), vs saisie +1, Tal: Félin et Surv +1.",
            tactique: "S'enfouit à faible profondeur et demeure immobile jusqu'à ce qu'il perçoive les vibrations d'une proie passant au-dessus de lui. S'il attaque sans avoir été détecté, il bénéficie d'un Avantage Tactique de +1 à sa première attaque. Il surgit sous sa cible pour la frapper avec ses griffes ou la saisir entre ses mâchoires. Peu rapide à la surface, il ne poursuit pas une proie qui lui échappe.",
            butin: "<strong>1 UB Peuple</strong> — Dans son terrier ou sous les éboulis provoqués par ses déplacements se trouvent parfois les possessions de ses victimes : quelques pièces d'argent, un bijou simple, une arme, un outil ou divers objets de voyage ensevelis (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple). Ses écailles épaisses, semblables à de la pierre mate couverte de terre, sont trop lourdes et trop rigides pour permettre la confection d'une armure. Ses griffes peuvent servir d'outils rudimentaires ou de trophées, mais possèdent peu de valeur marchande.",
            autre_details: "<strong>Autre :</strong> Creuse rapidement dans la terre meuble, le sable et les éboulis. Perception des vibrations."
        },

        // --- FÉLINS ---
        felin_leopard_des_steppes: {
            id: "creature-felin-leopard-des-steppes",
            nom: "Léopard des Steppes",
            type: "Félin",
            type_id: "section-felins",
            type_label: "Félins",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Figurant",
            description: "Prédateur solitaire et nocturne arpentant l'Immensité Grise. Son pelage tacheté lui offre un camouflage naturel redoutable dans les herbes hautes et les affleurements de basalte.",
            allonge: "Courte (Morsure, Griffes).",
            stats: "Att: dir et saisie +1. Tal: Félin +1, Percep +1, Surv +1.",
            tactique: "Chasseur d'embuscade opérant la nuit. Il utilise sa furtivité (Félin +1) pour approcher sa cible sans être détecté. Il bondit pour la plaquer violemment au sol (Att: saisie) avant de tenter une morsure fatale à la gorge (Att: dir).",
            butin: "<strong>1 UB Peuple</strong> — Dissimulés dans les hautes herbes ou perchés dans les branches où le prédateur traîne ses proies, on découvre les possessions des victimes : quelques pièces d'argent, un bijou simple, une arme courte comme une dague ou une épée de petit format, un outil de voyage, ou divers petits objets personnels (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple une amulette en cuivre polie, un collier de perles de verre, une dague avec son fourreau, une bourse de cuir contenant quelques pièces d'argent, etc., ou exceptionnellement enrichir ou appauvrir le butin par la malchance d'une victime : mendiant sans le sou, ou voyageur porteur d'une lettre scellée, d'un insigne ou d'une clé offrant une amorce narrative). La fourrure tachetée du léopard constitue un matériau recherché pour sa chaleur et son poil soyeux."
        },

        // --- GOBELINS ---
        gobelin_eclaireur: {
            id: "creature-gobelin-eclaireur",
            nom: "Eclaireur",
            type: "Gobelin",
            type_id: "section-gobelins",
            type_label: "Gobelins",
            dangerosite: "0",
            dangerosite_id: "danger-0",
            echelon: "Figurant",
            description: "Petit, vicieux et très mobile, jamais seul.",
            allonge: "Longue (Fronde) et Courte (Dague).",
            stats: "Pro: vs cir +1, Tal: Athlé et Surv +1.",
            tactique: "À distance, utilise leur fronde pour harceler leurs adversaires, engagé au CàC, poignarde les membres pour avoir l'opportunité de reprendre de la distance. Dresse parfois des Loups Gris pour les aider à pister ou combattre, tandis qu'ils restent à distance.",
            butin: "<strong>1 UB Mendiant</strong> — Sur le corps du gobelin ou dans ses affaires : une fronde rudimentaire avec un ballot de pierres lisses, une dague au fil irrégulier, et une bourse en peau mal tannée contenant quelques pièces de cuivre (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Mendiant : par exemple un collier de dents de loup ou de rats géants, une carte grossière tracée au charbon sur un bout de peau, une outre de liquide suspect, des dés taillés dans des os, une longueur de corde fine pour les pièges, ou des sacs de provisions avariées mais comestibles)."
        },
        gobelin_bagarreur: {
            id: "creature-gobelin-bagarreur",
            nom: "Bagarreur",
            type: "Gobelin",
            type_id: "section-gobelins",
            type_label: "Gobelins",
            dangerosite: "0+",
            dangerosite_id: "danger-0-plus",
            echelon: "Figurant",
            description: "Petit, vicieux et teigneux.",
            allonge: "Longue (Massue) ou Courte (Morsure).",
            stats: "Pro: vs cir et dir +1, Tal: Athlé et Félin +1.",
            tactique: "Se cache en embuscade devant les éclaireurs. Utilise maladroitement une arme trop grande pour eux. Rageux : si l'adversaire évite 2x leur attaque, ils lâchent leur arme pour bondir et tenter de le mordre.",
            butin: "<strong>1 UB Mendiant</strong> — Sur le corps du gobelin ou dans ses affaires : une massue trop lourde pour sa taille, une dague de fortune fournie dans la ceinture, et une bourse contenant quelques pièces de cuivre (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Mendiant : par exemple un sac de provisions encore comestibles, un flacon de substance nauséabonde, des cailloux brillants ramassés, un os rongé utilisé comme outil, ou des bouts de cuir pour des réparations)."
        },
        gobelin_chef: {
            id: "creature-gobelin-chef",
            nom: "Chef",
            type: "Gobelin",
            type_id: "section-gobelins",
            type_label: "Gobelins",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Majeur",
            description: "Grand gobelin armé d'une massue.",
            allonge: "Longue (Massue cloutée à deux mains).",
            stats: "Att: cir et saisie +1, Pro: vs cir et dir +1, Tal: Athlé et Félin +1.",
            tactique: "Donne ses ordres en restant caché puis sort de sa cachette pour achever les ennemis et montrer sa force aux autres Gobelins.",
            butin: "<strong>1 UB Peuple</strong> — Sur le Chef ou dans ses affaires : une massue cloutée à deux mains ornée de marques de victoires, des bijoux ostentatoires de statut (collier de trophées, anneaux d'os ou de métal), et une bourse contenant des pièces de cuivre et d'argent (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple une corne ou un sifflet de commandement, un insigne de chef gravé dans l'os, une petite hache de jet de réserve, une cape de fourrure grossière, ou un contrat de domination sur un esclave de labeur)."
        },

        // --- GOLEMS ---
        golem_de_travail: {
            id: "creature-golem-de-travail",
            nom: "Golem de travail",
            type: "Golem",
            type_id: "section-golems",
            type_label: "Golems",
            dangerosite: "0+",
            dangerosite_id: "danger-0-plus",
            description: "Statue humanoïde animée faite de métal, aux conduites et rouages apparents, dont la taille et les proportions varient selon sa fonction. Sa tête présente un visage simplifié mais identifiable, et certaines versions possèdent des membres supplémentaires. Ses mouvements lourds et saccadés sont rythmés par le travail des vérins et par des échappements occasionnels de vapeur dépourvue de fumée. Conçu pour être aussi polyvalent que possible, le golem reçoit généralement des outils interchangeables à l'extrémité de ses bras. Les modèles les plus récents possèdent des mains articulées et utilisent des outils indépendants alimentés directement par le golem.",
            allonge: "Variable selon sa taille et les outils équipés, généralement Longue.",
            stats: "Pro: tronc, mbre et tête +3 (Globale, Dur: 10), Tal: Athlé +2.",
            tactique: "Les modèles anciens n'exécutent que des ordres simples et précis. Les modèles récents peuvent comprendre un objectif et adapter leurs actions aux difficultés rencontrées, sans jamais faire preuve d'une grande intelligence. Lorsqu'il est attaqué sans avoir reçu d'instruction particulière, un modèle ancien poursuit sa tâche, tandis qu'un modèle récent tente de s'éloigner ou riposte avec les outils dont il est équipé.",
            butin: "<strong>1 UB Crésus</strong> si le golem est récupéré intact et fonctionnel. S'il est détruit mais que son épave demeure largement récupérable, l'ensemble de ses composants représente <strong>1 UB Opulent</strong>. Si la destruction ne laisse que quelques débris informes ou inutilisables, leur valeur devient négligeable et ne fournit aucune UB.",
            autre_details: "<strong>• Bridage :</strong> Les Golems de travail récents possèdent les aptitudes latentes d'un Golem de guerre, mais leurs routines de combat et leurs fonctions avancées de perception sont verrouillées. Lever ce bridage exige Mécanique Difficulté 2, Savoir académique Difficulté 2 et la capacité de lancer des sorts avec saisie tête Difficulté 4. Une fois débridé, le golem obtient Att: cir +2 et saisie +1, Percep +1. Il ne reçoit toutefois aucun harnois, bouclier ou armement supplémentaire."
        },
        golem_de_guerre: {
            id: "creature-golem-de-guerre",
            nom: "Golem de guerre",
            type: "Golem",
            type_id: "section-golems",
            type_label: "Golems",
            dangerosite: "2+",
            dangerosite_id: "danger-2-plus",
            description: "Statue humanoïde animée faite de métal, haute d'environ trois mètres et semblable à un chevalier colossal en harnois complet. Son armure dissimule ses conduites et ses rouages, qui ne deviennent visibles que lorsque le harnois est endommagé ou détruit. Ses mouvements lourds et saccadés sont rythmés par le travail des vérins et par des échappements occasionnels de vapeur dépourvue de fumée. Son armement varie selon la mission, mais il porte par défaut un bouclier et un marteau de guerre.",
            allonge: "Longue.",
            stats: "Att: cir +2 et saisie +1, Pro: vs dir +1 suppl. (Bouclier), tronc, mbre et tête +3 (Globale, Dur: 10) et +3 suppl. (Harnois, Dur: 10), Tal: Athlé +2, Percep +1.",
            tactique: "Le Golem de guerre comprend l'objectif qui lui est assigné et adapte ses actions aux difficultés immédiates, sans jamais faire preuve d'une grande intelligence. Avec son équipement standard, il avance derrière son bouclier et porte de larges coups de marteau en attaque circulaire. Il exploite également sa force inhumaine pour saisir un adversaire lorsque la situation s'y prête.",
            butin: "<strong>1 UB Crésus</strong> si le golem est récupéré intact et fonctionnel, harnois, bouclier et armement compris. S'il est détruit mais que son épave et son équipement demeurent largement récupérables, l'ensemble représente <strong>1 UB Opulent</strong>. Si la destruction ne laisse que quelques débris informes ou inutilisables, leur valeur devient négligeable et ne fournit aucune UB."
        },
        golem_experimental: {
            id: "creature-golem-experimental",
            nom: "Golem expérimental",
            type: "Golem",
            type_id: "section-golems",
            type_label: "Golems",
            dangerosite: "2+ var.",
            dangerosite_id: "danger-2-plus",
            description: "Golem de guerre transformé par l'ajout de dispositifs technomagiques expérimentaux immédiatement reconnaissables. Ces modifications peuvent altérer profondément sa taille, ses proportions et le nombre de ses membres. Son apparence finale dépend entièrement du nombre et de la nature des options accumulées, mais sa structure d'origine demeure celle d'une statue animée faite de métal.",
            allonge: "Longue par défaut, mais variable selon les modifications, la taille finale et l'armement du golem.",
            stats: "Le Golem expérimental possède toutes les statistiques du Golem de guerre. Les bonus et particularités de toutes les options installées s'y ajoutent cumulativement. Sa dangerosité est recalculée d'après son score d'attaque le plus élevé et conserve le signe + grâce à ses protections.",
            tactique: "Le Golem expérimental se comporte comme un Golem de guerre. Il comprend l'objectif qui lui est assigné, adapte ses actions aux difficultés immédiates et exploite les options dont il dispose de la manière la plus appropriée, sans jamais faire preuve d'une grande intelligence.",
            butin: "Le Golem expérimental possède la valeur de base du Golem de guerre : <strong>1 UB Crésus</strong> s'il est intact et fonctionnel, ou <strong>1 UB Opulent</strong> s'il est détruit mais que son épave demeure largement récupérable, équipement compris. Les modifications de valeur indiquées par ses options s'appliquent ensuite : les ajouts en UB sont calculés avant les éventuels multiplicateurs de Grande taille ou de Taille humaine. Si la destruction ne laisse que quelques débris informes ou inutilisables, leur valeur devient négligeable et ne fournit aucune UB."
        },

        // --- INDIGÈNES ---
        indigene_chasseur: {
            id: "creature-indigene-chasseur",
            nom: "Chasseur",
            type: "Indigène",
            type_id: "section-indigenes",
            type_label: "Indigènes",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Figurant",
            description: "Pisteur aguerri des terres sauvages, armé d'une lance rudimentaire et protégé par un bouclier de peau tendue.",
            allonge: "Longue (Lance rudimentaire).",
            stats: "Att: dir +1, Pro: vs dir +1 sous condition (Bouclier de peau, Dur: 6), Tal: Félin et Surv +1.",
            tactique: "Se dissimule dans le terrain grâce à son agilité, observe les déplacements de sa proie puis frappe de sa lance depuis la plus grande allonge possible. Face aux projectiles et aux assauts frontaux, il utilise activement son bouclier de peau.",
            butin: "<strong>1 UB Mendiant</strong> — Une lance rudimentaire à pointe de pierre, d'os ou de bois durci, un bouclier de peau tendue (Dur: 6), quelques outils de chasse et de petites réserves tirées du milieu naturel (Le MJ peut librement varier leur nature selon l'environnement : corde végétale, silex, collets, herbes médicinales, viande séchée, dents ou plumes servant d'ornements)."
        },
        indigene_shaman: {
            id: "creature-indigene-shaman",
            nom: "Shaman",
            type: "Indigène",
            type_id: "section-indigenes",
            type_label: "Indigènes",
            dangerosite: "2",
            dangerosite_id: "danger-2",
            echelon: "Évolué",
            description: "Le Shaman est un Indigène maîtrisant la magie. Il se distingue généralement par ses peintures corporelles, ses parures naturelles et les objets singuliers qu’il porte ou utilise pour pratiquer ses sorts. Sa magie lui sert le plus souvent à communiquer avec les esprits, invoquer des créatures ou se métamorphoser.",
            allonge: "Variable (Magie).",
            stats: "Att : saisie +1, Tronc +1, Tal : Percep, Savoir Acad. et Surv +1.",
            tactique: "Le Shaman adapte l’usage de sa magie à la situation. Il peut invoquer une créature pour combattre ou agir à sa place, se métamorphoser afin d’adopter une forme plus appropriée, ou employer d’autres sorts selon ses besoins.",
            butin: "<strong>1 UB Peuple</strong> — Sur le Shaman ou parmi ses affaires se trouvent généralement ses objets personnels, ses parures et divers éléments employés pour pratiquer la magie. Le MJ peut librement en déterminer la nature selon les sorts utilisés par le Shaman et les ressources dont disposent les Indigènes."
        },

        // --- KOBOLDS ---
        kobold_traqueur: {
            id: "creature-kobold-traqueur",
            nom: "Traqueur",
            type: "Kobold",
            type_id: "section-kobolds",
            type_label: "Kobolds",
            dangerosite: "1",
            dangerosite_id: "danger-1",
            echelon: "Figurant",
            description: "Créature chétive mais rapide et adroite.",
            allonge: "Moyenne (Petite Lance).",
            stats: "Att: dir +1, Tal: Percep, Surv et Athlé +1.",
            tactique: "Charge rapidement sa proie pour lui percer le torse avec sa lance.",
            butin: "<strong>1 UB Mendiant</strong> — Sur le kobold ou dans ses affaires : une petite lance rudimentaire à la pointe d'os taillé, une bourse de peau contenant quelques pièces de cuivre, et des sacs de provisions moisies encore comestibles (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Mendiant : par exemple un morceau d'écorce gravé d'un plan grossier, un collier de dents ou de griffes de petit animal, une longueur de corde de chanvre pour les pièges, un sifflet d'os pour les signaux, ou une outre d'eau)."
        },
        kobold_shaman: {
            id: "creature-kobold-shaman",
            nom: "Shaman",
            type: "Kobold",
            type_id: "section-kobolds",
            type_label: "Kobolds",
            dangerosite: "1",
            dangerosite_id: "danger-1",
            echelon: "Évolué",
            description: "Kobold aux écailles vives maniant un bâton orné d'os, dirige un petit groupe de Kobold.",
            allonge: "Distance (Magie).",
            stats: "Att: cir et saisie (Magie) +1, Pro: vs dir +1, Tal: Percep et Athlé +1.",
            tactique: "Tente d'immobiliser ses adversaires pour permettre aux Kobolds Traqueurs de les achever avec leur lance. Seul ou si les Kobolds Traqueurs sont trop loin, attaque avec des sorts de zone.",
            butin: "<strong>1 UB Peuple</strong> — Sur le Shaman ou dans ses affaires : un bâton orné d'os gravés servant de catalyseur improvisé, une bourse contenant quelques pièces d'argent et de cuivre, et divers composants magiques rudimentaires (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple des herbes séchées dans des sachets de peau, des os gravés de runes approximatives, un petit talisman en os ou en pierre, une fiole de sang de reptile, des dents de kobold montées en collier, ou un parchemin de formules magiques grossières)."
        },

        // --- LANCEURS DE SORTS HUMAINS ---
        lanceur_apprenti: {
            id: "creature-lanceur-apprenti",
            nom: "Apprenti",
            type: "Lanceur de sorts",
            type_id: "section-lanceurs-de-sorts",
            type_label: "Lanceurs de Sorts Humains",
            dangerosite: "1",
            dangerosite_id: "danger-1",
            echelon: "Figurant",
            description: "Sa tenue, ses signes distinctifs et son catalyseur sont modestes et généralement adaptés à son rôle : grimoire pour le magicien, chapelet pour le prêtre, bâton pour le shaman ou le druide.",
            allonge: "Distance (Magie).",
            stats: "Att (magie) : un Type ou une Cible +1 selon l'enseignement reçu. Tal : un Talent +1 adapté à sa tradition, généralement Sav Acad pour le magicien ou le prêtre, Surv pour le shaman ou le druide.",
            tactique: "Utilise des sorts correspondant narrativement à son rôle, en cohérence avec le lore et la situation.",
            butin: "<strong>1 UB Peuple</strong> — Sur le personnage : son catalyseur simple (grimoire relié de cuir, chapelet de bois, ou bâton noueux), une bourse contenant quelques pièces d'argent et de cuivre, un couteau de cuisine ou un outil de fortune, sa tenue (cape ou robe de laine épaisse), et divers effets personnels (lettre de famille, notes griffonnées, amulette de cuivre, ou outre d'eau). (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple).<br><strong>• Chambre ou cellule :</strong> <strong>1 UB Peuple</strong> — Dans sa chambre de tour, cellule de temple, tente près du cercle ou cabane en lisière de bosquet : un lit de camp ou une paillasse, une couverture de laine, un coffret en bois contenant des vivres de base (pain sec, fromage, fruits secs), un récipient d'encre et une plume, et quelques livres ou parchemins d'étude."
        },
        lanceur_initie: {
            id: "creature-lanceur-initie",
            nom: "Initié",
            type: "Lanceur de sorts",
            type_id: "section-lanceurs-de-sorts",
            type_label: "Lanceurs de Sorts Humains",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Évolué",
            description: "Sa tenue, ses signes distinctifs et son catalyseur sont de facture courante et généralement adaptés à son rôle : grimoire pour le magicien, chapelet pour le prêtre, bâton pour le shaman ou le druide. Il est généralement sans armure ; le prêtre porte parfois du cuir.",
            allonge: "Distance (Magie).",
            stats: "Att (magie) : deux Types ou deux Cibles +1 selon sa pratique. Généralement sans armure (Avec une armure de cuir : Pro tronc et mbre +1, Dur : 6 ; voir <strong>Chaleur Arcane</strong>, Livret 3, §8 pour les restrictions sur le lancement des sorts en armure). Tal : deux Talents adaptés à sa tradition : le premier à +1, généralement Sav Acad pour le magicien ou le prêtre, Surv pour le shaman ou le druide ; le second, à 0, est choisi librement par le MJ.",
            tactique: "Utilise des sorts correspondant narrativement à son rôle, en cohérence avec le lore et la situation.",
            butin: "<strong>1 UB Peuple</strong> — Sur le personnage : son catalyseur de facture courante (grimoire relié de cuir, chapelet de bois précieux ou d'ivoire, bâton sculpté), une bourse garnie de pièces d'argent, sa tenue adaptée à son rôle (robe de laine de qualité, soutane propre, parures de plumes ou de fourrure bien tannée), des effets de voyage légers (carte de la région, outre de vin ou d'hydromel), et divers objets personnels (correspondance, notes de formules ou de prières). (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple).<br><strong>• Étude ou sanctuaire :</strong> <strong>3 UB Peuple</strong> — Dans son étude de tour, oratoire du temple, campement au cercle ou clairière de bosquet : une table avec des écritoires, des étagères ou coffrets contenant des parchemins et livres de travail, une malle avec des vêtements de rechange, une outre d'alcool fort ou de boisson fermentée, et des provisions pour plusieurs jours."
        },
        lanceur_maitre: {
            id: "creature-lanceur-maitre",
            nom: "Maître",
            type: "Lanceur de sorts",
            type_id: "section-lanceurs-de-sorts",
            type_label: "Lanceurs de Sorts Humains",
            dangerosite: "2+",
            dangerosite_id: "danger-2-plus",
            echelon: "Évolué",
            description: "Sa tenue, ses signes distinctifs et son catalyseur sont luxueux et généralement adaptés à son rôle : grimoire pour le magicien, chapelet pour le prêtre, bâton pour le shaman ou le druide. Il est généralement sans armure ; le prêtre porte parfois un harnois. Il dirige souvent un groupe d'apprentis et d'initiés de son propre rôle. Généralement accompagné de mercenaires pour sa protection personnelle (ex. : deux Vétérans ou 4 Gardes).",
            allonge: "Distance (Magie).",
            stats: "Att (magie) : deux Types ou deux Cibles +2 selon sa pratique. Généralement sans armure (Avec un harnois : Pro tête, tronc et mbre +3, Dur : 10 ; voir <strong>Chaleur Arcane</strong>, Livret 3, §8 pour les restrictions sur le lancement des sorts en armure). Tal : deux Talents +1 adaptés à sa tradition. Le premier est généralement Sav Acad pour le magicien ou le prêtre, Surv pour le shaman ou le druide ; le second est choisi librement par le MJ. Les éventuels malus d'armure s'appliquent ensuite.",
            tactique: "Utilise des sorts correspondant narrativement à son rôle, en cohérence avec le lore et la situation.",
            butin: "<strong>1 UB Riche</strong> — Sur le personnage : son catalyseur luxueux (grimoire aux tranches dorées dans un étui de cuir bouilli, chapelet d'argent et de pierres polies, bâton orné de gravures et de bagues métalliques), une bourse bien garnie contenant des pièces d'or et d'argent, sa tenue d'apparat en tissu fin (soie, velours, ou fourrure soignée), des bijoux portés (bagues ou chaînes en argent), des effets d'autorité (sceau personnel, médaillon d'ordre ou de guilde, lettres de recommandation), et une flasque d'alcool de qualité. (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Riche).<br><strong>• Tour ou sanctuaire :</strong> <strong>4 UB Riche</strong> — Dans sa tour de mage, temple, sanctuaire de pierres ou bosquet sacré : une bibliothèque ou des étagères avec des ouvrages de référence, un coffre-fort dissimulé contenant des fonds de caisse, des tapisseries ou des peaux de bête au sol, des sièges en bois travaillé, des coffrets de bijoux et des provisions de bouche ainsi que des marchandises échangées avec les visiteurs."
        },
        lanceur_archimage: {
            id: "creature-lanceur-archimage",
            nom: "Archimage",
            type: "Lanceur de sorts",
            type_id: "section-lanceurs-de-sorts",
            type_label: "Lanceurs de Sorts Humains",
            dangerosite: "4+",
            dangerosite_id: "danger-4-plus",
            echelon: "Majeur",
            description: "Sa tenue, ses signes distinctifs et son catalyseur sont somptueux et généralement adaptés à son rôle : grimoire pour l'archimagicien, chapelet pour l'archiprêtre, bâton pour l'archishaman ou l'archidruide. Il est généralement sans armure ; l'archiprêtre porte parfois un harnois. Il est souvent à la tête de plusieurs Maîtres, qui dirigent eux-mêmes leurs groupes d'apprentis et d'initiés. Ses ressources lui permettent d'entretenir une escorte permanente comprenant notamment des Chevaliers.",
            allonge: "Distance (Magie).",
            stats: "Att (magie) : quatre scores +2. Généralement sans armure (Avec un harnois : Pro tête, tronc et mbre +3, Dur : 10 ; voir <strong>Chaleur Arcane</strong>, Livret 3, §8 pour les restrictions sur le lancement des sorts en armure). Tal : deux Talents +1 adaptés à sa tradition. Le premier est généralement Sav Acad pour l'archimagicien ou l'archiprêtre, Surv pour l'archishaman ou l'archidruide ; le second est choisi librement par le MJ. Les éventuels malus d'armure s'appliquent ensuite.",
            tactique: "Utilise des sorts correspondant narrativement à son rôle, en cohérence avec le lore et la situation. L'archi porte et utilise activement un ou plusieurs objets magiques en combat ou dans la vie courante (le MJ choisit ces objets en fonction des sorts et de la tactique du personnage).",
            butin: "<strong>1 UB Opulent</strong> — Sur le personnage : son catalyseur somptueux (grimoire ancien dans un étui d'apparat, chapelet d'or serti de gemmes véritables, bâton de bois noble incrusté d'argent ou d'or), le ou les objets magiques qu'il portait et utilisait, une riche bourse ou escarcelle contenant des pièces d'or et de platine, ses bijoux portés de grande valeur (anneaux d'or ciselé, pendentifs précieux, sceau de maison gravé), sa somptueuse tenue (soie d'exception, velours brodé, fourrure d'apparat), et des parchemins ou documents scellés d'importance capitale (titres de propriété, traités, correspondance avec des souverains). (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Opulent).<br><strong>• Citadelle ou domaine :</strong> <strong>5 UB Opulent</strong> — Dans sa citadelle arcanique, cathédrale, site ancestral ou bois ancien : des salles d'archives avec des ouvrages rares et grimoires anciens, des coffres scellés renfermant des cassettes de devises et des fonds considérables, des tapisseries d'époque et des œuvres d'art inestimables, un mobilier d'ébénisterie raffiné, une garde-robe complète de vêtements d'apparat, des provisions de bouche d'exception, et des réserves de matières premières ou de composants magiques précieux."
        },

        // --- LOUPS ---
        loup_gris: {
            id: "creature-loup-gris",
            nom: "Gris",
            type: "Loup",
            type_id: "section-loups",
            type_label: "Loups",
            dangerosite: "1",
            dangerosite_id: "danger-1",
            echelon: "Figurant",
            description: "Prédateur rapide cherchant à mettre sa proie au sol.",
            allonge: "Courte (Morsure).",
            stats: "Att: saisie +1, Tal: Athlé, Surv et Percep +1.",
            tactique: "Charge pour mordre les membres et forcer une mise au sol via Att saisie.",
            butin: "<strong>2 UB mendiant</strong> — Aux alentours de la tanière gisent les restes de proies récentes : os blanchis, lambeaux de tissu, et objets rejetés ou échappés des mâchoires du prédateur (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Mendiant : par exemple quelques pièces de cuivre, une bague en bronze simple, un couteau de fortune, ou une amulette en cuivre). La fourrure grise du loup constitue le principal récupérable, avec crocs et griffes comme trophées."
        },
        loup_geant: {
            id: "creature-loup-geant",
            nom: "Géant (Worg)",
            type: "Loup",
            type_id: "section-loups",
            type_label: "Loups",
            dangerosite: "1",
            dangerosite_id: "danger-1",
            echelon: "Figurant",
            description: "Loup très rusé, de la taille d'un cheval.",
            allonge: "Moyenne (Morsure).",
            stats: "Att: saisie et dir +1, Tal: Athlé, Surv et Percep +1.",
            tactique: "Cherche à renverser la cible (Att saisie).",
            butin: "<strong>1 UB Peuple</strong> — Aux abords de la tanière ou dans l'estomac de la bête gisent les restes de proies imposantes : os broyés, lambeaux d'armure, et effets personnels des malheureux (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple une bourse contenant quelques pièces d'argent, un bracelet en bronze, une dague simple, ou une amulette en cuivre). La peau épaisse de worg constitue un matériau robuste pour la confection de vêtements chauds. On récupère également crocs et griffes de grande taille comme trophées."
        },

        // --- MERCENAIRES & SOLDATS ---
        mercenaire_garde: {
            id: "creature-mercenaire-garde",
            nom: "Garde ou fantassin",
            type: "Mercenaire",
            type_id: "section-mercenaires",
            type_label: "Mercenaires & Soldats",
            dangerosite: "1",
            dangerosite_id: "danger-1",
            echelon: "Figurant",
            description: "Soldat, milicien ou mercenaire employé pour protéger un lieu, une personne ou un convoie.",
            allonge: "Longue (Lance).",
            stats: "Att: dir +1, Pro: vs dir +1 sous condition (Bouclier, Dur 12).",
            tactique: "Utilise son allonge et se met en défense s'il est menacé en attendant des renforts.",
            butin: "<strong>1 UB Peuple</strong> — Sur le corps ou dans ses affaires : une lance de facture courante, un bouclier de bois renforcé de cuir, et une bourse contenant quelques pièces d'argent pour les dépenses courantes (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple une ration militaire séchée, une flasque d'eau ou de bière, un insigne de compagnie ou de ville, une lettre de famille froissée)."
        },
        mercenaire_veteran: {
            id: "creature-mercenaire-veteran",
            nom: "Vétéran",
            type: "Mercenaire",
            type_id: "section-mercenaires",
            type_label: "Mercenaires & Soldats",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Évolué",
            description: "Dirige souvent un groupe de garde ou constitue un groupe d'élite.",
            allonge: "Longue (Lance).",
            stats: "Att: dir +1, Pro: vs dir, cir, saisie +1, vs dir +1 suppl (Bouclier), tronc et mbre +1 (Cuir, Dur 6), Athlé 0, Percep +1.",
            tactique: "Se regrouper en formation pour combattre efficacement et durablement.",
            butin: "<strong>2 UB Peuple</strong> — Sur le vétéran ou dans ses affaires : une lance de bonne facture, un bouclier solide, une armure de cuir, et une bourse contenant une poignée de pièces d'argent (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple un insigne de grade ou de campagne, une petite flasque d'alcool fort, une carte de patrouille, un carnet de comptes militaires, ou des dés en os pour les veilles de garnison)."
        },
        mercenaire_chevalier: {
            id: "creature-mercenaire-chevalier",
            nom: "Chevalier",
            type: "Mercenaire",
            type_id: "section-mercenaires",
            type_label: "Mercenaires & Soldats",
            dangerosite: "2+",
            dangerosite_id: "danger-2-plus",
            echelon: "Figurant",
            description: "Combattant d'élite souvent au service  d'un noble, généralement chevauchant un cheval de guerre.",
            allonge: "À cheval : Longue (Lance d'arçon), à pied : Moyenne (Épée longue ou Masse d'arme).",
            stats: "Att: dir et cir +2, Pro: vs dir, cir, saisie +1, vs dir +1 suppl (Bouclier), tête/tronc/mbre +3 (Plaques, Dur 10). Tal: Athlé 0, Percep -1, Sav Acad +1.",
            tactique: "charge à cheval profitant de l'avantage d'une position surélevée (bonus d'Att applicable).",
            butin: "<strong>1 UB Riche</strong> — Sur le chevalier ou dans ses affaires : une épée longue ou une masse d'arme de qualité, un bouclier solide, un harnois complet (avec casque), et une bourse rebondie contenant des pièces pièces d'or et quelques pièces d'argent (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Riche : par exemple un blason ou un sceau de maison noble en or). Si le chevalier était monté, son destrier (cheval de guerre) constitue un butin supplémentaire de valeur qui inclura une lance d'arçon."
        },

        // --- MORTS-VIVANTS ---
        mortvivant_squelette: {
            id: "creature-mortvivant-squelette",
            nom: "Squelette",
            type: "Mort-vivant",
            type_id: "section-mortsvivants",
            type_label: "Morts Vivants",
            dangerosite: "0",
            dangerosite_id: "danger-0",
            echelon: "Figurant",
            description: "Squelette d'une créature (Rat Géant, Loup Gris, Cheval, Humain, Orque, Elfe, Nain, Gobelin, Kobold) animé par magie.",
            allonge: "Variable suivant la créature et si elle possédait une arme de son vivant.",
            stats: "Pro: vs dir +1.",
            tactique: "Avance et frappe mécaniquement.",
            butin: "<strong>0 à 1 UB Mendiant</strong> — Une arme rouillée, dont l'état détermine sa valeur (Le MJ peut librement varier la quantité, la diversité et l'état selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Mendiant : par exemple une lame complètement oxydée sans valeur, ou une arme peu rouillée pouvant être remise en état)."
        },
        mortvivant_zombie: {
            id: "creature-mortvivant-zombie",
            nom: "Zombie",
            type: "Mort-vivant",
            type_id: "section-mortsvivants",
            type_label: "Morts Vivants",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Figurant",
            description: "Corps plus ou moins décomposé d'une créature (Rat Géant, Loup Gris, Cheval, Humain, Orque, Elfe, Nain, Gobelin, Kobold) animé par magie.",
            allonge: "Courte (Saisie ou Morsure).",
            stats: "Att: saisie +1, Pro: tronc, mbre et tête +1 (Globale, Dur: 6).",
            tactique: "Humanoïde : une fois sa proie attrapée via Att saisie, tente de profiter de l'avantage de la saisie pour mordre. Animal : tente de mordre.",
            butin: "<strong>1 UB Mendiant</strong> — Les haillons qui couvre le corps déchu contiennent les dernières possessions de la personne réanimée : quelques deniers de cuivre dans une bouse déchirée, un anneau de fer, ou d'autres effets personnels (Le MJ peut librement varier la quantité, la diversité et l'état selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Mendiant : par exemple une bague en bronze, une clef rouillée, un médaillon avec un portrait effacé, ou une amulette de cuivre)."
        },
        mortvivant_amas_de_corps: {
            id: "creature-mortvivant-amas-de-corps",
            nom: "Amas de corps",
            type: "Mort-vivant",
            type_id: "section-mortsvivants",
            type_label: "Morts Vivants",
            dangerosite: "2+",
            dangerosite_id: "danger-2-plus",
            echelon: "Évolué",
            description: "Assemblage chaotique de cadavres humanoïdes en une énorme masse difforme doté de nombreux bras et visages affichant une expression de souffrance extrême.",
            allonge: "Moyenne (Saisie avec bras multiples).",
            stats: "Att: saisie +2, Pro: tronc, mbre et tête +2 (Globale, Dur : 8).",
            tactique: "Cherche le contact pour utiliser ses bras multiples en Att saisie et étouffer ses victimes qu'il incorpore à son propre corps.",
            butin: "<strong>2 à 4 UB Peuple</strong> — L'amas répand ses entrailles putrides dans une marée de chair composite, révélant les possessions de plusieurs victimes : bourses de cuir, armes plus ou moins rouillées, outils de métier, bijoux et effets personnels enchevêtrés dans la masse (Le MJ peut librement varier la quantité, la diversité et l'état selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple plusieurs dagues, des poignées de pièces d'argent, des anneaux en bronze et cuivre, ou un objet singulier comme une lettre scellée, un insigne ou une clé offrant une amorce narrative)."
        },
        mortvivant_liche_jeune: {
            id: "creature-mortvivant-liche-jeune",
            nom: "Liche Jeune",
            type: "Liche",
            type_id: "section-mortsvivants",
            type_label: "Morts Vivants",
            dangerosite: "5+",
            dangerosite_id: "danger-5-plus",
            echelon: "Majeur",
            description: "Liche récemment transformée. Son corps ressemble à celui d'un zombi.",
            allonge: "Distance (Magie).",
            stats: "Att (magie): saisie, dir et cir +2, tronc +3, Pro: vs dir, cir, saisie +2, tronc, mbre et tête +1 (Globale, Dur: 6). Tal: Sav Acad +1, Percep +1 (bonus octroyé par le focalisateur de la liche déjà inclus).",
            tactique: "Utilise des actions multiples pour attaquer avec de puissants sorts et se protéger avec un sort d'armure magique lui conférant protection +3 (durée 1D6, qu'il renouvelle dès le temps écoulé), tout en dirigeant ses serviteurs morts-vivants. Obsédée par ses recherches, elle ignore généralement les intrusions mineures tant qu'elles ne menacent pas ses expériences ou son territoire. Elle peut cependant s'allier ou chercher vengeance si cela sert ses objectifs (nouveaux ingrédients, expansion ou règlement de comptes).",
            butin: "<strong>1 UB Opulent</strong> — Son antre dans la nécropole qu'elle occupe depuis un siècle ou plus témoigne à la fois de son rituel de transformation et de son activité de recherche ininterrompue. Les possessions des centaines de victimes sacrifiées sont méthodiquement répertoriées : bourses de cuivre et d'argent des paysans, coffrets de marchands contenant des épices et des étoffes, bijoux de famille arrachés aux nobles égorgés. Le laboratoire adjacent est organisé avec rigueur : grimoires ouverts sur des pupitres et truffés de notes de recherche complexes, étagères chargées de fioles d'ingrédients soigneusement étiquetées, alambics et aludels disposés sur des brasiers, et parchemins expérimentaux classés. Le focalisateur de la liche — bâton ou grimoire — repose près de sa dépouille. (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Opulent : des cartes de terres confisquées, des sceaux de familles éteintes, ou exceptionnellement enrichir le butin par la malchance d'une victime particulière : un émissaire porteur d'une lettre scellée du roi, d'un insigne d'ordre chevaleresque ou d'une clé de coffre fort offrant une amorce narrative.).",
            autre_details: "<strong>• Capacités :</strong> Anime jusqu'à une centaine de morts-vivants pour défendre son territoire."
        },
        mortvivant_liche_ancienne: {
            id: "creature-mortvivant-liche-ancienne",
            nom: "Liche Ancienne",
            type: "Liche",
            type_id: "section-mortsvivants",
            type_label: "Morts Vivants",
            dangerosite: "7+",
            dangerosite_id: "danger-7-plus",
            echelon: "Majeur",
            description: "Liche âgée de plusieurs siècles. Son corps est déjà très abîmé, avec de nombreuses zones spectrales visibles.",
            allonge: "Distance (Magie).",
            stats: "Att (magie): saisie, dir et cir +3, tronc +4, Pro: vs dir, cir, saisie +3, tronc, mbre et tête +3. Tal: Sav Acad +1, Percep +1 (bonus octroyé par le focalisateur de la liche déjà inclus).",
            tactique: "Utilise des actions multiples pour attaquer avec de puissants sorts et se protéger avec un sort d'armure magique lui conférant protection +3 (durée 1D6, qu'il renouvelle dès le temps écoulé), tout en dirigeant ses serviteurs morts-vivants. Obsédée par ses recherches, elle ignore généralement les intrusions mineures tant qu'elles ne menacent pas ses expériences ou son territoire. Elle peut cependant s'allier ou chercher vengeance si cela sert ses objectifs (nouveaux ingrédients, expansion ou règlement de comptes).",
            butin: "<strong>2 à 9 UB Opulent</strong> — Son mausolée ou crypte monumentale renferme les richesses de plusieurs milliers de victimes accumulées avec méthode sur des siècles. Des coffres ordonnés débordent de pièces d'or et d'argent frappées par des royaumes oubliés, des reliquaires contiennent diadèmes et joyaux de couronne de dynasties éteintes, des armures complètes de chevaliers défunts sont rangées sur des présentoirs, et des œuvres d'art ainsi que des objets de préciosité disparus depuis des générations occupent des salles dédiées. Une bibliothèque murale s'étend sur plusieurs niveaux, abritant des grimoires et traités occultes rares couvrant des siècles de connaissances interdites. Le laboratoire alchimique est complet et parfaitement entretenu : fournaise à soufre, distillateurs en cristal, et rangées de bocaux contenant des ingrédients préservés en quantités substantielles. Le focalisateur de la liche — bâton ou grimoire — demeure auprès de ses restes, tels des reliques d'une existence antérieure. (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Opulent : par exemple des titres de propriété de domaines entiers devenus des terres maudites, des cartes détaillées de nécropoles souterraines complexes, ou exceptionnellement enrichir le butin par la malchance d'une victime oubliée : un héritier disparu portant un sceau royal, un messager d'une guilde secrète avec un code de trésor.)",
            autre_details: "<strong>• Capacités :</strong> Vol sans effort. Anime plusieurs centaines à un millier de morts-vivants."
        },
        mortvivant_liche_immemoriale: {
            id: "creature-mortvivant-liche-immemoriale",
            nom: "Liche Immémoriale",
            type: "Liche",
            type_id: "section-mortsvivants",
            type_label: "Morts Vivants",
            dangerosite: "9+",
            dangerosite_id: "danger-9-plus",
            echelon: "Majeur",
            description: "Liche millénaire dont le corps physique n'est plus qu'un vague souvenir. Seuls quelques vestiges (crâne ou main décharnée) flottent au sein d'une silhouette spectrale.",
            allonge: "Distance (Magie).",
            stats: "Att (magie): saisie, dir et cir +4, tronc +5, Pro: vs dir, cir, saisie +4, tronc, mbre et tête +4. Tal: Sav Acad +1, Percep +1 (bonus octroyé par le focalisateur de la liche déjà inclus).",
            tactique: "Considère rarement les intrus comme une menace.",
            butin: "<strong>1 UB Crésus et +</strong> — L'antre millénaire de cette entité constitue un trésor légendaire amassé au fil des âges. Des salles monumentales regorgent de lingots d'or et d'argent empilés avec ordre, de gemmes taillées par des artisans oubliés depuis mille ans, de reliques sacrées dérobées à des temples détruits, d'armures et d'armes prises à des héros tombés, et de statues ainsi que d'œuvres d'art d'une valeur inestimable. Une bibliothèque labyrinthine contient les savoirs perdus de civilisations englouties et des grimoires originaux de magie oubliée. Le laboratoire archaïque fonctionne encore, équipé d'alambics complexes actionnés par des mécanismes hydrauliques et de réservoirs de composants diverses en abondance. Le focalisateur de la liche, d'une puissance et d'une valeur inestimables, repose auprès de ses vestiges physiques subsistants, généralement un crâne ou une main momifiée. (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Crésus : par exemple des titres de propriété de cités entières englouties, des cartes de réseaux de nécropoles continentales, ou exceptionnellement enrichir le butin par la malchance d'une victime sacrifiée il y a des siècles : un prince exilé porteur d'un objet magique ou une clé ouvrant des portes scellées offrant une amorce narrative.)",
            autre_details: "<strong>• Capacités :</strong> Vol permanent. Peut animer plusieurs milliers de morts-vivants."
        },

        // --- MYCONIDES ---
        myconide_ouvrier: {
            id: "creature-myconide-ouvrier",
            nom: "Ouvrier",
            type: "Myconide",
            type_id: "section-myconides",
            type_label: "Myconides",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Figurant",
            description: "Myconide d’environ 1,20 m. Le fût est mince, le chapeau large par rapport au corps, souvent d’une seule teinte franche. Il cultive, porte et vend dans les champignonnières.",
            allonge: "Distance (Souffle), Courte (CàC sans arme).",
            stats: "Att: cir +1, Pro: res tête, tronc et mbre +1, Tal: Surv +1.",
            tactique: "Tente d’abord avec le souffle d’établir un lien télépathique. S’il doit frapper, il souffle puis serre le contact à mains nues. Il anime un cadavre dès qu’il y en a un.",
            butin: "<strong>1 UB Peuple</strong> — Chair, spores et mycélium d’ouvrier, utilisables en nourriture, teinture, poison ou ferment. L’extraction correcte exige un Test de Survie Difficulté 1 ; un prélèvement bâclé gâche l’UB.",
            autre_details: "<strong>• Souffle :</strong> Attaque Circulaire. Un effet au choix parmi le canevas de la famille."
        },
        myconide_gardien: {
            id: "creature-myconide-gardien",
            nom: "Gardien",
            type: "Myconide",
            type_id: "section-myconides",
            type_label: "Myconides",
            dangerosite: "2+",
            dangerosite_id: "danger-2-plus",
            echelon: "Évolué",
            description: "Myconide de taille humaine. Le fût est plus large, le chapeau plus épais, souvent marqué de taches, d’anneaux ou de crêtes. Il garde les allées de culture et les stocks.",
            allonge: "Distance (Souffle), Moyenne (CàC sans arme).",
            stats: "Att: cir +2, Pro: res tête, tronc et mbre +2, Tal: Surv +1, Athlé +1.",
            tactique: "Tente d’abord avec le souffle d’établir un lien télépathique. Il intercepte les ennemis et se positionne en première ligne, ce qui permet aux Ouvriers myconides de rester à distance ou de fuir. Il lève les cadavres pour faire nombre.",
            butin: "<strong>1 UB Riche</strong> — Chair, spores et mycélium de gardien, mêmes usages qu’un ouvrier, en plus grande quantité et d’une qualité supérieure. L’extraction correcte exige un Test de Survie Difficulté 1 ; un prélèvement bâclé gâche l’UB.",
            autre_details: "<strong>• Souffle :</strong> Identique à l’Ouvrier."
        },
        myconide_souverain: {
            id: "creature-myconide-souverain",
            nom: "Souverain",
            type: "Myconide",
            type_id: "section-myconides",
            type_label: "Myconides",
            dangerosite: "3+",
            dangerosite_id: "danger-3-plus",
            echelon: "Majeur",
            description: "Myconide plus grand qu’un humain. Le fût a la grosseur d’un tronc, le chapeau dépasse les épaules d’un homme, parfois en plateau, parfois en cloche, parfois en plusieurs étages. Les lamelles sont profondes. C’est le chef de colonie.",
            allonge: "Distance (Souffle), Longue (CàC sans arme).",
            stats: "Att: cir +3, Pro: res tête, tronc et mbre +3, Tal: Surv +1, Percep +1, Sav Acad +1.",
            tactique: "Tente d’abord avec le souffle d’établir un lien télépathique. En combat il souffle à Distance, tient les effets selon les règles de maintien des sorts, et s’appuie sur une ligne de zombies myconides. Le CàC long écarte qui s’approche du jardin.",
            butin: "<strong>1 UB Opulent</strong> — Chair, spores et mycélium de souverain, mêmes usages qu’un ouvrier, en bien plus grande quantité et d’une qualité rare. L’extraction correcte exige un Test de Survie Difficulté 1 ; un prélèvement bâclé gâche l’UB.",
            autre_details: "<strong>• Souffle :</strong> Identique à l’Ouvrier."
        },
        myconide_zombie: {
            id: "creature-myconide-zombie",
            nom: "Zombie myconide",
            type: "Myconide",
            type_id: "section-myconides",
            type_label: "Myconides",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Figurant",
            description: "Cadavre relevé par un souffle myconide. Du mycélium sort aux articulations. De petits chapeaux percent la peau, aux mêmes couleurs que le règne fongique. Les plaies et la bouche portent des lamelles. On le reconnaît au premier coup d’œil.",
            allonge: "Courte (Saisie ou Morsure).",
            stats: "Att: saisie +1, Pro: tronc, mbre et tête +1 (Globale, Dur: 6).",
            tactique: "Une fois la proie saisie, il mord. Il obéit au Myconide qui l’a levé. Si ce Myconide meurt, le corps retombe inerte.",
            butin: "<strong>1 UB Mendiant</strong> — Ce que le cadavre portait encore, souvent rongé par le mycélium."
        },

        // --- OGRES ---
        ogre_brute: {
            id: "creature-ogre-brute",
            nom: "Brute",
            type: "Ogre",
            type_id: "section-ogre",
            type_label: "Ogre",
            dangerosite: "2+",
            dangerosite_id: "danger-2-plus",
            echelon: "Figurant",
            description: "Colosse de 3 mètres maniant un tronc ou un pilier. Il s'associe parfois à un grand groupe de Gobelin.",
            allonge: "Longue (À deux mains).",
            stats: "Att: cir +2 et saisie +1, Pro: vs saisie +1, tronc, mbre, tête +1 (Dur: 6), Tal: Athlé +1.",
            tactique: "Effectue de grands moulinets pour balayer ou broyer plusieurs ennemis.",
            butin: "<strong>1 UB Peuple</strong> — Sur le colosse ou dans son baluchon de toile grossière trainee dans la boue séchée : le tronc noueux servant d'arme massive, une bourse de cuir contenant une poignée de pièces de cuivre et d'argent mélangées sans discernement, des sacs de provisions contenant des restes de viande séchée et des os rongés, et divers objets pillés récemment ou extorqués aux gobelins qu'il domine, contenant des babioles brillantes sans valeur réelle qu'il collectionne par pure cupidité infantile. (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : un baluchon contenant un tonneau de vin ou des effets personnels d'une valeur sentimentale pour lui comme une dent de monstre percée en collier.)"
        },
        ogre_mage: {
            id: "creature-ogre-mage",
            nom: "Mage",
            type: "Ogre",
            type_id: "section-ogre",
            type_label: "Ogre",
            dangerosite: "2+",
            dangerosite_id: "danger-2-plus",
            echelon: "Evolué",
            description: "Colosse de 3 mètres capable de lancer des sorts sans focalisateur et d'en maintenir un en permanence sans subir de malus de maintien (généralement son invisibilité ou son vol ; les sorts additionnels provoquent les effets et malus normaux). Intelligent, il dirige en général un groupe d'Ogre Brute.",
            allonge: "Variable (Sort).",
            stats: "Att: tronc et mbre +2, saisie +1, Pro: vs saisie +1, tronc, mbre, tête +2 (Dur : 8), Tal: Sav Acad et Percep +1.",
            tactique: "Utilise généralement son maintien gratuit pour aborder le combat sous invisibilité ou en vol. Il alterne ensuite avec de la transposition ou de l'immobilisation (saisie) avant de dévorer ses cibles.",
            butin: "<strong>1 UB Riche</strong> — Dans son antre méthodiquement organisé ou sur sa personne : une bourse bien garnie contenant des pièces d'or et d'argent accumulées par l'extorsion systématique des voyageurs et les tributs des gobelins qu'il dirige, plusieurs fioles de verre scellées contenant des composants (sang de créatures, herbes distillées, poudres alchimiques), un grimoire relié de cuir contenant des sorts anciens, et des bijoux arrachés aux doigts des nobles tombés sous ses sorts (anneaux, chaînes d'or ou pierres précieuses serties). (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Riche : par exemple une amulette gravée de runes, une carte détaillée du territoire ogre avec les positions des groupes de brutes, un contrat d'alliance avec une tribu de gobelins, ou exceptionnellement enrichir le butin par la malchance d'une victime récente : un messager porteur d'une lettre scellée d'un seigneur, d'un insigne de magicien ou d'une clé de bibliothèque offrant une amorce narrative.)"
        },

        // --- OURS ---
        ours_brun_adulte: {
            id: "creature-ours-brun-adulte",
            nom: "Brun Adulte",
            type: "Ours",
            type_id: "section-ours",
            type_label: "Ours",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Figurant",
            description: "Bête massive.",
            allonge: "Moyenne (Pattes).",
            stats: "Att: cir et saisie +1, Pro: tronc, mbre et tête +1 (Globale, Dur: 6), Tal: Percep et Surv +1.",
            tactique: "Se dresse pour intimider, puis frappe en Att cir ou tente d'écraser la cible (Att saisie).",
            butin: "<strong>1 UB Peuple</strong> — Près de la tanière ou dans l'estomac de la bête gisent les restes de proies récentes : os broyés, lambeaux de vêtements, et effets personnels de voyageurs malchanceux (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple une bourse contenant quelques pièces d'argent, un bracelet de bronze, une dague au fourreau, ou une amulette en cuivre). La fourrure épaisse et chaude de l'ours constitue le principal récupérable, avec crocs et griffes de grande taille comme trophées."
        },

        // --- PEUPLE ---
        peuple_paysan: {
            id: "creature-peuple-paysan",
            nom: "Paysan",
            type: "Peuple",
            type_id: "section-peuple",
            type_label: "Peuple",
            dangerosite: "0",
            dangerosite_id: "danger-0",
            echelon: "Figurant",
            description: "Villageois avec un outil de ferme.",
            allonge: "Moyenne ou Courte (outil de ferme).",
            stats: "Tal: Surv +1.",
            butin: "<strong>1 UB Mendiant</strong> — Sur le corps du villageois ou dans sa besace : un outil de ferme (faux, houe ou hachette), une gourde, une ration de pain et fromage, et une bourse de cuir contenant quelques pièces de cuivre (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Mendiant : par exemple un couteau de cuisine, une cape de laine rapiécée, une lettre de famille)."
        },
        peuple_marchand: {
            id: "creature-peuple-marchand",
            nom: "Marchand",
            type: "Peuple",
            type_id: "section-peuple",
            type_label: "Peuple",
            dangerosite: "0",
            dangerosite_id: "danger-0",
            echelon: "Figurant",
            description: "Dans son échoppe ou sur la route avec un chariot tiré par une âne ou un cheval (quand leur finance le permet, ils emploient des gardes pour protéger leur marchandises).",
            allonge: "Courte (Dague).",
            stats: "toutes à 0.",
            butin: "<strong>1 à 3 UB Peuple</strong> — Sur le marchand ou dans son chariot : une dague, une bourse contenant plusieurs pièces d'argent, des marchandises selon sa spécialité (tissus, épices, ou petits outils), un registre de comptes, et des effets de voyage (carte commerciale, insigne de guilde, ou contrat de fourniture). (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple : par exemple une flasque d'eau-de-vie pour les négociations, une liste de clients, ou des marchandises de qualité supérieure selon la prospérité du défunt.)"
        },

        // --- PIRATES DES BRUMES ---
        pirate_ecumeur: {
            id: "creature-pirate-ecumeur",
            nom: "Écumeur",
            type: "Pirate des Brumes",
            type_id: "section-pirates",
            type_label: "Pirates des Brumes",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Figurant",
            description: "Marin endurci naviguant sur des éperonniers légers depuis les îlots non cartographiés du nord-ouest. Habitué à la rudesse de la Mer de Jade, il survit grâce à la piraterie et à la pêche côtière de subsistance.",
            allonge: "Distance (Harpon léger ou Arbalète) et Moyenne (Sabre d'abordage) ou Courte (Dague).",
            stats: "Att: dir, cir et saisie +1. Tal: Athlé, Félin et Surv +1.",
            tactique: "Leurs embuscades depuis la brume marine (Aptitude Féline +1) sont redoutables. Au corps-à-corps, ils profitent du roulis et du pont glissant pour asséner de larges coups de sabre imprévisibles (Att: cir) ou harponner leurs cibles (Att: dir). Hors combat, leur talent de Survie leur permet de pêcher pour nourrir l'équipage.",
            butin: "<strong>1 UB Peuple</strong> — Sur le corps ou dans son sac : un sabre d'abordage ou un harpon léger avec cordages, une dague, et une bourse contenant des pièces d'argent. L'équipement de maraudage comprend une corde de dix mètres avec grappin, une flasque d'alcool fort, et parfois une carte marine. (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Peuple.)"
        },
        pirate_capitaine: {
            id: "creature-pirate-capitaine",
            nom: "Capitaine Pirate",
            type: "Pirate des Brumes",
            type_id: "section-pirates",
            type_label: "Pirates des Brumes",
            dangerosite: "2+",
            dangerosite_id: "danger-2-plus",
            echelon: "Majeur",
            description: "Vétéran impitoyable ayant survécu aux tempêtes de sillage et aux monstres marins de la Mer de Jade. Il dirige les abordages avec brutalité et connaît parfaitement les routes indirectes entre les récifs.",
            allonge: "Distance (Harpon lourd ou Arbalète) et Moyenne (Sabre lourd) ou Courte (Dague vicieuse).",
            stats: "Att: dir, cir et saisie +2. Pro: vs dir, cir et saisie +1, tronc et mbre +1 (Armure de cuir, Dur: 6). Tal: Percep, Athlé, Félin et Surv +1.",
            tactique: "Reste discret dans la brume du navire pour repérer l'ennemi le plus problématique (Perception). Il établit une stratégie pour l'occire rapidement, exploitant les mouvements du navire pour l'empaler (Att: dir) ou le projeter brutalement par-dessus bord (Att: saisie).",
            butin: "<strong>1 UB Riche</strong> — Sur le capitaine ou dans sa cabine : un sabre d'abordage, une armure de cuir, et une bourse contenant des pièces d'or et d'argent. Ses affaires de commandement incluent une carte marine détaillée des routes de la Mer de Jade, un sextant ou des instruments de navigation, un journal de bord avec les comptes du butin, et des effets personnels de valeur (bijoux de prise, insigne de capitaine). (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Riche : par exemple une carte indiquant un repaire secret ou une lettre scellée d'un commanditaire noble offrant une amorce narrative.)"
        },

        // --- RAPACES ---
        rapace_aigle_geant: {
            id: "creature-rapace-aigle-geant",
            nom: "Aigle Géant",
            type: "Rapace",
            type_id: "section-rapaces",
            type_label: "Rapaces",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Figurant",
            description: "Oiseau de proie massif nichant sur les pics isolés et les rocs noirs de la steppe. Son envergure immense et sa force musculaire lui permettent d'emporter des proies de la taille d'un loup, d'un orque ou d'un humain.",
            allonge: "Moyenne (Serres, Bec).",
            stats: "Att: dir et saisie +1. Tal: Athlé +1, Percep +1.",
            tactique: "Repère ses cibles de haut grâce à sa vue perçante (Perception +1). Il fond en piqué à grande vitesse pour verrouiller sa proie dans ses serres (Att: saisie), cherchant à l'emporter dans les airs ou à la lacérer de coups de bec fulgurants (Att: dir).",
            butin: "<strong>1 UB Mendiant</strong> — Dans le nid tissé de branches et situé en hauteur : quelques plumes de grande qualité, serres et bec acéré pour trophées, ainsi que les petits objets brillants accumulés par l'oiseau (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Mendiant : par exemple 2-3 pièces d'argent, une bague en bronze, un pendentif, ou des plumes particulièrement belles)."
        },

        // --- RATS ---
        rat_geant: {
            id: "creature-rat-geant",
            nom: "Géant",
            type: "Rat",
            type_id: "section-rats",
            type_label: "Rats",
            dangerosite: "0",
            dangerosite_id: "danger-0",
            echelon: "Figurant",
            description: "Bête de la taille d'un chien, sale et affamée.",
            allonge: "Courte (Morsure).",
            stats: "toutes à 0.",
            tactique: "Le nombre fait la force.",
            butin: "<strong>1 UB Mendiant</strong> — Fouillant la tanière ou les débris où rodent ces créatures : une bourse de cuir simple, quelques pièces de cuivre, un couteau de cuisine, et parfois un petit objet brillant volé et dissimulé dans le nid (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Mendiant : par exemple une bague en cuivre, une clef de grange)."
        },

        // --- REQUINS ---
        requin_gris: {
            id: "creature-requin-gris",
            nom: "Gris",
            type: "Requin",
            type_id: "section-requins",
            type_label: "Requins",
            dangerosite: "1",
            dangerosite_id: "danger-1",
            echelon: "Figurant",
            description: "Prédateur redoutable arpentant les eaux profondes. Chassant systématiquement en bande, ils sont frénétiquement attirés par l'odeur du sang.",
            allonge: "Courte (Morsure).",
            stats: "Att: saisie +1. Tal: Athlé, Percep et Surv +1.",
            tactique: "Tente de mordre pour verrouiller ses mâchoires (Att: saisie) et entraîner sa proie vers le fond. L'environnement aquatique exigeant de nager (Talent Athlétisme), les créatures terrestres subissent naturellement une difficulté constante et des malus d'actions multiples.",
            butin: "<strong>1 UB Mendiant</strong> — Dans l'estomac de la bête ou près de sa carcasse : dents de requin pour trophées, et objets avalés avec les proies (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Mendiant : par exemple une boucle de ceinture, un petit couteau, une bague en bronze)."
        },
        requin_grand_blanc: {
            id: "creature-requin-grand-blanc",
            nom: "Grand Requin Blanc",
            type: "Requin",
            type_id: "section-requins",
            type_label: "Requins",
            dangerosite: "2",
            dangerosite_id: "danger-2",
            echelon: "Figurant",
            description: "Gigantesque prédateur solitaire.",
            allonge: "Moyenne (Morsure colossale).",
            stats: "Att: saisie +2. Tal: Athlé, Percep et Surv +1.",
            tactique: "Rôde en solitaire et frappe mortellement par en dessous pour broyer sa proie dans ses mâchoires titanesques (Att: saisie). Tout comme pour le Requin Gris, le fait de devoir nager en combattant (Talent Athlétisme) impose naturellement aux créatures terrestres une difficulté constante et des malus d'actions multiples.",
            butin: "<strong>1 à 3 UB Mendiant</strong> — Dans l'estomac du grand prédateur : dents de requin pour trophées, ainsi que des objets plus volumineux avalés avec les proies (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Mendiant : par exemple un poignard, une bourse de cuir contenant des pièces, un médaillon)."
        },

        // --- SANGLIERS ---
        sanglier_geant: {
            id: "creature-sanglier-geant",
            nom: "Géant",
            type: "Sanglier",
            type_id: "section-sangliers",
            type_label: "Sangliers",
            dangerosite: "1+",
            dangerosite_id: "danger-1-plus",
            echelon: "Figurant",
            description: "Bête musculeuse aux défenses acérées.",
            allonge: "Moyenne (Crocs).",
            stats: "Att: dir +1, Pro: tronc et tête +1 (Dur: 6).",
            tactique: "Charge de face pour un impact frontal puissant.",
            butin: "<strong>1 UB Mendiant</strong> — Sa peau épaisse fournit un cuir robuste et sa chair est nourrissante et goûtue."
        },

        // --- SERPENTS DE MER ---
        serpent_de_mer_geant: {
            id: "creature-serpent-de-mer-geant",
            nom: "Serpent de Mer Géant",
            type: "Serpent de Mer",
            type_id: "section-serpents",
            type_label: "Serpents de Mer",
            dangerosite: "5+",
            dangerosite_id: "danger-5-plus",
            echelon: "Majeur",
            description: "Monstre aquatique mythique et titanesque mesurant entre 30 et 40 mètres de long. Sa tête est lourdement cuirassée par des plaques osseuses extrêmement épaisses et dures. Sa vision étant très faible, il se fie aux lourdes vibrations dans l'eau et prend souvent les coques des grands navires pour de grosses proies. Les petites embarcations ne produisent pas assez de perturbations pour l'intéresser et sont totalement ignorées.",
            allonge: "Longue (Morsure colossale / Engloutissement).",
            stats: "Att: saisie +5. Pro: res tête, tronc et mbre +3, armure tête +4 (Plaques osseuses, Dur: 20). Tal: Athlé +2, Percep -1.",
            tactique: "Il ne cherche pas à affronter les marins, qu'il voit très mal et qui sont des cibles bien trop petites pour lui. Son seul but est de s'attaquer au gros navire qu'il prend pour une proie : il surgit pour mordre ou engloutir une large partie de la coque (Att: saisie). S'il est physiquement capable d'avaler une petite chaloupe tout rond, il ne la perçoit pas comme une proie digne d'intérêt et ne l'attaque pas. Porté par sa force colossale (Athlé +2), il éventre ou ampute systématiquement le grand bateau attaqué. Constatant que le bois n'est pas à son goût, il s'éloigne ensuite pour chercher un meilleur repas, laissant irrémédiablement le navire couler. S'en cacher est d'ailleurs assez facile (Perception -1).",
            butin: "<strong>1 à 3 UB Riche</strong> — Dans son estomac, au milieu des restes non totalement digérés d'un ou plusieurs petits bateaux : coffres, pièces d'or et d'argent, armes, armures et objets de valeur provenant de navires avalés. (Le MJ peut librement varier la quantité, la diversité et l'état des objets selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Riche : par exemple un coffret encore intact rempli de gemmes, reste de figure de proue sculptée.)"
        },

        // --- TROLLS ---
        troll: {
            id: "creature-troll",
            nom: "Troll",
            type: "Troll",
            type_id: "section-trolls",
            type_label: "Trolls",
            dangerosite: "3+",
            dangerosite_id: "danger-3-plus",
            echelon: "Figurant",
            description: "Humanoïde massif au dos voûté, environ 4 m même courbé. Peau vert foncé, bras démesurés. Il fréquente tous les milieux sauf le sous-marin. Solitaire, rarement en tout petit groupe.",
            allonge: "Longue (toutes attaques de corps-à-corps : griffes, étreinte, balayage — portée due à la taille).",
            stats: "Att: cir et saisie +3. Pro: res tête, tronc et mbre +3. Tal: Athlé +1.",
            tactique: "Frappe en balayage (Att cir) ou saisit pour broyer / projeter (Att saisie). Sa résistance globale +3 et sa régénération le poussent à encaisser plutôt qu’à se dérober. Le + de Dangerosité vient de cette combinaison, pas d’une armure.",
            butin: "<strong>1 UB Riche</strong> — uniquement si le sang est correctement prélevé (Test de Survie 1). Un cadavre fournit assez de sang pour <strong>20 fioles</strong> de Potion de Soin. Aucune autre richesse. En cas d’échec du test ou de prélèvement bâclé : pas d’UB.",
            autre_details: "<strong>Régénération :</strong> À chaque tour, sans action. Sauf mort instantanée (exemple : décapitation, perforation du cœur), rien ne peut interrompre la régénération du troll : toutes ses blessures se referment en un tour de jeu, incluant l’annulation des désavantages −1, les blessures mortelles à court terme, la régénération complète ou la greffe d’un membre."
        },

        // --- ESPRITS DE LA FORÊT ---
        esprit_treant: {
            id: "creature-esprit-treant",
            nom: "Tréants",
            type: "Esprit de la Forêt",
            type_id: "section-esprits-de-la-foret",
            type_label: "Esprits de la foret",
            dangerosite: "2+",
            dangerosite_id: "danger-2-plus",
            echelon: "Figurant",
            description: "Arbre colossal animé par une conscience ancienne. Gardien implacable des bois sacrés, il semble se fondre parfaitement dans son environnement.",
            allonge: "Longue (Branches et Racines).",
            stats: "Att: cir +2 (balayage), saisie +2 (étreinte), Pro: res tronc, mbre et tête +2.",
            tactique: "Si non découvert, attend que les intrus soient à portée pour les saisir avec ses racines (Att saisie) ou les balayer d'un coup de tronc massif (Att cir). Sa lenteur est compensée par sa portée et sa résistance.",
            butin: "<strong>1 UB Riche</strong> — Le bois dur et semi vivant de tréant est un matériau précieux et recherché pour la création de focalisateurs ou d'arcs de grande qualité. (Le MJ peut librement varier la qualité et la quantité des matériaux selon ses besoins narratifs, tout en restant dans l'esprit d'un butin de niveau Riche : par exemple un fragment de bois portant des marques anciennes ou des runes naturelles ou exceptionnellement enrichir le butin par la présence d'un objet oublié dans le tronc : comme une clé offrant une amorce narrative.)",
            autre_details: "<strong>Immobilité :</strong> Lorsqu'il ne bouge pas, il est quasi impossible de le différencier d'un arbre normal (nécessite un test de Perception Difficulté 1).<br><strong>Talents :</strong> Athlé +1 (Bien que lent sa Force est implacable), Percep +1, Surv +1."
        }
    };

    // Ordre des types dans le livret d'origine
    const TYPES_ORDRE = [
        { id: "section-araignees", label: "Araignées", typeKey: "Araignée" },
        { id: "section-bandits", label: "Bandits", typeKey: "Bandit" },
        { id: "section-chevaux", label: "Chevaux", typeKey: "Cheval" },
        { id: "section-dragons", label: "Dragons", typeKey: "Dragon" },
        { id: "section-drakes", label: "Drakes", typeKey: "Drake" },
        { id: "section-felins", label: "Félins", typeKey: "Félin" },
        { id: "section-gobelins", label: "Gobelins", typeKey: "Gobelin" },
        { id: "section-golems", label: "Golems", typeKey: "Golem" },
        { id: "section-indigenes", label: "Indigènes", typeKey: "Indigène" },
        { id: "section-kobolds", label: "Kobolds", typeKey: "Kobold" },
        { id: "section-lanceurs-de-sorts", label: "Lanceurs de Sorts Humains", typeKey: "Lanceur de sorts" },
        { id: "section-loups", label: "Loups", typeKey: "Loup" },
        { id: "section-mercenaires", label: "Mercenaires & Soldats", typeKey: "Mercenaire" },
        { id: "section-mortsvivants", label: "Morts Vivants", typeKey: ["Mort-vivant", "Liche"] },
        { id: "section-myconides", label: "Myconides", typeKey: "Myconide" },
        { id: "section-ogre", label: "Ogre", typeKey: "Ogre" },
        { id: "section-ours", label: "Ours", typeKey: "Ours" },
        { id: "section-peuple", label: "Peuple", typeKey: "Peuple" },
        { id: "section-pirates", label: "Pirates des Brumes", typeKey: "Pirate des Brumes" },
        { id: "section-rapaces", label: "Rapaces", typeKey: "Rapace" },
        { id: "section-rats", label: "Rats", typeKey: "Rat" },
        { id: "section-requins", label: "Requins", typeKey: "Requin" },
        { id: "section-sangliers", label: "Sangliers", typeKey: "Sanglier" },
        { id: "section-serpents", label: "Serpents de Mer", typeKey: "Serpent de Mer" },
        { id: "section-trolls", label: "Trolls", typeKey: "Troll" },
        { id: "section-esprits-de-la-foret", label: "Esprits de la foret", typeKey: "Esprit de la Forêt" }
    ];

    // Paliers de dangerosité dans l'ordre croissant
    const DANGER_ORDRE = [
        { id: "danger-0", label: "Dangerosité 0", code: "0" },
        { id: "danger-0-plus", label: "Dangerosité 0+", code: "0+" },
        { id: "danger-1", label: "Dangerosité 1", code: "1" },
        { id: "danger-1-plus", label: "Dangerosité 1+", code: "1+" },
        { id: "danger-2", label: "Dangerosité 2", code: "2" },
        { id: "danger-2-plus", label: "Dangerosité 2+", code: "2+" },
        { id: "danger-3-plus", label: "Dangerosité 3+", code: "3+" },
        { id: "danger-4-plus", label: "Dangerosité 4+", code: "4+" },
        { id: "danger-5-plus", label: "Dangerosité 5+", code: "5+" },
        { id: "danger-6-plus", label: "Dangerosité 6+", code: "6+" },
        { id: "danger-7-plus", label: "Dangerosité 7+", code: "7+" },
        { id: "danger-9-plus", label: "Dangerosité 9+", code: "9+" }
    ];

    /**
     * Rendu d'une fiche complète de créature (conforme au code d'origine)
     */
    function renderCard(c) {
        if (!c) return '';
        let html = `<div class="card-start"></div>\n`;
        html += `<div class="rule-item">\n`;
        html += `    <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid rgba(0,0,0,0.2); margin-bottom: 1rem; padding-bottom: 0.5rem;">\n`;
        html += `        <h4 id="${c.id}" style="margin: 0;">${c.nom}</h4>\n`;
        html += `        <div style="display: flex; align-items: center; gap: 8px;">\n`;
        if (c.echelon) {
            html += `            <span class="tag-echelon">${c.echelon}</span>\n`;
        }
        html += `            <span class="tag-danger">Dangerosité : ${c.dangerosite}</span>\n`;
        html += `        </div>\n`;
        html += `    </div>\n`;
        html += `</div>\n`;

        if (c.description) {
            html += `<div class="rule-item"><p><strong>Description:</strong> ${c.description}</p></div>\n`;
        }
        if (c.allonge) {
            html += `<div class="rule-item"><p><strong>Allonge:</strong> ${c.allonge}</p></div>\n`;
        }
        if (c.stats) {
            html += `<div class="rule-item"><p><strong>• Stats:</strong> ${c.stats}</p></div>\n`;
        }
        if (c.autre_details) {
            html += `<div class="rule-item"><p>${c.autre_details}</p></div>\n`;
        }
        if (c.tactique) {
            html += `<div class="rule-item"><p><strong>• Tactique:</strong> ${c.tactique}</p></div>\n`;
        }
        if (c.butin) {
            html += `<div class="rule-item"><p><strong>• Butin :</strong> ${c.butin}</p></div>\n`;
        }
        html += `<div class="card-end"></div>\n`;
        return html;
    }

    /**
     * VUE 1 : Classement par Type (Identique à l'ordre canonique)
     */
    function buildTypeView() {
        let html = '';
        TYPES_ORDRE.forEach(t => {
            html += `<h3 id="${t.id}">${t.label}</h3>\n`;
            const cles = Array.isArray(t.typeKey) ? t.typeKey : [t.typeKey];
            const creaturesDuType = Object.values(CREATURES).filter(c => cles.includes(c.type));
            creaturesDuType.forEach(c => {
                html += renderCard(c);
            });
        });
        return html;
    }

    /**
     * VUE 2 : Classement par Dangerosité (Concaténation [Type] [Nom] avec tri A-Z)
     */
    function buildDangerView() {
        let html = '';
        DANGER_ORDRE.forEach(d => {
            const list = Object.values(CREATURES).filter(c => {
                if (d.code === "2+") {
                    return c.dangerosite === "2+" || c.dangerosite === "2+ var.";
                }
                if (d.code === "1") {
                    return c.dangerosite === "1" || c.dangerosite === "1 (1+ barde)";
                }
                return c.dangerosite === d.code;
            });

            if (list.length > 0) {
                html += `<h3 id="${d.id}">${d.label}</h3>\n`;
                // Tri alphabétique direct sur la concaténation "Type Nom"
                list.sort((a, b) => {
                    const nomA = `${a.type} ${a.nom}`;
                    const nomB = `${b.type} ${b.nom}`;
                    return nomA.localeCompare(nomB, 'fr', { sensitivity: 'base' });
                });

                list.forEach(c => {
                    html += renderCard(c);
                });
            }
        });
        return html;
    }

    /**
     * Fournit l'index dynamique pour la sidebar
     * @param {string} mode 'type' ou 'dangerosite'
     */
    function getIndex(mode) {
        const indexList = [];

        // 1. Partie Guide (fixe)
        indexList.push({ id: "guide-mj-lexique", title: "Guide", level: 1 });
        indexList.push({ id: "regle-omission", title: "Règle d'Omission", level: 2 });
        indexList.push({ id: "legende-abreviations", title: "Légende des Abréviations", level: 2 });
        indexList.push({ id: "tags-profils", title: "Profils & Échelonnement", level: 2 });
        indexList.push({ id: "dangerosite-decodage", title: "Décodage de la Dangerosité", level: 2 });
        indexList.push({ id: "exemple-lecture", title: "Exemple de Lecture", level: 2 });
        indexList.push({ id: "section-butin-ressources", title: "Butin et Ressources", level: 2 });
        indexList.push({ id: "renvois-croises", title: "Renvois Croisés", level: 2 });

        // 2. Racine Créatures
        indexList.push({ id: "section-creatures", title: "Créatures", level: 1 });

        // 3. Mode DANGEROSITÉ
        if (mode === 'dangerosite') {
            DANGER_ORDRE.forEach(d => {
                const list = Object.values(CREATURES).filter(c => {
                    if (d.code === "2+") return c.dangerosite === "2+" || c.dangerosite === "2+ var.";
                    if (d.code === "1") return c.dangerosite === "1" || c.dangerosite === "1 (1+ barde)";
                    return c.dangerosite === d.code;
                });

                if (list.length > 0) {
                    indexList.push({ id: d.id, title: `${d.label} (${list.length})`, level: 2 });
                    
                    // Tri alphabétique direct sur la concaténation simple espace
                    list.sort((a, b) => {
                        const nomA = `${a.type} ${a.nom}`;
                        const nomB = `${b.type} ${b.nom}`;
                        return nomA.localeCompare(nomB, 'fr', { sensitivity: 'base' });
                    });

                    list.forEach(c => {
                        indexList.push({
                            id: c.id,
                            title: `${c.type} ${c.nom}`, // Concaténation avec simple espace sans ":"
                            level: 3
                        });
                    });
                }
            });
            return indexList;
        }

        // 4. Mode TYPE (par défaut)
        TYPES_ORDRE.forEach(t => {
            const cles = Array.isArray(t.typeKey) ? t.typeKey : [t.typeKey];
            const creaturesDuType = Object.values(CREATURES).filter(c => cles.includes(c.type));
            
            indexList.push({ id: t.id, title: t.label, level: 2 });
            creaturesDuType.forEach(c => {
                indexList.push({
                    id: c.id,
                    title: c.nom, // Nom simple sous son dossier parent
                    level: 3
                });
            });
        });

        return indexList;
    }

    function renderView(mode) {
        if (mode === 'dangerosite') return buildDangerView();
        return buildTypeView();
    }

    return {
        renderView: renderView,
        getIndex: getIndex,
        CREATURES: CREATURES
    };

})();
