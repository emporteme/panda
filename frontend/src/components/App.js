import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
  componentDidMount() {
    fetch("api/navbar")
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
      <div>
        <HomePage />
        <ul>
        {this.state.data.map(contact => {
          return (
            <li key={contact.id}>
              {contact.navName}
            </li>
          );
        })}
      </ul>
      <RoomJoinPage/>
      
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
