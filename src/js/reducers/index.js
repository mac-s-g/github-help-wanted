import { combineReducers } from 'redux'

import issueFilters from './issueFilters'
import issueResults from './issueResults'
import repositories from './repositories'

const reducer = combineReducers({
  issueFilters,
  issueResults,
  repositories
})

export default reducer