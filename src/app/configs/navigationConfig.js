import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'dashboards',
    title: 'Dashboards',
    subtitle: 'Unique dashboard designs',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'DASHBOARDS',
    children: [
      {
        id: 'dashboards.project',
        title: 'Project',
        type: 'item',
        icon: 'heroicons-outline:clipboard-check',
        url: '/dashboards/project',
      },
      {
        id: 'dashboards.analytics',
        title: 'Analytics',
        type: 'item',
        icon: 'heroicons-outline:chart-pie',
        url: '/dashboards/analytics',
      },
    ],
  },
  {
    id: 'divider-1',
    type: 'divider',
  },
  {
    id: 'pokemon',
    title: 'Pokemon',
    subtitle: 'Search in Pokemon API',
    type: 'group',
    icon: 'heroicons-outline:home',
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
    id: 'divider-',
    type: 'divider',
  },

  {
    id: 'recados',
    title: 'Recados',
    subtitle: 'Sessão de recados',
    type: 'group',
    icon: 'heroicons-outline:book-open',
    translate: 'Recados',
    children: [
      {
        id: 'createAccount.recados',
        title: 'Criar Login',
        type: 'item',
        icon: 'heroicons-outline:user-add',
        url: '/recados/signin',
      },
      {
        id: 'createAccount.tasks',
        title: 'Mostrar Recados',
        type: 'item',
        icon: 'heroicons-outline:user-add',
        url: '/task',
      },
    ],
  },
  {
    id: 'divider-3',
    type: 'divider',
  },

  {
    id: 'apps',
    title: 'Applications',
    subtitle: 'Custom made application designs',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'APPLICATIONS',
    children: [
      {
        id: 'apps.ecommerce',
        title: 'ECommerce',
        type: 'collapse',
        icon: 'heroicons-outline:shopping-cart',
        translate: 'ECOMMERCE',
        children: [
          {
            id: 'e-commerce-products',
            title: 'Products',
            type: 'item',
            url: 'products',
            end: true,
          },
          {
            id: 'e-commerce-product-detail',
            title: 'Product Detail',
            type: 'item',
            url: 'products/1/a-walk-amongst-friends-canvas-print',
          },
          {
            id: 'e-commerce-new-product',
            title: 'New Product',
            type: 'item',
            url: 'products/new',
          },
          {
            id: 'e-commerce-orders',
            title: 'Orders',
            type: 'item',
            url: 'orders',
            end: true,
          },
          {
            id: 'e-commerce-order-detail',
            title: 'Order Detail',
            type: 'item',
            url: 'orders/1',
          },
        ],
      },
      {
        id: 'apps.help-center',
        title: 'Help Center',
        type: 'collapse',
        icon: 'heroicons-outline:support',
        url: 'help-center',
        children: [
          {
            id: 'apps.help-center.home',
            title: 'Home',
            type: 'item',
            url: 'help-center',
            end: true,
          },
          {
            id: 'apps.help-center.faqs',
            title: 'FAQs',
            type: 'item',
            url: 'help-center/faqs',
          },
          {
            id: 'apps.help-center.guides',
            title: 'Guides',
            type: 'item',
            url: 'help-center/guides',
          },
          {
            id: 'apps.help-center.support',
            title: 'Support',
            type: 'item',
            url: 'help-center/support',
          },
        ],
      },

      {
        id: 'apps.profile',
        title: 'Profile',
        type: 'item',
        icon: 'heroicons-outline:user-circle',
        url: 'profile',
      },
    ],
  },
];

export default navigationConfig;
