
module.exports = (sequelize, DataTypes) => {
  const Athlete = sequelize.define('Athlete', {
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
  }, {});
  Athlete.associate = (models) => {
    models.Athlete.hasMany(models.AthleteChampionship, { foreignKey: 'athleteId' });
    models.Athlete.hasMany(models.AthleteSkill, { foreignKey: 'athleteId' });


    models.Athlete.belongsToMany(
      models.Skill,
      {
        through: 'AthleteSkill',
        foreignKey: 'athleteId',
        otherKey: 'skillId',
      },
    );

    models.Athlete.belongsToMany(
      models.Championship,
      {
        through: 'AthleteChampionship',
        foreignKey: 'athleteId',
        otherKey: 'championshipId',
      },
    );
  };
  return Athlete;
};
