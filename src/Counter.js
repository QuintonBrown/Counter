import React, { Component } from "react";
class Counter extends Component {
    // INTALIZATION
    constructor(props) {
        super(props)
        console.log("constructor", props)
    }

    // MOUNTING
    componentDidMount() {
        console.log("componentDidMount fired")
    }

    // UPDATING
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
    }

    // UNMOUNTING
    componentWillUnmount() {
        console.log("component will unmount")
    }

    // MOUNTING
    render() {
        return (
            <div className="counter">
                Counter value: {this.props.counter}
            </div>
        );
    }
}
export default Counter;