import React, { FC } from 'react';

import { Header, Footer } from './components';

export const App: FC = () => (
  <>
    <Header />
    <main>
      <h2>Main Route</h2>
    </main>
    <Footer />
  </>
);
