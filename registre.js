/**
 * TRAME REGISTRE - SYSTEME DE SAUVEGARDE CENTRALISÉ
 * Version Étendue : Traitement par lot, export/import ZIP et gestion des doublons
 */

const TRAME_Registre = {
    // Clé unique de stockage dans le navigateur
    STORAGE_KEY: "TRAME_registre_v1",

    // Cache des données en mémoire vive
    data: {
        profiles: [] 
    },

    /**
     * Initialisation : Charge les données depuis le navigateur
     */
    init: function() {
        this.reload();
    },

    /**
     * Force la relecture du LocalStorage pour synchroniser l'état
     */
    reload: function() {
        const store = localStorage.getItem(this.STORAGE_KEY);
        if (store) {
            try {
                this.data = JSON.parse(store);
            } catch (e) {
                console.error("[TRAME Registre] Données corrompues, reset mémoire.", e);
                this.data = { profiles: [] };
            }
        } else {
            this.data = { profiles: [] };
        }
    },

    /**
     * Récupère la liste complète des profils
     */
    getAllProfiles: function() {
        this.reload();
        return [...this.data.profiles];
    },

    /**
     * Récupère un profil spécifique
     */
    getProfile: function(id) {
        this.reload();
        return this.data.profiles.find(p => p.id === id) || null;
    },

    /**
     * Crée une nouvelle page vierge dans le registre
     */
    createProfile: function(name) {
        this.reload();
        
        const newId = "p_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6); 
        const newProfile = {
            id: newId,
            name: name || "Nouveau Personnage",
            timestamp: Date.now(),
            content: {} 
        };

        this.data.profiles.push(newProfile);
        this.save();
        return newId;
    },

    /**
     * Met à jour les données d'un profil
     */
    updateProfile: function(id, contentData, name) {
        this.reload();

        const profile = this.data.profiles.find(p => p.id === id);
        if (profile) {
            profile.content = contentData;
            if (name) profile.name = name;
            profile.timestamp = Date.now();
            this.save();
        } else {
            console.warn("[TRAME Registre] Profil introuvable pour mise à jour :", id);
        }
    },

    /**
     * Supprime définitivement un profil
     */
    deleteProfile: function(id) {
        this.reload();

        const index = this.data.profiles.findIndex(p => p.id === id);
        if (index > -1) {
            this.data.profiles.splice(index, 1);
            this.save();
            return true;
        }
        return false;
    },

    /**
     * Écrit les données physiquement dans le LocalStorage
     */
    save: function() {
        try {
            const json = JSON.stringify(this.data);
            localStorage.setItem(this.STORAGE_KEY, json);
        } catch (e) {
            console.error("[TRAME Registre] Erreur critique sauvegarde :", e);
            alert("Attention : Impossible de sauvegarder (Quota dépassé ?)");
        }
    },

    /**
     * Nettoie une chaîne pour en faire un nom de fichier valide
     */
    sanitizeFilename: function(name) {
        return (name || "Sans_Nom")
            .trim()
            .replace(/[/\\?%*:|"<>]/g, "-")
            .replace(/\s+/g, "_");
    },

    /**
     * Export groupé : télécharge une archive ZIP contenant un fichier JSON par personnage
     */
    exportAllAsZip: async function() {
        this.reload();
        if (typeof JSZip === "undefined") {
            alert("Erreur : la bibliothèque JSZip n'est pas chargée.");
            return;
        }

        const profiles = this.getAllProfiles();
        if (profiles.length === 0) {
            alert("Aucun personnage à exporter.");
            return;
        }

        const zip = new JSZip();
        const usedNames = {};

        profiles.forEach(profile => {
            let baseName = this.sanitizeFilename(profile.name);
            if (usedNames[baseName]) {
                usedNames[baseName]++;
                baseName = `${baseName}_(${usedNames[baseName]})`;
            } else {
                usedNames[baseName] = 1;
            }

            const fileName = `TRAME_Heros_${baseName}.json`;
            zip.file(fileName, JSON.stringify(profile, null, 2));
        });

        const zipBlob = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(zipBlob);
        const a = document.createElement("a");
        const dateStr = new Date().toISOString().split("T")[0];
        a.href = url;
        a.download = `TRAME_Personnages_JSON_${dateStr}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    /**
     * Import multiple de profils avec résolution des doublons (Option B)
     * @param {Array<{name: string, content: object}>} incomingProfiles 
     */
    importProfilesBatch: function(incomingProfiles) {
        this.reload();
        let importedCount = 0;
        let applyAllChoice = null; // 'replace', 'copy', 'ignore'

        for (const item of incomingProfiles) {
            if (!item || !item.content) continue;

            const charName = (item.name || item.content["char-name"] || "Sans Nom").trim();
            const existing = this.data.profiles.find(p => p.name.trim().toLowerCase() === charName.toLowerCase());

            if (existing) {
                let choice = applyAllChoice;

                if (!choice) {
                    const answer = prompt(
                        `Le personnage « ${charName} » existe déjà.\n` +
                        `Tapez :\n` +
                        `- 1 pour ÉCRASER l'existant\n` +
                        `- 2 pour CRÉER UNE COPIE\n` +
                        `- 3 pour IGNORER ce fichier\n` +
                        `- 1! ou 2! pour APPLIQUER À TOUS les suivants`,
                        "2"
                    );

                    if (answer === null) continue; // Annulation de cet élément

                    const cleanAnswer = answer.trim();
                    if (cleanAnswer === "1!") {
                        applyAllChoice = "replace";
                        choice = "replace";
                    } else if (cleanAnswer === "2!") {
                        applyAllChoice = "copy";
                        choice = "copy";
                    } else if (cleanAnswer === "1") {
                        choice = "replace";
                    } else if (cleanAnswer === "3") {
                        choice = "ignore";
                    } else {
                        choice = "copy";
                    }
                }

                if (choice === "replace") {
                    existing.content = item.content;
                    existing.name = charName;
                    existing.timestamp = Date.now();
                    importedCount++;
                } else if (choice === "copy") {
                    let copyIndex = 2;
                    let candidateName = `${charName} (Copie)`;
                    while (this.data.profiles.some(p => p.name.trim().toLowerCase() === candidateName.toLowerCase())) {
                        candidateName = `${charName} (Copie ${copyIndex})`;
                        copyIndex++;
                    }
                    const newId = "p_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6);
                    this.data.profiles.push({
                        id: newId,
                        name: candidateName,
                        timestamp: Date.now(),
                        content: Object.assign({}, item.content, { "char-name": candidateName })
                    });
                    importedCount++;
                }
                // Si 'ignore', on passe au suivant
            } else {
                // Pas de doublon : ajout direct
                const newId = "p_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6);
                this.data.profiles.push({
                    id: newId,
                    name: charName,
                    timestamp: Date.now(),
                    content: item.content
                });
                importedCount++;
            }
        }

        this.save();
        return importedCount;
    }
};

// Auto-initialisation
TRAME_Registre.init();