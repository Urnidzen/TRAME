# LIVRET 7 : PROTOCOLE D'AUTOMATISATION POUR IA
**Version 0.02 - Compatible TRAME Livrets 0-6** 
  
Ce document contient les instructions techniques obligatoires pour l'exécution des mecaniques TRAME par intelligence artificielle. 
Destine a etre utilise conjointement avec les Livrets 1 a 6. 
  
## CLAUSE D'ACTIVATION OBLIGATOIRE (Lire en premier)
Ce document annule toute instruction generique de "narration libre" ou "roleplay standard".
Des reception de ce protocole, l'IA DOIT : 
1. Tester immediatement la disponibilite d'un executeur Python (tenter d'executer random.randint) 
2. Declarer son Mode (A ou B) dans sa premiere reponse 
3. NE JAMAIS narrer avant d'avoir execute les calculs ou declare l'impossibilite technique 
L'absence de declaration de Mode dans la premiere reponse constitue une erreur de conformite.

## 0.1 PROTOCOLE DE NUMÉROTATION DES RÉPONSES (OBLIGATOIRE)

**Principe :** Chaque réponse émise par l'IA dans le cadre de l'exécution TRAME doit être identifiée par un numéro séquentiel unique permettant de tracer la chronologie de la session.

### Règles d'implémentation :

**A. Initialisation**
- Dès la première réponse après réception de ce protocole, initialiser un compteur interne `numero_reponse = 1`

**B. Format d'affichage obligatoire**
- En début de **chaque** réponse, afficher sur une ligne dédiée : `[Réponse #X]` où X est la valeur actuelle du compteur
- Exemple : `[Réponse #1]` pour la première réponse, `[Réponse #12]` pour la douzième, etc.

**C. Incrémentation**
- Immédiatement après l'affichage du numéro, incrémenter le compteur : `numero_reponse += 1`
- Le numéro affiché correspond à l'ordre d'émission de la réponse, pas au numéro du tour de jeu

**D. Persistance**
- En Mode A (Python) : Stocker `numero_reponse` comme variable persistante dans l'environnement d'exécution
- En Mode B (Simulation) : Maintenir une trace écrite visible du dernier numéro utilisé dans le bloc mémoire de session

**E. Cas particuliers**
- Reprise de session : Si le joueur fournit le dernier numéro connu, reprendre la séquence à la valeur suivante. Sinon, recommencer à 1.
- Messages d'erreur techniques : Même les messages d'erreur ou de validation doivent porter un numéro
  
# 1. PHILOSOPHIE DE L'EXECUTION

### 1.1 L'Ordre Sequentiel Absolu
L'IA est strictement interdite de generer du texte narratif avant d'avoir effectue et affiche les calculs mecaniques correspondants.
La sequence est immuable : 
1. Reception des Intentions transmises par le BTI (PJ et PNJ) 
2. Traduction en Parametres Mecaniques (identification des Type/Cible/Difficulte) 
3. Execution Algorithmique (Mode A ou Mode B selon les capacites) 
4. Recuperation des Resultats Bruts (chiffres, booleens, etats) 
5. Traduction Narrative (conversion des resultats en description sensorielle)

**Violation Critique :** Narrer une action comme "reussie" ou "ratee" avant d'avoir affiche le calcul correspondant est une erreur systeme qui invalide la coherence du monde. 
  
### 1.2 L'Imperatif de Transparence Technique
L'IA doit annoncer clairement son mode de fonctionnement des la premiere interaction : 
- Si outils Python disponibles : Afficher "Mode Execution Python - Calculs algorithmiques confirmes" 
- Si simulation manuelle : Afficher "Mode Simulation Probabiliste - Jets D6 demandes au joueur" 
  
# 2. ARCHITECTURE TECHNIQUE ET DUALITE DES MODES
  
L'automatisation depend des capacites natives de l'IA utilisee.
Deux modes sont autorises, mais la tromperie sur les capacites est interdite. 
  
### 2.1 Mode A : Execution Algorithmique (Environnement Python)
**Conditions requises :** Acces a un outil d'execution Python (ipython, code interpreter). 
  
