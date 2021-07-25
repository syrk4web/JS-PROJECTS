"use strict";
//DOM ELEMENTS
const bodyEl = document.querySelector("body");
const headerEl = document.querySelector("header");

const spreadOp = [
  `<h1 id='spreadOp'>SPREAD OPERATOR (...)</h1>
  <p class='sub'>use after = sign</p>
  <p class='sub'>work with itérables (arrays, string, maps, sets) and object (ES6+)</p>
  `,
  [`ON ARRAYS`, `-----------`, ``],
  [
    `newArr = [...arr]`,
    `Création d'un array récupérant les données d'un autre array`,
    `const arr = [7, 2, 3];<br>
   let newArr = [...arr];<br>
   console.log(newArr); // [7, 2, 3]`,
  ],
  [
    `newArr = [...arr1, ...arr2]`,
    `Possibilité de récupérer les données de plusieurs arrays`,
    `const arr1 = [7, 2, 3];<br>
    const arr2 = [0]<br>;
   let newArr = [...arr1, ...arr2];<br>
   console.log(newArr); // [7, 2, 3, 0]`,
  ],

  [
    `letters = [...str]`,
    `Création d'un array séparant les lettres du string`,
    `const str = 'Jordan';<br>
    const letters = [...str];<br>
    console.log(letters);<br>
     // ['J','o','r','d','a','n']`,
  ],
  [`ON OBJECTS`, `-----------`, ``],
  [
    `newObj = [...obj]`,
    `Création d'un objet par duplication d'un autre objet (light duplicate)`,
    `const obj = {name: 'Joe', age: 30};<br>
    const newObj = {...obj};<br>
    console.log(newObj);<br>
     // {name: 'Joe', age: 30}`,
  ],
  [`ON FUNCTIONS`, `-----------`, ``],
  [
    `function call(arg1, arg2);<br>
    call(...arr);`,
    `Les données sortent de l'array pour remplir les arguments`,
    `const arr = [1, 2, 3];<br>
    function test(...arr); // 1 2 3`,
  ],
];

const restOp = [
  `<h1 id='restOp'>REST PATTERNS (...)</h1>
  <p class='sub'>use before = sign</p>
  <p class='sub'>must be the last parameter, because takes all the rest</p>
  `,
  [`WITH OBJ/ARR`, `-----------`, ``],
  [
    `const [el1, el2, ...othersEl] = arr`,
    `Récupère tous les éléments restants de l'array`,
    `const arr = [7, 2, 3];<br>
   const [getEl1, ...getOthers = arr;<br>
   console.log(getEl1); // [7]<br>
   console.log(getOthers); // [2, 3]`,
  ],
  [
    `const {key, ...othersKey} = object`,
    `Récupère les propriétés restantes de l'objet`,
    `const obj = {sat: 1, mon: 2, wed: 3};<br>
   const {sat, ...othersKey} = obj;<br>
   console.log(sat); // {sat:  1}<br>
   console.log(othersKey);<br> // { mon: 2, wed: 3}`,
  ],
  [`WITH FUNCTIONS`, `-----------`, ``],
  [
    `function getAll(...arg) {<br>
    for (let i = 0; i < arg.length; i++)<br> 
    { sum += arg[i];} }`,
    `Toutes les données de l'argument seront utilisés dans la fonction`,
    `const numbers = [5, 4, 1];<br>
    function add(...num) { <br>
    for (let i = 0; i < arg.length; i++)<br> 
    { sum += num[i];} }<br>
    add(...numbers) // 10`,
  ],
];

const otherOp = [
  `<h1 id='otherOp'>Operators deeper : &&, ||, ?? and ?.</h1>
  <p class='sub'>use ANY data type, return ANY data type and short-circuiting</p>
  `,
  [
    `operator ||`,
    ` return the first truthy value from left-to-right`,
    `console.log('' || 'Jonas'); //'Jonas'<br>
  console.log(true || 0); // true<br>
  console.log(undefined || null); //null`,
  ],
  [
    `operator &&`,
    `return first falsy value or last value`,
    `console.log(3 && 'Jonas'); // 'Jonas'<br>
  console.log('' && 'Jonas'); // ''<br>
  console.log(true && 0); // 0<br>
  console.log(undefined && null); //undefined`,
  ],
  [
    `operator ??`,
    `look if value is null or undefined, return boolean`,
    `console.log(undefined ?? 'Jonas'); // 'Jonas'<br>
  console.log(0 ?? 'Jonas'); // 0<br>
  console.log('' ?? 'test'); // ''`,
  ],
  [
    `operator ?.`,
    `look if a value exist in a dot chaining, return undefined if false`,
    `const obj = {number: 1, name: 'Jordan'}<br>
  console.log(obj?.number); // 1'<br>
  console.log(obj?.lastName); // undefined`,
  ],
];

