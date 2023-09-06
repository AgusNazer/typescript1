

// variables tipadas. Como en otor lenguajes, gato, tipo java.
let text: string = 'soy un crack'
let numero:number = 10;
let verdadero:boolean = true;
let cualquiera: any = 'puedo poner lo que sea'

verdadero = false;

const nombre:string = 'agus';
console.log(text, numero, verdadero);


let personas:string[] = ['agus', 'juan', 'maria', 'pedro']

let div_personas:HTMLElement | null = document.querySelector('#personas')




    div_personas.innerHTML += '<ul>' + 

    personas.map((persona)=>{
          return `<li>${persona}</li>`
    }).join('') + '</ul> '

    
  let mensaje:string = 'holas';
  console.log(mensaje);
  
 
const multiplicator = (a:Number,b:number,printText:String) =>{
    console.log(printText, 2 * 3 );  
}

multiplicator(2,4, 'elresultado es')


function probandoTs (config: any) {
  return config
}
let animales: string[] = ['perro', 'gato', 'leon'];
let nums1: number[] = [1,2,3,6];
let checks:boolean[] = [];
let nums2: Array<number> = [];

// animales.map(animal => animal.) el auto completado sugiera el tipo de dato

// una tupla es un tipo de dato que te permite representar un arreglo de elementos 
// con un número fijo de elementos y tipos de datos específicos en un orden particular.
let tupla: [number, string] = [1, 'soy un string']

// la tupla puede tener un string, que dentro tiene otro arreglo:
let tupla2: [number, string []] = [1, ['soy un string']]

//objetos
type Direccion = {
  
    numero:number,
    calle: string,
    pais: string
  
}
type Perosna = {
  readonly id: number,
  nombre: string,
  talla: string,
  direccion: Direccion
}
const objeto: Perosna = {
  id:1, 
  nombre:'holaaa soy agus',
  talla: 'M',
  direccion:{
    numero: 1,
    calle: 'siempre viva',
    pais: 'argentina'
  }
}

