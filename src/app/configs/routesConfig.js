import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import ExampleConfig from 'app/main/example/ExampleConfig';
import SearchConfig from 'app/main/SearchPokemon/SearchConfig';
import signInConfig from '../main/authentication/sign-in/signInConfig';
import signUpConfig from '../main/authentication/sign-up/signUpConfig';
import signOutConfig from '../main/authentication/sign-out/signOutConfig';
import dashboardsConfigs from '../main/dashboards/dashboardsConfigs';
import errorPagesConfig from '../main/error/errorPagesConfig';
import productsConfig from '../main/products/productsConfig';
import ordersConfig from '../main/orders/ordersConfig';
import helpCenterConfig from '../main/help-center/helpCenterConfig';
import profileConfig from '../main/profile/profileConfig';
import LoginRecadosConfig from '../main/loginRecados/LoginRecadosConfig';
import TaskConfig from '../main/task/TaskConfig';

const routeConfigs = [
  ...dashboardsConfigs,
  signOutConfig,
  signInConfig,
  signUpConfig,
  productsConfig,
  ordersConfig,
  profileConfig,
  helpCenterConfig,
  errorPagesConfig,
  ExampleConfig,
  SearchConfig,
  LoginRecadosConfig,
  TaskConfig,
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="dashboards/analytics" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '*',
    element: <Navigate to="error/404" />,
  },
];

export default routes;
