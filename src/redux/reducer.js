import {TOPICS} from './actionTypes';
const initialSate={    
     "topics":[
      {"name": "Hello World", "des":"This is my first topics so it is testing"} ,
      {"name": "Famous testing", "des":"Hello guys this is famous topics"}
   ],
   "topicDetails":null
   }  
  
export default (state=initialSate, action) => {
    switch(action.type)  {
        case 'TOPICS':
        return Object.assign({}, state, {
            topicDetails: action.topic_name            
        });
        default:
      return state;
    }
}