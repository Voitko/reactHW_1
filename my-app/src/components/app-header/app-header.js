import React from 'react'
import './app-header.css';

class AppHeader extends React.Component {
    render() {
        return (
            <header>
                <nav className="menu">
                    <ul className="menu-wrapper">
                        <li className='menu-item'>Главная</li>
                        <li className='menu-item'>О нас</li>
                        <li className='menu-item'>Контакты</li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default AppHeader;