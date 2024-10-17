import React from "react";
import "./Home.css";

class Home extends React.Component {
  
  handleSearch = (e) => {
    this.props.kkkk(e.target.value); // Passing the input value to the parent component
  };

  render() {
    return (
      <>
        <div id="home-div">
          <div id="text-div">
            <h1>Welcome to QTrip</h1>
            <p>Explore the world with fantastic places to venture around</p>
            <br />
            <input
              type="text"
              placeholder="Search a City"
              onChange={this.handleSearch}
              value={this.props.search} // Ensure this is a controlled component
            />
            <br />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
