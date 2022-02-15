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
let $body = qs('body');

let userName = prompt('Ingrese su nombre') || 'Invitad@';
userName.trim() !== "" ? $h2.innerText += `${userName}` : $h2.innerText += 'Invitado';
main.style.display = "block"
$h2.style.textTransform = 'uppercase';
$a.style.color = '#E51B3E';
/* clases */
let background = confirm('¿Desea colocar un fondo de pantalla?');
background && $body.classList.add('fondo'); element.classList.remove.toggle('fondo')

/* for(let i=0; i < $p.length; i++){
    if(i % 2 == 0){
        $p[i].classList.add('destacadoPar');
    }else{
        $p[i].classList.add('destacadoImpar');
    }
} */

$p.forEach((element) => {
    if(index % 2 == 0){
        element.classList.add('destacadoPar');
    }else{
        element.classList.add('destacadoImpar')
    }
})

console.log(main)
console.log(h2)
console.log(a)
console.log(p)

/* completar los siguientes desafios */

