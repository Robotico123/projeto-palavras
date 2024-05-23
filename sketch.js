# projeto-palavras
let palavra;

function palavraAleatoria(){
  let palavras = ["Caminhante", "Caminho", "Rodovia", "Estrada", "Caminha"]; 
  return random(palavras);
}

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria()
 
}
 
function inicializaCores(){
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}
function palavraParcial(minimo, maximo) {
let
}
 
function draw() {
 
  inicializaCores();
 
 
 
 
  let maximo = width;
  let minino = 0;
  
 
 
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
 
  text(parcial, 200, 200);
 
}
  

 

