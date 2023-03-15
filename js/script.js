
//FEITO ATÉ O EXERCÍCIO 7!!!!
//VERIFICAR EXERCÍCIO 4!!!!!


//Exercício 1:
function numero1a10() {
    var resultado1 = new Array(10);
    for (var i = 0; i < 10; i++) {
        resultado1[i] = i + 1;
    } //Gera o array com os valores de 1 a 10.


    resultado1.toString();
    var x = document.getElementById("exercicio1");
    x.innerHTML = resultado1;

    var y = document.getElementById("botao1");
    y.innerHTML = "Feito!";

}

//---------------------------------------------------------------------------------------------
//Exercício 2:

var resultado2 = new Array();
var count = 0;
var i = 0;

function imparMenorQue100() {
    while (count < 100) {
        if (count % 2 == 0) {
            count++;
        } else {
            resultado2[i] = count;
            i++;
            count++;
        }
    }

    resultado2.toString();
    var x = document.getElementById("exercicio2");
    x.innerHTML = resultado2;
    var y = document.getElementById("botao2");
    y.innerHTML = "Feito!";

}

//---------------------------------------------------------------------------------------------
//Exercício 3:

function tabuadaDo8() {

    var tabuada8 = new Array();
    var mult = 1;

    for (var i = 0; i < 10; i++) {

        tabuada8[i] = 8 * mult;
        mult++;
    }

    tabuada8.toString();

    var x = document.getElementById("exercicio3");
    x.innerHTML = "Tabuada do 8: " + tabuada8;
    var y = document.getElementById("botao3");
    y.innerHTML = "Feito!";
}

//---------------------------------------------------------------------------------------------
//Exercício 4:

function mostraTabuadas (){





















var x = document.getElementById("exercicio4");
x.innerHTML = listTabuada;
var y = document.getElementById("botao4");
y.innerHTML = "Feito!";

}

function tabuadas() {



    function multTabuadas(n){

    for (var i = 1; i <= 10 ; i++) {
        
        var linha = n + " * " + i + " = " + n * i;
        console.log(linha);
    } 
    
}
    for (var i = 1; i <= 10; i++) {
        multTabuadas(i);
        console.log("");
    }
}



//---------------------------------------------------------------------------------------------
//Exercício 5:

function soma1a10(){

    var resultadoSoma = 0;

for (var i = 1; i <=10; i++) {

    resultadoSoma = i + resultadoSoma;

}


var x = document.getElementById("exercicio5");
x.innerHTML = resultadoSoma;

var y = document.getElementById("botao5");
y.innerHTML = "Feito!";

}

//---------------------------------------------------------------------------------------------
//Exercício 6:

function fatorial10() {

    var aux = 1;
for (var i = 1; i <=10; i++) {


aux = aux * i;
}

var x = document.getElementById("exercicio6");
    x.innerHTML = "O fatorial do 10 (10!) é " + aux;
    var y = document.getElementById("botao6");
    y.innerHTML = "Feito!";

}


//---------------------------------------------------------------------------------------------
//Exercício 7:

function porcentagem() {
var porcen = 0;
var valor = 0;
var resultadoPorcentagem = 0;

porcen = prompt("Por favor, digite o valor...", "Digite o valor aqui");
valor = prompt("... e a porcentagem que deseja descobrir", "Digite a porcentagem aqui");

resultadoPorcentagem = (porcen/100) * valor;


var x = document.getElementById("exercicio7");
    x.innerHTML = resultadoPorcentagem;
    var y = document.getElementById("botao7");
    y.innerHTML = "Feito!";
}


//---------------------------------------------------------------------------------------------
//Exercício 8:

function somaImpares() {




var x = document.getElementById("exercicio8");
    x.innerHTML = resultado2;
    var y = document.getElementById("botao8");
    y.innerHTML = "Feito!";

}



//---------------------------------------------------------------------------------------------
//Exercício 9:


function celsiusParaFahrenheit() {




    var x = document.getElementById("exercicio9");
    x.innerHTML = resultado2;
    var y = document.getElementById("botao9");
    y.innerHTML = "Feito!";  
}


//---------------------------------------------------------------------------------------------
//Exercício 10:

function fahrenheitParaCelsius() {




   var x = document.getElementById("exercicio10");
    x.innerHTML = resultado2;
    var y = document.getElementById("botao10");
    y.innerHTML = "Feito!"; 
}








