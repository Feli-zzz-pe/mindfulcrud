import { getTodasPostagensMg, criarPostagemMg, atualizarPostagemMg, deletarPostagemMg, getPostagemPorId } from "../models/postagemModel.js";

export async function listarPostagensMG(req, res) {
    const postagens = await getTodasPostagensMg();
    res.status(200).json(postagens);
}

export async function postarNovaPostagemMG(req, res) {
    const novaPostagem = req.body;
    try {
        const postagemCriada = await criarPostagemMg(novaPostagem);
        res.status(200).json(postagemCriada);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

export async function atualizarPostagemMG(req, res) {
    const id = req.params.id;
    const { titulo, conteudo, autor } = req.body;
    try {
        const postagemExistente = await getPostagemPorId(id);
        if (!postagemExistente) {
            return res.status(404).json({ "Erro": "Postagem não encontrada" });
        }

        const postagemAtualizada = {
            titulo,
            conteudo,
            autor,
            dataCriacao: postagemExistente.dataCriacao
        };

        const postagemCriada = await atualizarPostagemMg(id, postagemAtualizada);
        res.status(200).json(postagemCriada);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

export async function deletarPostagemMG(req, res) {
    const id = req.params.id;
    try {
        await deletarPostagemMg(id);
        res.status(200).json({ "Mensagem": "Postagem deletada com sucesso" });
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}
