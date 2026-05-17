import React, { useEffect, useState } from 'react';
import { projectService } from '../services/projectService';
import { Project } from '@shared/types/project.types';

export const ProjectGrid: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    projectService.getAll().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-700 border-t-white" />
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <h2 className="font-['Grotesk-Medium'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Production Systems & Engineering Case Studies
        </h2>
        <p className="mt-2 text-lg text-slate-400">
          Meticulously structured solutions focused on structural scaling and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-md transition-all hover:border-slate-700"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-wider text-emerald-400 uppercase bg-emerald-500/10 px-2.5 py-1 rounded-full">
                {project.status}
              </span>
              <span className="text-sm font-mono text-slate-500">{project.role}</span>
            </div>

            <h3 className="mt-4 font-['Sora'] text-2xl font-semibold text-white">
              {project.title}
            </h3>
            
            <p className="mt-3 text-slate-400 leading-relaxed text-sm">
              {project.description}
            </p>

            {/* Metrics Engine Display */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl font-bold tracking-tight text-white font-mono">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span 
                  key={tech} 
                  className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-mono font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        {/* Right Side of Bento Grid: Fast Info or Mini-Bio technical */}
        <div className="rounded-2xl border border-slate-800 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 p-8 flex flex-col justify-between">
          <div>
            <h4 className="font-['Sora'] text-lg font-medium text-white">System Parameters</h4>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Every system card links to a rigorous engineering whitepaper covering architectural compromises, trade-offs, and failure mode analyses.
            </p>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-4 text-xs font-mono text-slate-500">
            LOC Counter: Automated via GitHub Actions
          </div>
        </div>
      </div>
    </section>
  );
};