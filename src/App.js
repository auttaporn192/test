import logo from "./logo.svg";

import "./App.scss";
import Login from "./Components/login/login";
import Navbar from "./Components/Navbar";
import Clocks from "./Components/Clocks";
import { Switch, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/clock" component={Clocks} />
      </Switch>
    </div>
  );
}

export default App;
