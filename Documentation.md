# Projeto CRUD com MongoDB e Mongoose

Este projeto é uma aplicação CRUD simples utilizando **MongoDB**, **Mongoose** e **Node.js**. Ele conecta ao banco de dados MongoDB, realiza operações CRUD e exibe os resultados no console em formato de tabela.

---

## Sumário

- [1. Organização do Projeto](#1-organização-do-projeto)
  - [1.1 Estrutura do Projeto](#11-estrutura-do-projeto)
  - [1.2 Configuração do Banco de Dados](#12-configuração-do-banco-de-dados)
  - [1.3 Modelos](#13-modelos)
- [2. Funcionalidades CRUD](#2-funcionalidades-crud)
  - [2.1 CREATE (Inserir)](#21-create-inserir)
  - [2.2 READ (Consultar)](#22-read-consultar)
  - [2.3 UPDATE (Atualizar)](#23-update-atualizar)
  - [2.4 DELETE (Deletar)](#24-delete-deletar)
- [3. Conclusão](#3-conclusão)

---

## 1. Organização do Projeto

### 1.1 Estrutura do Projeto

```
/src
   ├── /database
               └── index.js
   ├── /models
             └── usuarioModel.js
.env
app.js

```

- **`.env`**: Contém a variável de ambiente `MONGO_URI` para conectar ao banco de dados.
- **`app.js`**: Arquivo principal que executa o CRUD e exibe os resultados.
- **`src/database/index.js`**: Gerencia a conexão com o banco de dados.
- **`src/models/usuarioModel.js`**: Define o modelo de dados para os usuários.

---

### 1.2 Configuração do Banco de Dados

Arquivo `.env`:

```plaintext
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/db-tarefa-crud?retryWrites=true&w=majority
```

---

### 1.3 Modelos

- usuarioModel.js:

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

---

## 2. Funcionalidades CRUD

As operações CRUD são executadas no arquivo app.js.

#### 2.1 CREATE (Inserir)

Cria um novo usuário:

```javascript
const novoUsuario = new Usuario({
  nome: "Rafa",
  email: "rafa@gmail.com",
  telefone: "(47)999182237",
});
await novoUsuario.save();
```

#### 2.2 READ (Consultar)

Consulta todos os usuários:

```javascript
const usuarios = await Usuario.find();
```

#### 2.3 UPDATE (Atualizar)

Atualiza o e-mail de um usuário pelo ID:

```javascript
const usuarioId = "6742651a566eaa576bda703b"; // Substitua pelo ID real
const usuario = await Usuario.findById(usuarioId);
usuario.email = "carlos01@gmail.com";
await usuario.save();
```

#### 2.4 DELETE (Deletar)

Deleta um usuário pelo ID:

```javascript
const usuarioId = "6742655ee6bf8e7cf495456c"; // Substitua pelo ID real
await Usuario.deleteOne({ _id: usuarioId });
```

---

## 3. Conclusão

Este projeto demonstra uma implementação simples de um CRUD usando MongoDB, Mongoose e Node.js. Ele serve como base para projetos maiores, onde é possível expandir a lógica e adicionar novos recursos.
