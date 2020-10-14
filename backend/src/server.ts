import express, { json } from 'express';

const app = express();

app.use(express.json());
//rotas -
//Recurso - '/users'
//metodos HTTP - GET | POST | PUT | DELETE
//Parametros

//GET - Buscar Informações(lista, item)
//POST - Criando informação - o recurso seria usuários por exemplo
//PUT - Editando uma informação
//DELETE - Deletar uma informação.

//Query Params : http://localhost:3333/users?search=levi&page=2 (filtro, paginação)
//route params : http://localhost:3333/users/1 (identificar um recurso - qual user atualizar, deletar)
//Request Body : { "name": "Levi Santos", "email": "contactlevi93@gmail.com", "bio": "...." } ( informações mais complexas)

// app.post('/users/:id', (request, response) => {
//   console.log(request.query);
//   console.log(request.params);
//   console.log(request.body);

//   return response.json({ ok: true });
// });

app.get('/', (request, response) => {
  return response.json({ ok: true });
});
app.listen(3333);

//Fluxo -> REQ | RES
