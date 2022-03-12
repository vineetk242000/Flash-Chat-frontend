import React from "react";
import Register from "./components/Register";
import Chat from "./components/Chat";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Register} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  );
}

export default App;
