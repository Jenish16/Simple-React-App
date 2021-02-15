import React, { Component /*,Fragment*/} from 'react';
import Aux from '../../hoc/Aux'
import withClass from '../../hoc/withClassv2'
import classes from './Person.css'

class Person extends Component {
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
                <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old !</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name} />
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

export default withClass(Person,classes.Person);