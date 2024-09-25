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
      required: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      required: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      required: true,
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
    modelName: 'user',
    tableName: 'users',
    timestamps: false,
  }
);

export default User;

(async () => {
  await sequelize.sync();
})();
