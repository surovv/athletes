
module.exports = (sequelize, DataTypes) => {
  const Championship = sequelize.define('Championship', {
    title: DataTypes.STRING,
  }, {});
  Championship.associate = (models) => {
    models.Championship.hasMany(
      models.AthleteChampionship,
      { foreignKey: 'championshipId' },
    );

    models.Championship.belongsToMany(
      models.Athlete,
      {
        through: 'AthleteChampionship',
        foreignKey: 'championshipId',
        otherKey: 'athleteId',
      },
    );
  };
  return Championship;
};
