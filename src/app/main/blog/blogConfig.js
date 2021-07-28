import React from 'react';

export const BlogConfig = {
  routes: [
    {
      path: '/blog',
      exact: true,
      component: React.lazy(() => import('./')),
    }
  ],
};
