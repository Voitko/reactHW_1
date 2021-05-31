import React from 'react'
import './app-navigation.css';

class AppNavigation extends React.Component {
    render() {
        return <nav className='navigation'>
            <ul className='navigation-wrapper'>
                { this.renderItems() }
            </ul>
        </nav>
    }
    renderItems() {
        let iArr = [];
        for(let i = 1; i < 11; i++) {
            iArr.push(<li className={'item-' + i}>nav{i}</li>);
        }
        return iArr;
    }
}

export default AppNavigation;