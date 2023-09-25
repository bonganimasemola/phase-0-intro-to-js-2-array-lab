
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat() {
    cats.push('Ralph');
}

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift(0);
}


/* function appendCat(cats) {
    const newCat = "Broom";
  cats.push(newCat); */ 

function appendCat(name) {
//let newCat = "Broom";  
  const newCats = [...cats, name];
  return newCats;
}


  

function prependCat(name) {
    const newCats = [ name, ...cats];
    return newCats;
}


function removeLastCat() {
    return cats.slice(0, - 1);
   
  }

 function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
  } 


 