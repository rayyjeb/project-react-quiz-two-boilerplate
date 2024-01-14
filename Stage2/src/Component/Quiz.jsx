import React from "react";
import Array from "../assets/resources/quizQuestion.json";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 1,
    };
  }
// WHEN THE USER CLICKS ON THE NEXT IT SHOULD DISPLAY THE NEXT QUESTION 
  nextClick = () => {
    this.setState((prevState) => ({ i: prevState.i + 1 }));
  };
  prevClick = () => {
    this.setState((prevState) => ({ i: prevState.i - 1 }));
  };

  handleNextClick = () => {
    let userConfirmed = window.confirm("Are you sure you want to quit?");

    if (userConfirmed && this.props.onNextClick) {

      this.props.onNextClick();
    }
  };
  render() {
    const { i } = this.state;

    if (i === 15) {
        // WHEN THE QUESTION IS 15  IE, MAXIMUM
      this.props.onNextClick();
    }

    return (
      <div>
        {/* Main Quiz Div */}
        <div className="MainQuizDiv">
          <h2>Question</h2>
          <h5>{`${i} of 15`}</h5>
          {/* RETREIVE DATA OF QUESTION FROM RESOURCES ARRAY */}
          <h3>{Array[i].question}</h3>
          {/* Options */}
          <div className="Grids">
            {/* TO RETRIEVE DATA FROM RESOURCES ARRAY */}
            <button>{Array[i].optionA}</button>
            <button>{Array[i].optionB}</button>
            <button>{Array[i].optionC}</button>
            <button>{Array[i].optionD}</button>
          </div>
          {/* User Click Button */}
          <div className="flexDiv alignFlexDiv">
            <button className="blueBtn" onClick={this.prevClick}>
              Previous
            </button>
            <button className="greenBtn" onClick={this.nextClick}>
              Next
            </button>
            <button className="redBtn" onClick={this.handleNextClick}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
