import conectarAPGDB from "../config/pgdbconfig.js";

// const clientPG = await conectarAPGDB(process.env.PGDB_URL);
const clientPG = await conectarAPGDB({
    user:process.env.PGDB_USER,
    host:process.env.PGDB_HOST,
    port:5432,
    password:process.env.PGDB_PW,
    database:process.env.PGDB_DB,
    ssl: {
        rejectUnauthorized: false,
    }
    });

// Função assíncrona para obter todos os usuarios do banco de dados.
export async function getTodosUsuariosPg() {
    const query = 'SELECT * FROM mindful.usuario;';
    const res = await clientPG.query(query);
        
    return res; 
}




async function consultarId() {
    const query = 'SELECT id_usuario FROM mindful.usuario';
    
    const res = clientPG.query(query);
    return res.rowCount;

}

export async function criarUsuarioPg(novoUsuario) {
    id_usuario = (await consultarId()) + 1;
    const query = 
     `INSERT INTO mindful.usuario (id_usuario, nome_de_perfil, primeiro_nome, sobrenome, data_de_nascimento, email)
      VALUES ($1, $2, $3, $4, $5, $6);
      
      INSERT INTO Visualiza (id_usuario, num_postagem, like_)
      VALUES ($7, 1, 0)`;
    const {id_usuario, nome_de_perfil, primeiro_nome, sobrenome, data_de_nascimento, email} = novoUsuario;
    const valores = [id_usuario, nome_de_perfil, primeiro_nome, sobrenome, data_de_nascimento, email,
                     id_usuario];
    
    return clientPG.query(query,valores);
}

export async function atualizarUsuarioPg(id, novoNomePerfil) {
    const query = `
      UPDATE mindful.Usuario
      SET nome_de_perfil = $1
      WHERE id_usuario = $2
    `;
    const values = [novoNomePerfil, idUsuario];

    const res = await clientPG.query(query, values);

    return res;
}

export async function deletarUsuarioPg(idUsuario) {
    const query = `
        DELETE FROM mindful.Usuario
        WHERE id_usuario = $1
    `;
      
    const res = await clientPG.query(query, [idUsuario]);

    return res;
}
  