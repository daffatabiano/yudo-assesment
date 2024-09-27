'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
        },
        updated_at: {
          type: Sequelize.DATE,
        },
        token: {
          type: Sequelize.TEXT,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
        tableName: 'users',
        force: true,
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
