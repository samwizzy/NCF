import React from 'react';

export const AboutUsConfig = {
  routes: [
    {
      path: '/about-us',
      exact: true,
      component: React.lazy(() => import('.')),
    }
  ],
};
