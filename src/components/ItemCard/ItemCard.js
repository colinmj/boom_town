import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';
import Styles from './styles.js';
import moment from 'moment';
import Gravatar from 'react-gravatar';

const ItemCard = ({item}) => (
  <div key={item.id}>
    <Card>
    
      <CardHeader
        title={item.itemowner.fullname}
        subtitle={moment(item.created).fromNow()}
        avatar={<Gravatar email={item.itemowner.email}
       />}
        />
        
      <CardMedia>
        <img src={item.imageurl} alt="image" />
      </CardMedia>
      <CardTitle
        title={item.title}
        subtitle={item.tags[0]}
      />
      <CardText>{item.description}</CardText>
      <CardActions>
        <button className="borrow-button" label="Borrow">
          Borrow
        </button>
        <button className="borrow-button" label="rm -fr *">
          rm -fr *
        </button>
      </CardActions>
    </Card>
  </div>
);

ItemCard.propTypes = {
  item: PropTypes.object.isRequired
}

export default ItemCard;






















// import React, {Component} from 'React';

// export default class ItemCard extends Component {
//   render() {
//     return (
//       <div> 
//       <ul>
//       {this.props.list.map(item => {
//         return (
//            <div key={item.id}>
//              <p>{item.title}</p>
//              <p>{item.description}</p>
//              <img src={item.imageurl} alt={item.description}/>
//            </div>
           
        
//         );
//       })}
//       </ul>
//      </div>
//     )
//   }
// }