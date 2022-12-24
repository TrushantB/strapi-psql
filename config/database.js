module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'postgresql-101599-0.cloudclusters.net'),
      port: env.int('DATABASE_PORT', 10018),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'trushant'),
      password: env('DATABASE_PASSWORD', 'postgres'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
