import React, { Component } from 'react'
import Board from './Board';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Default condition for beginning of the game
            xIsNext: true,
            //This is for history
            stepNumber: 0,
            history: [
                { sqaures: Array(9).fill(null) }
            ]
        }
    }
    //This is method for class Game
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0,
        });
    }
    //accept square from numbr 0 to 8
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                sqaures: squares,
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length.length,
        })
    }



    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? 'Go to #' + move : 'Start the game';
            return (
                <li key={move}>
                    <button onClick={() => { this.jumpTo(move) }}>
                        {desc}
                    </button>

                </li>
            );
        });
        let status = winner ? 'Winner is' + winner : 'Next player is' + (this.state.xIsnext ? 'X' : 'O');
        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.handleClick(i)}
                        squares={current.squares}
                    ></Board>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                </div>
            </div>
        )
    }
}

function calculateWinner(squares) {
    return null;
}
export default Game
