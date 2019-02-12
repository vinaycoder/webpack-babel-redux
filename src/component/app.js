import React, { Component } from 'react';
import {
  BrowserRouter as Router,  
  Route,Link 
} from 'react-router-dom';
const Vinay = () => {
   return(
   <div>Amit </div>
   );
}
const Home = () =>(<div><h1> This is Home page</h1></div>);
const Contact = ()=>(<div><h1> This is contact page</h1></div>);

class App extends Component
{         
        render() {
    return (
      <Router>
      <div className="App">         
       
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />  
        <Link to="/">Home</Link><br />
        
        <Link to="/contact">contact</Link>
      </div>

      </Router>
    );
  }
       
}

export default  App;