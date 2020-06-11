const db = require('../models');

const getPastDate = (years) => (
  new Date(new Date().setFullYear(new Date().getFullYear() - years))
);

const beautifyAthlete = (athlete) => ({
  name: athlete.name,
  birthdate: athlete.birthdate.toISOString().slice(0, 10),
  skills: athlete.Skills.map(({ title }) => title),
  championships: athlete.Championships
    .map((ch) => `${ch.title} ${ch.AthleteChampionship.date.getFullYear()}`),
});


const getSkillsIds = (skills) => db.Skill.findAll({
  where: {
    title: skills,
  },
  attributes: ['id'],
  include: [{
    model: db.Skill,
    as: 'subSkills',
    attributes: ['id'],
  }],
})
  .then((allSkils) => allSkils.reduce(
    (ids, skill) => [
      ...ids,
      skill.id,
      ...skill.subSkills.map((subSkill) => subSkill.id),
    ],
    [],
  ));


const getAthletesWithExperience = (experience) => db.sequelize.query(
  `
    SELECT "athleteId" "id" FROM "public"."AthleteChampionships"
    GROUP BY "athleteId"
    HAVING to_char(MIN("date"), 'YYYY') = to_char(CURRENT_DATE - '${experience} year'::interval, 'YYYY')
  `,
).then((ids) => ids && ids[0].map(({ id }) => id));


module.exports = {
  getPastDate,
  beautifyAthlete,
  getSkillsIds,
  getAthletesWithExperience,
};
