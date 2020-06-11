
module.exports = (sequelize, DataTypes) => {
  const AthleteSkill = sequelize.define('AthleteSkill', {
    athleteId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Athlete',
      },
    },
    skillId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Skill',
      },
    },
  }, {});
  AthleteSkill.associate = (models) => {
    models.AthleteSkill.belongsTo(models.Athlete, { foreignKey: 'athleteId' });
    models.AthleteSkill.belongsTo(models.Skill, { foreignKey: 'skillId' });
  };
  return AthleteSkill;
};
