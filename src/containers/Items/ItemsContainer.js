import React, { Component } from 'react';
import Items from './Items';
import PropTypes from 'prop-types';
import { fetchItemsAndUsers } from '../../redux/modules/items'
import {connect} from 'react-redux';



class ItemsContainer extends Component {
  static propTypes = {};

  componentDidMount(){
   this.props.dispatch(fetchItemsAndUsers());
  }
  
  render(){
    if (this.props.isLoading) return <p>Loading</p>;
    return <Items 
    list={this.props.items}/>;
  }
}

const mapStateToProps = (state) => ({
 isLoading: state.items.isLoading,
 items: state.items.items,
 error: state.items.error
});

export default connect(mapStateToProps)(ItemsContainer);







// export default class ItemsContainer extends Component {
//   constructor(){
//     super();
//     this.state = {
//       items: []
//     };
//   }

//   componentDidMount(){

//     const items = fetch(ITEMS_URL).then(r => r.json());
//     const users = fetch(USERS_URL).then(r => r.json());

//     Promise.all([items, users]).then((response) => {
     

//      const [itemList, userList] = response;

//      const combined = itemList.map(item => {
//        item.itemowner = userList.find(user => user.id === item.itemowner);
//        item.borrower ? item.borrower = userList.find(user => user.id === item.borrower) : 'error';
//        return item;
//      });

//     this.setState({ items: combined});
//      console.log(combined);
     
//     })
//    }
//   render(){
//     return <Items 
//     list={this.state.items}/>;
//   }
// }