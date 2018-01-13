import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../../components/ItemCard/ItemCard';
import Masonry from 'react-masonry-component';
import Styles from './styles.js';
import Style from './style.css';



const masonryOptions = {
  transitionDuration: 2000
};

const Items = ({list}) => (
  <div 
  /* style={Styles.ListContainer} */
  className={'list-container'}>
    
    <Masonry
    
    options={masonryOptions}
    elementType={'ul'}
    >
     {list.map(item => <li 
     /* style={Styles.SingleItem} */
     key={item.id}
     className={'single-item'}>
    <ItemCard style={Styles.ItemCard} item={item} key={item.id}/></li>)}
    </Masonry>
  </div>
);


Items.propTypes = {
  list: PropTypes.array.isRequired
}

export default Items;

// this is a function that react calls when it renders



