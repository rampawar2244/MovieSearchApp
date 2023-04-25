 
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link } from "react-router-dom";
import crud from './components/CRUD/crud';
import Burger from './components/BurgurApp/Burger';
function App() {
  return (
    <BrowserRouter>
     <div className="App">
         {/* <h1>Welcome To React</h1> */}
         <Route path="/navbar" component={Navbar}></Route>
         <Route path="/crud" component={crud}></Route>
         <Route path="/burger" component={Burger}></Route>

    </div>
    </BrowserRouter>
   
  );
}

export default App;
