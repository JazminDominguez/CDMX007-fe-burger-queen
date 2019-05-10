import React from 'react';
import { ok } from 'assert';
//import Menu from ' .Menu.js';





const LowerMenu =(props) =>{
    return(
        <div className="low_button_position">
        <button className={props.className} onClick={props.onClick}></button>
        </div>
    )
}
export default LowerMenu;
/*
LowerMenu.propTypes = {
    name: PropTypes.string,
  };

platillo
bebida
guarnición
ok
Extra
sin ingredientes*/
