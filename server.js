import express from "express"; // Importa o framework Express.js para criar a aplicação web.
import routesUmg from "./src/routes/usuarioRoute.js";
import routesUpg from "./src/routes/usuariopgRoute.js";
import routesPmg from "./src/routes/postagemRoute.js";
import routesPpg from "./src/routes/postagempgRoute.js";

const app = express(); // Cria uma instância do Express.js, que será o núcleo da aplicação.
//app.use(express.static("uploads"));
routesUmg(app);
routesPmg(app);
routesUpg(app);
routesPpg(app);

const port = 3000; // Define a porta em que o servidor irá escutar por requisições.
app.listen(port, () => { // Inicia o servidor e escuta por requisições na porta especificada.
    console.log("Servidor escutando..."); // Mensagem de log para indicar que o servidor está funcionando.
}
);
