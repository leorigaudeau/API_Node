# Bienvenue API Bière!

Bonjour, merci d'utiliser notre application centralisée autour de la bière artisanal et industriel et des Brasseurs qui la conçoivent! Vous pourrez retrouvez une sélection d'un quinzaine de bières et de leur Fabricants, c'est produits sont classés selon des critère spécifiques que nous détaillerons plus tard !

# Composition de la Base de données

Notre Base de données est déployée sur mongoDB, BDD non relationnel qui peut être utilisée avec grâce au package Mongoose. Notre base est composée d'une __Base de données__ 

> BFB

et de 4 documents dont un qui n'est pas pour stocker de la donnée mais pour assurer l'auto incrémentation a la génération de nos IDs. Voici donc les 3 **collections** qui regroupe l'ensemble de nos données :

 1. bieres
 2. brasseurs
 3. typebieres 

### Arguments pour une bières

Dans notre Base de donnée nous avons une *collection* nommé bières, voici une composition type:

 

    _id:0
    nom:"1664"
    brasseurid:0
    tauxAlcool:"4 a 5.25"
    __v:0

### Arguments pour un brasseurs

Dans notre Base de donnée nous avons une *collection* nommé brasseurs, voici une composition type:


	_id:5

	nom:"Brasserie Jeanne d'Arc"

	pays:"France"

	bieres:Array[

		0:Object{

			idbiere:12

			nom:"Belzebuth"

			typeBiere:"Spéciale"}]

	__v:0

### Arguments pour un typebieres 

Dans notre Base de donnée nous avons une *collection* nommé typebieres , voici une composition type:

	_id:2

	libelle:"Ale"

	bieres:Array[

		0:Object {

			biereid:8

			nom:"Piraat"

			brasseur:"Brasserie Van Steenberge"}]

	__v :0	

## Lancement du serveur

Pour utiliser notre API nous devons lancer un serveur. Pour ce faire nous avons utilisé le package Express intégré a node.js. Pour lancer le serveur vous devez entrer dans la ligne de commande dans le dossier API_Node:

	node serveur.js --password=P@ssw0rd

Dans notre cas nous vous donnons le mot de passe car il s’agit d'une Evaluations.
Vous pouvez aussi spécifier le port ou disposer le serveur:

	node serveur.js --password=P@ssw0rd --port=XXXX

## Requètage 

Vous pouvez maintenant faire des requêtes sur les 3 bases toutes suivent un même commande:

	localhost:3000/nomDeLaCollection

 - **Post** en renseignant un JSON avec localhost:3000/biere par exemple.
 - **Get** ou vous pouvez récupérer tous les documents ou en spécifiant un ID en rajoutant "/3"  par exemple.
 - **Delete** en spécifiant l'id
 - **Put/Update** en renseignant un JSON correspondant et l'id du document a modifier.
