import Inicio from '../pages/Inicio';
import Detail from '../pages/Detail';

import { Route } from 'wouter';
import Layout from '../pages/Layout';

const RoutesRoutes = () => {
  return (
    <Layout>
      <Route component={Inicio} path='/' />
      <Route component={Inicio} path='/characters/:character' />
      <Route component={Detail} path='/personaje/:id' />
    </Layout>
  );
};
export default RoutesRoutes;
