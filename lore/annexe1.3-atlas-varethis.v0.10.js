/**
 * TRAME - Annexe 1.3 : Atlas (Royaume de Varethis)
 * Version : v0.10
 * Passe des Trois Bornes, Karsenne, Parfumerie Leirykle, Palais royal et Domaine de Clairval
 * État de référence : Automne 1250
 */

window.TRAME_Atlas = window.TRAME_Atlas || {};

(function() {

    window.TRAME_Atlas.VARETHIS_HTML = `
        <!-- ======================================================== -->
        <!-- 2. ROYAUME DE VARETHIS -->
        <!-- ======================================================== -->
        <h2 id="royaume-varethis">Royaume de Varethis</h2>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : royaume humain situé à l'est du massif frontalier.</strong></p></div>
            <div class="rule-item">
                <p>Établi dans une haute vallée froide et abritée au-delà du massif montagneux frontalier, le royaume de Varethis vit sous l'autorité de la reine Ysoria. Sa capitale, Karsenne, se trouve à une altitude nettement supérieure aux plaines d'Ardélie mais en contrebas de la Passe des Trois Bornes. La Couronne de Varethis et son conseil ignorent totalement l'existence de l'Empire de Traverse à l'Est et considèrent Elkyriel comme un Seigneur Mercenaire indépendant d'exception.</p>
                <p>Dans les profondeurs sous les terres de Varethis s'étend le domaine souverain de <strong>Dorn-Khazad</strong>, cité-État naine indépendante qui ne relève pas de l'autorité de la Couronne humaine.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-trois-bornes">Passe des Trois Bornes (Frontière)</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : col de haute montagne et fort frontalier — Coordonnées : (15,04 ; -2,16).</strong></p></div>
            <div class="rule-item">
                <p>Point de passage principal à travers le massif montagneux séparant Ardélie de Varethis, marqué par trois monolithes antiques dressés au sommet du col. La route y parvient après une longue montée très sinueuse depuis Deux-Couronnes (≈ 7 jours de marche), puis redescend plus directement vers la haute vallée en direction de Karsenne (≈ 7 jours de marche).</p>
            </div>
            <div class="rule-item">
                <p><strong>Fort frontalier de la Passe :</strong> Ouvrage de pierre contrôlant la route principale et le poste de péage. La garnison permanente de Varethis est commandée par le <strong>capitaine Caldrin</strong>, secondé par le vétéran <strong>lieutenant Brenor</strong>. Le passage civil est ouvert sous leur contrôle ; les convois et troupes armées demeurent soumis à l'autorisation formelle des autorités de Varethis.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-karsenne">Karsenne (Capitale)</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : grande cité royale de haute vallée — Coordonnées : (19,04 ; -2,16).</strong></p></div>
            <div class="rule-item">
                <p>Capitale fortifiée ceinturée de hauts remparts défendus par des archers et des balistes. La cité comprend un quartier royal distinct abritant le palais de la Couronne, un quartier commerçant d'artisans réputés, des écuries royales à proximité de la porte occidentale, ainsi qu'un marché où la vente d'esclaves demeure légale selon les lois du royaume.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Esplanade occidentale :</strong> Ancienne esplanade d’entraînement proche des remparts offrant un espace dégagé pour l'atterrissage ou le décollage d'une créature volante.</p></div>
        <div class="card-end"></div>

        <h4 id="section-parfumerie-leirykle">Parfumerie de maître Leirykle</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : maison, atelier artisanal et commerce de luxe.</strong></p></div>
            <div class="rule-item">
                <p>Établissement prestigieux situé entre le quartier des artisans et la ville haute de Karsenne, à proximité de la porte occidentale et des écuries royales. Propriété publique de maître Leirykle (identité de couverture et apparence humaine d'Elkyriel), la parfumerie est un fournisseur reconnu de la Maison royale de Varethis.</p>
            </div>
            <div class="rule-item"><p class="pseudo-li"><strong>Direction et artisans :</strong> <strong>Solenne Varin</strong> (herboriste et distillatrice en chef, tenue courante de l'échoppe) et <strong>Kordran Fergivre</strong> (maître verrier nain, taille et gravure d'objets et flacons de cristal). Inspections financières périodiques assurées par Mirelle Auvray.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Cercle de Téléportation :</strong> La cave sécurisée de l'atelier abrite le <strong>Cercle de Téléportation n° 7</strong> permanent.</p></div>
            <div class="rule-item"><p class="pseudo-li"><strong>Sécurité :</strong> Surveillance discrète et coordination des renseignements assurées sous contrat civil en liaison directe avec la cellule des Corbeaux de <strong>Selyne Var</strong>.</p></div>
        <div class="card-end"></div>

        <h4 id="section-palais-karsenne">Palais royal de Karsenne</h4>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : palais royal et siège de la Couronne de Varethis.</strong></p></div>
            <div class="rule-item">
                <p>Résidence souveraine de la reine <strong>Ysoria</strong> et siège du gouvernement. L'édifice comprend une vaste cour d'honneur intérieure, les salons privés du conseil royal (où siègent notamment le connétable Gautier de Valcroix, Renaud de Vaulnes et la chancelière) et les appartements du premier prince du sang et héritier <strong>Méléandre</strong>.</p>
                <p>L'arrière du palais s'ouvre sur un ancien jardin arboré dont les pelouses dégagées permettent l'atterrissage discret d'une wyverne. L'éclaireuse <strong>Maëra</strong> y réside auprès de Méléandre.</p>
            </div>
        <div class="card-end"></div>

        <h3 id="section-domaine-clairval">Domaine de Clairval</h3>
        <div class="card-start"></div>
            <div class="rule-item"><p><strong>Type : grand domaine rural et intendance agricole.</strong></p></div>
            <div class="rule-item">
                <p>Important domaine céréalier, apicole et d'élevage situé à environ cinq lieues au sud-est de Karsenne, rattaché aux domaines de Vaulnes et contribuant au ravitaillement régulier de la Cour.</p>
                <p><strong>Eliane Var</strong> (sœur cadette de Selyne Var) y vit librement sous l'identité d’<strong>Aline Varet</strong>, logée et rémunérée au sein de l'intendance des comptes pour ses talents d'écriture et de gestion.</p>
            </div>
        <div class="card-end"></div>
        <div class="page-break"></div>
    `;

})();
