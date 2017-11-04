import { combineReducers, createStore } from 'redux'
import issueFilters from './issueFilters'
import issueResults from './issueFilters'

const Store = createStore(
    combineReducers({
        issueFilters,
        issueResults
    })
)

export default Store