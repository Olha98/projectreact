import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/HomePage')),
    private: false,
    restricted: true,
  },
  {
    path: '/profile',
    label: 'Profile',
    exact: true,
    component: lazy(() => import('./views/ProfilePage')),
    private: true,
    restricted: false,
  },
  {
    path: '/profile/avatar',
    label: 'Avatar',
    exact: true,
    component: lazy(() => import('./views/AvatarPage')),
    private: true,
    restricted: false,
  },
  {
    path: '/checklist',
    label: 'CheckList',
    exact: true,
    component: lazy(() => import('./views/CheckListPage')),
    private: true,
    restricted: false,
  },
  {
    path: '/notifications',
    label: 'Notifications',
    exact: true,
    component: lazy(() => import('./views/NotificationsPage')),
    private: true,
    restricted: false,
  },
  {
    path: '/achievements',
    label: 'Achievements',
    exact: true,
    component: lazy(() => import('./views/AchievementsPage')),
    private: true,
    restricted: false,
  },
  {
    path: '/subscriptions',
    label: 'Subscriptions',
    exact: true,
    component: lazy(() => import('./views/SubscriptionsPage')),
    private: true,
    restricted: false,
  },
];
