import { createNeonAuth } from '@neondatabase/auth/next/server';

const URL = process.env.NEON_AUTH_BASE_URL;
const SECRET = process.env.NEON_AUTH_COOKIE_SECRET;

if (!URL) {
  throw new Error('NEON_AUTH_BASE_URL environment variable is not set.');
}

if (!SECRET) {
  throw new Error('NEON_AUTH_COOKIE_SECRET environment variable is not set.');
}

export const auth = createNeonAuth({
  baseUrl: URL,
  cookies: {
    secret: SECRET,
  },
});
