/* alert('Vinculado') */
/* querySelector me permitirá capturar por etiqueta, por id o por clase */

let main = document.querySelector('main');

let h2 = document.querySelector('.subtitulo'); /* aqui capturo por su clase porque hay dos h2 */

let a = document.querySelector('a');

let p = document.querySelectorAll('p'); /* All porque hay más de 1 p */


/* ---------------------y sino función para menos código----------------------- */
function qs (element) {
    return document.querySelector(element)
}
let main = qs('.container')
let h2 = qs('.subtitulo')
let a = qs('a') 
let p = document.querySelectorAll('p')

main.style.display = "block" /* Aqui capturamos para que el elemento que tenia display none cambie a block desde aca */
let $body = qs('body');
/* Estan el alert, el prompt y el confirm */


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

