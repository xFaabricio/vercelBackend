import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
      description: 'This is a simple convert coins for challenge Group SFB',

      contact: {
        name: 'Alexia Kattah',
      },
    },
    servers: [
      {
        url: 'https://vercel-backend-teal.vercel.app/',
      },
    ],
  },
  apis: ['./src/routes/*.ts']
};

export const SwaggerSpec = swaggerJsdoc(options);
