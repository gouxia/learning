import React, { Component } from 'react';
import ChildHood from './ChildHood'
import { CountConsumer } from './CountProvider';
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>child</h2>
                <CountConsumer>
                    {
                        ({count,decrement,increment}) => {
                            return(
                                <div>
                                    <div>
                                        <button onClick={() => increment(1)}>增加</button>
                                    </div>
                                    <div>{count}</div>
                                    <div>
                                        <button onClick={() => decrement(1)}>减少</button>
                                    </div>
                                </div>
                            )
                        }
                    }
                </CountConsumer>
                <ChildHood></ChildHood>
            </div>
         );
    }
}
 
export default Child;