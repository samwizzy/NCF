import React from 'react';

export const ContactUsConfig = {
  routes: [
    {
      path: '/contact-us',
      exact: true,
      component: React.lazy(() => import('.')),
    },
  ],
};
