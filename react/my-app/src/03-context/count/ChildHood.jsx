import React, { Component } from 'react';
import { CountConsumer } from './CountProvider';
class ChildHood extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>childHood</h2>
                <CountConsumer>
                {
                        ({count,decrement,increment}) => {
                            return(
                                <div>
                                    <div>
                                        <button onClick={() => increment(3)}>增加</button>
                                    </div>
                                    <div>{count}</div>
                                    <div>
                                        <button onClick={() => decrement(3)}>减少</button>
                                    </div>
                                </div>
                            )
                        }
                    }
                </CountConsumer>
            </div>
         );
    }
}
 
export default ChildHood;