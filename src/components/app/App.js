import React from 'react';
import '../../bootstrap.min.css'
import './app.css';
import Header from "../header/header";
import RandomBird from "../random-bird/random-bird";
import Answer from "../Answers/answers";
import GameOver from "../The-end/game-over";
import {connect} from "react-redux";


function App({gameOver}) {
    return (
        <div className={'container'}>
            {
                gameOver ? <GameOver/>
                    :
                    <React.Fragment>
                        <Header/>
                        <RandomBird/>
                        <Answer/>
                    </React.Fragment>
            }
        </div>
    );
}

const mapStateToProps = state => ({
    gameOver: state.gameOver
})

export default connect(mapStateToProps, null)(App);
