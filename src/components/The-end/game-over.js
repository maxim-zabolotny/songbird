import React from 'react';
import connect from "react-redux/es/connect/connect";
import {setNextGameAC} from "../../redux/actions/actions";



const GameOver = ({newGame, gameOver, score}) => {
    return (
        <div className='game-over d-flex justify-content-center flex-column align-items-center'>
            <div className='game-over-text'>
                <h1>Поздравляем!!!</h1>
                <p>вы набрали <strong>{score}</strong> из <strong>30</strong> возможных баллов</p>
            </div>
            <button onClick={newGame} className='next-btn game-over-btn' type="button" value="New Game"
                    disabled={!gameOver}>New Game
            </button>
        </div>
    )
};

const mapStateToProps = state => ({
    gameOver: state.gameOver,
    score: state.score

});

const mapDispatchToProps = (dispatch) => ({
    newGame: () => dispatch(setNextGameAC())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
