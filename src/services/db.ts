import mysql, { PoolOptions } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const Config: PoolOptions = {
  host: process.env.DB_HOST,
  port: Number(String(process.env.DB_PORT)),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
};

const pool = mysql.createPool(Config);

export default pool;
