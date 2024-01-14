import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        {/* HOME PAGE */}
        <h3 className="homeText">Quiz App</h3>
        <button className="Playbtn" onClick={this.props.onPlayClick}>
          Play
        </button>
      </div>
    );
  }
}

export default Home;