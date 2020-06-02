import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Servico from '../pages/Servico';
import Barbeiros from '../pages/Barbeiros';
import Produtos from '../pages/Produtos';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/services" component={Servico} />
      <Route path="/barbers" component={Barbeiros} />
      <Route path="/products" component={Produtos} />
    </Switch>
  );
};

export default Routes;
