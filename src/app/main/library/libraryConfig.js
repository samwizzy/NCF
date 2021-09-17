import React from 'react';

export const LibraryConfig = {
  routes: [
    {
      path: '/library',
      exact: true,
      component: React.lazy(() => import('.')),
    },
    {
      path: '/e-library',
      exact: true,
      component: React.lazy(() => import('./NewsUpdates')),
    },
    {
      path: '/news-updates',
      exact: true,
      component: React.lazy(() => import('./NewsUpdates')),
    },
    {
      path: '/other-resources',
      exact: true,
      component: React.lazy(() => import('./NewsUpdates')),
    },
  ],
};