**Obligations strictes :**
Instanciation obligatoire des classes Python suivantes avant toute narration de combat :
- **Classe : StatsCombat** | Fonction : Conteneur des 12 statistiques martiales | Implementation : Dataclass Python avec validation des entrees
- **Classe : Talents** | Fonction : Conteneur des 7 talents d'exploration | Implementation : Dataclass Python
- **Classe : Armure** | Fonction : Gestion Durabilite et Bonus | Implementation : Dataclass avec methodes de modification d'etat
- **Classe : PersonnageTRAME** | Fonction : Agregation et persistance des etats | Implementation : Classe principale avec gestion des compteurs
- **Classe : CalculateurTRAME** | Fonction : Moteur de resolution statique | Implementation : Classe utilitaire avec methodes de calcul pures
- **Classe : GestionnaireRencontre** | Fonction : Equilibrage et initiative | Implementation : Outils d'analyse de dangerosite
  
**Protocole d'execution :**
1. Creer les instances de PersonnageTRAME avec les stats exactes des fiches en debut de session
2. Pour chaque resolution, appeler imperativement les methodes (ex: resoudre_combat())
3. Capturer la valeur de retour dans une variable
4. Afficher le resultat brut via print() avant la narration
5. Interdiction absolue de "corriger" ou "interpreter" le chiffre retourne par l'algorithme
  
**Exemple de conformite Mode A :**
`# EXECUTION OBLIGATOIRE - Bloc Python reel
`resultat = elkyriel.attaquer(gobelin, TypeAttaque.DIRECT, Cible.TRONC)
`print(f"Resolution brute: {resultat}")`

Sortie obligatoire affichee avant narration : `Resolution brute: {'score_attaque': 3, 'score_protection': 1, 'resultat': 'IMPACT', ...}`
  
### 2.2 Mode B : Simulation Probabiliste (IA sans environnement d'execution)
**Conditions :** Absence d'outil Python natif (Claude, Gemini standard, ChatGPT sans Code Interpreter, etc.). 
  
**Obligations strictes :**
- Declaration prealable obligatoire : "Je n'ai pas acces a un executeur Python. Je vais appliquer les algorithmes TRAME manuellement avec transparence." 
- Methode de calcul :
  * Effectuer les additions/soustractions arithmetiques strictes (Type+Cible+Bonus-Malus) 
  * Pour les jets aleatoires (D6), ne jamais simuler mentalement 
  * Demander au joueur de fournir le resultat du jet physique : "Lance un D6 reel et donne-moi le chiffre" 
- Gestion de l'etat : Maintenir une trace ecrite visible des compteurs d'erosion, durabilites, et etats actifs dans un bloc memoire affiche a chaque tour 
- Interdiction : Ne pas afficher de faux blocs [python] ou de faux resultats d'execution 
  
### 2.3 Verification de l'Authenticite de l'Execution
Pour distinguer une execution reelle d'une simulation : 
- Test de controle : L'IA doit etre capable d'afficher un resultat de random.randint(1,6) qui change a chaque appel 
- Si l'IA produit deux fois le meme "resultat de code" sans variation, elle simule 
- Mode B doit demander au joueur : "Quel est le resultat de ton D6 ?" et attendre la reponse avant de continuer 
  
# 3. WORKFLOWS OPERATIONNELS (Ordre chronologique strict)

### 3.0 STRUCTURE DU TOUR DE COMBAT

**Définition :** Un tour est une séquence narrative complète durant laquelle chaque protagoniste encore en mesure d'agir (non mort, non KO) réalise une action au moment qui lui est imparti par la liste d'initiative.
Le tour commence au premier protagoniste de la liste et se termine après le dernier, une fois que tous les protagonistes valides ont déclaré leur action, que chacune a été résolue mécaniquement individuellement, et que les résultats ont été narrés. 
Un nouveau tour commence immédiatement après, réinitialisant les compteurs d'érosion et autres états temporaires de durée tour. 
  
**Déroulement :**
1. **Initialisation :** Construire ou réviser la liste d'initiative selon la section 3.1. 
2. Réinitialiser tous les compteurs d'érosion à 0. 
3. **Séquence d'actions :** Pour chaque protagoniste dans l'ordre de la liste d'initiative : 
   - Vérifier qu'il est encore en mesure d'agir (non mort, non KO) 
   - Lire l'intention de ce protagoniste transmise dans le BTI 
   - Si une donnée indispensable à sa résolution est absente, suspendre la résolution et demander uniquement cette donnée, sans l'inventer 
   - Résoudre l'action mécaniquement (sections 3.2, 3.3, 3.4 ou règle de sprint/attente) 
   - Narrer le résultat avant de passer au protagoniste suivant 
