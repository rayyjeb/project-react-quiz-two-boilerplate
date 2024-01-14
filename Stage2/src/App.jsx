import React from "react";
import "./App.css";
import Home from "./Component/Home";
import Quz from "./Component/Quiz";
import Result from "./Component/Result";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: "home",
    };
  }

  QuizRedirectfn = () => {
    this.setState({ currentComponent: "quiz" });
  };

  resultRedirectfn = () => {
    this.setState({ currentComponent: "result" });
  };

  backToHome = () => {
    this.setState({ currentComponent: "home" });
  };

  playAgain = () => {
    this.setState({ currentComponent: "quiz" });
  };

  render() {
    return (
      <div>
        {this.state.currentComponent === "home" && (
          <Home onPlayClick={this.QuizRedirectfn} />
        )}
        {this.state.currentComponent === "quiz" && (
          <Quz onNextClick={this.resultRedirectfn} />
        )}
        {this.state.currentComponent === "result" && (
          <Result
            onBackToHomeBtn={this.backToHome}
            onPlayAgainBtn={this.playAgain}
          />
        )}
      </div>
    );
  }
}

export default App;
