import React, { Component } from 'react';
import Items from './Items';

const ITEMS_URL = 'http://localhost:4000/items';
const USERS_URL = 'http://localhost:4000/users';

export default class ItemsContainer extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount(){

    const items = fetch(ITEMS_URL).then(r => r.json());
    const users = fetch(USERS_URL).then(r => r.json());

    


    Promise.all([items, users]).then((response) => {
     

     const [itemList, userList] = response;

     const combined = itemList.map(item => {
       item.itemowner = userList.find(user => user.id === item.itemowner);
       return item;
     });

    this.setState({ items: combined});
     console.log(combined);

     const filtered = combined.map((tag) => {
       const tags = tag.tags;
       
     })
     
    })

   

  }

  

  render(){
    return <Items 
    list={this.state.items}/>;
  }
}