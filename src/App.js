import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Listas from './pages/Listas'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Listas}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
