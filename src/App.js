import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Entry from "./components/Entry";
import FriendList from "./components/FriendList";
import SecretRoute from "./components/SecretRoute";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Entry} />
        <Route path="/login" component={Entry} />
        <SecretRoute path="/friends-list" component={FriendList} />
        <SecretRoute path="/add-friend" component={AddFriend} />
        <SecretRoute path="/logout" component={Logout} />
      </Switch>
    </div>
  );
}

export default App;
