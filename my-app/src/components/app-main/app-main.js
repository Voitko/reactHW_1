import React from 'react'
import './app-main.css'
import Button from '../button';
class AppMain extends React.Component {
    render() {
        return (
            <main>
                <div className='main-wrapper'>
                    <h1 className='main-title'>Welcome to this page!</h1>
                    <Button />
                </div>
            </main>
        )
    }
}

export default AppMain;