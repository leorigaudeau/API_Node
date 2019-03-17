# Bienvenue API Bi�re!

Bonjour, merci d'utiliser notre application centralis�e autour de la bi�re artisanal et industriel et des Brasseurs qui la con�oivent! Vous pourrez retrouvez une s�lection d'un quinzaine de bi�res et de leur Fabricants, c'est produits sont class�s selon des crit�re sp�cifiques que nous d�taillerons plus tard !

# Composition de la Base de donn�es

Notre Base de donn�es est d�ploy�e sur mongoDB, BDD non relationnel qui peut �tre utilis�e avec gr�ce au package Mongoose. Notre base est compos�e d'une __Base de donn�es__ 

> BFB

et de 4 documents dont un qui n'est pas pour stocker de la donn�e mais pour assurer l'auto incr�mentation a la g�n�ration de nos IDs. Voici donc les 3 **collections** qui regroupe l'ensemble de nos donn�es :

 1. bieres
 2. brasseurs
 3. typebieres 

### Arguments pour une bi�res

Dans notre Base de donn�e nous avons une *collection* nomm� bi�res, voici une composition type:

 

    _id:0
    nom:"1664"
    brasseurid:0
    tauxAlcool:"4 a 5.25"
    __v:0

### Arguments pour un brasseurs

Dans notre Base de donn�e nous avons une *collection* nomm� brasseurs, voici une composition type:


	_id:5

	nom:"Brasserie Jeanne d'Arc"

	pays:"France"

	bieres:Array[

		0:Object{

			idbiere:12

			nom:"Belzebuth"

			typeBiere:"Sp�ciale"}]

	__v:0

### Arguments pour un typebieres 

Dans notre Base de donn�e nous avons une *collection* nomm� typebieres , voici une composition type:

	_id:2

	libelle:"Ale"

	bieres:Array[

		0:Object {

			biereid:8

			nom:"Piraat"

			brasseur:"Brasserie Van Steenberge"}]

	__v :0	

## Lancement du serveur

Pour utiliser notre API nous devons lancer un serveur. Pour ce faire nous avons utilis� le package Express int�gr� a node.js. Pour lancer le serveur vous devez entrer dans la ligne de commande dans le dossier API_Node:

	node serveur.js --password=P@ssw0rd

Dans notre cas nous vous donnons le mot de passe car il s�agit d'une Evaluations.
Vous pouvez aussi sp�cifier le port ou disposer le serveur:

	node serveur.js --password=P@ssw0rd --port=XXXX

## Requ�tage 

Vous pouvez maintenant faire des requ�tes sur les 3 bases toutes suivent un m�me commande:

	localhost:3000/nomDeLaCollection

 - **Post** en renseignant un JSON avec localhost:3000/biere par exemple.
 - **Get** ou vous pouvez r�cup�rer tous les documents ou en sp�cifiant un ID en rajoutant "/3"  par exemple.
 - **Delete** en sp�cifiant l'id
 - **Put/Update** en renseignant un JSON correspondant et l'id du document a modifier.

## Packages utilisés

 
 - yargs
 - body-parser
 - express
 - mongoose-auto-increment ( package rajouté du cours il est utilisé pour la génération d'id)
 - mongoose
