import pg from 'pg';
import dotenv from "dotenv";
/*import decrypt, { configDotenv } from 'dotenv';*/

dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
    connectionsString: process.env.DATABASE_URI,
});
