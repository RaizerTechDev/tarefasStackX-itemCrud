# Tarefa - Gerenciamento Banco de Dados

## Índice

- [Objetivo](#-objetivo)
- [Documentação](#-documentação-do-projeto)
- [Instalação](#instalação-com-bash)
- [Demonstração Código Resumido](#demonstração-código-resumido)
  - [- `models/Aluno.js`](#--modelsalunojs)
  - [- `database/index.js`](#--databaseindexjs)
  - [- `app.js`](#--appjs)

## 🌟 Objetivo:

### 🎯 Veja essa tabela e escreva a query pedida no fim:

Tabela - provas
📍Colunas:
📍 id_aluno - número
📍 id_materia - número
📍 nota - número flutuante
📍 data_da_prova data

Tabela - aluno
📍 colunas:
📍 id numero
📍 nome string
📍 data_nascimento numero

Tabela - professor
📍 colunas:
📍 id numero
📍 nome string
📍 data_nascimento numero

Tabela - materia
📍 colunas:
📍 id numero
📍 nome string
📍 id_professor numero

🎯 Crie 3 alunos;
🎯 Crie uma matéria e um professor;
🎯 Crie 1 prova para cada aluno nessa matéria e diga que nota eles tiraram.

## 📖 Documentação do Projeto

 <div align="center">

<img src ="././public/assets/images/doc.png" alt="Descrição da Imagem" height="45">

[✨ **Clique aqui para saber mais da documentação** ✨](https://github.com/RaizerTechDev/tarefaStackX-tabelas-query/blob/master/Documentation.md)

<br>

<div align="center">
  
<img src= "https://media.giphy.com/media/3zSF3Gnr7cxMbi6WoP/giphy.gif" align="center" height="55" width="55"> [Demonstração-Tabelas] <img src= "https://media.giphy.com/media/E5DzZsofmgxc9wjbhX/giphy.gif" align="center" height="35" width="35">

<img height="480em" src="././public/assets/images/readme-tarefa-item-crud.png"  align="center">

<img height="480em" src="././public/assets/images/readme-tabelas-item-crud-2.png"  align="center">

<br>

---

<div align="left">

## Instalação com bash

- Clone o repositório:

```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

- Navegue até o diretório do projeto:

```
cd nome-do-repositorio
```

- Instale as dependências:

```
npm install dotenv mongoose cli-table
```

- Instalando pacotes para formatação

```
npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier prettier
```

<br>

- Inicie o servidor:

```
npm start
```

<br>

- Vai iniciar no terminal a consulta das Tabelas.

---

## Demonstração Código Resumido

#### - `models/usuarioModel.js`

```javascript
const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String, required: true },
  data_cadastro: { type: Date, default: Date.now },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
```

<br>

#### - `database/index.js`

```javascript
const mongoose = require("mongoose");
require("dotenv").config();

// Função para conectar ao banco de dados
const connectToDatabase = async () => {
  try {
    const dbURI = process.env.MONGO_URI; // URL de conexão no ambiente
    if (!dbURI) {
      console.error("A variável de ambiente MONGO_URI não foi definida!");
      process.exit(1);
    }

    await mongoose.connect(dbURI);
    console.log("Conectado ao MongoDB com sucesso!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Encerra o processo com erro
  }
};

// Exporta a função para ser usada em outros arquivos
module.exports = connectToDatabase;
```

<br>

#### - `app.js`

```javascript
const connectToDatabase = require("./src/database/index");
const Usuario = require("./src/models/usuarioModel");
const Table = require("cli-table");

// Execução das operações
await createUsuario(); // Criar
await readUsuarios(); // Ler
await updateUsuario(); // Editar
await deleteUsuario(); // Excluir

console.log("\n### CRUD Operations Completed ###\n");
process.exit(0);
```

---

## Tecnologias

<img src="https://media.giphy.com/media/iT138SodaACo9LImgi/giphy.gif" align="center" height="75" width="75"> Tecnologias utilizadas no projeto:

- `JavaScript (JS)`
  "Linguagem de Programação do Navegador".
  "Scripting Dinâmico para Web".
  <br>

- `Node.js`
  "Ambiente de Execução JavaScript do Lado do Servidor".
  "Servidor Escalável em JavaScript".
  <br>

- `Documentation.md`
  "Guia detalhado para uso e manutenção do projeto."
  "Referência central para funcionalidades, práticas e requisitos."
  <br>

- `Git`
  "Sistema de controle de versões"
  <br>

- `Github`
  "Plataforma para hospedagem de código-fonte"
  <br>

- `Visual Studio Code`
  "Editor de código-fonte"
  <br>

---

## Licença

- Esse projeto está sob a licença MIT.
  <br>

---

<img src="https://media.giphy.com/media/ImmvDZ2c9xPR8gDvHV/giphy.gif" align="center" height="25" width="25"> Autor

<p>
    <img align=left margin=10 width=80 src="https://avatars.githubusercontent.com/u/87991807?v=4"/>
    <p>&nbsp&nbsp&nbspRafaelRaizer-Dev<br>
    &nbsp&nbsp&nbsp<a href="https://api.whatsapp.com/send/?phone=47999327137">Whatsapp</a>&nbsp;|&nbsp;<a href="https://www.linkedin.com/in/rafael-raizer//">LinkedIn</a>&nbsp;|&nbsp;<a href="https://github.com/RaizerTechDev">GitHub</a>|&nbsp;<a href="https://public.tableau.com/app/profile/rafael.raizer">Tableau</a>|&nbsp;<a href="https://raizertechdev-portfolio.netlify.app/">Portfólio</a>&nbsp;</p>
</p>
