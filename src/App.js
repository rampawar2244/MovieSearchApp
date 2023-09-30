import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Youtube from "./components/YoutubeClone/Youtube";
import Movies from "./components/MovieApp/Movies";
import TodoApp from "./components/TodoApp";
 
 

function App() {
  return (
    <Router>
      <Switch>
        {/* <h1>Welcome To React</h1> */}
        <Route exact path="/" component={Movies}></Route>
        <Route path="/tube" component={Youtube}></Route>
          <Route path="/todoapp" component={TodoApp}></Route>
          
      </Switch>
    </Router>
  );
}

export default App;
