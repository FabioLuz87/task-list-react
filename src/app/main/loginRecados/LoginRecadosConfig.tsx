import { lazy } from 'react';

const LoginRecados = lazy(() => import('./LoginRecados'));

const LoginRecadosConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'recados/signin',
      element: <LoginRecados />,
    },
  ],
};

export default LoginRecadosConfig;