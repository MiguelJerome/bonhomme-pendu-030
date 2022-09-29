import {readFile} from 'fs/promises';

// Lecture du fichier de mots
let data = await readFile('./liste_francais.txt');

// Convertir en chaînes de caractères
let texte = data.toString();

// Enlever les accents des lettres
let pasAccents = texte.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// Mettre en majuscule
let maj = pasAccents.toUpperCase();

// Mettre dans un tableau
let mots = maj.split('\r\n');

// Retirer les mots de moins de 4 lettres
let motsPlusLong = mots.filter((mot) => mot.length >= 4);

export { motsPlusLong as dictionnaire }
