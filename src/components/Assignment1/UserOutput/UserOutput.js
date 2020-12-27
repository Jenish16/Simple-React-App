import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Hii, I'm {props.userName}</p>
            <p>Welcome</p>
        </div>
    );

}

export default userOutput;