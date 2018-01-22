
import React, { Component } from 'react';
import Profile from './Profile';
import {profileItemsAndUsers} from '../../redux/modules/profile';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// import ItemsCard from '../../components/ItemCard';




class ProfileContainer extends Component {
  static propTypes = {};
  constructor(props){
    super(props);
    this.state = {
      userId: this.props.match.params.id,
      borrow: this.props.borrowed
    }
  }

  componentDidMount(){
   this.props.dispatch(profileItemsAndUsers(this.state.userId, this.state.borrow));
   
  }

 

  

  

  
  render(){
    if (this.props.isLoading) return <p>Loading</p>;
    return <Profile 
    list={this.props.items}
    borrowed={this.props.borrowed}/>;
    
  }
}

const mapStateToProps = (state) => ({
 isLoading: state.profile.isLoading,
 items: state.profile.items,
 borrowed: state.profile.borrowed, // what is going on hereeeeee
 error: state.profile.error
});



export default connect(mapStateToProps)(ProfileContainer);

































// import React, { Component } from 'react';
// import Profile from './Profile';
// import {profileItemsAndUsers} from '../../redux/modules/profile';
// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

// export default class ProfileContainer extends Component {
//   constructor(){
//     super();
//     this.state = {
//       items: []
//   };
// }

//   componentDidMount(){

//     const ITEMS_URL = 'http://localhost:3001/items';
//     const USERS_URL = 'http://localhost:3001/users/';
    
//         const items = fetch(ITEMS_URL).then(r => r.json());
//         const users = fetch(USERS_URL).then(r => r.json());

//         let ownerHash = this.props.match.params.id
      
//         Promise.all([items, users]).then((response) => {
         
    
//          const [itemList, userList] = response;
    
//          const combined = itemList.map(item => {
//            item.itemowner = userList.find(user => user.id === item.itemowner);
//            return item;
//          });

//          const filtered = combined.filter((item)=> {
//            if (item.itemowner.id === ownerHash){
//              return item;
//            } 
          
//          });
    
//         this.setState({ items: filtered});
//          console.log(combined);
//       })
//       }
//       render(){
//     return <Profile
//     list={this.state.items}/>
//   }
// }
