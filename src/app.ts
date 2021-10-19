import "dotenv/config";
import express from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router);

//Rota de envio de solicitação para autenticação no Github
app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

//Rota de callback para resposta do Github
app.get("/signin/callback", (request, response) => {
    const { code } = request.query;

    return response.json(code);
})

app.listen(4000, () => console.log(`🚀 Server is running on PORT 4000`));
