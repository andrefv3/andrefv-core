// src/shared/services/github.service.ts
import { GITHUB_CONFIG } from '../config/github.config';

// 1. Definición estricta de la interfaz de datos (El contrato)
export interface GitHubStats {
  publicRepos: number;
  followers: number;
  totalStars: number;      
  recentActivity: number;  
}

// 2. Función asíncrona que extrae y procesa la telemetría
export const fetchGitHubStats = async (username: string): Promise<GitHubStats> => {
  try {
    // URL dinámica usando el config centralizado para el perfil
    const userUrl = `${GITHUB_CONFIG.BASE_URL}${GITHUB_CONFIG.ENDPOINTS.USER_STATS(username)}`;
    const userResponse = await fetch(userUrl);
    if (!userResponse.ok) throw new Error('User fetch failed');
    const userData = await userResponse.json();

    // URL dinámica usando el config centralizado para los repositorios
    const reposUrl = `${GITHUB_CONFIG.BASE_URL}${GITHUB_CONFIG.ENDPOINTS.USER_REPOS(username)}`;
    const reposResponse = await fetch(reposUrl);
    
    let totalStars = 0;
    let recentActivity = 0;
    const currentYear = new Date().getFullYear();

    if (reposResponse.ok) {
      const repos = await reposResponse.json();
      if (Array.isArray(repos)) {
        repos.forEach((repo: any) => {
          totalStars += repo.stargazers_count ?? 0;
          
          // Filtro inteligente basado en el año actual (2026)
          if (repo.pushed_at && new Date(repo.pushed_at).getFullYear() === currentYear) {
            recentActivity++;
          }
        });
      }
    }

    // Retornamos el objeto unificado mapeado con el tipado estricto
    return {
      publicRepos: userData.public_repos ?? 0,
      followers: userData.followers ?? 0,
      totalStars,
      recentActivity
    };
  } catch (error) {
    console.error("Telemetry failed:", error);
    // Fallback seguro en caso de error de red o rate-limit de la API
    return { publicRepos: 0, followers: 0, totalStars: 0, recentActivity: 0 };
  }
};