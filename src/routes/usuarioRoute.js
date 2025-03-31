import express from "express";
import cors from "cors";
import { listarUsuariosMG, postarNovoUsuarioMG, atualizarUsuarioMG, deletarUsuarioMG  } from "../controllers/usuarioController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};



const routesUmg = (app) => {
    app.use(express.json()); // Habilita o Express.js a analisar corpos de requisições em formato JSON.
    app.use(cors(corsOptions));
    
    //Rota para buscar usuarios
    app.get("/mongodb/usuario", listarUsuariosMG);
    
    //Rota para enviar/postar/criar usuarios
    app.post("/mongodb/usuario" , postarNovoUsuarioMG);
    
    app.put("/mongodb/usuario/:id", atualizarUsuarioMG);

    app.delete("/mongodb/usuario/:id", deletarUsuarioMG);
}

export default routesUmg;
