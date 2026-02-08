// nav.js - Navigation globale SCCS (Latérale Droite) - VERSION CORRIGÉE
(function() {
    'use strict';
    
    console.log('SCCS Nav: Initialisation...');

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
    const currentFile = window.location.pathname.split('/').pop() || window.location.href.split('/').pop();
    console.log('SCCS Nav: Fichier actuel:', currentFile);
    
    const currentBooklet = BOOKLETS.find(b => {
        const fileName = b.file.replace('%20', ' ');
        return currentFile.includes(fileName) || currentFile.includes(b.id);
    }) || BOOKLETS[0];
    
    console.log('SCCS Nav: Livret actuel:', currentBooklet.label);

    // Injection CSS avec !important pour forcer l'affichage
    const style = document.createElement('style');
    style.textContent = `
        .sccs-global-nav-right {
            position: fixed !important;
            right: 0 !important;
            top: 80px !important;
            height: calc(100vh - 80px) !important;
            width: 50px !important;
            background: linear-gradient(to left, #2c2520, #1c1917) !important;
            border-left: 3px solid #7c2d12 !important;
            z-index: 9999 !important;
            display: flex !important;
            flex-direction: column !important;
            box-shadow: -4px 0 20px rgba(0,0,0,0.5) !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .sccs-nav-container-vertical {
            display: flex !important;
            flex-direction: column !important;
            height: 100% !important;
            overflow-y: auto !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
            padding: 10px 0 !important;
            gap: 8px !important;
        }

        .sccs-nav-container-vertical::-webkit-scrollbar {
            display: none !important;
        }

        .sccs-nav-link-vertical {
            writing-mode: vertical-rl !important;
            text-orientation: mixed !important;
            transform: rotate(180deg) !important;
            font-family: 'Cinzel', serif !important;
            font-size: 11px !important;
            font-weight: 600 !important;
            color: #d8c3a5 !important;
            text-decoration: none !important;
            padding: 12px 4px !important;
            margin: 0 4px !important;
            border-radius: 4px 0 0 4px !important;
            border: 1px solid rgba(124, 45, 18, 0.5) !important;
            border-right: none !important;
            background: rgba(0,0,0,0.3) !important;
            transition: all 0.3s ease !important;
            min-height: 80px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            letter-spacing: 0.1em !important;
            line-height: 1.2 !important;
            cursor: pointer !important;
            position: relative !important;
        }

        .sccs-nav-link-vertical:hover {
            background: #7c2d12 !important;
            color: #fff !important;
            width: 60px !important;
            margin-right: 0 !important;
            margin-left: -10px !important;
            padding-left: 10px !important;
            z-index: 10000 !important;
        }

        .sccs-nav-link-vertical.active {
            background: #7c2d12 !important;
            color: #f4ecd8 !important;
            border-color: #9a3412 !important;
            box-shadow: -4px 0 15px rgba(124, 45, 18, 0.6) !important;
            font-weight: 700 !important;
        }

        .sccs-nav-link-vertical.active::before {
            content: '' !important;
            position: absolute !important;
            left: 0 !important;
            top: 20% !important;
            height: 60% !important;
            width: 3px !important;
            background: #d8c3a5 !important;
            border-radius: 0 2px 2px 0 !important;
        }

        /* Icône */
        .sccs-nav-icon {
            font-size: 16px !important;
            margin-bottom: 6px !important;
            display: block !important;
        }

        /* Mobile */
        @media (max-width: 1024px) {
            .sccs-global-nav-right {
                top: auto !important;
                bottom: 0 !important;
                left: 0 !important;
                right: 0 !important;
                width: 100% !important;
                height: 60px !important;
                border-left: none !important;
                border-top: 3px solid #7c2d12 !important;
                flex-direction: row !important;
            }

            .sccs-nav-container-vertical {
                flex-direction: row !important;
                overflow-x: auto !important;
                overflow-y: hidden !important;
                padding: 5px !important;
                gap: 5px !important;
                justify-content: center !important;
            }

            .sccs-nav-link-vertical {
                writing-mode: horizontal-tb !important;
                transform: none !important;
                min-height: auto !important;
                min-width: 70px !important;
                padding: 8px 5px !important;
                border-radius: 4px !important;
                border-right: 1px solid rgba(124, 45, 18, 0.5) !important;
                flex-direction: column !important;
                font-size: 10px !important;
                margin: 0 !important;
            }

            .sccs-nav-link-vertical:hover {
                width: auto !important;
                margin: 0 !important;
                padding-left: 5px !important;
            }

            .sccs-nav-icon {
                margin-bottom: 2px !important;
                margin-right: 0 !important;
                font-size: 18px !important;
            }
            
            body {
                padding-bottom: 70px !important;
            }
        }

        @media (max-width: 480px) {
            .sccs-nav-link-vertical {
                min-width: 50px !important;
                font-size: 9px !important;
            }
            .sccs-nav-link-vertical span:not(.sccs-nav-icon) {
                display: none !important;
            }
        }
    `;
    
    try {
        document.head.appendChild(style);
        console.log('SCCS Nav: Styles injectés');
    } catch(e) {
        console.error('SCCS Nav: Erreur injection CSS:', e);
    }

    // Création de la navigation
    const nav = document.createElement('nav');
    nav.className = 'sccs-global-nav-right';
    nav.setAttribute('aria-label', 'Navigation des Livrets');
    nav.id = 'sccs-global-nav';
    
    let navHTML = '<div class="sccs-nav-container-vertical">';
    
    BOOKLETS.forEach(booklet => {
        const isActive = booklet.id === currentBooklet.id;
        const activeClass = isActive ? 'active' : '';
        
        navHTML += `
            <a href="${booklet.file.replace('%20', ' ')}" 
               class="sccs-nav-link-vertical ${activeClass}" 
               data-booklet="${booklet.id}"
               title="${booklet.label}">
                <span class="sccs-nav-icon">${booklet.icon}</span>
                <span>${booklet.label}</span>
            </a>
        `;
    });
    
    navHTML += '</div>';
    nav.innerHTML = navHTML;

    // Insertion dans le DOM dès que possible
    function insertNav() {
        if (document.body) {
            // Insère au début du body pour être sûr qu'elle soit au-dessus
            document.body.insertBefore(nav, document.body.firstChild);
            console.log('SCCS Nav: Navigation insérée dans le DOM');
            
            // Vérification visuelle
            const computed = window.getComputedStyle(nav);
            console.log('SCCS Nav: Position:', computed.position, 'Right:', computed.right, 'Display:', computed.display);
        } else {
            console.error('SCCS Nav: Body non trouvé, retry...');
            setTimeout(insertNav, 100);
        }
    }

    // Si le DOM est déjà prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertNav);
    } else {
        insertNav();
    }

    console.log('SCCS Nav: Initialisation terminée');
})();
