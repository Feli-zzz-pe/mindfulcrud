import { ObjectId } from "mongodb";
import conectarAMGDB from "../config/mgdbconfig.js";

const conexaoMG = await conectarAMGDB(process.env.MGDB_URL, {useNewUrlParser: true});


export async function getUsuarioPorId(id) {
    const db = conexaoMG.db("mindful");
    const colecao = db.collection("usuario");
    return colecao.findOne({ id_usuario:id});
}

export async function getTodosUsuariosMg() {
    const db = conexaoMG.db("mindful");
    const colecao = db.collection("usuario");
    return colecao.find().toArray();
}

export async function criarUsuarioMg(novoUsuario) {
    const db = conexaoMG.db("mindful");
    const colecao = db.collection("usuario");
    return colecao.insertOne(novoUsuario);
}

export async function atualizarUsuarioMg(id, novoUsuario) {
    const db = conexaoMG.db("mindful");
    const colecao = db.collection("usuario");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novoUsuario });
}


export async function deletarUsuarioMg(id) {
    const db = conexaoMG.db("mindful");
    const colecao = db.collection("usuario");
    const objID = ObjectId.createFromHexString(id);
    return colecao.deleteOne({ _id: new ObjectId(objID) });
}