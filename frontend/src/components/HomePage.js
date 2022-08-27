import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
  componentDidMount() {
    fetch("api/img")
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
      <div className="wrapper">
        {this.state.data.map(imgdata => {
          return (
            <li key={imgdata.id}>
              {imgdata.imgName} -+- 
              <img src={imgdata.imgimg} alt="photo" width="200px" height="200px"/>
            </li>
          );
        })}
      </div>
    );
  }
}
