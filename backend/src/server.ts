import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanages';

import './database/connection';

const app = express();

app.use(express.json());

app.post('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = request.body;

  // o typeorm usa um pattern chamado repository patern em q toda operação de banco de dados passa por um repositório;
  //é no repositório que se tem a regra de como ele pode ser criado ou deletado.

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  });

  //salvando no banco
  await orphanagesRepository.save(orphanage);
  return response.json({ ok: true });
});
app.listen(3333);
