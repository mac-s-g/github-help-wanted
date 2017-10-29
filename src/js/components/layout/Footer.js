import React from 'react'
import {
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    List,
    Segment
} from 'semantic-ui-react'
import Logo from './../Logo'
import {constants} from './../../constants'

const {links} = constants

const IndexContent = () => (
  <Segment
    inverted
    vertical
    style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
  >
    <Container textAlign='center'>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header inverted as='h4' content='Related Projects' />
            <List link inverted>
              {Object.keys(links.external).map((name) => (
                <List.Item as='a' target="_blank" href={links.external[name]}>
                  {name}
                </List.Item>
              ))}
            </List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header inverted as='h4' content='Help Wanted' />
              <div style={{cursor: 'default'}}>
                <div style={{marginBottom: '3px'}}>Thanks for supporting</div>
                <Logo />
                <div>and open-source projects everywhere!</div>
                <p>
                  Show your support with a <a href={links.internal.gh_repo_url} target="_blank">
                    <Icon name="heart" /> on <Icon name="github" />
                  </a>
                </p>
              </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider inverted section />
      <List horizontal inverted divided link>
        <List.Item as='a' target="_blank" href={links.internal.gh_profile_url}>
          Contact Me
        </List.Item>
        <List.Item as='a' target="_blank" href={
          links.internal.gh_issues_url
          + "new?title=Website%20Bug:&body=describe%20how%20to%20replicate%20the"
          + "%20issue:%0A%0Athank%20your%20for%20contributing!"
        }>
          Report a Bug
        </List.Item>
        <List.Item
          as='a' target="_blank"
          href={links.internal.license_url}>
          Product License
        </List.Item>
      </List>
    </Container>
  </Segment>
)

export default IndexContent
