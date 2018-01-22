import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
    Route,
    Switch
    } from 'react-router-dom';



import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import Profile from './containers/Profile';
import { Provider } from 'react-redux';
import store from './redux/store';


// injectTapEventPlugin();

// import ItemsContainer from './containers/Items';
import Items from "./containers/Items";



const Boomtown = () => (
<MuiThemeProvider muiTheme={muiTheme}>
 <Provider store={store}>
  <Router>
  

  
    <div> 
      <Route exact path="/login" component={Login}/>
      
        <Layout>
       

            {/* <Login /> */}
            
              <Switch>
                 
                  <Route exact path="/" component={Items}/> // this means at the route url

                  <Route exact path="/profile/:id" component={Profile} />
                  {/* <Route exact path="/share" component={} />  */}
                  <Route exact path="*" component={NotFound}/>


             </Switch>
                

            
        </Layout>
      </div>
    </Router>
  </Provider>
 </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
