import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/DataBase.js';

const sequelize = db;

class User extends Sequelize.Model {}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    token: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'users',
    tableName: 'users',
  }
);

export default User;

(async () => {
  await sequelize.sync();
})();
