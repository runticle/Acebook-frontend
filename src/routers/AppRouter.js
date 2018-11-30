import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Feed from './components/feed';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

class AppRouter extends React.Component {
  constructor(props){
    super(props)
  this.state = {
      auth: {
        isLoggedIn: false,
        user: ''
      },
      joinLine: {
        code: "",
        error: false,
        lineId: null,
        redirect: false
      },
      line: {
        line: {},
        users: []
      }
    }
  }

  updateAppStateLine = (newLine) => {
    console.log('updateAppStateLine: ', this.state.line)
    this.setState({
      line: {
        line: newLine.line,
        users: newLine.users
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
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
