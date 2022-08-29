import React, { Component } from "react";
import astanaHub from "../../static/assets/img/astanaHub.svg";
import terricon from "../../static/assets/img/terriconValley.svg";
import theBrain from "../../static/assets/img/theBrain.svg";
import house16 from "../../static/assets/img/house16.svg";
import '../../static/css/support.css'


export default class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
  componentDidMount() {
    fetch("api/support")
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
      <div className="support">
        <div className="wrapper">
          <div className="support__cont">
            <p>Нас поддерживают</p>
            <div className="support__cont-partners">
              {this.state.data.map(support => {
                return (
                  <div key={support.id}>
                    <img src={support.logo} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };
};
