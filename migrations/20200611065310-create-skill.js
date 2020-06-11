
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Skills', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    isSuperSkill: {
      type: Sequelize.BOOLEAN,
    },
    superSkillId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Skills',
        key: 'id',
      },
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
      'Skills',
      ['superSkillId'],
    )),

  down: (queryInterface/* , Sequelize */) => queryInterface.dropTable('Skills'),
};
