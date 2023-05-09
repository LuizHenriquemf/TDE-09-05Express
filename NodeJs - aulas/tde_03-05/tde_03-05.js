let num1 = 4;
let num2 = 15;

console.log("Primeiro Número: " + num1 + "\nSegundo número: " + num2 + "\n");

function soma() {
    let soma = num1 + num2;
    console.log("Soma:" + soma);
}

function subtrair() {
    let subtrair = num1 - num2;
    console.log("Subtração: " + subtrair);
}

function divisao(){
    let divisao = num1/num2;
    console.log("Divisão: " + divisao);
}

function multiplicar(){
    let multiplicar = num1*num2;
    console.log("Multiplicação: " + multiplicar);
}

function verificar(){
    if(num2%2 != 0){
        console.log("O número é ímpar");
    } else {
        console.log("O número é par!");
    }
}

soma();
subtrair();
divisao();
multiplicar();
verificar();
