/**
 * TRAME REGISTRE - SYSTEME DE SAUVEGARDE CENTRALISÉ
 * Gestion locale, multi-iframes et opérations par lot
 */

const TRAME_Registre = {
    STORAGE_KEY: "TRAME_registre_v1",

    data: {
        profiles: [] 
    },

    init: function() {
        this.reload();
    },

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

    getAllProfiles: function() {
        this.reload();
        return [...this.data.profiles];
    },

    getProfile: function(id) {
        this.reload();
        return this.data.profiles.find(p => p.id === id) || null;
    },

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

    updateProfile: function(id, contentData, name) {
        this.reload();
        const profile = this.data.profiles.find(p => p.id === id);
        if (profile) {
            profile.content = contentData;
            if (name) profile.name = name;
            profile.timestamp = Date.now();
            this.save();
        }
    },

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

    save: function() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
        } catch (e) {
            console.error("[TRAME Registre] Erreur de sauvegarde :", e);
            alert("Attention : Impossible de sauvegarder (Quota dépassé ?)");
        }
    },

    // 1. Export de toutes les fiches en fichiers JSON distincts dans un ZIP
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
            let safeName = (profile.name || "Sans_Nom").trim().replace(/[/\\?%*:|"<>]/g, "-").replace(/\s+/g, "_");
            if (usedNames[safeName]) {
                usedNames[safeName]++;
                safeName = `${safeName}_(${usedNames[safeName]})`;
            } else {
                usedNames[safeName] = 1;
            }
            zip.file(`TRAME_Heros_${safeName}.json`, JSON.stringify(profile, null, 2));
        });

        const zipBlob = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(zipBlob);
        const a = document.createElement("a");
        const date = new Date().toISOString().split("T")[0];
        a.href = url;
        a.download = `TRAME_Personnages_JSON_${date}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    // 2. Import par lot (fichiers JSON ou archive ZIP)
    importProfilesBatch: function(incomingProfiles) {
        this.reload();
        let imported = 0;

        for (const item of incomingProfiles) {
            if (!item || !item.content) continue;

            const charName = (item.name || item.content["char-name"] || "Sans Nom").trim();
            const existing = this.data.profiles.find(p => p.name.trim().toLowerCase() === charName.toLowerCase());

            if (existing) {
                const makeCopy = confirm(
                    `Le personnage « ${charName} » existe déjà.\n\n` +
                    `- Cliquez sur [OK] pour l'ajouter sous forme de COPIE.\n` +
                    `- Cliquez sur [Annuler] pour ÉCRASER la fiche existante.`
                );

                if (makeCopy) {
                    let copyIndex = 2;
                    let newName = `${charName} (Copie)`;
                    while (this.data.profiles.some(p => p.name.trim().toLowerCase() === newName.toLowerCase())) {
                        newName = `${charName} (Copie ${copyIndex})`;
                        copyIndex++;
                    }
                    const newId = "p_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6);
                    this.data.profiles.push({
                        id: newId,
                        name: newName,
                        timestamp: Date.now(),
                        content: Object.assign({}, item.content, { "char-name": newName })
                    });
                } else {
                    existing.content = item.content;
                    existing.name = charName;
                    existing.timestamp = Date.now();
                }
            } else {
                const newId = "p_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6);
                this.data.profiles.push({
                    id: newId,
                    name: charName,
                    timestamp: Date.now(),
                    content: item.content
                });
            }
            imported++;
        }

        this.save();
        return imported;
    }
};

TRAME_Registre.init();
