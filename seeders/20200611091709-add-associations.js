
module.exports = {
  up: (queryInterface) => {
    queryInterface.bulkInsert(
      'AthleteChampionships',
      [
        {
          id: 1,
          date: new Date('2010-01-01'),
          athleteId: 1,
          championshipId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          date: new Date('2011-01-01'),
          athleteId: 1,
          championshipId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          date: new Date('2014-01-01'),
          athleteId: 1,
          championshipId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          date: new Date('2016-01-01'),
          athleteId: 1,
          championshipId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          date: new Date('2013-01-01'),
          athleteId: 2,
          championshipId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          date: new Date('2017-01-01'),
          athleteId: 2,
          championshipId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          date: new Date('2017-01-01'),
          athleteId: 3,
          championshipId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          date: new Date('2018-01-01'),
          athleteId: 3,
          championshipId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          date: new Date('2019-01-01'),
          athleteId: 3,
          championshipId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    return queryInterface.bulkInsert(
      'AthleteSkills',
      [
        {
          id: 1,
          athleteId: 1,
          skillId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          athleteId: 1,
          skillId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          athleteId: 1,
          skillId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          athleteId: 2,
          skillId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          athleteId: 2,
          skillId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          athleteId: 3,
          skillId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface) => queryInterface.bulkDelete('Championships', null, {}),
};
