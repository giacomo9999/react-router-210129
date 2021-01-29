import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import FruitsList from "./FruitsList";
import Fruit from "./Fruit";
import UsersList from "./UsersList";
import NoMatchPage from "./NoMatchPage";

class App extends Component {
  state = {
    fruitsData: [
      { id: 1, name: "Apple", color: "red" },
      { id: 2, name: "Banana", color: "yellow" },
      { id: 3, name: "Orange", color: "orange" },
    ],
  };
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/fruits-list">Fruits</Link>
              </li>
              <li>
                <Link to="/users-list">Users</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/fruits-list/:fruitId"
            render={(props) => (
              <Fruit
                {...props}
                name={
                  this.state.fruitsData[props.match.params.fruitId - 1].name
                }
                color={
                  this.state.fruitsData[props.match.params.fruitId - 1].color
                }
              />
            )}
          />
          <Route
            path="/fruits-list"
            render={(props) => (
              <FruitsList {...props} fruitsData={this.state.fruitsData} />
            )}
          />
          <Route path="/users-list" component={UsersList} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
