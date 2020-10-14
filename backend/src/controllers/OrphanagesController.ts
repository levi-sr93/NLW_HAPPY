import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanages';

//Model - Representação de uma entidade na aplicação ( dado, usuário, usuário)
//Views - Visualização
//Controllers - lógica das rotas e etc

export default {
  async create(request: Request, response: Response) {
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
    return response.status(201).json(orphanage);
  }
};