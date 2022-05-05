function EfetuarCadastro() {
  const nome = document.getElementsByTagName("input")[0];
  const descricao = document.getElementsByTagName("input")[1];
  const categoria = document.getElementsByTagName("input")[2];
  const quantidade = document.getElementsByTagName("input")[3];
  const preco = document.getElementsByTagName("input")[4];
  const foto = document.getElementsByTagName("input")[5];

  fetch("http://localhost:5000/api/produto/cadastrar", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome.value,
      descricao: descricao.value,
      categoria: categoria.value,
      quantidade: quantidade.value,
      preco: preco.value,
      foto: foto.value,
    }),
  })
    .then((resultado) => resultado.json())
    .then((dados) => {
      alert(dados.output);
      window.location.reload();
    })
    .catch((erro) => console.error(`Erro na api ->${erro}`));
}

function carregarProdutos() {
  const produtos = document.getElementById("produtos");

  fetch("http://localhost:5000/api/produto/listar")
    .then((resultado) => resultado.json())
    .then((dados) => {
      dados.output.map((item) => {
        div = `<div> 
                <img src=${item.foto}>
                <h2>${item.nome}</h2>
                <h4>${item.categoria}</h4>
                <h5>${item.preco}</h5>
                </div>`;
        produtos.innerHTML += div;
      });
    })
    .catch((erro) => console.error(`Erro na api -> ${erro}`));
}

function abrirform() {
  const form = document.getElementsByTagName("form")[0];

  if (form.style.display == "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}
