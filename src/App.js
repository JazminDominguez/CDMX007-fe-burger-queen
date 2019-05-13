
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ReusableButton from './components/MenuButtons'
import LowerOptions from './components/LowerOptions'
import TicketArea from './components/TicketArea'
import TicketHead from './components/TicketHeader'
import TicketButton from './components/TicketButtons'


class ReusableComponents extends React.Component {

  onClick() {
    alert("Button was clicked");
  }

  render() {
    return (
      <div className="App">
        <div className="foodSection">
          <ReusableButton className={"btn basicBurger menuButtonSize"} onClick={this.onClick}>
            Button 1
          </ReusableButton>
          <ReusableButton className={"btn basicBurger menuButtonSize"} onClick={this.onClick} >
            Button 2
</ReusableButton>
          <ReusableButton className={"btn basicBurger menuButtonSize"} onClick={this.onClick}>
            Button 3
</ReusableButton>
          <ReusableButton className={"btn dobleBurger menuButtonSize"} onClick={this.onClick} >
            Button 4
</ReusableButton>
          <ReusableButton className={"btn dobleBurger menuButtonSize"} onClick={this.onClick} >
            Button 5
</ReusableButton>
          <ReusableButton className={"btn dobleBurger menuButtonSize"} onClick={this.onClick} >
            Button 6
</ReusableButton>

        </div>

        <div className="ticket_area">
        <TicketHead className={"ticket_area"}> </TicketHead>
        <TicketArea></TicketArea>
        <TicketButton></TicketButton>
        </div>


        <div className="optionMenu">
          <LowerOptions className={"btn low_button platillo"}></LowerOptions>
          <LowerOptions className={"btn low_button bebida"}></LowerOptions>
          <LowerOptions className={"btn low_button guarnicion"}></LowerOptions>
          <LowerOptions className={"btn low_button ok"}></LowerOptions>
          <LowerOptions className={"btn low_button extra"}></LowerOptions>
          <LowerOptions className={"btn low_button no_ingredientes"}></LowerOptions>
        </div>
      </div>

    
  


    )
  }
}
/*
class LowerComponents extends React.Component {

  onClick() {
    alert("Button was clicked");
  }

  render() {
    return (
      <div className="optionMenu">
      <LowerOptions className={"btn platillo"}></LowerOptions>
      </div>
    )}}
    */
export default ReusableComponents;

