const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
console.log(destructivelyAppendCat("Ralph"));

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
console.log(destructivelyPrependCat("Bob"));

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
console.log(destructivelyRemoveLastCat());

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
console.log(destructivelyRemoveFirstCat());

function appendCat(name) {
    let newCats = [...cats.slice(0,3), name];
    return newCats;
}
console.log(appendCat("Broom"));

function prependCat(name) {
    let newCats = [name, ...cats.slice(0,3)];
    return newCats;
}
console.log(prependCat("Broom"));

function removeLastCat() {
    let newCats = [...cats.slice(0, 2)];
    return newCats; 
}
console.log(removeLastCat());

function removeFirstCat() {
    let newCats = [...cats.slice(1,3)];
    return newCats;
}
console.log(removeFirstCat());