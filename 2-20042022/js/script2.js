function repeticao1() {
  for (var i = 0; i <= 10; i++) {
    console.log(i);
  }
}
function galeria() {
  const miniatura = document.getElementById("miniatura");
  const painel = document.getElementById("painel");

  for (var i = 1; i <= 5; i++) {
    miniatura.innerHTML += "<img src=img/img" + i + ".jpg id=img" + i + ">";
  }
  abrirNoPainel();
}

function abrirNoPainel() {
  document.getElementById("img1").onclick = function () {
    painel.innerHTML = "<img src=img/img1.jpg>";
  };
}
