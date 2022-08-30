import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'divider-1',
    type: 'divider',
  },
  {
    id: 'pokemon',
    title: 'Pokemon',
    subtitle: 'Search in Pokemon API',
    type: 'group',
    translate: 'Pokemon',
    children: [
      {
        id: 'dashboards.project',
        title: 'Search',
        type: 'item',
        icon: 'heroicons-outline:search-circle',
        url: '/pokemon/search',
      },
    ],
  },
  {
    id: 'divider-2',
    type: 'divider',
  },

  {
    id: 'recados',
    title: 'Recados',
    subtitle: 'Sessão de recados',
    type: 'group',
    translate: 'Recados',
    children: [
      {
        id: 'createAccount.tasks',
        title: 'Mostrar Recados',
        type: 'item',
        icon: 'heroicons-outline:book-open',
        url: '/task',
      },
    ],
  },
  {
    id: 'divider-3',
    type: 'divider',
  },
];

export default navigationConfig;
