// import React, {Component} from 'react';

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link
//   } from 'react-router-dom';

// export default class HeaderBar extends Component {
//   render() {
//     return <div> 
//       <ul>
//         <li><Link to='/login'>Login</Link></li>
//         <li><Link to='/'>Home</Link></li>
//       </ul>
     
//        </div>;
//   }
// }

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
            
              <MenuItem value={1} primaryText="All Broadcasts" />
              <MenuItem value={2} primaryText="All Voice" />
              <MenuItem value={3} primaryText="stuff" />
              <MenuItem value={4} primaryText="Complete Voice" />
              <MenuItem value={5} primaryText="Complete Text" />
              <MenuItem value={6} primaryText="Active Voice" />
              <MenuItem value={7} primaryText="Active Text" />
          </SelectField>
          {/* </DropDownMenu> */}
        </ToolbarGroup>
        <ToolbarGroup>
          {/* <ToolbarTitle text="Options" /> */}
          <FontIcon className="muidocs-icon-custom-sort" />
          {/* <ToolbarSeparator /> */}

          <div className={'button-container'}>
          <Link to='/'>
            <RaisedButton 
            className={'profile-button'} label="My Profile" primary={true}
           
            />
          </Link>

          {/* <ToolbarSeparator /> */}
          

          <Link to='/login'>
             <RaisedButton className={'login-button'} label="Login" backgroundColor='black' labelColor="#fff"/>
          </Link>
        </div>

          

          {/* <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          > */}
            {/* <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu> */}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}