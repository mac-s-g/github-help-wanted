import React from 'react'
import Styled from 'styled-components'
import {
  Container,
  Header
} from 'semantic-ui-react'

import MultiSelect from './../../components/inputs/MultiSelect'
import PaginationMenu from './PaginationMenu'
import ResultOrder from './ResultOrder'
import { constants } from './../../constants'


const {
  languages,
  labels
} = constants.search_filters;

class IssueFilters extends React.Component {

  componentDidMount() {
    const {
      selectedLanguages,
      selectedLabels,
      selectedPage,
      selectedPerPage,
      selectedOrder
    } = this.props
    //load api results with default filters
    this.props.onLanguageSelect({
      languages: selectedLanguages,
      labels: selectedLabels,
      page: selectedPage,
      per_page: selectedPerPage,
      order: selectedOrder
    })
  }

  render() {
    const {
      selectedLanguages,
      selectedLabels,
      onLanguageSelect,
      onLabelSelect,
      selectedPage,
      selectedPerPage,
      onPageSelect,
      selectedOrder,
      onOrderSelect,
      totalResults,
      children
    } = this.props

    return (
      <Container>
        <Header
          size='medium'>
          <Header.Content>
            Personalize your Search:
          </Header.Content>
        </Header>
        <Header.Subheader>
          Languages
        </Header.Subheader>
        <MultiSelect
          style={{marginBottom: '4px'}}
          placeholder='Filter by Language'
          options={languages}
          value={selectedLanguages}
          onChange={(values) => {
            onLanguageSelect({
              languages: values,
              labels: selectedLabels,
              page: 1,
              per_page: selectedPerPage,
              order: selectedOrder
            })
          }} />
        <Header.Subheader>
          Labels
        </Header.Subheader>
        <MultiSelect
          style={{marginBottom: '4px'}}
          placeholder='Filter by Label'
          options={labels}
          value={selectedLabels}
          onChange={(values) => {
            onLabelSelect({
              languages: selectedLanguages,
              labels: values,
              page: 1,
              per_page: selectedPerPage,
              order: selectedOrder
            })
          }} />
        <ResultOrder
          value={selectedOrder}
          onChange={(value) => {
            onOrderSelect({
              languages: selectedLanguages,
              labels: selectedLabels,
              page: 1,
              per_page: selectedPerPage,
              order: value
            })
          }} />
          {children}
          <PaginationMenu
            selectedPage={selectedPage}
            selectedPerPage={selectedPerPage}
            totalResults={totalResults}
            onChange={(value) => {
              onPageSelect({
                languages: selectedLanguages,
                labels: selectedLabels,
                page: value,
                per_page: selectedPerPage,
                order: selectedOrder
              })
            }} />
      </Container>
    )
  }
}


export default IssueFilters
