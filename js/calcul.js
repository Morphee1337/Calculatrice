// Ce script va permettre d'écrire dans les champs nombreA et nombreB
// et lire la réponse de l'utilisateur, lorsqu'il cliquera le bouton.

let nbreBonneReponse = 0
let nbreCoupJoue = 0
document.querySelector("#repondre").disabled=true

function tirageNombre(min, max) {
	// cette fonction tire un nombre au hasard entre min et max
	let nombre = Math.floor(Math.random() * (max-min+1)) + min
	return nombre
}

// cette fonction va remplacer la valeur avec l'ID indiqué en paramètre par la valeur indiquée en paramètre de la fonction
function ecrireNombre(ID, valeur) {
	document.querySelector(ID).value = valeur
	// document.getElementById(ID).value = valeur	// autre possibilité
}

// cette fonction va renvoyer la valeur avec l'id indiqué en paramètre
function lireNombre(ID) {
	return Number(document.querySelector(ID).value)
}

// Partie du code qui s'exécute dès l'appel du script dans la page web
for (let t=0; t < 50; t++) {
	console.log(tirageNombre(5,50))
}

function reussite(bonne, coup) {
	// modifier la barre de réussite(MetroUI)
	let progression = Metro.getPlugin("#progression", "progress")
	progression.buff(100)
	progression.val(bonne/coup*100)
	document.querySelector("#preussite").innerHTML = "Réussite: "+bonne+" bonne(s) réponse(s) sur "+coup
}

function repondre() {
	nbreCoupJoue++
	// cette fonction lit les champs et vérifie la bonne ou mauvaise réponse
	let resultatJuste = lireNombre("#nombreA") + lireNombre("#nombreB")
	let resultatUser = lireNombre("#reponse")

	// test d'égalité et modification de la couleur du champ réponse
	if (resultatUser == resultatJuste) {
		document.querySelector("#reponse").style.backgroundColor = "#77FF00"
		nbreBonneReponse++
		document.querySelector("#repondre").disabled=true;
		setTimeout(init, 1000)
	} else {
		document.querySelector("#reponse").style.backgroundColor = "#FFAA00"
	}
	reussite(nbreBonneReponse, nbreCoupJoue)
}

// tester l'écriture des nombres. Utilisez "nombreA" si vous préférez la syntaxe
getElementById()
function init() {
	ecrireNombre("#nombreA", tirageNombre(1,50))
	ecrireNombre("#nombreB", tirageNombre(1,50))
	document.querySelector("#reponse").value = ""
	document.querySelector("#reponse").style.backgroundColor = "white"
	document.querySelector("#repondre").disabled=false
}

// Lancement d'une séquence de calcul
init()
