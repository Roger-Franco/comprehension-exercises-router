import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users'
import StrictAccess from './StrictAccess';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
          <Route path="/StrictAccess" render={() => (<StrictAccess user={ { username: 'Joao', password: '1234' } } />)} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </switch>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/StrictAccess">StrictAccess</Link></li>
          </ul>
        </nav>
      </BrowserRouter>
    );
  }
}

export default App;
