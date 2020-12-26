import React ,{useState,Component} from 'react';
import './App.css';
import Person from './Person/Person'

// ///////
// //state using function component
// ///////
// const app = props =>
// {
//   const [personsState,setPersonsState] = useState(
//     {
//       persons : [
//         {name: 'Jenish' , age : 23},
//         {name: 'Saurav' , age : 22},
//         {name: 'Hardik' , age : 24}
//       ]
//     }
//   )
//   const [otherState,setOtherState] = useState(
//     {otherState : 'some other value'}
//   )
//   console.log(personsState,otherState)
//   const switchNameHandler = () =>{

//     setPersonsState({
//       persons : [
//         {name: 'Jenish Vaghasia' , age : 23},
//         {name: 'Saurav Ghodasara' , age : 22},
//         {name: 'Hardik Kotadiya' , age : 24}
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hello, I'm react App </h1>
//       <p>This is really working!!!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person 
//         name={personsState.persons[0].name} 
//         age={personsState.persons[0].age} />
//       <Person 
//         name={personsState.persons[1].name} 
//         age={personsState.persons[1].age} >My Hobbies : Cricket</Person>
//       <Person 
//         name={personsState.persons[2].name} 
//         age={personsState.persons[2].age} />
//     </div>
//   );
// }

// export default app;


/////
//state using class component
/////
class App extends Component {
  state={
    persons : [
      {name: 'Jenish' , age : 23},
      {name: 'Saurav' , age : 22},
      {name: 'Hardik' , age : 24}
    ],
    otherState : 'some other value'
  }

  switchNameHandler = (newName) =>{
    //console.log('Was clicked');
    // Don't do personsState  --> personsState.state.persons[0].name='Jenish Vaghasia'
    this.setState({
      persons : [
        {name: newName , age : 23},
        {name: 'Saurav Ghodasara' , age : 22},
        {name: 'Hardik Kotadiya' , age : 24}
      ]
    })
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons : [
        {name: 'Jenish' , age : 23},
        {name: event.target.value , age : 22},
        {name: 'Hardik' , age : 24}
      ]
    })
  } 

  render() {

    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello, I'm react App </h1>
        <p>This is really working!!!</p>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this,'Jenish Vaghasia')}>Switch Name</button>
        {/* <button onClick={() => this.switchNameHandler('Jenish Vaghasia')}>Switch Name</button> // This is not recommended */ }
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this,'Jenish V.')}
          changed={this.nameChangedHandler}>My Hobbies : Cricket</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hello I\'m react App !!!'))
  }
}

export default App;
