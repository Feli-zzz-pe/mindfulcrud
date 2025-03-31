import express from "express";
import cors from "cors";
import { listarUsuariosPG, postarNovoUsuarioPG, atualizarUsuarioPG, deletarUsuarioPG  } from "../controllers/usuariopgController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};



const routesUpg = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));
    
    
    app.get("/pg/usuariopg", listarUsuariosPG);
    
    app.post("/pg/usuariopg" , postarNovoUsuarioPG);
    
    app.put("/pg/usuariopg/:id", atualizarUsuarioPG);

    app.delete("/pg/usuariopg/:id", deletarUsuarioPG);
}

export default routesUpg;
