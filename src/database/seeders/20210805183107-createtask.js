"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          name: "TAREA 1",
          description: "una tarea de ejemplo",
          startDate: new Date(),
          endDate: new Date(),
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TAREA 2",
          description: "una tarea de ejemplo",
          startDate: new Date(),
          endDate: new Date(),
          UserId: 2,
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
  },
};
