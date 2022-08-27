const { sequelize } = require('./models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('База данных Postgres успешно подключена!');
  } catch (error) {
    console.error('База данных не подключена:', error.message);
  }
};
