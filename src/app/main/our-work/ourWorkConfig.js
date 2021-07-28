import React from 'react';

export const OurWorkConfig = {
  routes: [
    {
      path: '/our-work',
      exact: true,
      component: React.lazy(() => import('.')),
    }
  ],
};
