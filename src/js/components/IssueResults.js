import React from 'react'
import Styled from 'styled-components'
import { Grid, Image, List, Loader } from 'semantic-ui-react'

import Badge from './../components/Badge'
import { formatLabelUrl } from './../helpers'

const ResultContainer = Styled.div`
  position: relative;
  min-height: 60px;
  margin-top: 40px;
`

const IssueList = ({
  fetch_in_progress,
  fetch_issues_error,
  total_count,
  items,
  item_labels,
  fetchLabels
}) => {
  return (
    <ResultContainer>
      <Loader
        active={fetch_in_progress}
        size="large" />
      <List
        divided
        relaxed
        hidden={fetch_in_progress} >
        {items.map((item, idx) => {
          const icon_grid_width = {
            mobile: 4,
            tablet: 2,
            computer: 2,
            largeScreen: 2,
            width: 2
          }
          const issue_grid_width = {
            mobile: 12,
            tablet: 14,
            computer: 14,
            largeScreen: 14,
            width: 14
          }
          const label_url = formatLabelUrl(item.labels_url)

          //fetch labels if they have not been fetched
          if (!item_labels[label_url]) {
            fetchLabels(label_url)
          }

          console.log('ITEM LABELS', item_labels[label_url]);

          return (
            <List.Item key={idx}>
              <Grid
                columns={2} >
                <Grid.Column {...icon_grid_width} >
                  <Image
                    size="medium"
                    circular
                    bordered
                    src={item.user.avatar_url} />
                </Grid.Column>
                <Grid.Column {...issue_grid_width} >
                  <List.Content>
                    <List.Header
                      as='a'
                      href={item.html_url}
                      target="_blank">
                      {item.html_url}
                    </List.Header>
                    <List.Header
                      as='a'
                      href={item.html_url}
                      target="_blank">
                      {item.html_url}
                    </List.Header>
                    <List.Description>
                      {item.title}
                    </List.Description>
                    <List.Content>
                      {item_labels[label_url]
                        ? item_labels[label_url].map((label) => (
                          <Badge
                            key={label.id}
                            label={label.name}
                            style={{color:'#' + label.color}} />
                        ))
                        : <Loader size="tiny" />
                      }
                    </List.Content>
                    {
                      <pre>{JSON.stringify(item, null, 2)}</pre>
                    }
                  </List.Content>
                </Grid.Column>
              </Grid>
            </List.Item>
          )
        })}
      </List>
    </ResultContainer>
  )

}


export default IssueList
