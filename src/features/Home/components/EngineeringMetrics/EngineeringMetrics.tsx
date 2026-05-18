import React, { useState, useEffect } from 'react';
import { fetchGitHubStats, GitHubStats } from '@shared/services';
import { MetricsDesktop } from './MetricsDesktop';
import { MetricsMobile } from './MetricsMobile';
import './metrics.css';
import { Guides } from '@shared/ui';

export const EngineeringMetrics = (): React.JSX.Element => {
  const [githubData, setGithubData] = useState<GitHubStats | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Consume GitHub infrastructure asynchronously (andrefv3)
    fetchGitHubStats('andrefv3').then(setGithubData);

    // Listener to swap components efficiently based on viewport
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleResize);
    
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <section className="metrics-section" id="metrics" aria-label="Telemetría de Ingeniería">
      <div className="metrics-wrapper">
      <Guides variant="grid" />
        {isMobile ? (
          <MetricsMobile githubData={githubData} />
        ) : (
          <MetricsDesktop githubData={githubData} />
        )}
      </div>
    </section>
  );
};