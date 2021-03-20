import { Route, Switch } from "react-router-dom";
import './App.css';
import { Home, Error, Rooms, SingleRoom } from "./pages";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
