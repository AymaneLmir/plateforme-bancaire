Projet de Gestion Bancaire
Description
Ce projet est une plateforme de gestion bancaire permettant de gérer des clients et leurs comptes, ainsi que d'effectuer des opérations bancaires telles que les dépôts et les retraits. Il prend en charge deux rôles d'utilisateurs : Administrateur et Conseiller. L'application permet également de créer et de modifier des clients et de gérer leurs comptes.

Fonctionnalités principales
Rôles et Accès Utilisateurs
Il y a deux rôles dans cette application :
1. Administrateur
Identifiant : admin
Mot de passe : admin123
L'administrateur a accès à toutes les fonctionnalités, notamment la gestion des clients, la gestion des comptes et la suppression de clients.

2. Conseiller
Identifiant : user
Mot de passe : user123
Le conseiller peut gérer les clients et les comptes, mais il n'a pas de privilèges pour supprimer des clients.

Scénario d'Utilisation
Voici les scénarios principaux de l'application :

1. Création d'un ou plusieurs nouveaux clients :
L'administrateur ou le conseiller peut créer de nouveaux clients avec leurs informations (Nom, Prénom, Âge...).

2. Création de nouveaux comptes pour chaque client :
Une fois un client créé, un compte peut être ajouté avec un type de compte et un solde initial.

3. Faire des opérations de dépôt et de retrait :
L'administrateur ou le conseiller peut effectuer des dépôts ou des retraits sur les comptes existants.

4. Modifier les informations d'un ou plusieurs clients :
Il est possible de modifier les informations d'un client, telles que son nom, prénom, ou âge.

5. Supprimer un client :
L'administrateur peut supprimer un client ainsi que ses comptes associés.

Sécurité
L'authentification est gérée via des cookies avec l'attribut HttpOnly pour une meilleure sécurité.
Un utilisateur doit se connecter avec un identifiant et un mot de passe correspondant à son rôle pour accéder aux fonctionnalités de l'application.

Dépendances Externes
Material UI : Utilisé pour le design et la gestion des composants UI.
ESLint : Utilisé pour garantir la qualité et la cohérence du code.
Jest : Utilisé pour effectuer des tests unitaires sur le projet.



