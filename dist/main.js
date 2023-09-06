let text = 'soy un crack';
let numero = 10;
let verdadero = true;
let cualquiera = 'puedo poner lo que sea';
verdadero = false;
const nombre = 'agus';
console.log(text, numero, verdadero);
let personas = ['agus', 'juan', 'maria', 'pedro'];
let div_personas = document.querySelector('#personas');
div_personas.innerHTML += '<ul>' +
    personas.map((persona) => {
        return `<li>${persona}</li>`;
    }).join('') + '</ul> ';
let mensaje = 'holas';
console.log(mensaje);
const multiplicator = (a, b, printText) => {
    console.log(printText, 2 * 3);
};
multiplicator(2, 4, 'elresultado es');
