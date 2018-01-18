import React from 'react';
import ItemCard from '../../components/ItemCard';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Gravatar from 'react-gravatar';
// import ItemsContainer from './Items';


const Profile = ({list}) => { //******/

   list[0] ? console.log(list[0].itemowner.fullname) : console.log('');

  return(
    <div className={'user-profile'}>

      <div className={'user-card-container'}>
        <Card className={'user-card'}>
          {/* <CardHeader
          title={list[0] && list[0].itemowner.fullname}
          subtitle={list[0] && list[0].itemowner.bio}
          avatar={<Gravatar email={list[0] && list[0].itemowner.email}
       />}
       /> */}
         <div className={'flex-container'}>
          <h1 className={'user-name'}> {list[0] && list[0].itemowner.fullname}</h1>
          <p> {list[0] && list[0].itemowner.bio}</p>

          <div className={'share'}>
            <p> x items shared</p>
            <p> x items borrowed</p>
          </div>
        </div>

          <Gravatar className={'grav'} email={list[0] && list[0].itemowner.email}/>
          
        </Card>
      </div>
    
      
   <div className={'list-container'}>
     <Masonry>
        
      {list.map(item => <li 
      
      key={item.id}
      className={'single-item'}>
      <ItemCard item={item} key={item.id}/></li>)}
    </Masonry>
  </div>

  </div>
);
}

Profile.propTypes = {
  list: PropTypes.array.isRequired
}
 

export default Profile;