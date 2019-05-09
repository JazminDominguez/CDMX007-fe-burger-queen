
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ReusableButton from './components/example_button'
import MenuComponent from './components/orderbutton'



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
        <ReusableButton className={"btn basicBurger menuButtonSize"} onClick={this.onClick} >
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
      </div>
    )
  }
}

export default ReusableComponents;
