import React, { Component } from 'react'
import Validation from './ValidationComponent/ValidationComponent'
import Char from './CharComponent/CharComponent'

class App extends Component {

    state = {
        name : '',
    }

    textChangeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    removeCharHandler = (index) =>{
        console.log(index)
        const charArr = this.state.name.split('');
        charArr.splice(index,1);
        const text = charArr.join('');
        this.setState({
            name : text,
        })

    }

    render() {

        let chars = this.state.name.split('').map((char,index) => {
            return (
                <Char 
                    char={char}
                    click={()=>this.removeCharHandler(index)} />
            );
        })

        return (
            <div>
                <input type="text" onChange={this.textChangeHandler} value={this.state.name}/>
                <p>{this.state.name}</p>
                <Validation length={this.state.name.length} />
                {chars}
            </div>
        );
    }
}
export default App