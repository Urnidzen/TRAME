// nav.js - Navigation globale SCCS (Latérale Droite)
(function() {
    'use strict';

    // Configuration des livrets
    const BOOKLETS = [
        { id: 'fiche', file: 'Fiche%20de%20personnage.v0.86.html', label: 'Fiche', icon: '📋' },
        { id: 'livret1', file: 'Livret1-Mecanismes.v0.84.html', label: 'Mécanismes', icon: '⚙️' },
        { id: 'livret2', file: 'Livret2-Creation.v0.73.html', label: 'Création', icon: '🌱' },
        { id: 'livret3', file: 'Livret3-Equipement.v0.77.html', label: 'Équipement', icon: '📜' },
        { id: 'livret4', file: 'Livret4-Rencontres.v0.79.html', label: 'Rencontres', icon: '🐉' },
        { id: 'livret5', file: 'Livret5-Bestiaire.v0.79.html', label: 'Bestiaire', icon: '🐾' }
    ];

    // Détection de la page courante
    const currentFile = window.location.href.split('/').pop();
    const currentBooklet = BOOKLETS.find(b => 
        currentFile.includes(b.file.replace('%20', ' ')) || 
        currentFile.includes(b.id)
    ) || BOOKLETS[0];

    // Injection CSS
    const style = document.createElement('style');
    style.textContent = `
        /* Barre latérale droite */
        .sccs-global-nav-right {
            position: fixed;
            right: 0;
            top: 80px; /* Hauteur du header */
            height: calc(100vh - 80px);
            width: 50px;
            background: linear-gradient(to left, rgba(44, 37, 32, 0.95), rgba(28, 25, 23, 0.98));
            border-left: 3px solid #7c2d12;
            z-index: 40;
            display: flex;
            flex-direction: column;
            box-shadow: -4px 0 20px rgba(0,0,0,0.3);
        }

        .sccs-nav-container-vertical {
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
            padding: 1rem 0;
            gap: 0.5rem;
        }

        .sccs-nav-container-vertical::-webkit-scrollbar {
            display: none;
        }

        /* Style des onglets verticaux */
        .sccs-nav-link-vertical {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(180deg);
            font-family: 'Cinzel', serif;
            font-size: 0.75rem;
            font-weight: 600;
            color: #d8c3a5;
            text-decoration: none;
            padding: 1rem 0.4rem;
            margin: 0 0.25rem;
            border-radius: 4px 0 0 4px;
            border: 1px solid rgba(124, 45, 18, 0.3);
            border-right: none;
            background: rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            min-height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            letter-spacing: 0.1em;
        }

        /* Icône en haut de l'onglet */
        .sccs-nav-link-vertical::before {
            content: attr(data-icon);
            writing-mode: horizontal-tb;
            transform: rotate(180deg);
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            opacity: 0.8;
        }

        .sccs-nav-link-vertical:hover {
            background: rgba(124, 45, 18, 0.4);
            border-color: #7c2d12;
            color: #fff;
            width: 60px;
            margin-right: 0;
            padding-left: 0.6rem;
            box-shadow: -4px 0 15px rgba(124, 45, 18, 0.4);
        }

        /* Onglet actif */
        .sccs-nav-link-vertical.active {
            background: #7c2d12;
            color: #f4ecd8;
            border-color: #9a3412;
            width: 55px;
            margin-right: 0;
            box-shadow: -4px 0 20px rgba(124, 45, 18, 0.6), inset 0 1px 0 rgba(255,255,255,0.2);
            font-weight: 700;
        }

        /* Indicateur visuel subtil */
        .sccs-nav-link-vertical.active::after {
            content: '';
            position: absolute;
            left: 0;
            top: 20%;
            height: 60%;
            width: 3px;
            background: #d8c3a5;
            border-radius: 0 2px 2px 0;
        }

        /* Mobile : bascule en barre horizontale en bas */
        @media (max-width: 1024px) {
            .sccs-global-nav-right {
                top: auto;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 60px;
                border-left: none;
                border-top: 3px solid #7c2d12;
                flex-direction: row;
            }

            .sccs-nav-container-vertical {
                flex-direction: row;
                overflow-x: auto;
                overflow-y: hidden;
                padding: 0.5rem;
                gap: 0.5rem;
                justify-content: center;
            }

            .sccs-nav-link-vertical {
                writing-mode: horizontal-tb;
                transform: none;
                min-height: auto;
                min-width: 60px;
                padding: 0.5rem;
                border-radius: 4px;
                border-right: 1px solid rgba(124, 45, 18, 0.3);
                flex-direction: column;
                font-size: 0.7rem;
            }

            .sccs-nav-link-vertical::before {
                transform: none;
                margin-bottom: 0.2rem;
                margin-right: 0;
                font-size: 1rem;
            }

            .sccs-nav-link-vertical:hover,
            .sccs-nav-link-vertical.active {
                width: auto;
                padding-left: 0.5rem;
            }

            .sccs-nav-link-vertical.active::after {
                top: 0;
                left: 20%;
                width: 60%;
                height: 3px;
            }

            /* Ajustement du body pour ne pas cacher le contenu */
            body {
                padding-bottom: 70px;
            }
        }

        /* Très petit écran */
        @media (max-width: 480px) {
            .sccs-nav-link-vertical {
                min-width: 50px;
                font-size: 0.65rem;
            }
            
            .sccs-nav-link-vertical span {
                display: none; /* Cache le texte, garde seulement l'icône */
            }
        }
    `;
    document.head.appendChild(style);

    // Création de la navigation
    const nav = document.createElement('nav');
    nav.className = 'sccs-global-nav-right';
    nav.setAttribute('aria-label', 'Navigation des Livrets');
    
    let navHTML = '<div class="sccs-nav-container-vertical">';
    
    BOOKLETS.forEach(booklet => {
        const isActive = booklet.id === currentBooklet.id;
        const activeClass = isActive ? 'active' : '';
        
        navHTML += `
            <a href="${booklet.file.replace('%20', ' ')}" 
               class="sccs-nav-link-vertical ${activeClass}" 
               data-booklet="${booklet.id}"
               data-icon="${booklet.icon}"
               title="${booklet.label}">
                <span>${booklet.label}</span>
            </a>
        `;
    });
    
    navHTML += '</div>';
    nav.innerHTML = navHTML;

    // Insertion dans le DOM
    document.body.appendChild(nav);

    console.log('SCCS Navigation (Latérale Droite) loaded - Current:', currentBooklet.label);
})();
