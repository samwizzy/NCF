import React from 'react';

export const CartConfig = {
  routes: [
    {
      path: '/cart',
      exact: true,
      component: React.lazy(() => import('.')),
    },
    {
      path: '/cart/checkout',
      exact: true,
      component: React.lazy(() => import('./checkout')),
    }
  ],
};
