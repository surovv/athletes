
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    title: DataTypes.STRING,
    isSuperSkill: DataTypes.BOOLEAN,
    superSkillId: DataTypes.INTEGER,
  }, {});
  Skill.associate = (models) => {
    models.Skill.belongsTo(
      models.Skill,
      { as: 'superSkill', foreignKey: 'superSkillId' },
    );
    models.Skill.hasMany(
      models.Skill,
      { as: 'subSkills', foreignKey: 'superSkillId', useJunctionTable: false },
    );

    models.Skill.hasMany(models.AthleteSkill, { foreignKey: 'skillId' });

    models.Skill.belongsToMany(
      models.Athlete,
      {
        through: 'AthleteSkill',
        foreignKey: 'skillId',
        otherKey: 'athleteId',
      },
    );
  };
  return Skill;
};
