
import React from "react";

import { simpleGet, simplePost } from "./requests";

export default class RequestTester extends React.Component {
    state = {
        content: ""
    }

    componentDidMount(){
        simpleGet()
        .then(res => {
            console.log("run get", res);
            this.setState({content: res.data[0]});
        });
    }

    runPost = () => {
        const obj = {name:"AAA", val:"BBB"};

        simplePost(obj)
        .then(res => {
            console.log("run post", res);
            this.setState({content: res.data});
        });
    }

    render() {
        return (
            <div>
                Here is our content: {
                    this.state.content
                    ? <span>{this.state.content.name}: {this.state.content.val} @ {this.state.content.timestamp}</span>
                    : ""
                }
                <button onClick={this.runPost}>Try it!</button>
            </div>
        );
    }
};
