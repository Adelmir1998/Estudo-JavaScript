// Impostação do modulo do servidor do Express
const express = require("express");

//Importação do modulo do mongoose
const mongoose = require("mongoose");

// Criação do aplicativo do servidor do Express
const app = express();

// permitir que o servidor trabalhe com o formato JSON
app.use(express.json());

/*
Url de conexao com o banco de dados Mongodb
mongodb+srv://adelmir:<password>@projetoapi.nhjs7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/
const urldb =
  "mongodb+srv://adelmir:adelmir2511@projetoapi.nhjs7.mongodb.net/BancodeDados?retryWrites=true&w=majority";

mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedtopology: true });

/*
Criar a estrutura da tabela para cadastro dos clientes
*/
const tabela = mongoose.Schema({
  nome: String,
  email: String,
  idade: Number,
});

//Criar o modelo de dados, ou seja, criar a tabela com a estrutura
const Cliente = mongoose.model("tbcliente", tabela);

// Vamos criar a primeira rota do servidor
app.get("/", (req, res) => {
  //Vamos trazer todos os clientes cadastrados e exibir em tela
  Cliente.find((erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao carregar cliente ->${erro}` });
    res.status(200).send({ output: dados });
  });
});
/*
Vamos criar a rota com o verbo POST. É usado quando
se deseja cadastrar algum dado ou para fazer
sistema de login
*/
app.post("/cadastro", (req, res) => {
  //Vamos criar um novo cliente a partir dos dados enviados
  const cli = new Cliente(req.body);

  //Comando SAVE para gravar os dados no banco de dados
  cli
    .save()
    .then((dados) => {
      res.status(201).send({ output: `Cliente cadastrado`, info: dados });
    })
    .catch((erro) =>
      res.status(500).send({ output: `Erro ao Cadastrar->${erro}` })
    );
});

/*
Rota para atualizar os dados dos clientes. Vamos utilizar o Verbo PUT.
Para atualizar precisaremos de 2 informações. A primeira é o id
do dado que você deseja atualizar e a segunda, são os dados
que deseja atualizar.
*/

app.put("/atualizar/:id", (req, res) => {
  Cliente.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (erro, dados) => {
      if (erro)
        return res.status(400).send({ output: `Erro ao atualizar->${erro}` });
      res.status(200).send({ output: `Atualizada`, info: dados });
    }
  );
});
//Para deletar um dado iremos usar o verbo DELETE passando id
app.delete("/apagar/:id", (req, res) => {
  Cliente.findByIdAndDelete(req.params.id, (erro, dados) => {
    if (erro)
      return res.status(500).send({ output: `Erro ao apagar ->${erro}` });
    res.status(204).send({ output: "Apagou" });
  });
});

// Definir uma porta de comunicação com o servidor de aplicação
app.listen(5000, () => console.log("on line em http://localhost:5000"));
