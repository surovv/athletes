
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Championships',
    [
      {
        id: 1,
        title: 'World Snowboard Tour',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'FIS Snowboarding World Championship',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: 'Winter Olympics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: 'FIS race',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: 'FIS Freestyle World Championship',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: 'Tour of the Basque Country',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        title: 'Route du Sud',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Championships', null, {}),
};
