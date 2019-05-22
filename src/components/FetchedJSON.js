import React from 'react';
import axios from 'axios';
import ReusableButton from '../components/MenuButtons'



export default class Products extends React.Component {
  state = {
         items: []
    }
  
    componentDidMount() {
      axios.get(`./menu.json`)
        .then(res => {
          const items = res.data;
          this.setState({ items });
          console.log(items)
        })
    }
  
    render() {
      return (
        
          this.state.items.map(items => {
            return(
              <button className={"btn basicBurger menuButtonSize"} onClick={this.onClick} >{items.name}</button>
            )
          } )
   
      )
    }
  }