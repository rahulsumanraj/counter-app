import React, { Component } from 'react';

class Counter extends Component {
    //add a property and set an object
    state = {
        //count: 0
        count: this.props.value
    };
    heading = {
        h1: 'heading is here it came after click',
        h2: ''
    };
     // adding a method in this class th change the value
    //  formatCount(){
    //     return this.state.count;
    // }

    handleIncrement=()=>{
            this.setState({ count: this.state.count + 1 });
    };
    handleDecrement=()=>{
        this.setState({ count: this.state.count - 1 });
    };
    dispalyHeading=()=>{
        this.setState({ heading:this.heading.h2 = this.heading.h1 })
    }
    render() { 
        console.log("props", this.props);
    return(
    <div className="container" >
        <center>
            {/* <div class ="counter">
                <button onClick={ this.dispalyHeading } >click to get h1 heading...</button>
                <h1>{ this.heading.h2 }</h1>
            </div> */}
            <div className ="container">
                {/* <span style={this.styles} className="badge badge-primary m-2">{ this.formatCount() }</span> */}

                {/* this.state.count */}
                <span style={this.styles} className="badge badge-primary m-2">{ this.state.count }</span>

                <button className="btn btn-success btm-sm m-2" onClick={this.handleIncrement}>click me +</button>
                <button className="btn btn-danger btm-sm m-2" onClick={this.handleDecrement}>click me -</button>
            </div>
        </center>
    </div>
    );
    }
   
}
 
export default Counter;