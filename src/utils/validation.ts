export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateMessage = (message: string): boolean => {
  // Check for common spam patterns
  const spamPatterns = [
    /<script/i,
    /http/i,
    /www\./i,
    /\[url=/i,
    /\[link=/i,
  ];

  return !spamPatterns.some(pattern => pattern.test(message));
};