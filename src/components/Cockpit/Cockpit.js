import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        const timer = setTimeout(()=>{
            console.log('Saved data to cloud');
        },1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    },[])  // runs only in first render

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
       
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })   //runs at every render

    const assinedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {

        assinedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {

        assinedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assinedClasses.join(' ')}>This is really working!!!</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}
export default React.memo(cockpit);  // memo -react will store copy so if input didn't change but parent component updates reacte will return that copy