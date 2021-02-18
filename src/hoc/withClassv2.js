import React from 'react'

//Another way to create HOC(Higher Order Component)
const withClass = (WrappedComponent, className) =>  {
    return props =>(
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
 }

 export default withClass;
 