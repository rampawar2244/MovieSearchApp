import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Users from "./component/Users";
import CreateUser from "./component/CreateUser";
import UpdateUser from "./component/UpdateUser";

function App() {
  return (
    <Router>
      <Switch>
        {/* <h1>Welcome To React</h1> */}
        <Route exact path="/" component={Users}></Route>
        <Route path="/create" component={CreateUser}></Route>
        <Route path="/update/:id" component={UpdateUser}></Route>
      </Switch>
    </Router>
  );
}

export default App;
