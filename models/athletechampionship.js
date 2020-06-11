
module.exports = (sequelize, DataTypes) => {
  const AthleteChampionship = sequelize.define('AthleteChampionship', {
    date: DataTypes.DATE,
    athleteId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Athlete',
      },
    },
    championshipId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Championship',
      },
    },
  }, {});
  AthleteChampionship.associate = (models) => {
    models.AthleteChampionship.belongsTo(models.Athlete, { foreignKey: 'athleteId' });
    models.AthleteChampionship.belongsTo(models.Championship, { foreignKey: 'championshipId' });
  };
  return AthleteChampionship;
};
