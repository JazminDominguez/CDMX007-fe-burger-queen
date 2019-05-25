
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ReusableButton from './components/MenuButtons'
import TicketArea from './components/TicketArea'
import TicketHead from './components/TicketHeader'
import TicketButton from './components/TicketButtons'
import TicketUser from './components/TicketUser'
import Header from './components/Encabezado'
//import ProductList from './components/DataController'
import { itemList } from './Menu'
console.log(itemList)



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      itemList,
      order: [],
      ticketSum: [],
      totalTicket: [],
      client: [],
    };

  }




  idButtons=(papitas)=> {
    const order = this.state.order
    order.push(papitas)
    this.setState({order})
    console.log(papitas)

    const ticketSum = this.state.ticketSum
    ticketSum.push(papitas.price)
    this.setState({ticketSum})
    console.log(ticketSum)


/*
if (this.state.ticketSum.length !== 0) {
  this.state.ticketSum.reduce((total, value)=>{
     return total + value
   });}
   console.log(totalTicket)
*/
  }


  handleChange(event) {
    this.setState({client: event.target.value})
  }

//prueba para ticket
 
  //evento para  modificar la cantidad


 
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
      return <button key={itemList.id} id={itemList.id} className={"btn basicBurger menuButtonSize"} onClick={()=>this.idButtons(itemList.id)}> {itemList.name} </button>
    })

    //comida---
    let foodFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === itemType.food && itemList.time === itemType.meal
    });
    const foodList = foodFilter.map((itemList, i) => {
      return <button 
        key={itemList.id}
        id={itemList.id}
        className={"btn text-break basicBurger menuButtonSize"} 
        onClick={()=>this.idButtons(itemList)}>
          <img className="menuButton_inline" src={itemList.img}></img><span></span></button>
    })
    //ingredientes---
    let ingredientsFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === itemType.noIngridient
    });
    const ingridientsList = ingredientsFilter.map((itemList, i) => {
      return <button 
      key={itemList.id}
      id={itemList.id}
      className={"btn text-break no_ing menuButtonSize"} 
      onClick={()=>this.idButtons(itemList)}>
        <img className="menuButton_inline" src={itemList.img}></img><span></span></button>
  })
    //extras---
    let extrasFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === itemType.extras
    });
    const extrasList = extrasFilter.map((itemList, i) => {
      return <button 
      key={itemList.id}
      id={itemList.id}
      className={"btn text-break extra menuButtonSize"} 
      onClick={()=>this.idButtons(itemList)}>
        <img className="menuButton_inline" src={itemList.img}></img><span ></span></button>
  })
      //guarnición---
    let addingsFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === itemType.addings && itemList.time === itemType.meal
    });
    const addingsList = addingsFilter.map((itemList, i) => {
      return <button 
      key={itemList.id}
      id={itemList.id}
      className={"btn text-break guarnicion menuButtonSize"} 
      onClick={()=>this.idButtons(itemList)}>
        <img className="menuButton_inline" src={itemList.img}></img><span></span></button>
  })
      //bebidas---
    let drinksFilter = this.state.itemList.filter((itemList, i) => {
      return itemList.type === itemType.drink && itemList.time === itemType.meal
    });
    const drinksList = drinksFilter.map((itemList, i) => {
      return <button 
      key={itemList.id}
      id={itemList.id}
      className={"btn text-break bebida menuButtonSize"} 
      onClick={()=>this.idButtons(itemList)}>
        <img className="menuButton_inline" src={itemList.img}></img><span></span></button>
  })



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
      
          <div className="ticket_icon_user">
         <div className="user_icon icons"  id="uicon"></div>
          <div className="client_name fuente d-inline" id="client">
                <input type="text" class="input-box fuente" value={this.state.client}  onChange={this.handleChange.bind(this)} placeholder="Nombre del cliente"></input> 
                </div>
                </div>
        

       
          <div className="order_area fuente">ORDEN</div>
          <span className="fuente">Cliente: {this.state.client}</span>
            <div className="ticket_items fuente"> #   Item   Costo</div>
            <div className="count_area">
            <div className="fuente">
        <ul>
          {
            this.state.order.map(element => (
              <div className="order">
              <article className="order order_elements" key>{element.name}  ${element.price}</article>
              </div>
            ))
          }
          </ul>
         
        </div>  
            </div>
         
          
            <div className="ticket_buttonArea">
                <button type="button" className="btn ok low_button" >Cancelar</button>
                <button type="button" className="btn ok low_button" >Confirmar</button>
            </div>
        </div>



      </div>





    )
  }
}

export default App;

