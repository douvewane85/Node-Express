# Exercice Users API

Petit projet Express pour gérer des utilisateurs (exercice).

## Installation

Depuis le dossier du projet :

```bash
cd /Users/douvewane/Desktop/;m io0-[=]/2025-2026/cours/Node-Express/express/exercice1
npm install
```

## Lancer le serveur

En développement :

```bash
npm run dev
```

Ou en production minimale :

```bash
npm start
```

Le serveur écoute sur le port `3000` par défaut.

## Documentation Swagger

La documentation interactive est disponible à :

```
http://localhost:3000/api-docs
```

Si tu vois un avertissement `ExperimentalWarning: Importing JSON modules`, remplace l'import de `swagger.json` dans `index.js` par :

```js
import fs from 'fs';
const swaggerDocument = JSON.parse(fs.readFileSync(new URL('./swagger.json', import.meta.url)));
```

## Endpoints principaux

- `GET /api/v1/users` : liste des utilisateurs. Query params : `role`, `page`, `size`.
- `GET /api/v1/users/{id}` : récupérer un utilisateur par id.
- `POST /api/v1/users` : créer un utilisateur. Body JSON. `roles` est facultatif.
- `DELETE /api/v1/users/{id}` : supprimer un utilisateur.

## Exemples curl

Filtrer par rôle + pagination :

```bash
curl "http://localhost:3000/api/v1/users?role=admin&page=1&size=2"
```

Créer un utilisateur (avec rôle facultatif) :

```bash
curl -X POST http://localhost:3000/api/v1/users \
  -H 'Content-Type: application/json' \
  -d '{"name":"Bob","email":"bob@mail.com","password":"5678","roles":[{"name":"user"}]}'
```

## Remarques

- Les réponses (succès/erreur) sont standardisées via un middleware `responseMiddleware`.
- Si tu veux générer automatiquement la spec Swagger depuis des commentaires JSDoc, on peut ajouter `swagger-jsdoc`.
