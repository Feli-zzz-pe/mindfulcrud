import conectarAPGDB from "../config/pgdbconfig.js";

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
    

export async function getTodasPostagensPg() {
    const query = 'SELECT * FROM mindful.postagem;';
    const res = await clientPG.query(query);
        
    return res; 
}




async function consultarId() {
    const query = 'SELECT id_postagem FROM mindful.postagem';
    
    const res = clientPG.query(query);
    return res.rowCount;

}

export async function criarPostagemPg(novoPostagem) {
    id_postagem = (await consultarId()) + 1;
    const query = 
     `INSERT INTO Postagem (num_postagem, texto, data_)
      VALUES ($1, $2, $3);`;
    const valores = [num_postagem, texto, data_];
    
    return clientPG.query(query,valores);
}

export async function atualizarPostagemPg(id, novoNomePerfil) {
    const query = `
      UPDATE mindful.Postagem
      SET texto = $1
      WHERE num_postagem = $2
    `;
    const values = [novoNomePerfil, idPostagem];

    const res = await clientPG.query(query, values);

    return res;
}

export async function deletarPostagemPg(idPostagem) {
    const query = `
        DELETE FROM mindful.Postagem
        WHERE id_postagem = $1
    `;
      
    const res = await clientPG.query(query, [idPostagem]);

    return res;
}