const set = [
  `<h1 id='set'>new Set()</h1>
  <p class='sub'>no index, no order</p>
  <p class='sub'>collection of unique value: no duplicate</p>`,
  [`BASICS`, `-----------`, ``],
  [
    `const set = new Set(data);
    `,
    `Créer un new Set()`,
    `const set = new Set([1, 2, 1, 3, 3]);<br>
    console.log(set); // [1, 2, 3]`,
  ],
  [
    `set.size`,
    `Retourne le nombre d'items dans le Set()`,
    `const set = new Set([1, 2, 1, 3, 3]);<br>
    console.log(set.size); // 3`,
  ],
  [
    `set.has(value)`,
    `Retourne un booléen selon la présence ou non de la valeur`,
    `const set = new Set([1, 2, 1, 3, 3]);<br>
    console.log(set.has(4)); // false`,
  ],
  [
    `set.add(value)`,
    `Ajouter un item`,
    `const set = new Set([1, 2, 1, 3, 3]);<br>
    console.log(set.add(4)); // [1, 2, 3, 4]`,
  ],
  [
    `set.delete(value)`,
    `Supprimer un item`,
    `const set = new Set([1, 2, 1, 3, 3]);<br>
    console.log(set.delete(1)); // [2, 3]`,
  ],
  [
    `set.clear()`,
    `Supprimer tous les items du Set()`,
    `const set = new Set([1, 2, 1, 3, 3]);<br>
    console.log(set.clear()); // null`,
  ],

  [
    `for(const item of set) {}`,
    `On peut utiliser la for-of loop avec Set()`,
    `const set = new Set([1, 2, 1, 3, 3]);<br>
    for(const item of set) sum += item;<br>
    console.log(sum); // 6`,
  ],
  [`ON STRINGS`, `-----------`, ``],
  [
    `new Set('string')`,
    `Store les lettres du string individuellement`,
    `const letters = new Set('Jordan');<br>
    console.log(letters.size);<br>
    // 7 (letters)`,
  ],
];

const map = [
  `<h1 id='map'>new Map()</h1>
  <p class='sub'>data strcture store in key-value pairs</p>
  <p class='sub'>any data type for keys and values (DOM elements too)</p>`,
  [`BASICS`, `-----------`, ``],
  [
    `const map = new Map();
    `,
    `Créer une map()`,
    `const map = new Map();`,
  ],
  [
    `map.set(key, value)`,
    `Permet d'ajouter des données à la map de n'importe quel type`,
    `const map = Map();<br>
    map.set(1, 'a number');<br>
    map.set(true, 2);<br>
    map.set('test', false);<br>
    // any date type work on key and value`,
  ],
  [
    `map.set(k,v).set(k,v)`,
    `Le chaîning fonctionne`,
    `map.set(1, 'a number').set(true, 18);`,
  ],
  [
    `map.get(key)`,
    `Permet d'utiliser une paire (key, value)`,
    `const map = Map((1, 'a number'))<br>
    map.get(1) // 'a number'`,
  ],
  [
    `map.has(key)`,
    `Retourne un booléen si la key existe`,
    `const map = Map((1, 'a number'))<br>
    map.get(1) // true`,
  ],
  [
    `map.size`,
    `Retourne le nombre de (key, value)`,
    `const map = Map((1, 'a number'))<br>
    map.size // 1`,
  ],
  [
    `map.delete(key)`,
    `Permet de supprimer une propriété`,
    `const map = Map((1, 'a number'))<br>
    map.delete(1)`,
  ],
  [
    `map.clear()`,
    `Supprimer tous les items de Map()`,
    `const map = Map(values)<br>
    map.clear()`,
  ],
  [`MAP TO ARRAYS`, `-----------`, ``],
  [
    `arr = [...map.entries()]`,
    `Récupère toutes les propriétés de la map dans un array`,
    `map.set(1, 'a number').set(true, 18);<br>
    const arr = [...map.entries()]<br>
    console.log(arr)<br>
    // [[1, 'a number'], [true, 18]]`,
  ],
  [
    `arr = [...map.keys()]`,
    `Récupère toutes les keys de la Map()`,
    `map.set(1, 'a number').set(true, 18);<br>
    const arr = [...map.keys()]<br>
    console.log(arr)<br>
    // [1, true]`,
  ],
  [
    `arr = [...map.values()]`,
    `Récupère toutes les valeurs de la Map()`,
    `map.set(1, 'a number').set(true, 18);<br>
    const arr = [...map.values()]<br>
    console.log(arr)<br>
    // ['a number', 18]`,
  ],
  [`ARRAYS/OBJECTS TO MAP`, `-----------`, ``],
  [
    `for(let i = 0; i < arr.length; i++) { <br>
      map.set(arr[i][0], arr[i][1]);}`,
    `Permet de passer d'un array à une Map()`,
    `const map = new Map();<br>
    const arr = [[1, 2], [3, 4]];<br>
    for(let i = 0; i < arr.length; i++) { <br>
      map.set(arr[i][0], arr[i][1]);}<br>
      console.log(map); // {1 => 2, 3 => 4} 
    `,
  ],
  [
    `new Map(Object.entries(getObj))`,
    `Permet de passer d'un objet à une Map()`,
    `const obj = {num, 2, str: 'test'};<br>
    const map = new Map(Object.entries(obj));<br>
    console.log(map);<br> 
    // {[num, 2], [str: 'test']} 
    `,
  ],
];

