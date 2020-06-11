module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Athletes',
    [
      {
        id: 1,
        name: 'Anna Gasser',
        birthdate: new Date('1991-08-16'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Tess Ledeux',
        birthdate: new Date('2001-11-23'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Nairo Quintana',
        birthdate: new Date('1990-02-04'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Athletes', null, {}),
};
