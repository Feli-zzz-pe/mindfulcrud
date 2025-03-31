import pkg from 'pg';
const {Client} = pkg;

export default async function conectarAPGDB(stringConexao) {
  let pgClient;

  try {
      pgClient = new Client(stringConexao);
      console.log('Conectando ao banco de dados pg...');
      await pgClient.connect();
      console.log('Conectado ao DB com sucesso.');

      return pgClient;
  } catch (erro) {
      console.error('Falha na conexão com o banco.', erro);
      process.exit();
  }
}