import React from 'react';
//import Navigation from './components/navigation';
//import Router from './components/nav';
//import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
//import PageRenderer from './page-renderer';
import Routes from './routes';

function App() {

  return (  
    <div className="App">
      <Routes/>
    {/*}
        <Navigation>
          <Switch>
            <Route path="/:page" component={PageRenderer}/>
            <Route path="/" render={() => <Redirect to="/home" />}></Route>
            <Route component={() => 404}/>
          </Switch>
        </Navigation>
  */}
    </div>
  );
}

export default App;
