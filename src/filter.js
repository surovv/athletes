const Sequelize = require('sequelize');

const db = require('../models');
const {
  getPastDate, getSkillsIds, getAthletesWithExperience, beautifyAthlete,
} = require('./lib');

module.exports = ({
  name,
  ageRange,
  skills,
  professionalExperience: experience,
} = {}) => (
  Promise.all([
    skills && getSkillsIds(skills),
    experience && getAthletesWithExperience(experience),
  ])
    .then(([skillsIds, userIds]) => db.Athlete.findAll({
      where: {
        ...(userIds && { id: userIds }),
        ...(name && { name }),
        ...(ageRange && {
          birthdate: {
            [Sequelize.Op.between]: [
              getPastDate(ageRange.to),
              getPastDate(ageRange.from),
            ],
          },
        }),
      },
      attributes: ['id', 'name', 'birthdate'],
      include: [
        {
          model: db.Skill,
          where: (skillsIds && {
            id: skillsIds,
          }),
          attributes: ['title'],
        },
        {
          required: true,
          model: db.Championship,
          attributes: ['title'],
        },
      ],
    }))
)
  .then((athletes) => athletes.map(beautifyAthlete));
