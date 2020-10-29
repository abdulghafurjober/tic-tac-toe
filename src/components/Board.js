import React from 'react'
import Square from './Square'

export default function Board(props) {
    const renderSqaure = (i) => {
        return (
            <Square 
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            ></Square>
        )
    }
    return (
        <div>
            <div className="row">
                {renderSqaure(0)}
                {renderSqaure(1)}
                {renderSqaure(2)}
            </div>
            <div className="row">
                {renderSqaure(3)}
                {renderSqaure(4)}
                {renderSqaure(5)}
            </div>
            <div className="row">
                {renderSqaure(6)}
                {renderSqaure(7)}
                {renderSqaure(8)}
            </div>
        </div>
    )
}

//export default Board
