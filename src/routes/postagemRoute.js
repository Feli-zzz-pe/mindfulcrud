import express from "express";
import cors from "cors";
import { listarPostagensMG, postarNovaPostagemMG, atualizarPostagemMG, deletarPostagemMG } from "../controllers/postagemController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

const routesPmg = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));
    
    app.get("/mongodb/postagem", listarPostagensMG);
    
    app.post("/mongodb/postagem", postarNovaPostagemMG);
    
    app.put("/mongodb/postagem/:id", atualizarPostagemMG);

    app.delete("/mongodb/postagem/:id", deletarPostagemMG);
}

export default routesPmg;
