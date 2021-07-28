import React from 'react';

export const HomeConfig = {
  routes: [
    {
      path: '/',
      exact: true,
      component: React.lazy(() => import('./')),
    }
  ],
};
