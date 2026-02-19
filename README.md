# Site web ILL

## Prérequis
- **Node.js** - [`20.x`](https://nodejs.org/en) or newer

## Ajouter et modifier du contenu

### Ajouter une page de contenu
le contenu markdown du site web, est organisé dans le dossier `content` (équivalent du dossier `docs` dans MkDocs). Ce dossier contient deux sous-dossiers : 
- `en` : pour la version anglaise du site.
- `fr` : pour la version française du site.

Ces deux dossiers ont une structure identique :
- **A la racine** : les fichiers markdown correspondant aux pages classiques du site.
- **Le fichier `index.yml`** : représente la page d'accueil du site, structurée de manière spécifique.
Quatre dossier supplémentaires sont présents:
- `blog`, `epocs`, `moocs`, `serious-games` : ils contiennent les ressources associées. *Ces pages markdown incluent des métadonnéees supplémentaires (entre les symboles `---` en haut du fichier*.

### Ajouter une image
Pour intégrer une image : 
1. Placez-la dans le dossier `public` à la racine du projet.
2. La source de l'image dans le markdown sera `/` suivi du chemin relatif depuis `public`.
    **Exemple** : Si l'image est placée dans `public/images/mon-image.png`, dans mon fichier markdown je l'utiliserais ainsi :
    ```md
    ![alt](/imags/mon-image.png)
    ```

### Modifier d'autres éléments du site
Pour personnaliser :
- **Les onglets de navigation**
- **Le pied de page**
- **Les informations des membres de l'équipe**

Il faut sortir du dossier `content` et modifier le ficher `app/app.config.ts`

## Installation et lancement du serveur

### Installer Node
Coller ceci dans votre terminal
```shell

# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 24

# Verify the Node.js version:
node -v # Should print "v24.13.1".

# Verify npm version:
npm -v # Should print "11.8.0".
```

## Installer les dépendances
```shell
npm install
```

## Lancer le serveur de développement
```shell
npm run dev
```
Après quelques secondes, le site devrait être visible ici : http://localhost:3000
