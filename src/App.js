
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ReusableButton from './components/MenuButtons'
import MenuTypes from './components/LowerOptions'
import TicketArea from './components/TicketArea'
import TicketHead from './components/TicketHeader'
import TicketButton from './components/TicketButtons'
import TicketUser from './components/TicketUser'
import Header from './components/Encabezado'
//import ItemList from './components/FetchedJSON'
import { itemList } from './Menu'
console.log(itemList)



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      itemList
    };
    this.onClickOptions = this.onClickOptions.bind(this);

  }


  onClickOptions = (e) => {
    console.log(e.target.id);
  }

  typeButtons(e) {
    console.log(e.target.id);
  }
  render() {

    const itemType = {
      food: 'food',
      drink: 'beverage',
      addings: 'addings',
      extras: 'extras',
      noIngridient: 'ingridient',
      breakfast: 'breakfast',
      meal: 'meal'
    };




    let filterByTime = this.state.itemList.filter((itemList, i) => {
      return itemList.time === "meal"
    });
    const time = filterByTime.map((itemList, i) => {
      return <button key={itemList.id} id={itemList.id} className={"btn basicBurger menuButtonSize"} onClick={this.onClickOptions}> {itemList.name} </button>
    })

    //comida---
    let foodFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === 'food' && itemList.time === "meal"
    });
    const foodList = foodFilter.map((itemList, i) => {
      return <div key={itemList.id} id={itemList.id} className={"btn basicBurger menuButtonSize"} onClick={this.onClickOptions}> <span className="button_text">{itemList.name}</span> </div>
    })
    //ingredientes---
    let ingredientsFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === 'ingredients'
    });
    const ingridientsList = ingredientsFilter.map((itemList, i) => {
      return <button key={itemList.id} id={itemList.id} className={"btn no_ing menuButtonSize"} onClick={this.onClickOptions}> {itemList.name} </button>
    })
    //extras---
    let extrasFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === 'extras'
    });
    const extrasList = extrasFilter.map((itemList, i) => {
      return <button key={itemList.id} id={itemList.id} className={"btn extra menuButtonSize"} onClick={this.onClickOptions}> {itemList.name} </button>
    })
    //guarnición---
    let addingsFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === 'addings' && itemList.time === "meal"
    });
    const addingsList = addingsFilter.map((itemList, i) => {
      return <button key={itemList.id} id={itemList.id} className={"btn guarnicion menuButtonSize"} onClick={this.onClickOptions}> {itemList.name} </button>
    })
    //bebidas---
    let drinksFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === 'beverage' && itemList.time === "meal"
    });
    const drinksList = drinksFilter.map((itemList, i) => {
      return <button key={itemList.id} id={itemList.id} className={"btn bebida menuButtonSize"} onClick={this.onClickOptions}> {itemList.name} </button>
    })

    console.log('este es el map del filtrado', time)


    return (
      <div className="App">
        <Header>

        </Header>

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

        <div className="ticket_area">

          <TicketHead className={"ticket_area"}> </TicketHead>
          <TicketUser></TicketUser>
          <TicketArea>

          </TicketArea>
          <TicketButton></TicketButton>
        </div>



      </div>





    )
  }
}

export default App;

