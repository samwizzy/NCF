import React from 'react';

export const GetInvolvedConfig = {
  routes: [
    {
      path: '/membership',
      exact: true,
      component: React.lazy(() => import('.')),
    },
    {
      path: '/membership/individual',
      exact: true,
      component: React.lazy(() => import('./IndividualMembership')),
    },
    {
      path: '/membership/corporate',
      exact: true,
      component: React.lazy(() => import('./CorporateMembership')),
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
