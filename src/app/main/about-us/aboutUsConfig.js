import React from 'react';

export const AboutUsConfig = {
  routes: [
    {
      path: '/about-us',
      exact: true,
      component: React.lazy(() => import('.')),
    },
    {
      path: '/ncf-in-brief',
      exact: true,
      component: React.lazy(() => import('.')),
    },
    {
      path: '/vision-and-mission',
      exact: true,
      component: React.lazy(() => import('./VisionAndMission')),
    },
    {
      path: '/milestones',
      exact: true,
      component: React.lazy(() => import('./Milestones')),
    },
    {
      path: '/governing-bodies',
      exact: true,
      component: React.lazy(() => import('./GoverningBodies')),
    },
  ],
};
