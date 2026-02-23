/**
 * TRAME REGISTRE - SYSTEME DE SAUVEGARDE CENTRALISÉ
 * Version Corrigée : Synchronisation multi-iframes
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
     * CRUCIAL : Doit être appelé avant toute modification pour éviter les écrasements
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
        this.reload(); // On s'assure d'avoir la dernière version
        return [...this.data.profiles];
    },

    /**
     * Récupère un profil spécifique
     */
    getProfile: function(id) {
        this.reload(); // On s'assure d'avoir la dernière version
        return this.data.profiles.find(p => p.id === id) || null;
    },

    /**
     * Crée une nouvelle page vierge dans le registre
     */
    createProfile: function() {
        this.reload(); // IMPORTANT : Recharger avant d'ajouter
        
        const newId = "p_" + Date.now(); 
        const newProfile = {
            id: newId,
            name: "Nouveau Personnage",
            timestamp: Date.now(),
            content: {} 
        };

        this.data.profiles.push(newProfile);
        this.save();
        console.log("[TRAME Registre] Profil créé :", newId);
        return newId;
    },

    /**
     * Met à jour les données d'un profil
     */
    updateProfile: function(id, contentData, name) {
        this.reload(); // IMPORTANT : Recharger avant de modifier quoi que ce soit

        const profile = this.data.profiles.find(p => p.id === id);
        if (profile) {
            profile.content = contentData;
            if (name) profile.name = name;
            profile.timestamp = Date.now();
            this.save();
        } else {
            // Cas rare où le profil a été supprimé entre temps
            console.warn("[TRAME Registre] Profil introuvable pour mise à jour :", id);
        }
    },

    /**
     * Supprime définitivement un profil
     */
    deleteProfile: function(id) {
        this.reload(); // IMPORTANT : Recharger avant de supprimer

        const index = this.data.profiles.findIndex(p => p.id === id);
        if (index > -1) {
            this.data.profiles.splice(index, 1);
            this.save();
            console.log("[TRAME Registre] Profil supprimé :", id);
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
     * Export Global (Backup)
     */
    exportGlobalBackup: function() {
        this.reload();
        const dataStr = JSON.stringify(this.data, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const date = new Date().toISOString().split('T')[0];
        a.download = `TRAME_Registre_Complet_${date}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};

// Auto-initialisation
TRAME_Registre.init();
