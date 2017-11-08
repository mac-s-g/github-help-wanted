import React from 'react'
import Styled from 'styled-components'
import {
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  List,
  Loader,
  Divider
} from 'semantic-ui-react'
import Markdown from 'react-markdown'

import Badge from './../components/Badge'
import {
  formatRepositoryName,
  formatRepositoryUrl,
  isset
} from './../helpers'


const ResultContainer = Styled.div`
  position: relative;
  min-height: 60px;
  margin-top: 40px;
`

const ListDescription = Styled.div`
  margin-top:6px;
  overflow: auto;
  max-height: 100px;
`

const CommentIcon = Styled.div`
  cursor: pointer;
  position: absolute;
  right 15px;
  top: 15px;
`

const UserDetail = ({
  grid_width,
  avatar_url,
  user_url,
  username
}) => (
  <Grid.Column {...grid_width} >
    <Container textAlign='center' >
      <Image
        circular
        as="a"
        target="_blank"
        href={user_url}
        src={avatar_url} />
      <Label
        style={{
          position: 'absolute',
          top: '100px',
          left: '0px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          wordWrap: 'break-word'
        }}
        as='a'
        target="_blank"
        href={user_url} >
        @{username}
      </Label>
    </Container>
  </Grid.Column>
)

const IssueDetail = ({
  grid_width,
  issue
}) => (
  <Grid.Column {...grid_width} >
    <List.Content>
      <Header>
        <Image
          rounded
          size="mini"
          as="a"
          href={issue.user.html_url}
          target="_blank"
          src={issue.user.avatar_url}  />
        <List.Content
          size="medium"
          as='a'
          target="_blank"
          href={issue.html_url} >
          {issue.title}
        </List.Content>
      </Header>
      <CommentIcon hidden={issue.comments == 0} >
        <Label
          as='a'
          target="_blank"
          href={issue.html_url} >
          <Icon name={'comment' + (issue.comments > 1 ? 's' : '') + ' outline'} />
          {issue.comments}
        </Label>
      </CommentIcon>
      <Header.Subheader
        as='a'
        style={{marginTop:'3px'}}
        href={formatRepositoryUrl(issue.repository_url)}
        target="_blank">
        {formatRepositoryName(issue.repository_url)}
      </Header.Subheader>
      <Divider />
      <List.Description>
        <ListDescription>
          <Markdown source={
            issue.body.trim() == ''
            ? 'No Description'
            : issue.body
          } />
        </ListDescription>
      </List.Description>
      <List.Content
        style={{
          marginLeft:'-5px',
          marginTop: '10px'
        }}>
        {issue.labels.map((label) => (
          <Badge
            key={label.id}
            label={label.name}
            color={label.color}
            className={'issues-badges'} />
        ))}
      </List.Content>
      {/*
        <pre>{JSON.stringify(item, null, 2)}</pre>
      */}
    </List.Content>
  </Grid.Column>
)

class IssueList extends React.Component {

  componentDidUpdate() {
    const {
      items,
      repositories,
      fetchRepository
    } = this.props
    // //fetch repositories that haven't been fetched
    // items.map(item => {
    //   if (!isset(repositories[item.repository_url])) {
    //     fetchRepository(item.repository_url)
    //   }
    // })
  }

  render () {
    const {
      fetch_in_progress,
      fetch_issues_error,
      total_count,
      items,
      repositories,
      fetchRepository
    } = this.props

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

            return (
              <List.Item
                key={idx}
                className='issue-list-row'
                style={{padding:'2em 0'}} >
                <Grid columns={2} >
                  <UserDetail
                    grid_width={icon_grid_width}
                    user_url={item.user.html_url}
                    avatar_url={item.user.avatar_url}
                    username={item.user.login} />
                  <IssueDetail
                    grid_width={issue_grid_width}
                    issue={item}
                    />
                </Grid>
              </List.Item>
            )
          })}
        </List>
      </ResultContainer>
    )
  }

}


export default IssueList
