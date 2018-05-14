import {combineReducers} from 'redux'

const phoneListStatus = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE':
      return !state;
    default:
      return state;
  }
};


function ArticleList(state = [], action) {
  switch (action.type) {
    case 'INIT':
      return action.data || [];
    case 'ADD':
      return [...state, ...action.data]
    default:
      return state
  }
}

const reducers = combineReducers({
  ArticleList,
  phoneListStatus
});
export default reducers