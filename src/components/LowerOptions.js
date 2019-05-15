import React from 'react';

const LowerMenu =(props) =>{
    return(
        <div className="low_button_position">

        <button type="button" className={"btn low_button platillo"}>Platillo</button>
          <button type="button" className={"btn low_button bebida"}>Bebida</button>
          <button type="button" className={"btn low_button guarnicion"}>Guarnición</button>
          <button type="button" className={"btn low_button ok"}>OK</button>
          <button type="button" className={"btn low_button extra"}>Extras</button>
          <button type="button" className={"btn low_button no_ingredientes"}>Sin Ingredientes</button>
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
sin ingredientes

       <button className={props.className} onClick={props.onClick}></button>*/
