import React from 'react';

export const OurWorkConfig = {
  routes: [
    {
      path: '/our-work',
      exact: true,
      component: React.lazy(() => import('.')),
    },
    {
      path: '/species',
      exact: true,
      component: React.lazy(() => import('./Species')),
    },
    {
      path: '/marine-coastline',
      exact: true,
      component: React.lazy(() => import('./MarineCoastline')),
    },
    {
      path: '/climate-change',
      exact: true,
      component: React.lazy(() => import('./ClimateChange')),
    },
    {
      path: '/environmental-education',
      exact: true,
      component: React.lazy(() => import('./EnvironmentEducation')),
    },
    {
      path: '/our-community',
      exact: true,
      component: React.lazy(() => import('./Community')),
    },
    {
      path: '/policy-advocacy',
      exact: true,
      component: React.lazy(() => import('./PolicyAdvocacy')),
    },
  ],
};
