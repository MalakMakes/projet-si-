# ⚖️ Avocat-Link — Extranet de Conseil Juridique
**Projet de Fin de Module : "Build & Ship"** *Architecture Cloud & Vibe Programming*

---

## 🎯 Présentation du Projet
**Avocat-Link** est un extranet métier conçu pour digitaliser la relation avocat-client. Ce projet applique la philosophie du **Vibe Coding** : un développement rapide et efficace utilisant une stack 100% Cloud (Serverless) pour répondre aux standards modernes de l'industrie.

## 🗺️ Mapping du Thème (Mission 4.1)
Conformément à la "Roulette des Thèmes", voici la modélisation de notre architecture de données :

* **Table A (Utilisateurs) :** `Clients` — Gérée via **Supabase Auth**. Accès restreint à l'espace personnel.
* **Table B (Ressources) :** `Avocats` — Annuaire des experts classés par spécialité et barreau.
* **Table C (Interactions) :** `Consultations` — Table de jointure liant un Client à un Avocat (Statut : En attente, En cours, Clôturé).
* **Storage (Fichiers) :** `Dossier de preuve` — Fichiers PDF/Images uploadés par le client lors de la création d'une consultation.

---

## 🏗️ Analyse d'Architecture (Mission 4.2)

### 1. Analyse Financière : OPEX vs CAPEX
L'utilisation de **Vercel + Supabase** est stratégiquement plus logique pour lancer **Avocat-Link** que l'achat d'un serveur classique.
* **CAPEX (Capital Expenditure) :** Une infrastructure traditionnelle imposerait des coûts d'investissement initiaux massifs (achat de serveurs physiques, onduleurs, climatisation, licences logicielles). Ces dépenses sont figées avant même d'avoir un utilisateur.
* **OPEX (Operating Expenditure) :** Notre stack Cloud transforme ces charges en dépenses de fonctionnement variables. Grâce au "Free Tier" (modèle *Pay-as-you-grow*), nous démarrons avec un coût d'infrastructure nul. Le coût n'augmente que si le trafic augmente, optimisant ainsi la rentabilité du projet.

### 2. Scalabilité : Serverless vs Data Center Physique
Dans un **Data Center physique**, la scalabilité est rigide : pour augmenter la puissance, il faut commander, installer et configurer de nouveaux racks de serveurs (scalabilité verticale limitée). Cela demande aussi une gestion constante de la climatisation et de l'espace.
**Vercel** gère la scalabilité de manière **horizontale et automatique**. Notre application est déployée sur des "Edge Functions" : le code s'exécute sur le nœud le plus proche de l'utilisateur. Si 10 000 clients se connectent simultanément à Avocat-Link, Vercel alloue dynamiquement des ressources sans aucune intervention humaine.

### 3. Données Structurées vs Non-Structurées
* **Données Structurées :** Ce sont les données stockées dans nos tables PostgreSQL (Tables A, B, C). Elles suivent un schéma strict (UUID, Dates, Textes typés) et sont facilement requêtables via SQL pour générer des statistiques sur les consultations.
* **Données Non-Structurées :** Ce sont les **Dossiers de preuve** (PDF, scans) stockés dans le **Supabase Storage**. Ces fichiers binaires n'ont pas de structure prédéfinie et sont trop lourds pour une base de données classique. Ils sont stockés sous forme d'objets (Blobs) et liés à nos données structurées via une URL.

---

## 🛠️ Stack Technique
* **Frontend :** Next.js 15 (React)
* **Backend & Auth :** Supabase (PostgreSQL)
* **Hébergement & CI/CD :** Vercel
* **Sécurité :** Row Level Security (RLS) activé ✅

## 🚀 Installation & Déploiement
```bash
# Installation
npm install

# Développement
npm run dev
