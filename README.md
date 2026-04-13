# 🏛️ LexFlow — Gestion Intelligente de Dossiers Juridiques
**Projet de Fin de Module (SI)** *Optimisation des processus juridiques via l'architecture Cloud*

---

## 📖 Concept
**LexFlow** est un écosystème conçu pour digitaliser la relation entre les cabinets d'avocats et leurs clients. L'objectif est de centraliser les pièces justificatives, de structurer les échanges et d'assurer une confidentialité totale des données sensibles.

## 🗺️ Schéma du Système (Mapping)

### Architecture des données
* **Utilisateurs (Profils) :** Gestion des accès sécurisés (Avocats vs Clients).
* **Annuaire (Experts) :** Base de données des avocats classés par domaines de compétence.
* **Le Dossier (Interaction) :** L'élément central liant un client, un avocat et un litige spécifique.
* **Coffre-fort (Documents) :** Stockage cloud pour les preuves et contrats (fichiers non-structurés).

### Parcours de l'utilisateur
1. **Authentification** sécurisée via Supabase Auth.
2. **Consultation** de l'annuaire des experts disponibles.
3. **Ouverture de dossier** avec dépôt de pièces jointes (Storage).
4. **Monitoring** de l'évolution du statut du litige sur un Dashboard dédié.

---

## 🧠 Analyse Technique & Vision SI

### 💸 Stratégie Financière : Le passage au Serverless
L'utilisation de **Vercel** et **Supabase** permet de s'affranchir du **CAPEX** (investissements lourds en serveurs physiques). Dans un contexte de startup juridique, cela permet de valider le concept (MVP) avec un **OPEX** (coût de fonctionnement) quasi nul. On ne paie pas pour la maintenance d'une salle serveur, mais uniquement pour la valeur consommée.

### 📈 Scalabilité et Haute Disponibilité
Contrairement à un serveur local qui possède une limite physique de RAM et CPU, **LexFlow** repose sur une infrastructure "Edge". Chaque connexion est traitée par le nœud le plus proche de l'utilisateur, garantissant une rapidité d'exécution même en cas de pic d'activité simultanée sur la plateforme.

### 📂 Gestion de la donnée : SQL vs Blobs
Le projet sépare strictement :
1. **Les données transactionnelles :** (Identités, dates, honoraires) stockées en **PostgreSQL**.
2. **Les données binaires :** (Preuves en PDF, photos) stockées en **Object Storage**, garantissant une manipulation fluide des fichiers lourds sans ralentir la base de données.

---

## 🚀 Installation & Setup
```bash
# Clonez le dépôt
git clone [https://github.com/MalakMakes/projet-si-.git](https://github.com/MalakMakes/projet-si-.git)

# Installation des dépendances
npm install

# Lancement de l'environnement de dev
npm run dev
