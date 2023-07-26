const { Sequelize } = require('sequelize');

// Replace 'your-database-name', 'your-username', 'your-password', and 'your-host' with your actual MySQL database credentials
const sequelize = new Sequelize('users', 'root', '', {
  
  dialect: 'mysql',
});
sequelize.authenticate().then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
