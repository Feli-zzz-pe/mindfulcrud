import { ObjectId } from "mongodb";
import conectarAMGDB from "../config/mgdbconfig.js";

const conexaoMG = await conectarAMGDB(process.env.MGDB_URL, {useNewUrlParser: true});
                                     

export async function getPostagemPorId(id) {
    const db = conexaoMG.db("mindful");
    const colecao = db.collection("postagem");
    return colecao.findOne({ num_postagem:id});
}

export async function getTodasPostagensMg() {
    const db = conexaoMG.db("mindful");
    const colecao = db.collection("postagem");
    return colecao.find().toArray();
}

export async function criarPostagemMg(novaPostagem) {
    const db = conexaoMG.db("mindful");
    const colecao = db.collection("postagem");
    return colecao.insertOne(novaPostagem);
}

export async function atualizarPostagemMg(id, novaPostagem) {
    const db = conexaoMG.db("mindful");
    const colecao = db.collection("postagem");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novaPostagem });
}

export async function deletarPostagemMg(id) {
    const db = conexaoMG.db("mindful");
    const colecao = db.collection("postagem");
    const objID = ObjectId.createFromHexString(id);
    return colecao.deleteOne({ _id: new ObjectId(objID) });
}
