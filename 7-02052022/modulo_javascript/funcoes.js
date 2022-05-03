function mensagem() {
  console.log("Olá! Eu venho de um módulo");
}
function Data() {
  console.log(new Date().toLocaleDateString());
}
export function soma(n1, n2) {
  console.log(n1 + n2);
}
export { mensagem };
export { Data };
