import React, { Component } from "react";
import profile from "./images/myPhoto.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    person: {
      fullName: "Mohamed Amr",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: profile,
      profession: "Software Engineer",
    },
    shows: false,
    interval: 0,
    timeSinceMount: 0,
  };

  toggleShow = () => {
    if (this.state.shows) {
      clearInterval(this.interval);
    }
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, interval, timeSinceMount } = this.state;

    return (
      <div className="container mt-5">
        <button className="btn btn-primary" onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="mt-3">
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" width={200} height={200} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p className="mt-3">Time since last mount: {interval} seconds</p>
        <p className="mt-3">Time since last mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
