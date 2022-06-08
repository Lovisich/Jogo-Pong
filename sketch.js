let larguraTela = 600;
let comprimentoTela = 800;
let xBolinha = comprimentoTela / 2;
let yBolinha = larguraTela / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let diametroBolinha = 23;
let raioBolinha = diametroBolinha / 2;
let larguraRaquete = 15;
let comprimentoRaquete = 85;
let xMinhaRaquete = 10;
let yRaquete = 300 - comprimentoRaquete / 2;
let xRaqueteOponente = comprimentoTela - larguraRaquete - 10;
let yRaqueteOponente = 300;
let colidiu = false;
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background(150);
  criaBolinha ();
  moveBolinha();
  colisaoBolinha();
  
  criaRaquete(xMinhaRaquete, yRaquete);
  criaRaquete(xRaqueteOponente, yRaqueteOponente);
  
 moveRaquete()
  colisaoRaquete(xMinhaRaquete, yRaquete);
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  
  mostraPlacar();
  pontuacao();
}

function criaBolinha (){
  circle(xBolinha, yBolinha, diametroBolinha);
}

function moveBolinha(){ 
  xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
}

function colisaoBolinha(){
  if ( xBolinha + raioBolinha > comprimentoTela || xBolinha - raioBolinha < 0){
   velocidadeXBolinha = velocidadeXBolinha * -1 
 }
  if ( yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0){
   velocidadeYBolinha = velocidadeYBolinha * -1 
 }  

}

function criaRaquete(posicaoX, posicaoY){
  rect(posicaoX, posicaoY, larguraRaquete, comprimentoRaquete);
  
}

function moveRaquete() {
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10};


if (keyIsDown(DOWN_ARROW)){
yRaquete += 10;
}
  
  yRaqueteOponente = yBolinha - comprimentoRaquete / 2
}

function colisaoRaquete(posicaoX, posicaoY) {
  colidiu = collideRectCircle(posicaoX, posicaoY, larguraRaquete, comprimentoRaquete, xBolinha, yBolinha, diametroBolinha);
  if(colidiu){
    velocidadeXBolinha *= -1;
  }
}

function mostraPlacar (){
  fill(225);
  textSize(32);
  text(meusPontos, 200, 50);
  text(pontosOponente, 600, 50);
}

function pontuacao(){
  if (xBolinha > 785) {
    meusPontos += 1
    
  }
  if (xBolinha < 15) {
    pontosOponente += 1
                           }
  
}