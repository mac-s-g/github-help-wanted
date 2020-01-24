import React from 'react'
import Styled from 'styled-components'
import { Grid, List, Loader } from 'semantic-ui-react'

import IssueDetail from './IssueDetail'
import UserDetail from './UserDetail'
import FetchError from './FetchError'
import { isset } from './../../helpers'

const StyledLoader = Styled(Loader)`
  position: absolute !important;
  top: auto !important;
  bottom: 0 !important;
`

class IssueList extends React.Component {
  componentDidUpdate() {
    const { items, repositories, fetchRepository } = this.props
    // //fetch repositories that haven't been fetched
    // items.map(item => {
    //   if (!isset(repositories[item.repository_url])) {
    //     fetchRepository(item.repository_url)
    //   }
    // })
  }

  render() {
    const {
      fetch_in_progress,
      fetch_issues_error,
      rate_limit_exceeded,
      total_count,
      items,
      repositories,
      fetchRepository
    } = this.props

    return (
      <ResultContainer className='issue-list'>
        <FetchError
          hidden={!fetch_issues_error}
          rate_limit_exceeded={rate_limit_exceeded}
        />
        <List divided relaxed hidden={fetch_issues_error}>
          {items.map((item, idx) => {
            const icon_grid_width = {
              tablet: 2,
              computer: 2,
              largeScreen: 2,
              width: 2
            }
            const issue_grid_width = {
              mobile: 16,
              tablet: 14,
              computer: 14,
              largeScreen: 14,
              width: 14
            }

            return (
              <List.Item
                key={idx}
                className='issue-list-row'
                style={{ padding: '2em 0' }}
              >
                <Grid columns={2}>
                  <UserDetail
                    grid_width={icon_grid_width}
                    user_url={item.user.html_url}
                    avatar_url={item.user.avatar_url}
                    username={item.user.login}
                  />
                  <IssueDetail
                    grid_width={issue_grid_width}
                    issue={item}
                    id={'issue-' + idx}
                  />
                </Grid>
              </List.Item>
            )
          })}
          <StyledLoader active={fetch_in_progress} size='large' />
          <List.Description
            hidden={total_count > 0 || fetch_in_progress || fetch_issues_error}
          >
            <NoResultsContainer>No Results Found</NoResultsContainer>
          </List.Description>
        </List>
      </ResultContainer>
    )
  }
}

const ResultContainer = Styled.div`
  position: relative;
  min-height: 200px;
  margin-top: 30px;
`

const NoResultsContainer = Styled.div`
  text-align: center;
`

export default IssueList
