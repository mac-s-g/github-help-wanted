import React from 'react'
import {connect} from 'react-redux'
import FilterList from './../components/FilterList'
import {setLanguages, setLabels} from './../actions'
// import IssueFilters from './IssueFilters'
// import IssueList from './IssueList'

const getSelectedLanguages = (values) => {
  console.log('getSelectedLanguages', values)
}

const getSelectdLabels = (values) => {
  console.log('getSelectedLabels', values)
}


const mapDispatchToProps = dispatch => {
  return {
    onLanguageSelect: values => {
      console.log('dispatching selected language', values)
      dispatch(setLanguages(values))
    },
    onLabelSelect: values => {
      console.log('dispatching selected label', values)
      dispatch(setLabels(values))
    }
  }
}

const mapStateToProps = state => {
  return {
    selectedLangauges: getSelectedLanguages(state.lanugages),
    selectedLabels: getSelectdLabels(state.labels)
  }
}

const Filters = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList)


export default Filters
