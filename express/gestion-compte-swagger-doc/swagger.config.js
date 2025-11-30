import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Compte API',
    version: '1.0.0',
    description: 'API pour gérer les comptes'
  },
  tags: [
    {
      name: 'Comptes',
      description: 'Opérations liées aux comptes (liste, création, solde)'
    }
  ],
  servers: [
    {
      url: 'http://localhost:3002',
      description: 'Local server'
    }
  ]
};

const options = {
  definition: swaggerDefinition,
  apis: ['./routes/*.js', './controllers/*.js'] // Cherche les commentaires JSDoc ici
};

export default swaggerJsdoc(options);