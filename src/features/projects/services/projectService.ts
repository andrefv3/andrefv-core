import { Project } from '@shared/types/project.types';

// Mock Data optimized with engineering metrics
const PROJECTS_DATA: Project[] = [
  {
    id: "project-core",
    slug: "project-platform",
    title: "Project Architecture",
    role: "Lead Architect",
    organization: "Vega Systems",
    status: "Scale Phase",
    description: "High-throughput data orchestration platform built to transition monolithic workflows into distributed event-driven microservices.",
    stack: ["NestJS", "TypeScript", "React 19", "PostgreSQL"],
    metrics: [
      { label: "Data Throughput", value: "+240%", description: "Optimization of concurrent event processing lines." },
      { label: "Client-Side TTI", value: "0.8s", description: "Time-to-Interactive reduced using streaming SSR patterns." }
    ],
    challenge: {
      problem: "Legacy architecture suffered from cascading failures and tightly coupled domain models, choking under peak synchronization loads.",
      solution: "Engineered a decoupled system utilizing Vertical Slices on the frontend and an event-driven core in the backend.",
      architectureDecision: "Opted for TypeScript end-to-end to share domain boundaries and prevent runtime schema drift across service boundaries."
    },
    links: {
      live: "https://andresvega.dev",
      whitepaper: "#"
    }
  }
];

export const projectService = {
  async getAll(): Promise<Project[]> {
    // Simulate network latency to enforce loading state handling (Loading/Suspense)
    return new Promise((resolve) => setTimeout(() => resolve(PROJECTS_DATA), 400));
  },

  async getBySlug(slug: string): Promise<Project | undefined> {
    return PROJECTS_DATA.find(p => p.slug === slug);
  }
};