// .DATA
let sovrapposizione = document.getElementById("sovrapposizione");
let tendinamenu = document.getElementById("tmlinkss");

// .CODE
console.log('Hello, World!');

function ActiveMenu() {
    sovrapposizione.classList.add("activesovrapposizione");
    tendinamenu.classList.add("activetendinamenu");
}

function CloseMenu() {
    tendinamenu.classList.remove("tmlinkss");
}