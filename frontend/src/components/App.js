import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";


import Header from "./Header.jsx";
import AboutPhone from "./AboutPhone.jsx";
import Sidebar from "./Sidebar.jsx";
import Composition from "./Composition.jsx";
import About from "./About.jsx";
import Products from "./Products.jsx";
import Record from "./Record.jsx";
import Cases from "./Cases.jsx";
import Important from "./Important.jsx";
import Support from "./Support.jsx";
import Team from "./Team.jsx";
import Consultation from "./Consultation.jsx";
import Follow from "./Follow.jsx";
import Footer from "./Footer/Footer.js";
import '../../static/css/App.css'



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
        <Header />
        <AboutPhone />
        <div className="wrapper">
          <div className="main">
            <Sidebar />
            <Composition />
          </div>
        </div>


        <ul>
          {this.state.data.map(contact => {
            return (
              <li key={contact.id}>
                {contact.navName}
              </li>
            );
          })}
        </ul>
        <RoomJoinPage />
 
        <About />
        <Products />
        <Record />
        <Cases />
        <Important />
        <Support />
        <Team />
        <Follow />
        <Consultation />
        <Footer />
      </div>
    );
  }
}
    
const appDiv = document.getElementById("app");
render(<App />, appDiv);
