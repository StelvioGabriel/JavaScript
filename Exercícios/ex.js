//var objeto = new Object()// 
var nave = {
    nome: "coração de ouro", 
    propulção : "Gerador de improbabilidade infinita ", 
    dano: "Zphod Bebblebrox"
} 


// outro exemplo //

function carro (modelo , marca , ano , motor ){
    this.modelo = modelo ; 
    this.marca = marca ; 
    this.ano = ano ; 
    this.motor = motor ; 

}
var car  = new carro ("G800", "Gurgel", 1976 , 1.0)

//console.log("carro:" + car.modelo)// 


// Outro Exemplo // 

function calc_consumo(distancia){
    return distancia/(15/this.motor);
}
car.consumo = calc_consumo; 
var gas = car.consumo(200) ; 
//console.log(gas +" litros");
// Prototype// 

function calc_consumo(distancia){
    return distancia/(15/this.motor) ; 

}
function carro (modelo , marca , ano , motor ){
    this.modelo = modelo ; 
    this.marca = marca ; 
    this.ano = ano ; 
    this.motor = motor ;
}
carro.prototype.rodas = 4 ; 
carro.prototype.consumo = calc_consumo ; 
var car1 = new carro ("Accent", "Hyundai ", 2011 , 4.5);
var car2 = new carro ("Hylux", "Toyota", 2004, 7.0) ;

if (car1.rodas == 4 ) console.log("Ainda Bem! ")
else console.log("Perigo!!!!"); 
var gas = car1.consumo(180);
var modelo = car1.modelo;
console.log('O carro '+modelo+ ' consumiu '+ gas +' litros'  );


