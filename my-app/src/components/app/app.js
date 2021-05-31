import React from 'react'
import './app.css';
import AppHeader from '../app-header';
import AppNavigation from '../app-navigation';
import AppMain from '../app-main';

class App extends React.Component{
    render() {
        return (
            <div className='container'>
                <AppHeader />
                <div className='center-block'>
                    <AppNavigation />
                    <AppMain />
                </div>
            </div>
        )
    }
}
export default App;