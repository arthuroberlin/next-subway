# Paris - Métro | next-subway ⏱️

next-subway est une application qui permet de suivre l'arrivée et le départ des différents métros de Paris selon la ligne et la station, tout ça en temps réel via l'api https://api-ratp.pierre-grimaud.fr/v4/.

### `Demo Live (hosting sur Firebase)`

https://next-subway-e9658.web.app/

## `BILAN`

**Améliorations possibles :**
- Fonctionnalité d'ajout de ligne(s) et stations(s) favorite(s) via le localStorage. 
- Fonctionnalité d'ajout d'un horaire favori via le localStorage. 
- Notification via le système de Chrome par exemple d'alerte d'arrivée de son horaires favoris dans moins de 15minutes.
- Extension aux autres villes de France
- Multi-langue pour généré du trafic via le tourisme
- Partenariat avec les offices touristiques
- Publicité ciblé en Europe pour que les touristes prenne l'habitude en venant à Paris d'utiliser cette application et pas une autre.

**Réussites :**
- Gestion de getter optimisé selon la requête (fetch des données requises uniquement).
- Gestion du state et des requêtes centraliser et affichage des érreurs.

**Difficultés :**
- Hook personnalisé pour une si petite application sans grand intérêt hormis épurer de quelques lignes le code.
- Je voulais utiliser ```styled-component``` mais j'ai préféré centraliser le fonctionnement de l'app que de m'étendre, j'ai donc utilisé un fichier CSS lambda.

## Scripts

### `npm install`

Installez l'application ainsi que ces dépendances.

### ```npm start```

```cd next-subway``` puis lancé l'application avec ```npm start```.

### `npm run build`

Si vous souhaitez déployer l'application, utiliser cette commande.

Glisser ensuite le fichier "statics" à l'intérieur du dossier "www" dans votre FTP.
