import React from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import history from './history';
import routes from './config/routeConfig';

function App() {
  return (
    <div className='App'>
      <React.Suspense fallback={null}>
        <Router history={history}>{renderRoutes(routes)}</Router>
      </React.Suspense>
    </div>
  );
}

export default App;
