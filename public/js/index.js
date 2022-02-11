/* alert('Vinculado') */

let main = document.querySelector('main');
console.log(main);

/* --- */
let title = document.querySelector('h2');
console.log(title);

/* --- */
let link = document.querySelector('a');
console.log(link);

/* --- */
let parrafo = document.querySelector('p');
console.log(parrafo);

/* -------------------------------------------- */
function qs (element) {
    return document.querySelector(element)
}

let h2 = qs('.subtitulo')
let a = qs('a') /* al hacer esta funcion hacemos menos codigo */
let p = document.querySelector('p')

console.log(main)
console.log(h2)
console.log(a)
console.log(p)

main.style.display = "block"

