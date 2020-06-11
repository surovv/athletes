
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Athletes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    birthdate: {
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  })
    .then(() => queryInterface.addIndex(
      'Athletes',
      ['name'],
    )),
  down: (queryInterface) => queryInterface.dropTable('Athletes'),
};
