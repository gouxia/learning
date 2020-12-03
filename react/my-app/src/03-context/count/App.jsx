import React, { Component } from 'react';
import {CountProvider} from './CountProvider'
import Child from './Child'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <CountProvider>
                <Child></Child>
            </CountProvider>
         );
    }
}
 
export default App;