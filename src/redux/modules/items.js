//ACTIONS

const GET_ITEMS_LOADING = "GET_ITEMS_LOADING";
const GET_ITEMS = "GET_ITEMS";
const GET_ITEMS_ERROR = "GET_ITEMS_ERROR";
const FILTER_ITEMS = "FILTER_ITEMS";

//ACTION CREATORS
const getItemsLoading = () => ({
  type: GET_ITEMS_LOADING
});
const getItems = items => ({
  type: GET_ITEMS,
  payload: items
});
const getItemsError = error => ({
  type: GET_ITEMS_ERROR,
  payload: error
});

export const filterItems = values => ({
  type: FILTER_ITEMS,
  payload: values
});

const ITEMS_URL = "http://localhost:3001/items";
const USERS_URL = "http://localhost:3001/users/";

const items = fetch(ITEMS_URL).then(r => r.json());
const users = fetch(USERS_URL).then(r => r.json());

//async action creator, curried function
export const fetchItemsAndUsers = () => dispatch => {
  dispatch(getItemsLoading());
  return Promise.all([items, users])
    .then(response => {
      const [itemList, userList] = response;

      const combined = itemList.map(item => {
        item.itemowner = userList.find(user => user.id === item.itemowner);
        item.borrower
          ? (item.borrower = userList.find(user => user.id === item.borrower))
          : "error";
        return item;
      });

      console.log(combined);

      dispatch(getItems(combined));
    })
    .catch(error => dispatch(getItemsError(error.message)));
};

//filter method
const filteredItems = (tags, items) => {
  if (tags.length === 0 || tags === []) {
    return items;
  } else {
    let result = [];
    items.forEach(item => {
      tags.forEach(tag => {
        if (item.tags.indexOf(tag) > -1) {
          result.push(item);
        }
      });
    });
    console.log(result);
    return result;
  }
};

//REDUCER
export default (
  state = {
    isLoading: false,
    items: [],
    itemsFilter: [
      { title: "Electronics", id: 1 },
      { title: "Household Items", id: 2 },
      { title: "Musical Instruments", id: 3 },
      { title: "Physical Media", id: 4 },
      { title: "Recreational Equipment", id: 5 },
      { title: "Sporting Goods", id: 6 },
      { title: "Tools", id: 7 }
    ],
    selectedTags: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_ITEMS_LOADING: {
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    }
    case GET_ITEMS: {
      return {
        ...state,
        isLoading: false,

        items: action.payload,
        error: ""
      };
    }
    case GET_ITEMS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }

    case FILTER_ITEMS: {
      //call filter

      return {
        ...state,
        selectedTags: action.payload
      };
    }
    default:
      return state;
  }
};