const string = [
  `<h1 id='string'>STRING METHODS</h1>`,
  [`FIND AND CHECK STRING`, `-----------`, ``],
  [`str.length`, `Récupère la longueur du string`, `'Jordan'.length // 6`],
  [`str[i]`, `Récupère le caractère à la position i`, `'Jordan'[1] // 'o'`],
  [
    `str.includes(value)`,
    `Retourne true si la valeur existe dans le string, sinon false`,
    `'Jordan'.includes('o') // true <br>
    'Jordan'.includes('i') // false`,
  ],
  [
    `str.indexOf('txt')`,
    `Donne l'index du substring, -1 si n'existe pas`,
    `'Jordan'.indexOf('n') // 5 <br> 'Jordan'.indexOf('f') // -1`,
  ],
  [
    `str.lastIndexOf('txt')`,
    `Donne l'index de la dernière occurence, -1 si n'existe pas`,
    `'Banana'.lastIndexOf('a') // 5 <br> 'Banana'.lastIndexOf('f') // -1`,
  ],
  [
    `str.startsWith('txt')`,
    `Retourne true si le string commence par 'txt', sinon false`,
    `'I am Jordan'.startsWith('I am') // true`,
  ],
  [
    `str.endsWith('txt')`,
    `Retourne true si le string termine par 'txt', sinon false`,
    `'I am Jordan'.endsWith('Jordan') // true`,
  ],
  [`MODIFY STRING`, `-----------`, ``],
  [
    `str.slice(start, end?)`,
    `Retourne le string à partir de start jusqu'à end si indiqué`,
    `'Banana'.slice(0) // 'Banana' <br> 
    'Banana'.slice(0,1) // 'B' <br>
    'Orange'.slice(-2) // 'ge'`,
  ],
  [
    `str.replace('txt','newtxt')`,
    `Change le string par le nouveau indiqué`,
    `'Jordan'.replace('rdan', 'e') // 'Joe'`,
  ],
  [
    `str.replaceAll('txt', 'newTxt')`,
    `Remplace toutes les occurrences par le nouveau texte`,
    `'A dog like dog, not cat'.replaceAll('dog', 'mouse') <br>
    //'A mouse like mouse, not cat'`,
  ],
  [
    `str.concat(' ', str2)`,
    `Assemble des strings avec un espace`,
    `'Jordan'.concat('', 'is cool')) // 'Jordan is cool'`,
  ],
  [
    `str.padStart(num, 'value')`,
    `Répète au début du string la value par le nombre num`,
    `'Jordan'.padStart(5, '+') // '+++++Jordan'`,
  ],
  [
    `str.padEnd(num, 'value')`,
    `Répète à la fin du string la value par le num indiqué`,
    `'Jordan'.padEnd(5, '+') // 'Jordan+++++'`,
  ],
  [
    `str.repeat(num)`,
    `Répète le string par le nombre de num indiqué`,
    `'Jordan'.repeat(2) // 'Jordan' 'Jordan'`,
  ],
  [`FORMAT AND ALPHABET`, `-----------`, ``],
  [
    `str.trim()`,
    `Supprimer les espaces inutiles`,
    `' Jordan '.trim() // 'Jordan'`,
  ],
  [
    `str.toUpperCase()`,
    `Convertir en majuscule`,
    `'Jordan'.toUpperCase()) // 'JORDAN'`,
  ],
  [
    `str.toLowerCase()`,
    `Convertir en minuscule`,
    `'JORDAN'.toLowerCase() // 'jordan'`,
  ],
  [
    `str.charAt(i)`,
    `Donne le caractère à l'index indiqué sur la base UTF-16 `,
    `'Jordan'.charAt(0) // 'J'`,
  ],
  [
    `str.charCodeAt(i)`,
    `Donne le charcode du caractère à l'index indiqué `,
    `'charcoal'.charCodeAt(0) // 'c' → 99`,
  ],
  [`STRING TO ARRAYS`, `-----------`, ``],
  [
    `str.split('') <br>
    [...arr] = str.split('')`,
    `Sépare chaque caractère du string sous forme d'array`,
    `'test'.split('') // 't' 'e' 's' 't' <br>
    arr = ['test'.split('')]  // ['t', 'e', 's', 't'] <br>
    [...arr] = 'text'.split('') // ['t', 'e', 's', 't'] `,
  ],
  [
    `str.split(' ') <br>
    [...arr] = str.split(' ')`,
    `Sépare chaque mot du string sous forme d'array`,
    `'Jordan is cool'.split(' ')  // 'Jordan' 'is' 'cool <br>
    arr = ['test'.split(' ')]  // ['Jordan', 'is', 'cool']' <br>
    [...arr] = 'test'.split(' ') // ['Jordan', 'is', 'cool'] `,
  ],
  [
    `str.split('charact') <br>
    [...arr] = str.split('charact')`,
    `Sépare un string à chaque occurence du charact dans un array`,
    `'Jordan, Tom, Joe'.split(', ')  // 'Jordan' 'Tom' 'Joe <br>
    arr = ['test'.split(',')]  // ['Jordan', 'Tom', 'Joe'] <br>
    [...arr] = 'test'.split(',') // ['Jordan', 'Tom', 'Joe']`,
  ],
  [`NUM TO STRING`, `-----------`, ``],
  [`num.toString()`, `Convertir un nombre en string`, `18.toString() // '18'`],
  [
    `num.toString(2)`,
    `Convertir un nombre en binaire en string`,
    `6.toString(2) // '110'`,
  ],
  [
    `num.toString(8)`,
    `Convertir un nombre en hexadécimal en string`,
    `254.toString(16) // 'fe'`,
  ],
];

const numbers = [
  `<h1 id='number'>NUMBERS METHODS</h1>`,
  [`CHECK NUM`, `-----------`, ``],
  [
    `Number.isInteger(value)`,
    `Retourne true si la value est un int, sinon false`,
    `Number.isInteger(2) // true <br>
    Number.isInteger('lorem') // false`,
  ],
  [
    `Number.isFinite(value)`,
    `Retourne true si la value est fini`,
    `Number.isFinite(1/0) //false <br>
    Number.isFinite(10/5) // true`,
  ],
  [`CONVERT STRING TO NUM`, `-----------`, ``],
  [
    `Number(value)`,
    `Convertir la valeur en nombre. Retourne NaN si échoue.`,
    `Number('2') // 2 <br>
    Number(true) // 1 <br>
    Number('John') // NaN <br>
    Number('10,2') // NaN <br>
    Number('10 33') // NaN`,
  ],
  [
    `Number.parseInt(value)`,
    `Convertir la valeur en int. Retourne NaN si échoue.`,
    `Number.parseInt('-2') // -2 <br>
    Number.parseInt('10.874') // 10 <br>
    Number.parseInt('10 20 30') // 10 <br>
    Number.parseInt('10 years') // 10 <br>
    Number.parseInt('years 10') // NaN <br>`,
  ],
  [
    `Number.parseFloat(value)`,
    `Convertir la valeur en float. Retourne NaN si échoue.`,
    `Number.parseInt('-2') // -2 <br>
    Number.parseFloat('10.874') // 10.874 <br>
    Number.parseFloat('10 years') // 10 <br>
    Number.parseFloat('years 10') // NaN <br>`,
  ],

  [`CONVERT NUM TO STRING`, `-----------`, ``],
  [`num.toString()`, `Convertir un nombre en string`, `18.toString() // '18'`],
  [
    `num.toString(2)`,
    `Convertir un nombre en binaire en string`,
    `6.toString(2) // '110'`,
  ],
  [
    `num.toString(8)`,
    `Convertir un nombre en hexadécimal en string`,
    `254.toString(16) // 'fe'`,
  ],
  [`FILTER NUMBER`, `-----------`, ``],
  [
    `num.toFixed(decimal)`,
    `Arrondi le num à la décimale indiquée`,
    `x = 9.656 <br>
    x.toFixed(0) // 10 <br>
    x.toFixed(1) // 9.7 <br>
    x.toFixed(5) // 9.65600`,
  ],
  [
    `num.toPrecision(length)`,
    `Diminue le num à la longueur indiquée avec arrondissement`,
    `x = 9.656 <br>
    x.toPrecision(0) // 10 <br>
    x.toPrecision(1) // 9.7 <br>`,
  ],
];

