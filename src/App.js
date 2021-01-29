import { Link, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import FruitsList from "./FruitsList";
import UsersList from "./UsersList";

function App() {
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
        <Route path="/fruits-list" component={FruitsList} />
        <Route path="/users-list" component={UsersList} />
      </Switch>
    </div>
  );
}

export default App;
