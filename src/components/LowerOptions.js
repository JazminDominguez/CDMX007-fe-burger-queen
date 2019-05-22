import React from 'react';






const MenuTypes =(props) =>{
  
  let types = this.state.itemList.filter( function (itemList) {
    return itemList.time === {props}
  });

  const typeMap = types.map((itemList, i)=> {
    return ( 
      <button key={i} id={itemList.id} className={"btn basicBurger menuButtonSize"} onClick={this.onClickOptions}>
      {itemList.name}
      </button>
    )})
  
    return(
      {typeMap}

  

    )
}
export default MenuTypes;
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