const maths = [
  `<h1 id='maths'>MATHS METHODS</h1>`,
  [`NUMBER TO INT`, `-----------`, ``],
  [
    `Math.round(num)`,
    `Retourne un int arrondi au plus proche.`,
    `Math.round(6.3) // 6 <br>
   Math.round(6.7) // 7`,
  ],
  [
    `Math.ceil(num)`,
    `Retourne un int à l'arrondi supérieur.`,
    `Math.round(6.2) // 7`,
  ],
  [
    `Math.floor(num)`,
    `Retourne un int à l'arrondi inférieur.`,
    `Math.round(6.9) // 6`,
  ],
  [
    `Math.trunc(num)`,
    `Supprime les décimales sans arrondir.`,
    `Math.trunc(6.96) // 6 <br>
    Math.trunc(6.25) // 6 <br>`,
  ],
  [`SORT NUM`, `-----------`, ``],
  [
    `Math.min(nums)`,
    `Retourne le plus petit num d'une liste de nums`,
    `Math.min(8, 2, 4, 53, -100) // -100`,
  ],
  [
    `Math.max(nums)`,
    `Retourne le plus grand num d'une liste de nums`,
    `Math.max(8, 2, 4, 53, -100) // 53`,
  ],
  [
    `Math.sign(num)`,
    `Indique le signe du num (-1, 0, 1)`,
    `Math.sign(-3) // -1 <br>
    Math.sign(0) // 0 <br>
    Math.sign(298) // 1`,
  ],
  [`CALCULATE METHODS`, `-----------`, ``],
  [
    `Math.random()`,
    `Retourne un num entre 0 et 1`,
    `Math.random() // random between 0-1 <br>
    Math.random() * 6 // random between 1-5 <br>
    (Math.random() * 6) + 1// random between 1-6`,
  ],
  [
    `Math.pow(num, pow)`,
    `Retourne le num à la puissance indiquée`,
    `Math.pow(8, 2) // 64`,
  ],
  [`Math.sqrt(num)`, `Retourne la racine carrée du num`, `Math.sqrt(64) // 8`],
  [
    `Math.abs(num)`,
    `Retourne la valeur absolue du num`,
    `Math.abs(8) // 8 <br>
   %ath.abs(-8) // 8`,
  ],
  [
    `Math.sin(num)`,
    `Retourne le sinus d'un angle (valeur entre -1 et 1)`,
    `Math.sin(90 * Math.PI / 180); <br>// returns 1 (the sine of 90 degrees)
    `,
  ],
  [
    `Math.cos(num)`,
    `Retourne le cosinus d'un angle (valeur entre -1 et 1)`,
    `Math.cos(0 * Math.PI / 180); <br>    // returns 1 (the cos of 0 degrees)

    `,
  ],
  [`Math.log(num)`, `Retourne le logarithme`, `Math.log(1) // 0;`],
];

