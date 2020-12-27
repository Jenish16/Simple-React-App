import React, { Component } from 'react'

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css'

class App extends Component{

    state={
        userName:'superJenish'
    }

    userNameChangeHandler = (event) =>{
        this.setState({
            userName:event.target.value
        })
    }

    render() {

        return (
            <div className="App">
                <UserInput changed={this.userNameChangeHandler} userName={this.state.userName}/>
                <UserOutput userName={this.state.userName}/>
                <UserOutput userName={this.state.userName}/>
                <UserOutput userName="Hardik"/>
            </div>
        );
    }
}
export default App;