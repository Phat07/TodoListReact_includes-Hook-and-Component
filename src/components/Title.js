import React, { Component } from "react";

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render() {
        return(
            <div classname="page-header">
            <h1>
              Project 01 - ToDo List <small>NodeJS</small>
            </h1>
          </div>          
        )
    }
}
export default Title;