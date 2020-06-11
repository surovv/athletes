const filter = require('./filter');

const ageRanges = [
  { from: 0, to: 17 },
  { from: 18, to: 21 },
  { from: 22, to: 25 },
  { from: 26, to: 30 },
  { from: 31, to: 9999 },
];

/* eslint-disable no-console */
Promise.all([
  filter({ skills: ['Winter sports'] }),
  filter({ skills: ['snowboarding'] }),
  filter({ skills: ['snowboarding', 'Cycling'] }),
  filter({ name: 'Anna Gasser' }),
  filter({ name: 'Anna Gasser', professionalExperience: 7 }),
  filter({ professionalExperience: 7 }),
  filter({ ageRange: ageRanges[3], professionalExperience: 10 }),
]).then((results) => results.map((result) => console.log(result)));
