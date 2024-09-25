import { Sequelize } from 'sequelize';

const db = new Sequelize('test-yodu', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});

export default db;
