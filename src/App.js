import React, { Component } from 'react';
import BlogList from './containers/BlogList';
import BlogDetail from './containers/BlogDetail';
import NotFound from './components/common/NotFound';
import Header from './components/common/Header';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path = "/" component = {BlogList} />
              <Route exact path = "/detail/:id" component = {BlogDetail} />
              <Route component={NotFound} />
              <BlogList />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
