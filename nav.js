// nav.js - Navigation SCCS (CSP-friendly)
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    const BOOKLETS = [
        { id: 'fiche', file: 'Fiche de personnage.v0.86.html', label: 'Fiche', icon: '📋' },
        { id: 'livret1', file: 'Livret1-Mecanismes.v0.84.html', label: 'Mécanismes', icon: '⚙️' },
        { id: 'livret2', file: 'Livret2-Creation.v0.73.html', label: 'Création', icon: '🌱' },
        { id: 'livret3', file: 'Livret3-Equipement.v0.77.html', label: 'Équipement', icon: '📜' },
        { id: 'livret4', file: 'Livret4-Rencontres.v0.79.html', label: 'Rencontres', icon: '🐉' },
        { id: 'livret5', file: 'Livret5-Bestiaire.v0.79.html', label: 'Bestiaire', icon: '🐾' }
    ];

    // Détection page courante
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop();
    
    const currentBooklet = BOOKLETS.find(function(b) {
        return currentFile.includes(b.file) || currentFile.includes(b.id);
    }) || BOOKLETS[0];

    // Création container
    var nav = document.createElement('div');
    nav.className = 'sccs-nav-container';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Livrets SCCS');

    // Création des liens
    BOOKLETS.forEach(function(booklet) {
        var isActive = booklet.id === currentBooklet.id;
        
        var link = document.createElement('a');
        link.href = booklet.file;
        link.className = 'sccs-nav-link' + (isActive ? ' active' : '');
        link.title = booklet.label;
        
        var icon = document.createElement('span');
        icon.className = 'sccs-nav-icon';
        icon.textContent = booklet.icon;
        
        var text = document.createElement('span');
        text.textContent = booklet.label;
        
        link.appendChild(icon);
        link.appendChild(text);
        nav.appendChild(link);
    });

    // Insertion
    if (document.body) {
        document.body.appendChild(nav);
    }
});
