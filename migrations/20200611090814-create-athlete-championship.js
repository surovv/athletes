
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('AthleteChampionships', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    date: {
      type: Sequelize.DATE,
    },
    athleteId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Athletes',
        key: 'id',
      },
    },
    championshipId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Championships',
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
      'AthleteChampionships',
      ['athleteId'],
    )),
  down: (queryInterface) => queryInterface.dropTable('AthleteChampionships'),
};
