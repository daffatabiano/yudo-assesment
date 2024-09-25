import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/DataBase.js';

const sequelize = db;

class Product extends Sequelize.Model {}

Product.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    vendor: {
      type: DataTypes.STRING(50),
      allowNull: false,
      required: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      required: true,
    },
    category: {
      type: DataTypes.STRING(10),
      allowNull: false,
      required: true,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.TINYINT,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'product',
    tableName: 'product',
    timestamps: false,
  }
);

export default Product;

(async () => {
  await sequelize.sync();
})();
