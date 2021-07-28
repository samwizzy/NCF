import React from 'react';

export const ShopConfig = {
  routes: [
    {
      path: '/shop',
      exact: true,
      component: React.lazy(() => import('.')),
    },
    {
      path: '/shop/:id',
      exact: true,
      component: React.lazy(() => import('./shop')),
    }
  ],
};
