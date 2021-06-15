import React from 'react';
import NewUser from './components/newUser';
import UserList from './components/userList';
import Edit from './components/edit';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={NewUser} />
            <Route path="/list" component={UserList} />
            <Route path="/editList/:id" component={Edit} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
