import { combineReducers } from 'redux'

import issueFilters from './issueFilters'
import issueResults from './issueResults'

const reducer = combineReducers({
  issueFilters,
  issueResults
})

export default reducer