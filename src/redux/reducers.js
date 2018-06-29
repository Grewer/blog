import {combineReducers} from 'redux'

const phoneListStatus = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE':
      return !state;
    default:
      return state;
  }
};


const cacheArticle = (state = {}, action) => {
  switch (action.type) {
    case 'CACHE_ADD':
      let {id, object} = action.data
      state[id] = object;
      return Object.assign({}, state)
    default:
      return state
  }
}

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
  phoneListStatus,
  cacheArticle,
});
export default reducers