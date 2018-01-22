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
    this.state = {
      values: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange = (event, index, values) => {
    this.props.dispatch(filterItems(values, this.props.items))
    this.setState({values});
  }

  render() {
    const {values} = this.state;
    return (
      <Toolbar className={'main-tool'} 
        style={{backgroundColor: '#fff'}}>
        <ToolbarGroup firstChild={true}>
          <a href="/">
            <img className={'header-logo'} src={require("../../images/boomtown-logo.svg")}/>
          </a>
          {/* <DropDownMenu  value={undefined} onChange={this.handleChange}> */}
           
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
  tags: state.items.tags,
  itemsFilter: state.items.itemsFilter,
  error: state.items.error
 });

 export default connect(mapStateToProps)(HeaderBar);