const arr = [
  `<h1 id='arr'>ARRAY METHODS</h1>`,
  [`MANIPULATE ARRAY: BASICS`, `-----------`, ``],
  [
    `arr[i] = value`,
    `La valeur rentre dans l'array à l'index indiqué.`,
    `const arr = ['Pomme', 12]; <br>
     arr[1] = 30 // ['Pomme', 30]`,
  ],
  [
    `arr[arr.length] = value`,
    `Ajoute la valeur forcément à la fin de l'array.`,
    `const arr = ['Pomme', 12]; <br>
     arr[arr.length] = 30 // ['Pomme', 12, 30]`,
  ],
  [
    `delete arr[i]`,
    `Supprimer la valeur mais pas l'emplacement, déconseillé.`,
    `const arr = ['Pomme', 12]; <br>
     delete arr[0] // [ , 12]`,
  ],
  [
    `arr.pop()`,
    `Supprimer le dernier élément de l'array. L'élément est récupérable.`,
    `const arr = ['Pomme', 12, 'Jordan']; <br>
    let var = arr.pop() // ['Pomme', 12] <br>
    console.log(var) // 'Jordan'`,
  ],
  [
    `arr.push(value)`,
    `Ajoute une valeur comme élément du tableau. La nouvelle longueur de l'array est récupérable.`,
    `const arr = ['Pomme']; <br>
    let var = arr.push(12) // ['Pomme', 12] <br>
    console.log(var) // 2`,
  ],
  [
    `arr.shift()`,
    `Supprime le premier élément de l'array. L'élément est récupérable.`,
    `const arr = ['Pomme', 12]; <br>
    let var = arr.shift() // [12] <br>
    console.log(var) // 'Pomme`,
  ],
  [
    `arr.unshift(value)`,
    `Ajoute la valeur comme premier élément de l'array. <br>
    La nouvelle longueur de l'array est récupérable.`,
    `const arr = ['Pomme', 12]; <br>
    let var = arr.unshift(30) // [30, 'Pomme', 12] <br>
    console.log(var) // 3`,
  ],
  [`MANIPULATE ARRAY: ADVANCED`, `-----------`, ``],
  [
    `arr.splice(i, removeNum)`,
    `Indique l'index à partir duquel on doit supprimer des éléments.`,
    `const arr = ['Pomme', 12, 'Jordan']; <br>
    arr.splice(2, 1) // remove 'Jordan' <br>
    arr.splice(1, 2) // remove  12 and'Jordan' <br>
    arr.splice(0, arr.length) // remove all <br> <br> 
    arr.splice(0, 0) // remove nothing`,
  ],
  [
    `arr.splice(i, 0, add)`,
    `Indique l'index à partir duquel on ajoute des éléments.`,
    `const arr = ['Pomme', 12]; <br>
    arr.splice(0, 0, 30) // [30, 'Pomme', 12] <br>
    arr.splice(1, 0, 30) // ['Pomme', 30, 12] <br>
    arr.splice(3, 0, 'l', 'r') // ['Pomme',12, 'l', 'r']`,
  ],
  [
    `arr.splice(i, removeNum, add) <br>
    removeNum = add.length`,
    `Indique l'index à partir duquel on remplace des éléments.`,
    `const arr = ['Pomme', 12]; <br>
    arr.splice(1, 1, 30) // ['Pomme', 30] <br>
    arr.splice(0, 2, 'Orange', 10) // ['Orange', 10]`,
  ],
  [
    `arr.slice(i, endNum?)`,
    `On récupère les éléments à partir de i jusqu'à endNum si indiqué. <br>
    La valeur à endNum est exclue. <br>
    La création d'un autre array est obligatoire. `,
    `const arr = ['Pomme', 12, 'Jordan']; <br>
    const arr2 = arr.slice(1) // [12, 'Jordan'] <br>
    const arr3 = arr.slice(0, 2) // ['Pomme', 12]`,
  ],
  [`MERGE ARRAY`, `-----------`, ``],
  [
    `arr.concat(arr2)`,
    `Un array qui va fusionner les arrays. <br>
    La création d'un autre array est obligatoire. `,
    `const arr = ['Pomme', 12]; <br>
    const arr2 = ['Orange', 24]; <br>
    const merge = arr.concat(arr2) // ['Pomme', 30, 'Orange', 24]`,
  ],
  [
    `arr.concat(arr2, arr3)`,
    `On peut fusionner plusieurs arrays`,
    `const arr = ['Pomme', 12]; <br>
    const arr2 = ['Orange']; <br>
    const arr3 = [24]; <br>
    const merge = arr.concat(arr2, arr3) // ['Pomme', 30, 'Orange', 24]`,
  ],
  [`SORT ARRAY`, `-----------`, ``],
  [
    `arr.reverse()`,
    `Renverse les éléments de l'array`,
    `const arr = [1, 2, 3, 4]; <br>
    arr.reverse() // [4, 3, 2, 1]`,
  ],
  [
    `arr.sort( (a,b) => a - b)`,
    `Tri les éléments dans l'ordre croissant. Obtient de fait min et max value.`,
    `const num = [20, 12, 4]; <br>
    num.sort( (a, b) => a - b) <br>
    // [4, 12, 20] <br>
    const str = ['Orange', 'Art', 'Bag']; <br>
    str.sort((a, b) => a - b)<br>
    // ['Art', 'Bag', 'Orange']`,
  ],
  [
    `arr.sort( (a,b) => b - a)`,
    `Tri les éléments dans l'ordre décroissant. Obtient de fait max et min value.`,
    `const num = [20, 12, 4]; <br>
    num.sort( (a, b) => b - a) <br>
    // [20, 12, 4] <br>
    const str = ['Orange', 'Art', 'Bag']; <br>
    str.sort((a, b) => b - a)<br>
    // ['Orange, 'Bag', 'Art']`,
  ],
  [
    `arr.sort( (a,b) => a.value - b.value)`,
    `Tri les valeurs des objets dans un array de manière croissante.`,
    `const arr = [{num: 10}, {num: 30}, {num: -100}]; <br>
    arr.sort( (a, b) => a.num - b.num) <br>
    // [{num: -100}, {num: 10}, {num: 30}]`,
  ],
  [
    `arr.sort( (a,b) => 0.5 - Math.random())`,
    `Mélange les éléments, méthode peu efficace.`,
    `const num = [20, 12, 4]; <br>
    num.sort( (a, b) => 0.5 - Math.random() <br>
    // random output<br>`,
  ],
  [`ARRAY ITERATION`, `-----------`, ``],
  [
    `arr.forEach( (item, index) => {})`,
    `Création d'une loop avec la value, l'index et l'arr utilisable.`,
    `const nums = [20, 12, 4]; <br>
    nums.forEach( (num, i) => nums[i] = num + 10;<br>
    // [30, 22, 14]`,
  ],
  [
    `arr.map( (item, index) => {})`,
    `Similaire à forEach mais duplique l'arr utilisé. <br>
    Un autre array est obligatoire.`,
    `const nums = [20, 12, 4]; <br>
    const newNum = nums.map( (num, i) => nums[i] = num + 10;<br>
    // newNum = [30, 22, 14]`,
  ],
  [
    `arr.filter( (item, index) => {return condition value})`,
    `Permet de filtrer et retourner seulement les items qui remplissent les conditions. <br>
    Un autre array est obligatoire.`,
    `const nums = [-10, 12, 4, -45]; <br>
    const newNum = nums.filter( <br>
       (num, i) => return num > 0;<br>
    // newNum = [12, 4]`,
  ],
  [
    `arr.reduce( (total, value, index) => {return total + value}, start?)`,
    `Permet de réduire un array par opération de chaque élément de l'array. <br>
    Un autre array est obligatoire, une valeur start? peut être ajoutée.`,
    `const nums = [10, 15, 5]; <br>
    const sum = nums.reduce( <br>
       (total, num, i) => return total + num;<br>
    // sum = 30`,
  ],
  [
    `arr.every( (value, index) => {return condition value})`,
    `Retourne un booléen selon que les valeurs de l'array passent ou non tous la condition. <br>
    Un autre array est obligatoire.`,
    `const nums = [10, 15, 5]; <br>
    const bool = nums.every( <br>
       (num, i) => return num > 0;<br>
    // bool = true`,
  ],
  [
    `arr.every( (value, index) => {return condition value})`,
    `Retourne un booléen si au moins une valeur passe la condition. <br>
    Un autre array est obligatoire.`,
    `const nums = [10, 15, 5]; <br>
    const bool = nums.some( <br>
       (num, i) => return num > 8;<br>
    // bool = true `,
  ],
  [`FIND ITEM IN ARRAY`, `-----------`, ``],
  [
    `arr.indexOf(value) + 1`,
    `Retourne la position de la valeur si elle existe, sinon -1.`,
    `const nums = [10, 15, 5]; <br>
    nums.indexOf(15) + 1 // 2`,
  ],
  [
    `arr.lastIndexOf(value) + 1`,
    `Retourne la position de la valeur si elle existe, sinon -1.`,
    `const nums = [10, 15, 5, 10]; <br>
    nums.lastIndexOf(10) + 1 // 4`,
  ],
  [
    `arr.includes(value)`,
    `Retourne un booléen selon la présence de la valeur dans l'array.`,
    `const nums = [10, 15, 5, 10]; <br>
    nums.includes(10) // false`,
  ],
  [
    `arr.find((value, index) => return condition value)`,
    `Retourne dans l'index et la valeur qui remplie en premier la condition.`,
    `const nums = [8, 10, 5, 10]; <br>
    let first = nums.find( <br>
      (num, index) => num > 9 return [index, num]) <br>
       // first = [1, 10] `,
  ],
  [
    `arr.findIndex( value => return condition value)`,
    `Retourne l'index de la première valeur qui remplie la condition.`,
    `const nums = [8, 10, 5, 10]; <br>
    let index = nums.findIndex( <br>
      value => return value < 6) <br>
       // index = 2 `,
  ],
  [
    `arr.some( value => return condition value)`,
    `Retourne true si une valeur passe la condition, sinon false`,
    `const nums = [8, 10, 5, 10]; <br>
    let index = nums.some( <br>
      value => return value < 0) <br>
       // false `,
  ],
  [`ARRAY TO STRING`, `-----------`, ``],
  [
    `arr.toString()`,
    `Création d'un string avec les éléments séparés`,
    `const arr = ['t', 12, 'p]; <br>
    arr.toString() // 't,1,2,p'`,
  ],
  [
    `arr.join()`,
    `Similaire à arr.toString()`,
    `const arr = ['t', 12, 'p]; <br>
    arr.join() // 't,1,2,p' <br>
    `,
  ],
  [
    `arr.join('')`,
    `Création d'un string assemblant les éléments selon la valeur indiquée.`,
    `const arr = ['t', 12, 'p]; <br>
    arr.join('') // 't12p' <br>
    arr.join(' ') // 't 12 p' <br>
    arr.join('-) // 't-12-p'`,
  ],
  [`CREATE ARRAY FROM PRIMITIVE`, `-----------`, ``],
  [
    `arr = Object.entries(str)`,
    `Chaque charact prend la forme [i, charac]`,
    `arr = Object.entries('el') <br>
    // arr = [['0', 'e'], ['1', 'l']]`,
  ],
  [
    `arr = Object.entries(num)`,
    `Cela retourne un array vide`,
    `arr = Object.entries(10) // []`,
  ],
  [`LOOP ARRAYS`, `-----------`, ``],
  [
    `for (const item of arr)`,
    `Créer une loop pour chaque item de l'array`,
    `const arr = [1, 2, 3];<br>
    for (const item of arr) {<br>
  sum += item;};<br>
  console.log(sum); // 6`,
  ],
  [
    `for (const [i, item] of arr.entries())`,
    `Permet d'avoir un index en plus de l'item`,
    `const arr = [1, 2, 3];<br>
    for (const [i, item] of arr) {<br>
  sum += item; 
  index += i;}<br>
  console.log(sum, i); // 6, 3`,
  ],

  [`DESTRUCTURING ARRAYS`, `-----------`, ``],
  [
    `[var] = arr`,
    `La variable prend LA PREMIERE valeur de l'array`,
    `const arr = [2, 3, 4];<br>
  const [x, y, z] = arr;<br>
  console.log(x, y, z); // 2, 3, 4`,
  ],

  [
    `[ ,var] = arr`,
    `La variable prend LA DEUXIEME valeur de l'array`,
    `const arr = [2, 3, 4];<br>
  const [ , x] = arr;<br>
  console.log(x); // 3`,
  ],
  [
    `[var = 'default'] = arr`,
    `Prend la valeur par défaut si elle n'existe pas dans l'array`,
    `const arr = [];<br>
  const [x = 'none'] = arr ;<br>
  console.log(x); // 'none'`,
  ],
  [
    `[var1, var2] = [var2, var1]`,
    `Switch les valeurs des deux variables`,
    `var1 = 2, var2 = 10;<br>
    [var1, var2] = [var2, var1];<br>
  console.log(var1, var2); // 10, 2`,
  ],
  [
    `[[var]] = arr`,
    `La variable prend la valeur du nested array`,
    `arr = [[1, 2]];<br>
    [[var]] = arr;<br>
  console.log(var); // 1, 2`,
  ],
  [
    `[el1, el2, ...othersEl] = arr`,
    `Récupère tous les éléments restants de l'array`,
    `const arr = [7, 2, 3];<br>
   const [getEl1, ...getOthers = arr;<br>
   console.log(getEl1); // [7]<br>
   console.log(getOthers); // [2, 3]`,
  ],
  [
    `arr = [[subArr1], [subArr2]] <br>
    [...getSubArr] = arr[i]`,
    `Récupère dans un array le subArray à l'index i`,
    `arr = [[1, 2], [3, 4]];<br>
    [...subArr] = arr[0]; // [1, 2]`,
  ],
];

