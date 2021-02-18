import React, { Component /*,Fragment*/ } from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClassv2';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        console.log(this.context.authenticated);
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('[Person.js] rendering ...');
        // return (
        //     <div className={classes.Person}>
        //         <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old !</p>
        //         <p>{this.props.children}</p>
        //         <input type='text' onChange={this.props.changed} value={this.props.name} />
        //     </div>
        // )

        //TO return adjacent element put them in array
        // return (
        //     [
        //         <p key="i1" onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old !</p>,
        //         <p key="i2" >{this.props.children}</p>,
        //         <input  key="i3" type='text' onChange={this.props.changed} value={this.props.name} />
        //     ]
        // )    

        //Wrap every thing in Aux component insted of div
        return (
            <Aux>
                { this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old !</p>
                <p>{this.props.children}</p>
                <input type='text' 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                    //ref = {(inputEl => {this.inputElement = inputEl})}
                    ref = {this.inputElementRef}/>
            </Aux>
        );

        //Wrap every thing in React.Fragment(provided by React no need to create) component insted of div
        // return (
        //     <Fragment>
        //         <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old !</p>
        //         <p>{this.props.children}</p>
        //         <input type='text' onChange={this.props.changed} value={this.props.name} />
        //     </Fragment>
        // );
    }

}

//Below is to make sure that we will pass correct props to our component
//If we pass wrong props it'll throw error in Development mode
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    isAuth:PropTypes.bool
};

export default withClass(Person, classes.Person);