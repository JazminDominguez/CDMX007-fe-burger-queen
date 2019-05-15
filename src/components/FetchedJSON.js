import React from 'react';

import axios from 'axios';


export default class ItemList extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios.get(`./menu.json`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }

  render() {
    return (
      <ul className="fuente">
        { this.state.items.map(items => <li key={items.id}>{items.name}</li>)}
      </ul>
    )
  }
}