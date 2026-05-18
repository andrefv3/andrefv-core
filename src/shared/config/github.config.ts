export const GITHUB_CONFIG = {
  USERNAME: 'andrefv3',
  BASE_URL: 'https://api.github.com',
  ENDPOINTS: {
    USER_STATS: (username: string) => `/users/${username}`,
    USER_REPOS: (username: string) => `/users/${username}/repos?per_page=100`,
  }
} as const;