const obj = [
  `<h1 id='obj'>OBJECTS METHODS</h1>`,
  [`BASICS`, `-----------`, ``],
  [
    `obj.key = value`,
    `Création d'une paire key, value`,
    `obj = {} <br>
    obj.firstName = 'Jordan' // {firstName: 'Jordan'}`,
  ],
  [
    `obj.key.key...`,
    `Pour utiliser des paires d'objet dans un objet`,
    `obj = {Name: {firstName: 'Jordan'}} <br>
    obj.Name.firstName // 'Jordan'`,
  ],
  [
    `delete obj.key`,
    `Supprimer la paire key, value`,
    `obj = {firstName: 'Jordan'} <br>
    delete obj.firstNameobj // {}`,
  ],
  [`CHECK KEY/VALUE`, `-----------`, ``],
  [
    `obj.hasOwnProperty(key)`,
    `Retourne true si la key existe dans l'objet`,
    `obj = {firstName: 'Jordan'} <br>
    obj.hasOwnProperty(firstName) // true`,
  ],
  [`CLONE/MERGE OBJ`, `-----------`, ``],
  [
    `newObj = Object.assign( {}, obj)`,
    `Permet un clonage partiel de l'objet`,
    `obj = {firstName: 'Jordan'} <br>
    newObj = Object.assign( {}, obj) <br>
    // newObj = {firstName: 'Jordan'}`,
  ],
  [
    `newObj = Object.assign(obj1, obj2...)`,
    `Fusionne des objets dans un objet`,
    `obj1 = {a: 1}, obj2 = {b: 2}; <br>
    newObj = Object.assign(obj1, obj2); <br>
    // newObj = {a: 1, b: 2}`,
  ],
  [
    `newObj = Object.assign({}, obj1, obj2...)`,
    `Fusionne des objets et les propriétés dans l'ordre de paramétrage`,
    `obj1 = {a: 1, b: 0}, obj2 = {b: 10, c: 3}; <br>
    newObj = Object.assign({}, obj1, obj2); <br>
    // newObj = {a: 1, b: 10, c: 3}`,
  ],
  [`OBJECT TO ARRAY`, `-----------`, ``],
  [
    `arr = Object.keys(obj)`,
    `Récupère chaque key sous forme d'array`,
    `obj = {a: 1, b: 0}; <br>
    arr = Object.keys(obj); <br>
    // arr = ['a', 'b']`,
  ],
  [
    `arr = Object.values(obj)`,
    `Récupère chaque value sous forme d'array`,
    `obj = {num: 1, str: 'test'}; <br>
    arr = Object.values(obj); <br>
    // arr = [1, 'test']`,
  ],
  [
    `arr = Object.entries(obj)`,
    `Récupère chaque k,v sous forme d'array [key, value]. <br>
    Les éléments de l'array sont de type string.`,
    `obj = {a: 1, b: 0}; <br>
    arr = Object.entries(obj); <br>
    // arr = [['a', '1'], ['b', '0']]`,
  ],
  [`ARRAY/MAP PAIRS TO OBJECT`, `-----------`, ``],
  [
    `obj = Object.fromEntries(obj)`,
    `Passage d'une paire non-objet à objet`,
    `arr = [[num, 1], [str, 'test']];  <br>
    obj = Object.fromEntries(arr); <br>
    // obj = {num: 1, str: 'test'}`,
  ],
  [`GET MUTABLE/IMMUTABLE`, `-----------`, ``],
  [
    `Object.freeze(obj)`,
    `Permet de geler un obj, impossible de modif/suppr/add`,
    `obj = {firstName: 'Jordan'} <br>
    Object.freeze(obj) // immuable`,
  ],
  [
    `Object.isFrozen(obj)`,
    `Vérifie si un objet est gelé`,
    `obj = {firstName: 'Jordan'} <br>
    Object.isFrozen(obj) // false`,
  ],
  [
    `Object.seal(obj)`,
    `Permet de sceller un obj qui devient seulement modifiable`,
    `obj = {firstName: 'Jordan'} <br>
    Object.isSealed(obj) // false`,
  ],
  [
    `Object.isSealed(obj)`,
    `Vérifie si un objet est scellé`,
    `obj = {firstName: 'Jordan'} <br>
    Object.isSealed(obj) // false`,
  ],
  [
    `Object.isExtensible(obj)`,
    `Vérifie si un objet est modifiable`,
    `obj = {firstName: 'Jordan'} <br>
    Object.freeze(obj) <br>
    Object.isExtensible(obj) // false`,
  ],
  [`LOOP OBJECTS`, `-----------`, ``],
  [
    `keys = Object.keys(Obj)<br>
    for (const key of keys)
    `,
    `Récupère les keys d'un objet utilisable dans for-of loop`,
    `const days = {day1: 'monday', day2: 'tuesday'};<br>
    const keys = Object.keys(days); {<br>
    console.log(keys.length); // 2 (keys)<br>
    for (const key of keys) {return key};<br>
    //day1, day2`,
  ],
  [
    `values = Object.values(Obj)<br>
    for (const value of values) {}
    `,
    `Récupère les valeurs d'un objet utilisable dans for-of loop`,
    `const days = {day1: 'monday', day2: 'tuesday'};<br>
    const values = Object.values(days); {<br>
    console.log(keys.length); // 2 (keys)<br>
    for (const value of values) {return value};<br>
    //'monday', 'tuesday'`,
  ],
  [
    `properties = Object.entries(Obj)<br>
    for (const [k, v] of properties)
    `,
    `Récupère les propriétés d'un objet utilisable avec for-of loop`,
    `const days = {day1: 'monday', day2: 'tuesday'};<br>
    const properties = Object.entries(days) ;{<br>
    console.log(properties.length); // 2<br>
    for (const [key, value] of properties) {return [key, value]};<br>
    //{day1, 'monday'], day2: 'tuesday'`,
  ],
  [`DESTRUCTURING OBJECTS`, `-----------`, ``],
  [
    "{key} = obj",
    "La variable prend le nom et la valeur de la propriété",
    `object = {firstName : "Jordan"};<br>
    const {firstName} = object;<br>
    console.log(firstName); // " Jordan"<br>`,
  ],
  [
    "{key: name} = obj",
    "Comme ci-dessus mais donne un autre nom à la variable",
    `object = {firstName : "Jordan"};<br>
    const {firstName: first} = object;<br>
    console.log(first); // " Jordan"<br>`,
  ],
  [
    '{key: name = "dft"} = obj',
    "Donne une valeur par défaut si aucune existe",
    `object = {};<br>
    const {name: var = "Jordan"} = obj;<br>
    console.log(var); // " Jordan"<br>`,
  ],
  [
    "let var;<br>  ({key: var} = obj)",
    "Donne à une variable existante la valeur de la propriété",
    `let var = 10;<br>
    object = {number: 30};<br>
    const ({number: var} = object);<br>
    console.log(var); // 30<br>`,
  ],
  [
    "{keyN: {nestKey} } = obj",
    "Récupère la propriété d'un nest objet",
    `object = {day: {mon: "Monday"}};<br>
    const {day: {mon} } = object;<br>
    console.log(mon); // "Monday"<br>`,
  ],
  [
    `{key, ...othersKey} = obj`,
    `Récupère les propriétés restantes de l'objet`,
    `const obj = {sat: 1, mon: 2, wed: 3};<br>
   const {sat, ...othersKey} = obj;<br>
   console.log(sat); // {sat:  1}<br>
   console.log(othersKey);<br> // { mon: 2, wed: 3}`,
  ],
];

