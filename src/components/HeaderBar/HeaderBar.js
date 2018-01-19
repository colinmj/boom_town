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
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
  } from 'react-router-dom';

  import {connect} from 'redux';

 export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar className={'main-tool'} 
        style={{backgroundColor: '#fff'}}>
        <ToolbarGroup firstChild={true}>
          <a href="/">
            <img className={'header-logo'} src={require("../../images/boomtown-logo.svg")}/>
          </a>
          {/* <DropDownMenu  value={undefined} onChange={this.handleChange}> */}
            <SelectField className={'field'} floatingLabelText={'Filter By Tag'}>
            
              <MenuItem value={1} primaryText="Electronics" />
              <MenuItem value={2} primaryText="Musical Instruments" />
              <MenuItem value={3} primaryText="Household Items" />
              <MenuItem value={4} primaryText="Physical Media" />
              <MenuItem value={5} primaryText="Recreational Equipment" />
              <MenuItem value={6} primaryText="Sporting Goods" />
              <MenuItem value={7} primaryText="Tools" />
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

