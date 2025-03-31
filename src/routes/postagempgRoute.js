import express from "express";
import cors from "cors";
import { listarPostagensPG, postarNovaPostagemPG, atualizarPostagemPG, deletarPostagemPG  } from "../controllers/postagempgController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};



const routesPpg = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));
    

    app.get("/pg/postagempg", listarPostagensPG);
    
    app.post("/pg/postagempg" , postarNovaPostagemPG);
    
    app.put("/pg/postagempg/:id", atualizarPostagemPG);

    app.delete("/pg/postagempg/:id", deletarPostagemPG);
}

export default routesPpg;
