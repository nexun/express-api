'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {         
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "John2",
          lastName: "Doe2",
          email: "joh2n@doe.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
