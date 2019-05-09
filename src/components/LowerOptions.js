import React from 'react';

const LowerMenu =(props) =>{
    return(
        <div className="optionMenu">
        <button className={props.className} onClick={props.onClick}></button>
        </div>
    )
}
export default LowerMenu;