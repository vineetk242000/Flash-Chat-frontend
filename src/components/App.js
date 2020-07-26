import React from 'react';
import Register from "./Register"
import Chat from "./Chat"
import { Route ,  BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';

function App() {
  
  return (
    <div>
    
    <Header />
    <Router>
    <Route path="/" exact component={Register}  />

    <Route path="/chat" component={Chat} />
    
    </Router>
   
    
    
    </div>
   
   
   
   
   
   
   
   
   
  
  );
}

export default App;
