//ACTIONS

const GET_PROFILE_LOADING = 'GET_ITEMS_LOADING';
const GET_PROFILE = 'GET_PROFILE';
const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';

//ACTION CREATORS
const getProfileLoading = () => ({
 type: GET_PROFILE_LOADING
})
const getProfile = (items) => ({
 type: GET_PROFILE,
 payload: items
})
const getProfileError = (error) => ({
 type: GET_PROFILE_ERROR,
 payload: error
})

//consts
const ITEMS_URL = 'http://localhost:3001/items';
const USERS_URL = 'http://localhost:3001/users/';
const items = fetch(ITEMS_URL).then(r => r.json());
const users = fetch(USERS_URL).then(r => r.json());
// let ownerHash = this.state.match.params.id

//async action creator, curried function
export const profileItemsAndUsers = (userId) => dispatch => {
  dispatch(getProfileLoading());
return Promise.all([items, users]).then((response) => {
    const [itemList, userList] = response;

    const combined = itemList.map(item => {
      item.itemowner = userList.find(user => user.id === item.itemowner);
      item.borrower ? item.borrower = userList.find(user => user.id === item.borrower) : 'error';
      return item;
    });

    const filtered = combined.filter((item)=> {
      if (item.itemowner.id === userId){
        return item;
      } 
     
    });

    

    dispatch(getProfile(filtered));
  }).catch( error => dispatch(getProfileError(error.message)))
};

export default (state = {
  isLoading: false,
  items: [],
  error: ''
}, action ) => {
  switch(action.type) {
    case GET_PROFILE_LOADING: {
      return {
        ...state,
        isLoading: true,
        error: ''
      }
  }
    case GET_PROFILE: {
      return {
        ...state,
        isLoading: false,
        items: action.payload,
        error: ''
      }

  }
    case GET_PROFILE_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    }
    default:
    return state;
   }
  }
