import React from 'react';
import { BannerMain } from './components/BannerMain/BannerMain';
import { EngineeringMetrics } from './components/EngineeringMetrics/EngineeringMetrics';
import { ProjectGrid } from '../projects/components/ProjectGrid';

export const HomePage = (): React.JSX.Element => {
  return (
    <>
      <BannerMain />
      <EngineeringMetrics />
      <ProjectGrid />
    </>
  );
};