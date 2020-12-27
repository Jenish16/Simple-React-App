import React, { Component } from 'react';
//import {useState} from 'react'
import classes from './App.css';
import Person from '../components/Persons/Person/Person'
//import Radium, { StyleRoot } from 'radium'
//import styled from 'styled-components'
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

// const StyledButton = styled.button`
//   background-color: ${props=> props.alt ? 'red' : 'green'};
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
  
//   &:hover {
//     background-color: ${props=> props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

/////
//state using class component
/////
class App extends Component {
  state = {
    persons: [
      { id: 'qwe', name: 'Jenish', age: 23 },
      { id: 'asd', name: 'Saurav', age: 22 },
      { id: 'zxc', name: 'Hardik', age: 24 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    // Don't do personsState  --> personsState.state.persons[0].name='Jenish Vaghasia'
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Saurav Ghodasara', age: 22 },
        { name: 'Hardik Kotadiya', age: 24 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    let btnClass = '';
    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    //Conditional content prefered way
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          {/* Dynamic way of randring array */}
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    click={() => this.deletePersonHandler(index)}
                    changed={(event => this.nameChangedHandler(event, person.id))} />
                // <ErrorBoundary key={person.id}>
                //   <Person
                //     name={person.name}
                //     age={person.age}
                //     click={() => this.deletePersonHandler(index)}
                //     changed={(event => this.nameChangedHandler(event, person.id))} />
                // </ErrorBoundary>
              );
            })
          }

          {/* Static way of rendring array // Not recommended
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Jenish V.')}
            changed={this.nameChangedHandler}>My Hobbies : Cricket</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      );
      
      btnClass = classes.Red;
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

    }

    const assinedClasses = [];
    if (this.state.persons.length <= 2) {
      //assinedClasses.push('red');
      assinedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      //assinedClasses.push('bold');
      assinedClasses.push(classes.bold);
    }

    return (
      //<StyleRoot>
        //<div className="App">
        <div className={classes.App}>
          <h1>Hello, I'm react App </h1>
          <p className={assinedClasses.join(' ')}>This is really working!!!</p>
          <button className={btnClass}
            onClick={this.togglePersonHandler}>Toggle Persons</button>
          {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Persons</StyledButton> */}
          {/* //Button Styling using Radium
          <button
            style={style}
            onClick={this.togglePersonHandler}>Toggle Persons</button> */}
          {/* <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Jenish Vaghasia')}>Switch Name</button> */}
          {/* <button onClick={() => this.switchNameHandler('Jenish Vaghasia')}>Switch Name</button> // This is not recommended */}
          {/* Conditional content with ternary operator // Not good for complex component
        {
          this.state.showPersons ?
          <div > 
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Jenish V.')}
              changed={this.nameChangedHandler}>My Hobbies : Cricket</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null
        } */}

          {persons}

        </div>
     // </StyleRoot>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hello I\'m react App !!!'))
  }
}

//export default Radium(App);
export default App;


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
