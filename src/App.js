import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Layout/Header';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import Test from './components/Test/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import AddContact from './components/Contacts/AddContact';
import EditContact from './components/Contacts/EditContact';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

/* return React.createElement(
  'div',
  {className: 'App'},
  React.createElement('h1', null, 'The App Component')
); */
