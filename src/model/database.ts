import * as pg from "pg";
import { Sequelize } from 'sequelize-typescript';

const porta: number | any = process.env.DB_PORT;

export const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: porta,
    dialectModule: pg,
    dialect: 'postgres',
  }
);
