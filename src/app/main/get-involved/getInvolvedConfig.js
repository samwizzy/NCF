import React from 'react';

export const GetInvolvedConfig = {
  routes: [
    {
      path: '/get-involved',
      exact: true,
      component: React.lazy(() => import('.')),
    },
    {
      path: '/membership',
      exact: true,
      component: React.lazy(() => import('./Membership')),
    },
    {
      path: '/bird-club',
      exact: true,
      component: React.lazy(() => import('./BirdClub')),
    },
    {
      path: '/events',
      exact: true,
      component: React.lazy(() => import('./Events')),
    },
  ],
};
