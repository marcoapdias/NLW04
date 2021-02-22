import express from 'express';

const app = express();

/**
 * Métodos:
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração Específica
 */

// http://localhost:3333/users

app.get("/", (request, response) => {
    return response.json({ message: "Hello World - NLW04" });
})

// 1o param => rota (Recurso APO)
// 2o param => request, response

app.post("/", (request, response) => {
    // recebeu os dados
    return response.json({ message: "Os dados foram salvos com sucesso!" });
})

app.listen(3333, () => console.log("Server is running!"));
