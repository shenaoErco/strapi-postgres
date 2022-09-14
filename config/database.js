module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'bfjesaugbjewgjskpzgz-postgresql.services.clever-cloud.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'bfjesaugbjewgjskpzgz'),
      user: env('DATABASE_USERNAME', 'u1jks6ewguqaxyr6oq8v'),
      password: env('DATABASE_PASSWORD', 'rgJrRFvKE1fmNXELSGZz'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    pool:{
      max:4
    }
  },
});
