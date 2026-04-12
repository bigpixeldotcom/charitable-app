import { neon } from '@neondatabase/serverless';

const URL = process.env.DATABASE_URL;

if (!URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

export const sql = neon(URL);
