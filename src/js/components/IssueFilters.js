import React from 'react'
import Styled from 'styled-components'
import {
  Container,
  Header
} from 'semantic-ui-react'

import MultiSelect from './../components/inputs/MultiSelect'
import { constants } from './../constants'


const {
  languages,
  labels
} = constants.search_filters;

const DropdownContainer = Styled.div`
  margin-bottom: 4px;
`

class IssueFilters extends React.Component {

  componentDidMount() {
    const {
      selectedLanguages,
      selectedLabels,
      selectedPage,
      selectedPerPage
    } = this.props
    //load api results with default filters
    this.props.onLanguageSelect(
      {
        languages: selectedLanguages,
        labels: selectedLabels
      },
      selectedPage,
      selectedPerPage
    )
  }

  render() {
    const {
      selectedLanguages,
      selectedLabels,
      onLanguageSelect,
      onLabelSelect,
      selectedPage,
      selectedPerPage
    } = this.props

    return (
      <Container>
        <Header
          size='medium'>
          <Header.Content>
            Search Filters
          </Header.Content>
        </Header>
        <Header.Subheader>
          Lanugages
        </Header.Subheader>
        <DropdownContainer>
          <MultiSelect
            placeholder='Filter by Language'
            options={languages}
            value={selectedLanguages}
            onChange={(values) => {
              onLanguageSelect(
                {
                  languages: values,
                  labels: selectedLabels
                },
                selectedPage,
                selectedPerPage
              )
            }} />
        </DropdownContainer>
        <Header.Subheader>
          Labels
        </Header.Subheader>
        <DropdownContainer>
          <MultiSelect
            placeholder='Filter by Label'
            options={labels}
            value={selectedLabels}
            onChange={(values) => {
              onLabelSelect(
                {
                  languages: selectedLanguages,
                  labels: values
                },
                selectedPage,
                selectedPerPage
              )
            }} />
        </DropdownContainer>
      </Container>
    )
  }
}


export default IssueFilters
