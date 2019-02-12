import React, { Component } from 'react';
import {
  BrowserRouter as Router,  
  Route,Link 
} from 'react-router-dom';

import './styles.css'
const Home = () =>(<div><h1> This is Home page</h1></div>);
const Contact = ()=>(<div><h1> This is contact page</h1></div>);
const Topics =() =>{
    return(
        <div><h1> This is Topics page</h1>
        <ul className="topics">
        <li><Link to="/topics/my-first-topic">1. My First Topick</Link></li>
        <li><Link to="/topics/my-second-topic">2. My Second Topick</Link></li>
        <li><Link to="/topics/my-third-topic">3. My Third Topick</Link></li>
        </ul>
        
        </div>
    )
}
const Topic = (props) => {
    console.log(props.match.params.name);
    return(
        <div><h1> This is Topic Details page</h1>  
        <h3>{props.match.params.name} </h3>      
        </div>
    )
}

class App extends Component
{         
        render() {
    return (
      <Router>
      <div className="App">  
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />  
            <Route exact path='/topics' component={Topics} />
            <Route path='/topics/:name' component={Topic} />   
        <ul className="MainMenu">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/contact">contact</Link></li>
            <li> <Link to="/topics">Topics</Link></li>        
        </ul>   
        <div>
        <img src="http://localhost:8080/src/component/blog-list1.png" style={{width:"100%"}} />
        </div>   
       
      
      </div>

      </Router>
    );
  }
       
}

export default  App;