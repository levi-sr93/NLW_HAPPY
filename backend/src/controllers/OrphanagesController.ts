import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import orphanageView from '../views/orphanagesView';

import Orphanage from '../models/Orphanage';

//Model - Representação de uma entidade na aplicação ( dado, usuário, usuário)
//Views - Visualização
//Controllers - lógica das rotas e etc

//padrões do controller - Index, show, create, update, delete

export default {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ['images']
    });

    return response.json(orphanageView.renderMany(orphanages));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return response.json(orphanageView.render(orphanage));
  },

  async create(request: Request, response: Response) {
    console.log(request.files);

    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = request.body;

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    // o typeorm usa um pattern chamado repository patern em q toda operação de banco de dados passa por um repositório;
    //é no repositório que se tem a regra de como ele pode ser criado ou deletado.

    const orphanagesRepository = getRepository(Orphanage);

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    });

    await schema.validate(data, {
      abortEarly: false
    });

    const orphanage = orphanagesRepository.create(data);

    //salvando no banco
    await orphanagesRepository.save(orphanage);
    return response.status(201).json(orphanage);
  }
};
