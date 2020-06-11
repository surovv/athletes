const wsId = 1;
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Skills',
    [
      {
        id: wsId,
        title: 'Winter sports',
        isSuperSkill: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'snowboarding',
        isSuperSkill: false,
        superSkillId: wsId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: 'Skiing',
        isSuperSkill: false,
        superSkillId: wsId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: 'gymnastics',
        isSuperSkill: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: 'Cycling',
        isSuperSkill: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Skills', null, {}),
};
