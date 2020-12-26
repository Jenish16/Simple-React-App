import React from 'react'

const validationComponent = (props) =>{

    let validMsg = (<p>Text too short</p>)
    if(props.length > 5){
        validMsg = (<p>Text long enough</p>)       
    }
    return (
        <div>
            {validMsg}
        </div>
    )
}
export default validationComponent;