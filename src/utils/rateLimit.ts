const WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS = 3;

interface RateLimitStore {
  [ip: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  
  // Clean up expired entries
  Object.keys(store).forEach(key => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });

  if (!store[ip]) {
    store[ip] = {
      count: 1,
      resetTime: now + WINDOW_MS
    };
    return true;
  }

  if (store[ip].resetTime < now) {
    store[ip] = {
      count: 1,
      resetTime: now + WINDOW_MS
    };
    return true;
  }

  store[ip].count += 1;
  return store[ip].count <= MAX_REQUESTS;
};