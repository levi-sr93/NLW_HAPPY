import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  // {
  //   "name": ['obrigatorio', 'minimo de caracteres'],
  //   "latitude": ['obrigatorio', 'minimo de caracteres'],
  // }

  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    //retornando o erro de uma maneira amigável para o front.
    error.inner.forEach(error => {
      errors[error.path] = error.errors;
    });

    return response.status(400).json({ message: 'Validation fails', errors });
  }

  console.error(error);

  return response.status(500).json({ message: 'Internal Server Error.' });
};

export default errorHandler;
