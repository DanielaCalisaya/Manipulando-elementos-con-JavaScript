let $body = document.querySelector('body');
let $h1 = document.querySelector('h1');

let questions = prompt('¿Desea modo oscuro?') || $body.classList.add('fondoMoviesList')

$h1.innerText += 'LISTADO DE PELÍCULAS';
$h1.style.color =  'white' 
$h1.style.background = 'teal'
$h1.style.padding = '20px'