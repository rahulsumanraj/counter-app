import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component{
    state = {
        counters:[
            {id: 1, value: 3},
            {id: 2, value: 3},
            {id: 3, value: 5},
            {id: 4, value: 7}

        ]
    };
    render(){
        return(
            <div>
                <h1><center>Heading is here from Counters components:</center></h1>
                <div>
                    { this.state.counters.map(counter => 
                                            < Counter key={ counter.id} value ={counter.value}  /> 
                                            ) 
                    }
                </div>
            </div>
        );
    };
};

export default Counters;