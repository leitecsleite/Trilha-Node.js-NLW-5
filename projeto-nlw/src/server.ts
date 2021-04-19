import express, { response } from "express";

const app = express(); 

/*
-GET = Buscar
-post = criação
-PUT = Alteração
-DELETE = Deletar 
*/

app.get("/", (request, response) => {
    return response.send("Olá NLW 05");
});

app.post("/", (request, response) => {
    return response.json({message: "Usuário salvo com sucesso!"});
})

app.listen(3333, () => console.log("serve is running on port: 3333"));