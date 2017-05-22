const faker = require('faker');
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  up(queryInterface) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('User', [
      {
        id: 1,
        firstName: 'murat',
        lastName: 'karadeniz',
        email: 'mokosam@gmail.com',
        password: bcrypt.hashSync('123'),
        roleId: 1,
        langKey:"tr",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        firstName: 'ahmet',
        lastName: 'kara',
        email: 'sade@sade.com',
        password: bcrypt.hashSync('123'),
        roleId: 2,
        langKey:"tr",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
      { returning: true, validate: true }
      );
  },

  down(queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
  */
    return queryInterface.bulkDelete('User', null, {});
  }
};
