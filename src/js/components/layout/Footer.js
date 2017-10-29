import React from 'react'
import {
    Container,
    Divider,
    Grid,
    Header,
    List,
    Segment
} from 'semantic-ui-react'
import Logo from './../Logo'

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
              <List.Item as='a' target="_blank" href="http://up-for-grabs.net/#/">
                Up For Grabs
              </List.Item>
              <List.Item
                as='a' target="_blank" href="http://www.firsttimersonly.com/">
                First Timers Only
              </List.Item>
              <List.Item
                as='a' target="_blank"
                href="https://opensource.guide/how-to-contribute/">
                How to Contribute
              </List.Item>
              <List.Item
                as='a' target="_blank"
                href="http://getinvolved.hanselman.com/">
                Get Involved with Tech
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header inverted as='h4' content='Help Wanted' />
              <div style={{cursor: 'default'}}>
                <div style={{marginBottom: '3px'}}>Thanks for supporting</div>
                <Logo />
                <div>and open-source projects everywhere!</div>
              </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider inverted section />
      <List horizontal inverted divided link>
        <List.Item as='a' target="_blank" href='https://github.com/mac-s-g/'>
          Contact Me
        </List.Item>
        <List.Item as='a' target="_blank" href=href="https://github.com/mac-s-g/github-help-wanted/issues/new?title=Website%20Bug:&body=describe%20how%20to%20replicate%20the%20issue:%0A%0Athank%20your%20for%20contributing!">
          Report a Bug
        </List.Item>
        <List.Item
          as='a' target="_blank"
          href='https://github.com/mac-s-g/github-help-wanted/blob/master/LICENSE'>
          Product License
        </List.Item>
      </List>
    </Container>
  </Segment>
)

export default IndexContent
