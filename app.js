const connectToDatabase = require("./src/database/index");
const Usuario = require("./src/models/usuarioModel");
const Table = require("cli-table");

const main = async () => {
  await connectToDatabase();

  console.log("\n### MongoDB CRUD Operations ###\n");

  // Função para exibir tabela no console
  const displayTable = async () => {
    const usuarios = await Usuario.find();
    const table = new Table({
      head: ["ID", "Nome", "Email", "Telefone", "Data Cadastro"],
      colWidths: [34, 34, 34, 34, 25],
    });

    usuarios.forEach((user) => {
      table.push([
        user._id.toString(),
        user.nome,
        user.email,
        user.telefone,
        user.data_cadastro.toISOString().split("T")[0],
      ]);
    });

    console.log(table.toString());
  };

  // CREATE
  const createUsuario = async () => {
    console.log("\n## Create (INSERT) ##");
    const novoUsuario = new Usuario({
      nome: "Rafa",
      email: "rafa@gmail.com",
      telefone: "(47)999182237",
    });
    await novoUsuario.save();
    console.log("Novo usuário criado:");
    console.log(novoUsuario);
    await displayTable();
  };

  // READ
  const readUsuarios = async () => {
    console.log("\n## Read (SELECT) ##");
    const usuarios = await Usuario.find();
    console.log("Todos os usuários encontrados:");
    console.log(usuarios);
    await displayTable();
  };

  const mongoose = require("mongoose");

  // UPDATE
  const updateUsuario = async () => {
    console.log("\n## Update (EDIT) ##");

    // Substitua o ID abaixo pelo ID real do usuário que deseja atualizar
    const usuarioId = "6742651a566eaa576bda703b"; // Exemplo de ID válido

    // Converte o ID para ObjectId, caso seja uma string válida
    if (!mongoose.Types.ObjectId.isValid(usuarioId)) {
      console.log("ID inválido!");
      return;
    }

    const usuario = await Usuario.findById(usuarioId);
    if (!usuario) {
      console.log("Usuário não encontrado!");
      return;
    }

    // Atualizando email
    usuario.email = "carlos01@gmail.com";

    await usuario.save();
    console.log("Usuário atualizado:");
    console.log(usuario);
    await displayTable();
  };

  // DELETE
  const deleteUsuario = async () => {
    console.log("\n## Delete (REMOVE) ##");

    // Substitua o ID abaixo pelo ID real do usuário que deseja deletar
    const usuarioId = "6742655ee6bf8e7cf495456c"; // Exemplo de ID válido

    // Converte o ID para ObjectId, caso seja uma string válida
    if (!mongoose.Types.ObjectId.isValid(usuarioId)) {
      console.log("ID inválido!");
      return;
    }

    const usuario = await Usuario.findById(usuarioId);
    if (!usuario) {
      console.log("Usuário não encontrado!");
      return;
    }

    await Usuario.deleteOne({ _id: usuario._id });
    console.log("Usuário deletado com sucesso.");
    await displayTable();
  };

  // Execução das operações
    //await createUsuario(); // Criar
  await readUsuarios(); // Ler
  await updateUsuario(); // Editar
  await deleteUsuario(); // Excluir

  console.log("\n### CRUD Operations Completed ###\n");
  process.exit(0);
};

main().catch((error) => {
  console.error("Error executing CRUD operations:", error.message);
  process.exit(1);
});
