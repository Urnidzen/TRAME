// nav.js - Barre de navigation globale SCCS
(function() {
    'use strict';
    
    // Configuration des livrets (ordre logique)
    const BOOKLETS = [
        { id: 'fiche', file: 'Fiche de personnage.v0.86.html', label: '📋 Fiche', short: 'Fiche' },
        { id: 'livret1', file: 'Livret1-Mecanismes.v0.84.html', label: 'I. Mécanismes', short: 'Mécanismes' },
        { id: 'livret2', file: 'Livret2-Creation.v0.73.html', label: 'II. Création', short: 'Création' },
        { id: 'livret3', file: 'Livret3-Equipement.v0.77.html', label: 'III. Équipement', short: 'Équipement' },
        { id: 'livret4', file: 'Livret4-Rencontres.v0.79.html', label: 'IV. Rencontres', short: 'Rencontres' },
        { id: 'livret5', file: 'Livret5-Bestiaire.v0.79.html', label: 'V. Bestiaire', short: 'Bestiaire' }
    ];

    // Détection automatique de la page actuelle si CURRENT_BOOKLET n'est pas défini
    function detectCurrentBooklet() {
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        
        // Cherche correspondance exacte
        let found = BOOKLETS.find(b => b.file === currentFile);
        
        // Si pas trouvé (URL avec hash ou params), chercher partial
        if (!found) {
            found = BOOKLETS.find(b => currentFile.includes(b.file.split('.')[0]));
        }
        
        return found ? found.id : null;
    }

    // Injection du CSS
    function injectStyles() {
        const css = `
            .sccs-global-nav {
                background: linear-gradient(180deg, rgba(28, 25, 23, 0.95) 0%, rgba(44, 37, 32, 0.98) 100%);
                border-bottom: 2px solid #7c2d12;
                position: sticky;
                top: 0;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(0,0,0,0.4);
                backdrop-filter: blur(10px);
                font-family: 'Cinzel', serif;
            }
            
            .sccs-nav-container {
                max-width: 1400px;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.3rem;
                padding: 0.6rem 1rem;
                flex-wrap: wrap;
            }
            
            .sccs-nav-link {
                color: #d8c3a5;
                text-decoration: none;
                padding: 0.5rem 1rem;
                border-radius: 4px;
                font-size: 0.85rem;
                font-weight: 600;
                letter-spacing: 0.03em;
                transition: all 0.3s ease;
                border: 1px solid transparent;
                position: relative;
                white-space: nowrap;
            }
            
            .sccs-nav-link:hover {
                background: rgba(124, 45, 18, 0.4);
                border-color: #7c2d12;
                color: #fff;
                transform: translateY(-1px);
                box-shadow: 0 2px 8px rgba(124, 45, 18, 0.3);
            }
            
            .sccs-nav-link.active {
                background: #7c2d12;
                color: #f4ecd8;
                border-color: #9a3412;
                box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
            }
            
            .sccs-nav-link.active::after {
                content: '';
                position: absolute;
                bottom: -8px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid #7c2d12;
            }
            
            /* Mobile : scroll horizontal */
            @media (max-width: 768px) {
                .sccs-global-nav {
                    top: 0;
                }
                .sccs-nav-container {
                    justify-content: flex-start;
                    overflow-x: auto;
                    flex-wrap: nowrap;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                    gap: 0.2rem;
                    padding: 0.5rem;
                }
                .sccs-nav-container::-webkit-scrollbar {
                    display: none;
                }
                .sccs-nav-link {
                    font-size: 0.8rem;
                    padding: 0.4rem 0.8rem;
                    flex-shrink: 0;
                }
                .sccs-nav-link.active::after {
                    display: none;
                }
            }
            
            /* Ajustement pour votre header existant */
            body {
                padding-top: 0 !important;
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = css;
        document.head.appendChild(styleSheet);
    }

    // Création de la barre de navigation
    function createNavigation() {
        const currentId = (typeof CURRENT_BOOKLET !== 'undefined') ? CURRENT_BOOKLET : detectCurrentBooklet();
        
        const nav = document.createElement('nav');
        nav.className = 'sccs-global-nav';
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Navigation principale');
        
        const container = document.createElement('div');
        container.className = 'sccs-nav-container';
        
        BOOKLETS.forEach(booklet => {
            const link = document.createElement('a');
            link.href = booklet.file;
            link.className = 'sccs-nav-link';
            link.textContent = window.innerWidth < 480 ? booklet.short : booklet.label;
            
            if (booklet.id === currentId) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
            
            container.appendChild(link);
        });
        
        nav.appendChild(container);
        
        // Insérer au début du body
        document.body.insertBefore(nav, document.body.firstChild);
    }

    // Initialisation
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            injectStyles();
            createNavigation();
        });
    } else {
        injectStyles();
        createNavigation();
    }
    
    // Recalcul des labels au redimensionnement (short vs full)
    window.addEventListener('resize', () => {
        const links = document.querySelectorAll('.sccs-nav-link');
        const width = window.innerWidth;
        links.forEach((link, index) => {
            if (BOOKLETS[index]) {
                link.textContent = width < 480 ? BOOKLETS[index].short : BOOKLETS[index].label;
            }
        });
    });
})();
