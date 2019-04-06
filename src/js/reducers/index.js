import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import issueFilters from './issueFilters'
import issueResults from './issueResults'
import repositories from './repositories'

const reducer = history => combineReducers({
  issueFilters,
  issueResults,
  repositories,
  router: connectRouter(history)
})

export default reducer
