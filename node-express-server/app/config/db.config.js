module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "kiddan22g@12345",
  DB: "test_db_node",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
