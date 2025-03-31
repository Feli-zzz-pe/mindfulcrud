import {getTodasPostagensPg, criarPostagemPg, atualizarPostagemPg, deletarPostagemPg}
from "../models/postagempgModel.js";

export async function listarPostagensPG(req, res) { 
    const postagens = await getTodasPostagensPg(); 
    res.status(200).json(postagens);
}

export async function postarNovaPostagemPG(req, res) {
  const novaPostagem = req.body;

  try {
    const postagemCriada = await criarPostagemPg(novaPostagem);
    res.status(200).json(postagemCriada);
  }
  catch(erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}


export async function atualizarPostagemPG(req, res) {
  const id = req.params.id;
  const { nomePerfil } = req.body;
  try {
    const postagemExistente = await getUsuarioPorId(id);
    if (!postagemExistente) {
        return res.status(404).json({ "Erro": "Postagem não encontrada" });
    }

    //                                                 postagemAtualizada
    const postagemCriada = await atualizarPostagemPg(id, nomePerfil);
    res.status(200).json(postagemCriada);
  }
  catch(erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}


export async function deletarPostagemPG(req, res) {
  const id = req.params.id;
  try {
      await deletarPostagemPg(id);
      res.status(200).json({ "Mensagem": "Postagem deletada com sucesso" });
  } catch (erro) {
      console.error(erro.message);
      res.status(500).json({ "Erro": "Falha na requisição" });
  }
}