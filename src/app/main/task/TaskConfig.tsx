import { lazy } from 'react';

const Task = lazy(() => import('./Task'));

const TaskConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'task',
      element: <Task />,
    },
  ],
};

export default TaskConfig;
