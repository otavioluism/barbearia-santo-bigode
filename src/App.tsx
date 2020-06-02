import React from 'react';

import { BrowserRouter as LocalHost } from 'react-router-dom';

import Rotas from './routes/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <LocalHost>
      <Rotas />
    </LocalHost>
  </>
);

export default App;
