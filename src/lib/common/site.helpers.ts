function getBaseUrl() {
  if (process.env.NODE_ENV === 'development') return 'http://localhost:3000';

  return 'https://www.earthtojohn.com';
}

export const baseUrl = getBaseUrl();
