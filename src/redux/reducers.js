export default function ArticleList(state = [], action) {
  console.log(action)
  switch (action.type) {
    case 'INIT':
      return action.data||[];
    case 'ADD':
      return [...state,...action.data]
    default:
      return state
  }
}