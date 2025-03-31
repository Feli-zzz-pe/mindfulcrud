import {getTodosUsuariosPg,criarUsuarioPg, atualizarUsuarioPg, deletarUsuarioPg} from "../models/usuariopgModel.js";

export async function listarUsuariosPG(req, res) { 
    const usuarios = await getTodosUsuariosPg(); 
    res.status(200).json(usuarios); 
}

export async function postarNovoUsuarioPG(req, res) {
  const novoUsuario = req.body;

  try {
    const usuarioCriado = await criarUsuarioPg(novoUsuario);
    res.status(200).json(usuarioCriado);
  }
  catch(erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}


export async function atualizarUsuarioPG(req, res) {
  const id = req.params.id;
  const { nomePerfil } = req.body;
  try {
    const usuarioExistente = await getUsuarioPorId(id);
    if (!usuarioExistente) {
        return res.status(404).json({ "Erro": "Usuário não encontrado" });
    }

    //                                                 usuarioAtualizado
    const usuarioCriado = await atualizarUsuarioPg(id, nomePerfil);
    res.status(200).json(usuarioCriado);
  }
  catch(erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}


export async function deletarUsuarioPG(req, res) {
  const id = req.params.id;
  try {
      await deletarUsuarioPg(id);
      res.status(200).json({ "Mensagem": "Usuário deletado com sucesso" });
  } catch (erro) {
      console.error(erro.message);
      res.status(500).json({ "Erro": "Falha na requisição" });
  }
}