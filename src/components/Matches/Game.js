import React, { Component } from 'react';
import 'spectre.css';
import './Game.css';
import Play from './Play';
import Display from './Display';
import Result from './Result';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userResult: 0,
      computerResult: 0,
      userChoice : -1,
      computerChoice: -1,
      onPause: false
    };
  }

  compareChoice() {
    const user = this.state.userChoice;
    const computer = this.state.computerChoice;
    if ((computer === 0 && user === 2) || (computer === 1 && user === 0) || (computer === 2 && user === 1)) {
      this.setState(prevState => {
        return {
          computerResult : prevState.computerResult += 1,
          round : prevState.round += 1
        }
      }, () => this.newRound());
    } else if (computer !== user) {
      this.setState(prevState => {
        return {
          userResult : prevState.userResult += 1,
          round : prevState.round += 1
        }
      }, () => this.newRound());
    }
  }

  setChoice(value){
    this.setState({
      userChoice: (value === 'Pierre') ? 0 : (value === 'Feuille') ? 1 : 2,
      computerChoice: Math.floor(Math.random() * 3)
    }, () => this.compareChoice());
  }

  newRound(){
    if (this.state.userResult === 3 || this.state.computerResult === 3) {
      this.setState({
        onPause: true
      });
      setTimeout(() => {
        this.setState({
          userResult: 0,
          computerResult: 0,
          userChoice : -1,
          computerChoice: -1,
          onPause: false
        });
      }, 2500);
    }
  }

  render() {
    return (
      <div className="Game">

        {!this.state.onPause &&
          <Play setChoice={this.setChoice.bind(this)}/>
        }

        <Result userResult={this.state.userResult}
          computerResult={this.state.computerResult}
        />

        <Display userResult={this.state.userResult}
          computerResult={this.state.computerResult}
          userChoice={this.state.userChoice}
          computerChoice={this.state.computerChoice}
        />

      </div>
    );
  }
}

export default Game;