//Script para realizar as 4 operações matemáticas
function operacoes() {
  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");
  //verificar se as caixas estão vazias
  if (n1.value == "" || n2.value == "") {
    return alert("As caixas não podem ficar vazias.");
  }
}
const btnSoma = document.getElementById("btnSoma");
const btnSubtrair = document.getElementById("btnSubtrair");
const Multiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");

//somar os valores das caixas n1 e n2
btnSoma.onclick = function () {
  alert(parseInt(n1.value) + parseInt(n2.value));
};
btnSubtrair.onclick = function () {
  alert(n1.value + n2.value);
};
btnMultiplicar.onclick = function () {
  alert(n1.value * n2.value);
};
btnDividir.onclick = function () {
  alert(n1.value / n2.value);
};
