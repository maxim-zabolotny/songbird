import React from 'react'
import './style.css'
import logo from '../../img/logo.svg'
import {connect} from "react-redux";
import {typeBirds} from '../../typeBirds'

const Header = ({ score, birdCategory}) => {


    return (
            <header className="header">
                <div className="top-panel">
                    <img src={logo} className="logo"/>
                    <h5>Score:<span className="score">{score}</span></h5>
                </div>

                <ul className="pagination">
                    {typeBirds.map((type, index) => {
                        return (
                            <li key={index} className= {(birdCategory == index) ? "page-item active" : "page-item"}>
                                <a href="#" className="page-link">{type}</a>
                            </li>
                        )
                    })}
                </ul>
            </header>
    )
}

const mapStateToProps = (state) => ({
    score: state.score,
    birdCategory: state.birdCategory,

})


export default connect(mapStateToProps, null)(Header)
