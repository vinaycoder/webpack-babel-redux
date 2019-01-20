import React from 'react';
import {Router, Route} from 'react-router-dom'

const Vinay = () => {
   return(
   <div>Amit </div>
   );
}

class App extends React.PureComponent
{
    render()
    {
        return(
            <div>
                <p>Vinay kumar</p>
                <Vinay />
                </div>
        )
    }
}

export default  App;