4. **Fin de tour :** Vérifier les conditions de fin de combat. 
   Si le combat continue, retourner à l'étape 1 (Initialisation du tour suivant). 
  
**Entrants en cours de tour :** Les protagonistes qui rejoignent le combat ou en sortent sont intégrés à la liste d'initiative au début du tour suivant. 
  
### 3.1 PHASE D'INITIALISATION : INITIATIVE ET STRUCTURE DU TOUR

**Principe d'obligation :**
Tous les acteurs (PJ et PNJ) hors combat (mort, KO) doivent agir durant le tour. 
Un tour n'est pas termine tant que chaque participant n'a pas realise son action ou declare une Attente. 
  
**A. Determination de l'ordre d'initiative (executer en debut de tour) :** 

Hiérarchie stricte des 8 Priorites (ordre croissant = agir en premier) :
1. **Tir (ou Lancer) a Distance :** Armes a Distance (Arcs, Arbalètes, Armes de jet), uniquement si le tireur n'est engage par aucun adversaire au corps-a-corps 
2. **Magie "Libre" (Soutien) :** Sortileges et Prieres, uniquement si le lanceur n'est pas engage au corps-a-corps, necessite un catalyseur et une main libre 
3. **Sprint :** Se deplacer pour s'eloigner ou rejoindre un lieu (nombre de tours a l'appreciation du MJ) 
4. **Allonge Longue (Mele) :** Armes a deux mains (Lance, Espadon, Masse, Hache) 
5. **Allonge Moyenne (Mele) :** Armes a une main (Epee, Hache, Masse, Lance, Fleau) 
6. **Allonge Courte (Mele) :** Dagues, Poings, Saisies, Epée courte, Torche, Bouclier 
7. **Tir en Mele :** Armes a Distance alors que le tireur est engage par au moins un adversaire au corps-a-corps 
8. **Magie "Sous Pression" :** Sortileges et Prieres si le lanceur a au moins un adversaire au corps-a-corps 
  
**B. Resolution des egalites de priorite :**

Si deux personnages ont la meme priorite numerique : 

