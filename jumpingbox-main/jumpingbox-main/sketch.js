var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, edges;
var music;

function preload(){
    // carregue o som aqui
}

function setup(){
    tela = createCanvas(1360,600);

    bloco1 = createSprite(180,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(475,580,360,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(820,580,360,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(1180,580,360,30);
    bloco4.shapeColor = "green";



    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY

    bola.setVelocity(5,5);

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    bola.bounceOff(edges);

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        //music.play();
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        bola.setVelocity(0,0)
        //music.stop();
    }
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
        //music.play();
    }
    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
        //music.play();
    }

    //escreva o código de ricochete de bola para bloco3

    //escreva o código de ricochete de bola para bloco4

    drawSprites();
}