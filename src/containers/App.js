import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../components/hoc/withClassv2'
import Aux from '../components/hoc/Aux'
class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] construction');
    this.state = {
      persons: [
        { id: 'qwe', name: 'Jenish', age: 23 },
        { id: 'asd', name: 'Saurav', age: 22 },
        { id: 'zxc', name: 'Hardik', age: 24 }
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      changeCounter : 0
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props)
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Saurav Ghodasara', age: 22 },
        { name: 'Hardik Kotadiya', age: 24 }
      ]
    });
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

    this.setState((prevState,props)=>{
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>; 
    }

    return (     
        // <WithClass classes={classes.App}>
        //   <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
        //   {this.state.showCockpit? <Cockpit 
        //     title = {this.props.appTitle}
        //     showPersons = {this.state.showPersons}
        //     personsLength = {this.state.persons.length}
        //     clicked = {this.togglePersonHandler}/> : null}
        //   {persons}
        // </WithClass>  

        //Another way to return HOC
        <Aux>
          <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
          {this.state.showCockpit? <Cockpit 
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            personsLength = {this.state.persons.length}
            clicked = {this.togglePersonHandler}/> : null}
          {persons}
        </Aux>  
    );   
  }

}
export default withClass(App,classes.App);