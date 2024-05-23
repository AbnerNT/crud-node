const mysql = require("mysql2/promise")
require("dotenv").config()
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

// Função para testar a conexão
async function testConnection() {
    try {
      const [rows] = await connection.query('SELECT 1');
      console.log('Conectado ao banco de dados');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error.message);
    }
}
  
// Testa a conexão assim que o módulo é carregado
testConnection();

module.exports = connection;