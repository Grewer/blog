import {combineReducers} from 'redux'

const phoneListStatus = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE':
      return !state;
    default:
      return state;
  }
};

const ArticleLoading = (state = 'loading', action) => {
  switch (action.type) {
    case 'LOADING':
      return state = 'loading'
    case 'LOADED':
      return state = 'loaded'
    case 'FAIL':
      return state = 'fail'
    default:
      return state
  }
}

const cacheArticle = (state = {}, action) => {
  switch (action.type) {
    case 'CACHE_ADD':
      let {id, object} = action.data
      state[id] = object;
      console.log(state)
      return state
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
  ArticleLoading
});
export default reducers