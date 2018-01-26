import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import HeaderBar from '../HeaderBar/HeaderBar.js';
import {filterItems} from '../../redux/modules/items';


export default class Select extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      values: []
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event, index, values) => {
    this.props.dispatch(filterItems(values, this.props.items))
    this.setState({values});
  }

  render(){
    const {values} = this.state;
    return (
    <SelectField 
    className={'field'} 
    floatingLabelText={'Filter By Tag'}
    onChange={this.handleChange}
    multiple={true}
    value={this.props.tags}
        >
    
      <MenuItem  insetChildren checked={values && values.indexOf('Electronics') > -1} value={"Electronics"} primaryText={"Electronics"} />
      <MenuItem  insetChildren checked={values && values.indexOf('Musical Instruments') > -1} value={"Musical Instruments"} primaryText={"Musical Instruments"}/>
      <MenuItem  insetChildren checked={values && values.indexOf('Household Items') > -1} value={"Household Items"} primaryText={"Household Items"}/>
      <MenuItem  insetChildren checked={values && values.indexOf("Physical Media") > -1} value={"Physical Media"} primaryText={"Physical Media"}/>
      <MenuItem  insetChildren checked={values && values.indexOf('Recreational Equipment') > -1} value={"Recreational Equipment"}primaryText={"Recreational Equipment"} />
      <MenuItem  insetChildren checked={values && values.indexOf('Sporting Goods') > -1} value={"Sporting Goods"} primaryText={"Sporting Goods"}/>
      <MenuItem  insetChildren checked={values && values.indexOf('Tools') > -1} value={"Tools"} primaryText={"Tools"}/>
  </SelectField>
    );
  }

}


















//  const Select = ({values}) => (
// // const {values} = this.state;

//  <SelectField 
//  className={'field'} 
//  floatingLabelText={'Filter By Tag'}
//  onChange={this.handleChange}
//  multiple={true}
//  value={values}
//      >
 
//    <MenuItem  insetChildren checked={values && values.indexOf('Electronics') > -1} value={"Electronics"} primaryText={"Electronics"} />
//    <MenuItem  insetChildren checked={values && values.indexOf('Musical Instruments') > -1} value={"Musical Instruments"} primaryText={"Musical Instruments"}/>
//    <MenuItem  insetChildren checked={values && values.indexOf('Household Items') > -1} value={"Household Items"} primaryText={"Household Items"}/>
//    <MenuItem  insetChildren checked={values && values.indexOf("Physical Media") > -1} value={"Physical Media"} primaryText={"Physical Media"}/>
//    <MenuItem  insetChildren checked={values && values.indexOf('Recreational Equipment') > -1} value={"Recreational Equipment"}primaryText={"Recreational Equipment"} />
//    <MenuItem  insetChildren checked={values && values.indexOf('Sporting Goods') > -1} value={"Sporting Goods"} primaryText={"Sporting Goods"}/>
//    <MenuItem  insetChildren checked={values && values.indexOf('Tools') > -1} value={"Tools"} primaryText={"Tools"}/>
// </SelectField>
//    );
  

//   Select.propTypes = {
//     values: PropTypes.object.isRequired
//   }

//   export default Select;