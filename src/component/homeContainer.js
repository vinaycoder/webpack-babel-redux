import React, { Component } from 'react';   
import { connect } from 'react-redux';
import {getTopicsRequest} from '../redux/actions';

class Home extends Component{
    render()
   {
       console.log(this.props);
    return(
        <div>
            <h1> This is Home page</h1>
            <button onClick={()=>this.props.getTopicsRequest('Amit')}> onclick  </button> 
        </div>
    )
   }
}


const mapStateToProps = (state, ownProps) => {
	return {
		state: state
	};
};

const mapDispatchToProps = dispatch => ({
    getTopicsRequest: (name) => dispatch(getTopicsRequest(name))
   })
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
