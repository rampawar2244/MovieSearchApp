import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Movies from "./component/MovieApp/Movies";

function App() {
  return (
    <Router>
      <Switch>
        {/* <h1>Welcome To React</h1> */}
        <Route path="/" component={Movies}></Route>
      </Switch>
    </Router>
  );
}

export default App;
