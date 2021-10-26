import { HomeView, AboutView } from '../components/views';

export const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: HomeView,
  },
  {
    name: 'About',
    path: '/about',
    component: AboutView,
  },
];