const thisOp = [
  `<h1 id='this'>THIS OPERATOR</h1>`,
  [`VALEUR DE THIS`, `-----------`, ``],
  [
    `global this`,
    `Dans le contexte global du navigateur, this = windows`,
    `this.a = 37 <br>
    window.a // 37`,
  ],
  [
    `obj = {key: value <br>
    method() { return this.key}}`,
    `Dans un obj, this renvoie la key de l'objet`,
    `obj = {name: 'Jordan', <br>
    getName() {'I am' + this.name} <br>
  }; <br>
  getName(); // 'I am Jordan'`,
  ],
  [
    `obj = {key: value}; <br>
    function(arg) {this.key}; <br>
    function.call(obj)`,
    `Utilise la key de l'objet désigné a l'appel de la fonction`,
    `const obj = {name: 'Jordan'}; <br>
  getName() {'I am' + this.name}}; <br>
  getName().call(obj); // 'I am Jordan'`,
  ],
];

function createMemento(arr, num) {
  bodyEl.insertAdjacentHTML(
    "afterbegin",
    `<section class="memento--container container${num}">
    ${arr[0]}

  </section>`
  );

  for (let i = 1; i < arr.length; i++) {
    if (!arr[i][2]) {
      bodyEl.querySelector(`.container${num}`).insertAdjacentHTML(
        "beforeend",

        ` 
          <div class="memento--elements">
          <p></p>
          <h3 class='title'>${arr[i][0]}</h3>
          <p></p>
            </div>
      `
      );
    } else {
      bodyEl.querySelector(`.container${num}`).insertAdjacentHTML(
        "beforeend",

        ` 
          <div class="memento--elements">
          <p class='memento--item__description'>${arr[i][0]}</p>
          <p class='memento--item__name'>${arr[i][1]}</p>
          <div class='memento--item__exemple'>${arr[i][2]}</div>
            </div>
      `
      );
    }
  }
}

const id = [
  ["desObj", "DESTRUC OBJ"],
  ["desArr", "DESTRUC ARR"],
  ["spreadOp", "SPREAD"],
  ["restOp", "REST"],
  ["otherOp", "OPERATORS"],
  ["forOfLoop", "FOR-OF LOOP"],
  ["set", "SET"],
  ["map", "MAP"],
  ["string", "STRING"],
  ["number", "NUMBERS"],
  ["maths", "MATHS"],
  ["maths", "MATHS"],
  ["arr", "ARRAYS"],
];

function createIndex(id) {
  for (let i = 0; i < id.length; i++) {
    headerEl.insertAdjacentHTML(
      "beforeend",
      `
        <a href='#${id[i][0]}'> ${id[i][1]}</a>
    `
    );
  }
  return;
}

//createIndex(id);
createMemento(thisOp, 11);
createMemento(otherOp, 10);
createMemento(spreadOp, 9);
createMemento(restOp, 8);
createMemento(set, 7);
createMemento(map, 6);
createMemento(obj, 5);
createMemento(arr, 4);
createMemento(maths, 3);
createMemento(numbers, 2);
createMemento(string, 1);
