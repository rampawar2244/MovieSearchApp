import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import VideoSection from "./VideoSection";
import Search from "./Search";
import "./Assets/Youtube.scss";
function Youtube() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__pages">
              <Sidebar />
              <Search />
            </div>
          </Route>
          <Route>
            <div className="app__pages">
              <Sidebar />
              <VideoSection />
            </div>
          </Route>
        </Switch>
      </Router>

      {/* Main Video Sec */}
    </div>
  );
}

export default Youtube;
