# Site web ILL

## Prérequis
- **Node.js** - [`20.x`](https://nodejs.org/en) or newer

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
