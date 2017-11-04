import React from 'react'
import {Container} from 'semantic-ui-react'
import MultiSelect from './../components/inputs/MultiSelect'
import {constants} from './../constants'

const {languages, labels} = constants.search_filters;

const IssueFilters = ({
  selectedLanguages,
  onLanguageSelect,
  selectedLabels,
  onLabelSelect
}) => (
  <Container>
    <MultiSelect
      placeholder='Filter by Language'
      options={languages}
      value={selectedLanguages}
      onChange={onLanguageSelect} />
    <MultiSelect
      placeholder='Filter by Label'
      options={labels}
      value={selectedLabels}
      onChange={onLabelSelect} />
  </Container>
)

export default IssueFilters
