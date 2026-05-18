import React from 'react';
import { GitHubStats } from '@shared/services';
import { VscTerminal, VscLayers, VscPulse, VscMcp, VscCheckAll, VscCircleFilled, VscStarFull, VscGlobe,  } from 'react-icons/vsc';

interface MetricsProps {
  githubData: GitHubStats | null;
}

export const MetricsDesktop = ({ githubData }: MetricsProps): React.JSX.Element => {
  return (
    <div className="metrics-desktop-grid">
      
      {/* CARD 1: GitHub Live Telemetry (Ocupa 7 de 12 columnas) */}
      <div className="bento-card-desktop card-git-telemetry">
        <div className="card-d-header">
          <div className="card-d-title">
            <VscTerminal className="icon-telemetry" />
            <span>GitHub Live Telemetry</span>
          </div>
          <div className="live-badge-container">
            <span className="live-dot-pulse"></span>
            <span className="live-text">Edge Connected</span>
          </div>
        </div>
        
        <div className="desktop-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', width: '100%' }}>
            <div className="d-stat-box">
                <span className="d-stat-num">{githubData?.publicRepos ?? '--'}</span>
                <span className="d-stat-lbl">
                    <div className="flex gap-1 items-center"><VscTerminal className="icon-telemetry-stat" />Repositories</div>
                </span>
            </div>
            <div className="d-stat-box">
                <span className="d-stat-num">{githubData?.totalStars ?? '0'}</span>
                <span className="d-stat-lbl">
                    <div className="flex gap-1 items-center"><VscStarFull className="icon-telemetry-stat" />Code Stars</div>
                </span>
            </div>
            <div className="d-stat-box">
                <span className="d-stat-num">{githubData?.recentActivity ?? '--'}</span>
                <span className="d-stat-lbl">
                    <div className="flex gap-1 items-center"><VscCircleFilled className="icon-telemetry-stat" />Active Repos</div>
                </span>
            </div>
            <div className="d-stat-box">
                <span className="d-stat-num">{githubData?.followers ?? '--'}</span>
                <span className="d-stat-lbl">
                    <div className="flex gap-1 items-center"><VscGlobe className="icon-telemetry-stat" />Network Scope</div>
                </span>
            </div>
        </div>
        
        <div className="card-d-footer">
          <code>GET https://api.github.com/users/andrefv3 - 200 OK</code>
        </div>
      </div>

      {/* CARD 2: Architectural Primitives (Ocupa 5 de 12 columnas) */}
      <div className="bento-card-desktop card-arch-primitives">
        <div className="card-d-header">
          <div className="card-d-title">
            <VscLayers className="icon-telemetry" />
            <span>System Design Primitives</span>
          </div>
        </div>
        
        <div className="desktop-badges-grid">
          <span className="d-badge"><VscCheckAll /> Clean Architecture</span>
          <span className="d-badge"><VscCheckAll /> SOLID Principles</span>
          <span className="d-badge"><VscCheckAll /> Domain-Driven Design</span>
          <span className="d-badge"><VscCheckAll /> Hexagonal Architecture</span>
          <span className="d-badge"><VscCheckAll /> Strict Type-Safety</span>
        </div>
        
        <p className="arch-narrative-desktop">
          Decoupling business rules from runtime environments and delivery frameworks to build highly maintainable, resilient systems.
        </p>
      </div>

      {/* CARD 3: Problem-Solving Telemetry (Ocupa 5 de 12 columnas) */}
      <div className="bento-card-desktop card-impact-telemetry">
        <div className="card-d-header">
          <div className="card-d-title">
            <VscPulse className="icon-telemetry" />
            <span>Observability & Impact Metrics</span>
          </div>
        </div>
        
        <div className="impact-stats-grid">
          <div className="impact-box">
            <span className="impact-num">99.95%</span>
            <span className="impact-lbl">Target SLA Uptime</span>
          </div>
          <div className="impact-box">
            <span className="impact-num">&lt;150ms</span>
            <span className="impact-lbl">P95 API Latency Goal</span>
          </div>
        </div>
        
        <p className="impact-footer-desktop">
          Monitoring critical paths via structured telemetry matrices to predict systems bottlenecks.
        </p>
      </div>

      {/* CARD 4: Execution Environment (Ocupa 7 de 12 columnas) */}
      <div className="bento-card-desktop card-execution-runtime">
        <div className="card-d-header">
          <div className="card-d-title">
            <VscMcp className="icon-telemetry" />
            <span>Immutable Execution Runtime</span>
          </div>
        </div>
        
        <div className="code-editor-mock">
            <div className="editor-top-bar">
                <span className="ed-dot red"></span>
                <span className="ed-dot yellow"></span>
                <span className="ed-dot green"></span>
                <span className="ed-filename">runtime.config.ts</span>
            </div>
            <pre className="desktop-code-display">
<code>{`const RuntimeEnvironment = {
    compiler: "TypeScript 5.x (Strict Mode)",
    backend: "Node.js (Asynchronous Non-blocking Event Loop)",
    reactiveLayers: ["React 19", "Angular 18"],
    persistence: "PostgreSQL Relational Integrity"
} as const;`}</code>
            </pre>
        </div>
      </div>

    </div>
  );
};