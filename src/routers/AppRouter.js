import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/home';
import Feed from '../components/feed';
import NotFoundPage from '../components/NotFoundPage';
// import Header from '../components/Header';


export class AppRouter extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/posts" component={Feed} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter;
