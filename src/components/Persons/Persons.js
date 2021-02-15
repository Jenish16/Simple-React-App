import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {

    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps',props)
    //     return state;
    // }

    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons){
            return true;  // renders only if there is change in persons
        }else{
            return false;
        
        }
    }//Insted of using shouldComponentUpdate we can extend PureComponent which is simple Component with shouldComponentUpdate and props check
    

    
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message : 'Snapshot!!!'};
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log('[Persons.js] Snapshot:',snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering ...');
        return (this.props.persons.map((person, index) => {

            return (
                <Person
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    click={() => this.props.clicked(index)}
                    changed={(event => this.props.changed(event, person.id))} />
                )
            })
        ); 
    }
}
export default Persons;