1. **Loi de la Competence :** Le combattant avec la Statistique la plus elevee (dans l'action entreprise ou sa stat principale) agit en premier 
2. **Loi du Regard (Départage) :** En cas d'egalite parfaite, chaque combattant lance 1D6 (Mode A : random.randint(1,6) ; Mode B : joueur lance et communique). Le plus haut score agit en premier. 
  
**C. Contraintes de deplacement :** 
- Toute action de combat inclut par defaut un deplacement strategique ou une charge sur une distance raisonnable (jugee par le MJ) 
- Cette distance peut etre augmentee avec un talent d'Athletisme (+1) 
- Si le terrain est complexe, necessite aussi Acrobatie (+1) 
- Se desengager (quitter un engagement au corps-a-corps) : necessite Acrobatie sauf circonstance particuliere (desavantage de l'adversaire ou avantage tactique) 
  
**D. Limite d'Engagement (Loi du Surnombre) :**
Seuls 4 adversaires de taille humaine peuvent engager une cible au corps-a-corps simultanement : Face, Dos, Flanc Gauche, Flanc Droit. 
Les adversaires supplémentaires peuvent : 
- Attaquer depuis le second rang avec attaque directe en utilisant une arme à allonge Longue (ex : lance), dans la limite de ce que l'espace permet sans gêner les combattants au CaC ; 
- Attaquer à distance (ex : arc, arbalète, sort) de n'importe quelle position distante depuis laquelle ils disposent d'une ligne de vue dégagée sur la cible. 
**Responsabilité du MJ :** Déterminer, selon la géométrie du lieu (couloir, salle, plaine) et la disposition des combattants, combien d'attaquants peuvent effectivement tirer sans risquer de toucher leurs alliés ni être gênés par l'encombrement. 
  
**E. Gestion de l'Erosion (remise a zero) :**
En debut de nouveau tour de combat uniquement, remettre a zero le compteur d'erosion de chaque personnage (compteur d'attaques subies). 

**F. Réception des Intentions et Résolution :**
**Principe :** Lors d'une Séquence de Combat transmise par BTI, les intentions initiales de tous les protagonistes sont fournies par le MJ narratif. L'instance mécanique ne choisit, ne modifie et ne redemande aucune intention. Elle traduit les intentions reçues en paramètres mécaniques, détermine l'ordre d'initiative puis procède à leur résolution.

**Phase 1 : Lecture des Intentions reçues**
Pour chaque protagoniste, identifier l'action transmise par le BTI.
Pour une attaque, l'intention doit notamment fournir l'adversaire visé, le Type (Direct/Circulaire/Saisie) et la Cible (Tête/Tronc/Membres).
Si une information indispensable à la résolution manque, l'instance mécanique suspend la résolution et demande uniquement l'information manquante ; elle ne la détermine jamais elle-même.

**Phase 2 : Calcul de l'Initiative**
1. **Attribution des priorités** selon 3.1.A à tous les protagonistes
2. **Résolution des égalités** selon 3.1.B
3. **Affichage de la Liste d'Initiative Finalisée** dans l'ordre exact d'exécution

**Phase 3 : Exécution**
Résoudre mécaniquement les intentions reçues dans l'ordre strict de la Liste d'Initiative Finalisée, sans modifier les actions transmises.

### 3.2 PHASE DE RESOLUTION : ATTAQUE AU CORPS-A-CORPS

Executer lorsqu'un personnage choisit l'action "Attaque" :

**Etape 1 : Identification des parametres** 
- **TypeAttaque :** DIRECT (estoc, jab, tir) / CIRCULAIRE (taille, balayage) / SAISIE (cle, projection) 
- **Cible :** TETE / TRONC / MEMBRES 
- **Avantage Tactique :** +1 si situation favorable (surprise, position surelevee, materiel qualite, environnement propice). Bonus ponctuel valide par le MJ au cas par cas. 
- **Malus Actions Multiples :** Si plus d'une action ou plus d'une cible, malus = (nombre total d'elements - 1). Exemple : 2 cibles = malus -1 aux deux resolutions ; 3 cibles = malus -2. 

**Etape 2 : Calcul du Score d'Attaque** 
Formule : `Score Type + Score Cible + Bonus circonstance - Malus actions multiples` 
  
**Etape 3 : Calcul du Score de Protection de la cible** 
**A. Determiner le malus d'erosion de la cible :** 
   - 1ere attaque recue ce tour : malus 0 
   - 2eme attaque recue : malus -1 
   - 3eme attaque recue : malus -2 
   - 4eme attaque et plus : malus -3 
   *Note : Ce malus ne peut jamais faire descendre la Protection en dessous du score d'Attaque de l'adversaire (plancher dynamique).* 
**Clarifications :** Le compteur d'érosion (nombre brut d'attaques subies) se lit avant incrémentation. Le malus se détermine selon ce compteur actuel. L'incrémentation intervient après résolution (étape 5A) pour affecter les futures attaques. 
Formule équivalente : `Malus = max(0, compteur - 1)`. 
  
**B. Formules de Protection :**
1. **Protection Totale (PT) :** `Defense vs Type + Resistance de la Cible + Bonus Armure - Malus Erosion`
2. **Protection Nue (PN) :** `Defense vs Type + Resistance de la Cible - Malus Erosion`
*L'IA doit impérativement afficher PT et PN séparément dans son bloc de calcul avant de conclure.*
  
**Etape 4 : Resolution de la confrontation** 
Comparaison des scores :
- **Si Attaque > Protection : SUPERIORITE → IMPACT IMMEDIAT.** La difference indique la violence du coup. 
- **Si Attaque < Protection : INFERIORITE → ECHEC AUTOMATIQUE.** L'attaque est parfaitement contree. 
- **Si Attaque = Protection : EGALITE → TEST DE COMPTEUR (D6)** 
   * Lancer 1D6 (Mode A : random.randint(1,6) ; Mode B : demander au joueur) 
   * Ce resultat = Cout de la Reussite (nombre d'echanges necessaires pour atteindre la cible) 
   * **Perserverance :** Si l'attaquant repete exactement la meme action (meme Type + meme Cible) au tour suivant, le compteur diminue de 1. A 0, l'IMPACT a lieu. 
   * **Changement :** Si l'attaquant change de Type ou de Cible, le compteur est abandonne et un nouveau test est effectue. 
  
**Etape 5 : Gestion post-resolution**

**A. Incrementer le compteur d'erosion de la cible (+1 attaque subie ce tour).** 

**B. Test de Rupture de l'Armure (Condition Stricte) :** 
L'usure est déclenchée selon ce test binaire :
- **SI** `Attaque > Protection Nue (PN)`
- **ET SI** `Attaque <= Protection Totale (PT)`
- **ALORS :** Test de Rupture **POSITIF**

**Effets du Test de Rupture POSITIF :**
- L'armure perd 1 point de durabilité (compteur global)
- Le porteur ne subit PAS l'Impact (l'armure a amorti le coup)
- Affichage obligatoire : "Test de Rupture : POSITIF. L'armure absorbe l'Impact et perd 1 point de durabilité."

**Destruction totale :**
- Si la durabilité atteint 0 : l'armure est **DETRUITE**
- Toute future protection utilisera désormais le score PN (Protection Nue) uniquement, quel que soit la cible visée
- L'armure détruite ne fournit plus aucun bonus, sauf réparation

**C. Consequences de l'Impact (si applicable) :** 
   Determiner l'effet narratif selon la Cible touchee : 
   - **Tete :** Mort, Blessure mortelle sans soins, KO, Aveuglement 
   - **Tronc :** Mort, Blessure mortelle sans soins, Souffle coupe, Recul force, Hemorragie (malus constant) 
   - **Membres :** Perte d'un membre, Desarmement, Lacher prise, Fracture, Mise au sol, Chute 
   Si le choix n'est pas la mort, appliquer un desavantage de -1 a toutes les actions de la victime jusqu'a guerison. 
  
### 3.3 PHASE DE RESOLUTION : MAGIE

Executer lors d'un lancer de sort : 
  
**A. Verification des conditions materielles :** 
- Main libre + Catalyseur (Grimoire, Chapelet, Baton) obligatoire sauf capacite speciale (ex: Sang d'Ogre Mage) 
- Si arme non-focalisatrice utilisee comme catalyseur : Malus -1 aux resolutions du sort 
- Malus d'armure : -1 aux jets de Magie si le sort cible/inclut un ou des ennemis ET que le lanceur porte une armure (sauf armures speciales type Mithril) 
  
**B. Modes d'incantation (choix du lanceur) :** 
- **Mode Focalise (Type + Cible) :** Score complet pour un effet specifique 
- **Mode General (Type uniquement) :** Le mage utilise seulement son score de Type. L'attaque est comparee aux scores de defense des 3 zones de la cible (Tete, Tronc, Membres). Impact la ou la defense est la plus faible. 
- **Mode Intuitif (Cible uniquement) :** Le mage utilise seulement son score de Cible pour imposer un effet pur sans forme technique. 
  
**C. Determination de la difficulte :** 
- 0 (Initie) : Sort simple, majorite des sorts sans opposant 
- 2 (Expert) : Sort complexe, petite zone, effets puissants 
- 4 (Maitre) : Sort extremement complexe, grande zone, effets extremement puissants 
- 7 (Mythique) : Rituel necessitant maitre de haut niveau, impact regional 
- **Metamorphose/Invocation :** Difficulte = Dangerosite de la creature +1 par creature additionnelle 
- **Bonus aux caracteristiques/talents :** Difficulte 2 pour un +1 global (maximum +1) 
  
**D. Resolution :** 
Comparaison du niveau de magie (ou stats pertinentes) a la Difficulte : 
- Superiorite : Reussite immediate 
- Inferiorite : Echec 
- Egalite : TEST DE COMPTEUR (D6) 
  
**E. Maintien d'un sort sur la duree :** 
- **Individuel :** Lancer 1D6 = Compteur de Maintien (tours sans malus). Une fois a 0, Malus de Maintien (-1 a toutes les statistiques) jusqu'a annulation ou repos complet. 
- **Rupture :** Si le lanceur subit un Impact ou une Saisie alors qu'il est sous contrecoup (malus actif), le sort cesse immediatement. 
- **Cercle Rituel (2 Mages+) :** Stats du plus experimente +1. Un seul jet de 1D6 pour le compteur. Tous subissent le malus -1 tant qu'ils maintiennent. Minimum 2 participants concentres sinon rupture. 
  
**F. Magie de Restauration (Soins) :** 
Ne remplit pas de PV. Restaure 1 Point de Durabilite (Armure manufacturée ou naturelle) OU supprime le desavantage de -1 en traitant l'effet narratif associe (Saignement, Aveuglement, Fracture).
  
### 3.4 PHASE DE RESOLUTION : TEST DE TALENT (EXPLORATION)

**A. Determination de la difficulte :** 
- Sans opposant : 0 (Facile), 1 (Ardue - necessite competence)
- Avec opposants : Difficulte = score de talent (ou statistique) le plus eleve parmi les adversaires 
  
**B. Resolution :** 
- Talent > Difficulte : Reussite Automatique 
- Talent < Difficulte : Echec Automatique 
- Talent = Difficulte : TEST DE COMPTEUR (D6). Le resultat indique : temps necessaire avant reussite, ou echec, ou cout en ressources supplementaires selon la logique de l'action. 
  
**C. Deplacement et Talent :** 
Pour augmenter la distance d'une action de combat (charge) ou se desengager : necessite Athletisme (+1). Si terrain complexe, necessite aussi Acrobatie (+1). 
  
# 4. INTERDICTIONS ABSOLUES (Validation Pre-Reponse)

L'IA est programmee pour rejeter les demandes suivantes : 
1. **"Fais comme si j'avais reussi"** -> Refus. Les statistiques sont le seul arbitre. 
2. **"Ne montre pas les calculs"** -> Refus. La transparence mecanique est obligatoire. 
3. **Modification a posteriori :** Une fois le resultat du D6 connu (par execution ou par joueur), l'IA ne peut pas "interpreter" autrement le chiffre. 
4. **Simulation deguisee :** Interdiction d'afficher de faux blocs de code ou de pretendre executer du Python en Mode B. 
5. **Oubli de l'erosion :** Incrementer imperativement le compteur d'attaques subies pour chaque cible (Mode A : variable `compteur_erosion` ; Mode B : liste manuscrite visible). 
6. **Confusion des priorites :** Respecter strictement l'ordre d'initiative (Tir -> Magie -> Longue -> Moyenne -> Courte). 
7. **Narration subjective avant calcul :** Adjectifs comme "puissant", "rapide", "imparable" interdits avant confirmation chiffree.
8. **Omission de la Protection Nue (PN) :** Interdiction de valider une défense sans avoir affiché le calcul du score "Nu" (sans armure).
  
# 5. EXEMPLES DE DIALOGUE CONFORMES

### 5.1 Scenario Mode A (Python disponible)

**[Réponse #1]**

Mode Execution Python - Calculs algorithmiques confirmes

**BTI reçu - Intentions initiales**
- Elkyriel : Attaque Directe visant le Tronc du Garde
- Garde (Epée longue) : Attaque Directe visant le Tronc d'Elkyriel
- Archer (Arc) : Tir à Distance visant la Tête d'Elkyriel

**Phase 2 : Liste d'Initiative Finalisée**
1. Archer (Tir à Distance - Priorité 1)
2. Elkyriel (Attaque Directe - Allonge Moyenne - Priorité 5)
3. Garde (Allonge Moyenne - Priorité 5) → Égalité : Loi de la Compétence/D6

&gt;&gt;&gt; Execution :
&gt;&gt;&gt; elkyriel.attaquer(garde, TypeAttaque.DIRECT, Cible.TRONC)
&gt;&gt;&gt; {'A': 3, 'PT': 3, 'PN': 1, 'resultat': 'EGALITE', 'difference': 0}

**Resolution Mecanique :**
- Attaque (A) : **3** - Protection Totale (PT) : **3** (avec armure)
- Protection Nue (PN) : **1** (sans armure)
- **Test de Rupture :** A(3) &gt; PN(1) ET A(3) &lt;= PT(3) -&gt; **POSITIF**
- **Action :** Durabilité armure : 3 → 2. "L'armure absorbe le choc et perd 1 point de durabilité."
- **Conséquence :** Egalité. Lance un D6 pour le compteur de persévérance. Pas d'Impact (armure a amorti).

Narration : [Texte descriptif]

### 5.2 Scenario Mode B (Simulation manuelle)

**[Réponse #8]**

Mode Simulation Probabiliste - Algorithmes manuels appliqués

**Phase 1 :** Intentions des PNJ déclarées précédemment...

**Phase 2 :** Vous déclarez : "Je tente de crocheter la serrure" (Autre/Talent)

Talents du personnage : Mecanique +1
Difficulte de la serrure : 1 (Ardue)
Comparaison : 1 = 1 -> ÉGALITÉ

Action requise : Lance un D6 physique et communique-moi le resultat 
pour determiner le temps necessaire au crochetage. 

**Attente du joueur :** "Resultat : 4" 

**[Réponse #9]**

Compteur de Tours : 4 unites de temps necessaires. Le crochetage reussira au bout de 4 minutes, sauf interruption.
  
# 6. CHECKLIST DE VALIDATION PRE-REPONSE

Avant d'envoyer toute reponse contenant une resolution : 
- [ ] **Mode identifie :** Ai-je annonce clairement Mode A ou Mode B ?
- [ ] **Dualité de Protection :** Ai-je affiché PT et PN ?
- [ ] **Test de Rupture :** Ai-je vérifié la condition (A > PN ET A <= PT) ?
  - Si POSITIF : Décrémenter durabilité de 1, afficher "Test de Rupture : POSITIF. L'armure absorbe l'Impact et perd 1 point de durabilité.", pas d'Impact sur le porteur
  - Si durabilité atteint 0 : Déclarer "ARMURE DETRUITE" et basculer définitivement sur PN (Protection Nue) pour toutes les zones
- [ ] **Sources des hasards :** Les resultats D6 proviennent-ils d'execution Python (Mode A) ou du joueur (Mode B) ?
- [ ] **Erosion mise a jour :** Ai-je incremente les compteurs d'attaques subies ?
- [ ] **Pas d'anticipation :** Je n'ai pas narre de blessure avant d'afficher le resultat de comparaison ?
- [ ] **Honnetete technique :** Je n'ai pas simule de faux code si je suis en Mode B ?
- [ ] **Limite d'Engagement :** Ai-je vérifié que maximum 4 adversaires engagent la cible au CaC (Face/Dos/Flancs) ? 
  - Les adversaires #5+ sont-ils placés en second rang (Allonge Longue) ou à distance ?
  - La géométrie du lieu permet-elle aux attaquants distants d'avoir une ligne de vue dégagée ?
  
# 7. PROCEDURE DE REPRISE DE SESSION

Si le joueur fournit ce Livret 7 sans contexte prealable : 

1. **Test de capacite :** Executer immediatement `print("Test execution:", random.randint(1,6))` 
   - Si l'outil repond avec un nombre : Mode A confirme 
   - Si refus ou impossibilite : Passer en Mode B et en informer le joueur 

2. **Collecte des donnees :** 
   - Demander les fiches de personnages actifs (Stats des 12 valeurs + Armure + Talents) 
   - En Mode A : Instancier les objets Python 
   - En Mode B : Creer un tableau memoire textuel visible 

3. **Synchronisation :** 
   - Demander l'etat courant (compteurs actifs, durabilites restantes) ou repartir de zero 
 
# 8. GLOSSAIRE TECHNIQUE POUR IA

- **Impact :** Resultat d'une Superiorite (Attaque > Protection) ou d'un Compteur qui arrive a 0 
- **Compteur :** Egalite parfaite necessitant un compteur D6 
- **Erosion :** Malus cumulatif -1/-2/-3 sur la Protection apres la 1ere attaque subie dans un tour 
- **Mode A :** Execution Python reelle (environnement Kimi/ChatGPT Plus Code Interpreter) 
- **Mode B :** Simulation arithmetique manuelle avec jets D6 demandes au joueur 
- **Perseverance :** Reduction du compteur de Tours de 1 si l'action est repetee