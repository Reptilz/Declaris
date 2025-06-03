# 📄 Cahier des charges - Declaris.be

## 🧠 Résumé du projet

**Declaris.be** est un outil web destiné aux indépendants belges, qui leur permet de recevoir des rappels personnalisés sur leurs échéances fiscales et sociales (TVA, cotisations, versements anticipés, bilans…).  
L’objectif est d’aider ces utilisateurs à ne jamais rater une date importante, via un système de notifications par e-mail, dans une interface simple et moderne.

---

## 📋 Cahier des charges complet

---

### 1️⃣ Phase 1 : Frontend – Interface utilisateur (Nuxt 3 + Tailwind CSS)

#### 🎯 Objectifs :
- Construire l’interface principale, responsive, claire et intuitive
- Permettre l’inscription, la connexion et la gestion du profil utilisateur
- Afficher le calendrier des rappels et les détails associés

#### 📌 Étapes front :

| Étape | Tâches | Détails techniques |
|-------|--------|--------------------|
| 1.1 | Initialiser projet Nuxt 3 avec Tailwind CSS | Utiliser `npx nuxi init` + config Tailwind |
| 1.2 | Page d’accueil / Landing page simple | Présentation projet + CTA inscription |
| 1.3 | Système d’authentification avec Supabase | Email + mot de passe + gestion token |
| 1.4 | Page inscription avec formulaire pour sélectionner profil | Statut, fréquence TVA, versements anticipés |
| 1.5 | Dashboard principal | Affichage de la prochaine échéance + liste |
| 1.6 | Page “Mes rappels” | Liste complète des échéances + filtres |
| 1.7 | Page “Paramètres utilisateur” | Modifier profil, changer email, notifications |
| 1.8 | Intégration Tailwind UI / dashboard | Exemple Windmill ou TailAdmin : sidebar, responsive, mode sombre optional |
| 1.9 | Gestion des erreurs, loading, feedback utilisateur | Messages d’erreur, loaders, confirmations |

---

### 2️⃣ Phase 2 : Backend – Base de données + logique métier (Supabase)

#### 🎯 Objectifs :
- Gérer la base utilisateurs et profils
- Stocker les échéances adaptées à chaque utilisateur
- Automatiser la logique des rappels (dates, fréquence)

#### 📌 Étapes backend :

| Étape | Tâches | Détails techniques |
|-------|--------|--------------------|
| 2.1 | Créer les tables Supabase : utilisateurs, profils, rappels | Table `users`, table `profiles`, table `reminders` |
| 2.2 | Gérer les données de profil | Stockage et mise à jour facile |
| 2.3 | Script ou fonction pour calculer les prochaines échéances | Fonction serverless (Supabase Edge Functions) |
| 2.4 | API sécurisée pour récupérer rappels utilisateur | REST ou RPC avec authentification Supabase |
| 2.5 | Intégrer les webhooks / triggers pour envoi d’e-mails | Envoi automatisé via Resend, Mailjet, etc. |

---

### 3️⃣ Phase 3 : Envoi de notifications (emails / SMS)

#### 🎯 Objectifs :
- Envoyer des e-mails de rappel avant échéance
- Permettre éventuellement un rappel SMS (option premium)

#### 📌 Étapes notifications :

| Étape | Tâches | Détails techniques |
|-------|--------|--------------------|
| 3.1 | Choisir un service email (ex : Resend ou Mailjet) | Configurer SMTP/API |
| 3.2 | Construire modèles d’e-mails personnalisés | Variables dynamiques : nom, date échéance… |
| 3.3 | Créer une fonction cron (via Supabase Functions ou autre) | Envoyer les rappels X jours avant échéance |
| 3.4 | (Optionnel) Intégrer un service SMS | Twilio, Vonage (pour les abonnés premium) |

---

### 4️⃣ Phase 4 : Paiement et monétisation (Stripe)

#### 🎯 Objectifs :
- Mettre en place abonnement premium ou paiement unique
- Gérer l’accès aux fonctionnalités payantes

#### 📌 Étapes paiement :

| Étape | Tâches | Détails techniques |
|-------|--------|--------------------|
| 4.1 | Intégrer Stripe pour abonnements et paiements uniques | Setup clé API, webhook pour statut paiement |
| 4.2 | Protéger l’accès aux fonctionnalités premium | Middleware Nuxt + vérification backend |
| 4.3 | Page abonnement + gestion compte premium | Voir statut abonnement, annuler, upgrader |

---

### 5️⃣ Phase 5 : Tests, déploiement et monitoring

#### 🎯 Objectifs :
- Tester le produit complet
- Déployer en production (Vercel, Netlify)
- Suivre la santé de l’application

#### 📌 Étapes tests & déploiement :

| Étape | Tâches | Détails techniques |
|-------|--------|--------------------|
| 5.1 | Tests fonctionnels (inscription, rappels, notifications) | Tests manuels + tests automatisés (optionnel) |
| 5.2 | Déployer sur Vercel (Nuxt) + config Supabase | CI/CD, environnement prod/staging |
| 5.3 | Installer monitoring (Sentry / LogRocket) | Suivi erreurs et performance |

---

## 🗓️ Plan de dev semaine par semaine (en solo)

| Semaine | Objectifs principaux |
|---------|----------------------|
| 1 | Setup Nuxt + Tailwind, page accueil + auth Supabase |
| 2 | Formulaire profil + dashboard rappels |
| 3 | Backend Supabase (tables, fonctions calcul rappels) |
| 4 | Intégration envoi email + tests |
| 5 | Paiement Stripe + gestion premium |
| 6 | Tests finaux + déploiement + corrections |

---

## 📂 Résumé technique des stacks

| Partie | Stack / Librairies |
|--------|--------------------|
| Frontend | Nuxt 3 + Tailwind CSS |
| Backend / DB | Supabase (Postgres + Auth + Functions) |
| Emails | Resend / Mailjet |
| Paiements | Stripe |
| Hébergement | Vercel / Netlify |
| Monitoring | Sentry / LogRocket (optionnel) |
