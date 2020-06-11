
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('AthleteSkills', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    athleteId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Athletes',
        key: 'id',
      },
    },
    skillId: {
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
      'AthleteSkills',
      ['athleteId'],
    ))
    .then(() => queryInterface.addIndex(
      'AthleteSkills',
      ['skillId'],
    )),
  down: (queryInterface) => queryInterface.dropTable('AthleteSkills'),
};
