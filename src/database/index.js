const mongoose = require('mongoose');
require('dotenv').config();

// Função para conectar ao banco de dados
const connectToDatabase = async () => {
  try {
    const dbURI = process.env.MONGO_URI; // URL de conexão no ambiente
    if (!dbURI) {
      console.error('A variável de ambiente MONGO_URI não foi definida!');
      process.exit(1);
    }

    await mongoose.connect(dbURI);
    console.log('Conectado ao MongoDB com sucesso!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Encerra o processo com erro
  }
};

// Exporta a função para ser usada em outros arquivos
module.exports = connectToDatabase;
