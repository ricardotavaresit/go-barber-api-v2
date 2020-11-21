require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

/*
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
*/
