import {getTodosUsuariosMg,criarUsuarioMg, atualizarUsuarioMg, deletarUsuarioMg, getUsuarioPorId} from "../models/usuarioModel.js";

export async function listarUsuariosMG(req, res) { 
    const usuarios = await getTodosUsuariosMg(); 
    res.status(200).json(usuarios); 
}

export async function postarNovoUsuarioMG(req, res) {
  const novoUsuario = req.body;

  try {
    const usuarioCriado = await criarUsuarioMg(novoUsuario);
    res.status(200).json(usuarioCriado);
  }
  catch(erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}


export async function atualizarUsuarioMG(req, res) {
  const id = req.params.id;
  const { nomePerfil } = req.body;
  try {
    const usuarioExistente = await getUsuarioPorId(id);
    if (!usuarioExistente) {
        return res.status(404).json({ "Erro": "Usuário não encontrado" });
    }

    const usuarioAtualizado = {
        nomePerfil,
        nome: usuarioExistente.nome,
        sobrenome: usuarioExistente.sobrenome,
        email: usuarioExistente.email,
        dataNascimento: usuarioExistente.dataNascimento
    };

      const usuarioCriado = await atualizarUsuarioMg(id, usuarioAtualizado);
      res.status(200).json(usuarioCriado);
  }
  catch(erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}


export async function deletarUsuarioMG(req, res) {
  const id = req.params.id;
  try {
      await deletarUsuarioMg(id);
      res.status(200).json({ "Mensagem": "Usuário deletado com sucesso" });
  } catch (erro) {
      console.error(erro.message);
      res.status(500).json({ "Erro": "Falha na requisição" });
  }
}