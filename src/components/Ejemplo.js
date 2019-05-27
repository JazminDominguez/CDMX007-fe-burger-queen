import React from 'react';
import { itemList } from './Menu'


class Menu extends React.Component {

  constructor() {
    super();
    this.state = {
      itemList
    };

  }

  idButtons=(e)=> {
    console.log(e.target.id)
    
  }


 
  render() {

    const itemType = {
      food: 'food',
      drink: 'beverage',
      addings: 'addings',
      extras: 'extras',
      noIngridient: 'ingredients',
      breakfast: 'breakfast',
      meal: 'meal'
    };

 


    let filterByTime = this.state.itemList.filter((itemList, i) => {
      return itemList.time === itemType.meal
    });
    const time = filterByTime.map((itemList, i) => {
      return <button key={itemList.id} id={itemList.id} className={"btn basicBurger menuButtonSize"} onClick={this.idButtons}> {itemList.name} </button>
    })

    //comida---
    let foodFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === itemType.food && itemList.time === itemType.meal
    });
    const foodList = foodFilter.map((itemList, i) => {
      return <div key={itemList.id} id={itemList.id} className={"btn text-break basicBurger menuButtonSize"} onClick={this.idButtons}><img className="menuButton_inline" src={itemList.img}></img><span className="menuButton_inline buttonText">{itemList.name}</span></div>
    })
    //ingredientes---
    let ingredientsFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === itemType.noIngridient
    });
    const ingridientsList = ingredientsFilter.map((itemList, i) => {
      return <button key={itemList.id} id={itemList.id} className={"btn no_ing menuButtonSize"} onClick={this.idButtons}><img className="menuButton_inline" src={itemList.img}></img><span className="menuButton_inline buttonText">{itemList.name}</span></button>
    })
    //extras---
    let extrasFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === itemType.extras
    });
    const extrasList = extrasFilter.map((itemList, i) => {
      return <button key={itemList.id} id={itemList.id} className={"btn extra menuButtonSize"} onClick={this.idButtons}><img className="menuButton_inline" src={itemList.img}></img><span className="menuButton_inline buttonText">{itemList.name}</span></button>
    })
    //guarnición---
    let addingsFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === itemType.addings && itemList.time === itemType.meal
    });
    const addingsList = addingsFilter.map((itemList, i) => {
      return <button key={itemList.id} id={itemList.id} className={"btn guarnicion menuButtonSize"} onClick={this.idButtons}> <img className="menuButton_inline" src={itemList.img}></img><span className="menuButton_inline buttonText">{itemList.name}</span> </button>
    })
    //bebidas---
    let drinksFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === itemType.drink && itemList.time === itemType.meal
    });
    const drinksList = drinksFilter.map((itemList, i) => {
      return <button key={itemList.id} id={itemList.id} className={"btn bebida menuButtonSize"} onClick={this.idButtons}> <img className="menuButton_inline" src={itemList.img}></img><span className="menuButton_inline buttonText">{itemList.name}</span> </button>
    })



    return (
 
        <div className="foodSection">

          <div className="list_placement"> <p className="fuente list_name">Hamburguesas</p>
            {foodList}
          </div>
          <div className="list_placement"> <p className="fuente list_name">Sin ingredientes</p>
            {ingridientsList}
          </div>
          <div className="list_placement"> <p className="fuente list_name">extras</p>
            {extrasList}
          </div>
          <div className="list_placement"> <p className="fuente list_name">Guarnición</p>
            {addingsList}
          </div>
          <div className="list_placement"> <p className="fuente list_name">Bebidas</p>
            {drinksList}
          </div>

        </div>
          )
  }
}

export default Menu;

