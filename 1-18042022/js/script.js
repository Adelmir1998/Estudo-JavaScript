// Janela de alerta criada em javascript
// alert("Olá. Sejá bem vindo");
// Vamos solicitar ao usuário que entre com seu nome
// Utilizaremos o prompt associado a uma variável
// var nome = "";
/*var nome = "";
// nome = prompt("Digite o seu nome");
// alert(nome.toUpperCase());//nome em letras maiusculas
*/

//Calcular as 5 operações aritimeticas
var numero1 = prompt("Digite um número")
var numero2 = prompt("Digite outro número")

var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

console.log(
    "Os resultados são: \n\n"+
    "soma: "+soma+
    "\nsubtração: "+subtrair+
    "\nmultiplicação: "+multiplicar+
    "\ndivisão: "+dividir+
    "\nresto: "+resto
);



