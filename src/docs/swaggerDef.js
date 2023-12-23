const { version } = require('../../package.json');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Tasks Manager API',
    version,
  },
  servers: [
    {
      url: `${process.env.BASE_URL}:${process.env.PORT}/api/v1`,
    },
  ],
};

module.exports = swaggerDef;
