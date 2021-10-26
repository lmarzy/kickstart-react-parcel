import React, { FC } from 'react';

import { Link, Route } from 'react-router-dom';

import { routes } from '../../config/routes';
import GlobalStyles from '../../styles/global';
import { Header, Footer } from './components';

export const App: FC = () => (
  <>
    <GlobalStyles />
    <Header />
    <nav>
      <ul>
        {routes.map(({ name, path }) => (
          <li key={path}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <main>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact}>
          <route.component />
        </Route>
      ))}
    </main>
    <Footer />
  </>
);
