import {createInterface} from 'readline/promises';
import {dictionnaire} from './dictionnaire.js';

// Création de l'interface de lecture
const readInterface = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Notes sur le random:
// Math.random()                             0 - 0.999999
// Math.random() * 6                         0 - 5.999999
// Math.floor(Math.random() * 6)             0 - 5
// Math.floor(Math.random() * 6) + 1         1 - 6

// Génération d'un mot aléatoire
let index = Math.floor(Math.random() * dictionnaire.length);
let motAleatoire = dictionnaire[index];

// Créer le tableau de lettre du mot aléatoire
let motCache = '_'.repeat(motAleatoire.length).split('');

// Variable contenant le nombre d'erreurs
let nbErreurs = 0;

// Boucle tant que le mot caché n'est pas trouvé
// (tant que le mot caché n'est pas pareil au mot aléatoire)
while(motAleatoire !== motCache.join('')) {
    // Affichage des données à la console
    console.clear();
    console.log('Nombre d\'erreurs: ' + nbErreurs);
    console.log(motCache.join(' '));

    // Demande d'un caractère à l'utilisateur
    let caractere = await readInterface.question('Entrez une lettre: ');
    caractere = caractere.toUpperCase();

    // Recherche dans le mot aléatoire si le caractère existe
    let trouve = false;
    for(let i = 0 ; i < motAleatoire.length ; i++) {
        // Si le caractère existe dans le mot aléatoire, on l'ajoute dans 
        // le mot caché
        if(motAleatoire[i] === caractere) {
            motCache[i] = caractere;
            trouve = true;
        }
    }

    // Si le caractère n'est pas trouvé, on augmente le nombre d'erreurs
    if(!trouve) {
        nbErreurs++;
    }
}

// Affichage des données à la console
console.clear();
console.log('Nombre d\'erreurs: ' + nbErreurs);
console.log(motCache.join(' '));

readInterface.close();
