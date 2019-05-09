import React from 'react';

const ReusableButton =(props) =>{
    return(
        <button className={props.className} onClick={props.onClick}> {props.buttonText} </button>
    )
}
export default ReusableButton;