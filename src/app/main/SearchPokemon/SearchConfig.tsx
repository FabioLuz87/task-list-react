import { lazy } from 'react';

const Search = lazy(() => import('./Search'));

const SearchConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pokemon/search',
      element: <Search />,
    },
  ],
};

export default SearchConfig;
