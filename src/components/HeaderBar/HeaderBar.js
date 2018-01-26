import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SelectField from 'material-ui/SelectField';
import {filterItems} from '../../redux/modules/items';
import Select from '../Select';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
  } from 'react-router-dom';

  import {connect} from 'react-redux';
  

  class HeaderBar extends React.Component { //*
    constructor(props) {
    super(props);
   
    this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange = (event, index, values) => {
   this.props.dispatch(filterItems(values));
    console.log(values);
    
  }

  render() {
    
    return (
      <Toolbar className={'main-tool'} 
        style={{backgroundColor: '#fff'}}>
        <ToolbarGroup firstChild={true}>
          <a href="/">
            <img className={'header-logo'} src={require("../../images/boomtown-logo.svg")}/>
          </a>
          {/* <DropDownMenu  value={undefined} onChange={this.handleChange}> */}
           
            {/* <Route exact path='/' component={Select}/> */}

           
            
            <SelectField 
            className={'field'} 
            floatingLabelText={'Filter By Tag'}
            onChange={this.handleChange}
            multiple={true}
            value={this.props.selectedTags}>

            
              {
                
                this.props.itemsFilter.map((tag) => {
                  return (
                    <MenuItem checked={this.props.selectedTags.find((t) => {
                       t.id === tag.id})}
                       key={tag.id} value={tag.title} primaryText={tag.title}/>
                  )
                })
              }
              
          </SelectField>
            
           
            
          {/* </DropDownMenu> */}
        </ToolbarGroup>
        <ToolbarGroup>
          {/* <ToolbarTitle text="Options" /> */}
          <FontIcon className="muidocs-icon-custom-sort" />
          {/* <ToolbarSeparator /> */}

          <div className={'button-container'}>
          <Link to='/profile/eEvh1WUF5nb5eeUksUQb3Ph0kOU2' >
            <RaisedButton 
            className={'profile-button'} label="My Profile" primary={true}
            />
          </Link>

          {/* <ToolbarSeparator /> */}
          

          <Link to='/login'>
             <RaisedButton className={'login-button'} label="Login" backgroundColor='black' labelColor="#fff"/>
          </Link>
        </div>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.items.isLoading,
  items: state.items.items,
  selectedTags: state.items.selectedTags,
  itemsFilter: state.items.itemsFilter,
  error: state.items.error
 });

 export default connect(mapStateToProps)(HeaderBar);

