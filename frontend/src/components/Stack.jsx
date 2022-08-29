import React, { Component } from "react";
import '../../static/css/cases.css'

export default class Cases extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }
    componentDidMount() {
        fetch("api/stack")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" };
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }
    render() {
        return (
            <div className="cases__card-stack">
                {this.state.data.map(stack => {
                    return (
                        <div key={stack.id}>
                            <div className="cases__card-stack-block">
                                {stack.text}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
};
