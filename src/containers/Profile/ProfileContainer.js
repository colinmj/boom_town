import React, { Component } from 'react';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';

// import ItemsCard from '../../components/ItemCard';

const ITEMS_URL = 'http://localhost:3001/items';
const USERS_URL = 'http://localhost:3001/users';

export default class ProfileContainer extends Component {
  constructor(){
    super();
    this.state = {
      items: []
  };
}

  componentDidMount(){
    
        const items = fetch(ITEMS_URL).then(r => r.json());
        const users = fetch(USERS_URL).then(r => r.json());

        let ownerHash = this.props.match.params.id
      
        Promise.all([items, users]).then((response) => {
         
    
         const [itemList, userList] = response;
    
         const combined = itemList.map(item => {
           item.itemowner = userList.find(user => user.id === item.itemowner);
           return item;
         });

         const filtered = combined.filter((item)=> {
           if (item.itemowner.id === ownerHash){
             return item;
           } 
          
         });
    
        this.setState({ items: filtered});
         console.log(combined);
    
         
         
        })
    
       
    
      }

  render(){
    return <Profile
    list={this.state.items}/>
  }
}

