import React, { useState } from 'react';
import { GitHubStats } from '@shared/services';
import { VscTerminal, VscLayers, VscPulse, VscMcp, VscPerson, VscStarFull, VscCircleFilled } from 'react-icons/vsc';

interface MetricsProps {
  githubData: GitHubStats | null;
}

type BentoTabs = 'overview' | 'runtime' | 'architecture';

export const MetricsMobile = ({ githubData }: MetricsProps): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState<BentoTabs>('overview');
  const [expandedCard, setExpandedCard] = useState<string>('github');

  return (
    <div className="metrics-mobile-container">
      {/* 1. KPI STRIP HORIZONTAL (Deslizable con el pulgar, reduce la altura vertical) */}
      <div className="kpi-strip">
        <div className="kpi-chip">
          <span className="kpi-value">99.95%</span>
          <span className="kpi-label">SLA Focus</span>
        </div>
        <div className="kpi-chip">
          <span className="kpi-value">&lt;150ms</span>
          <span className="kpi-label">P95 Latency</span>
        </div>
        <div className="kpi-chip">
          <span className="kpi-value">100%</span>
          <span className="kpi-label">Type-Safe</span>
        </div>
        <div className="kpi-chip">
          <span className="kpi-value">0ms</span>
          <span className="kpi-label">bfcache Ready</span>
        </div>
      </div>

      {/* 2. SEGMENTED CONTROL (Tabs contextuales tipo Raycast/Linear) */}
      <div className="segmented-control">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`tab-button ${activeTab === 'runtime' ? 'active' : ''}`}
          onClick={() => setActiveTab('runtime')}
        >
          Runtime
        </button>
        <button 
          className={`tab-button ${activeTab === 'architecture' ? 'active' : ''}`}
          onClick={() => setActiveTab('architecture')}
        >
          Infra
        </button>
      </div>

      {/* 3. PRIORITY STACK LAYOUT (Acordeón bento inteligente controlado por estado) */}
      <div className="priority-stack">
        {activeTab === 'overview' && (
          <>
            {/* Card 1: GitHub Telemetry */}
            <div 
              className={`bento-card-mobile ${expandedCard === 'github' ? 'expanded' : 'compact'}`}
              onClick={() => setExpandedCard('github')}
            >
                <div className="card-mobile-trigger">
                    <div className="card-mobile-title">
                    <VscTerminal className="icon-telemetry" />
                    <span>GitHub Live Telemetry</span>
                    </div>
                    <span className="chevron">{expandedCard === 'github' ? '▲' : '▼'}</span>
                </div>
                
                <div className="mobile-stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                    <div className="m-stat-box">
                        <span className="m-stat-num" style={{ fontSize: '1.5rem' }}>{githubData?.publicRepos ?? '--'}</span>
                        <span className="m-stat-lbl">
                            <div className="flex gap-1 items-center"><VscTerminal className="icon-telemetry-stat" />Repositorios</div>
                        </span>
                    </div>
                    <div className="m-stat-box">
                        <span className="m-stat-num" style={{ fontSize: '1.5rem' }}>{githubData?.totalStars ?? '0'}</span>
                        <span className="m-stat-lbl">
                            <div className="flex gap-1 items-center"><VscStarFull className="icon-telemetry-stat" />Estrellas</div>
                        </span>
                    </div>
                    <div className="m-stat-box">
                        <span className="m-stat-num" style={{ fontSize: '1.5rem' }}>{githubData?.recentActivity ?? '--'}</span>
                        <span className="m-stat-lbl">
                            <div className="flex gap-1 items-center"><VscCircleFilled className="icon-telemetry-stat" />Activos {new Date().getFullYear()}</div>
                        </span>
                    </div>
                    <div className="m-stat-box">
                        <span className="m-stat-num" style={{ fontSize: '1.5rem' }}>{githubData?.followers ?? '--'}</span>
                        <span className="m-stat-lbl">
                            <div className="flex gap-1 items-center"><VscPerson className="icon-telemetry-stat" />Seguidores</div>
                        </span>
                    </div>
                </div>
            </div>

            {/* Card 2: Problem-Solving Telemetry */}
            <div 
              className={`bento-card-mobile ${expandedCard === 'impact' ? 'expanded' : 'compact'}`}
              onClick={() => setExpandedCard('impact')}
            >
              <div className="card-mobile-trigger">
                <div className="card-mobile-title">
                  <VscPulse className="icon-telemetry" />
                  <span>Observabilidad e Impacto</span>
                </div>
                <span className="chevron">{expandedCard === 'impact' ? '▲' : '▼'}</span>
              </div>
              
              <div className="card-mobile-content">
                <div className="mobile-narrative">
                  Monitoreo predictivo orientado a KPIs de negocio. Diseño sistemas tolerantes a fallos con telemetría integrada.
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'runtime' && (
          <div className="bento-card-mobile expanded">
            <div className="card-mobile-title">
              <VscMcp className="icon-telemetry" />
              <span>Execution Environment</span>
            </div>
            <div className="card-mobile-content">
              <pre className="mobile-code-block">
<code>{`const Runtime = [
    'TypeScript', 
    'Node.js', 
    'React', 
    'Angular'
] as const;`}
</code>
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="bento-card-mobile expanded">
            <div className="card-mobile-title">
              <VscLayers className="icon-telemetry" />
              <span>Architectural Primitives</span>
            </div>
            <div className="card-mobile-content">
              <div className="mobile-badges-container">
                <span className="m-badge">Clean Architecture</span>
                <span className="m-badge">SOLID Principles</span>
                <span className="m-badge">DDD Layering</span>
                <span className="m-badge">Hexagonal Core</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};