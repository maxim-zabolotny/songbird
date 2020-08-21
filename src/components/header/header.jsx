import React from 'react'
import './style.css'
import logo from '../../img/logo.svg'

const Header = () => {


    return (
            <header className="header">
                <div className="top-panel">
                    <img src={logo} className="logo"/>
                    <h5>Score:<span className="score">5</span></h5>
                </div>

                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link">Разминка</a>
                    </li>
                    <li className="page-item active">
                        <a href="#" className="page-link">Воробьиные</a>
                    </li>
                    <li className="page-item">
                        <a href="#" className="page-link">Лесные птицы</a>
                    </li>
                    <li className="page-item">
                        <a href="#" className="page-link">Певчие птицы</a>
                    </li>
                    <li className="page-item">
                        <a href="#" className="page-link">Хищные птицы</a>
                    </li>
                    <li className="page-item">
                        <a href="" className="page-link">Морские птицы</a>
                    </li>
                </ul>
            </header>
    )
}

export default Header
