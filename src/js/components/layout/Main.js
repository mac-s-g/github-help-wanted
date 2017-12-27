import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {
  Container,
  Grid,
  Header
} from 'semantic-ui-react'

import QueryFilters from './../../containers/QueryFilters'
import QueryResults from './../../containers/QueryResults'
import { constants } from './../../constants'

const { project_info } = constants;

const FixedMenuLayout = () => (
  <div>
    <Navbar />
    <Grid
      style={{ paddingTop: '4em' }} >
      {/* placeholder for adding github user to main layout
      <Grid.Column >
        <Container>
        </Container>
      </Grid.Column>
      */}
      <Grid.Column
        width={16} >
        <Container
          style={{ marginBottom: '4em' }} >
          <Container>
          <Header
            style={{marginBottom: '2em'}}
            size='large' >
            <Header.Content
              style={{marginBottom: '0.33em'}}>
              Become a Contributor
            </Header.Content>
            <Header.Subheader>
              <p>
                The open-source community is strongest when we collaborate - and projects are looking for your help.
              </p>
              <p>
                Use the filters below to find projects you'd like to contribute to.
              </p>
            </Header.Subheader>
          </Header>
          </Container>
          <QueryFilters>
            <QueryResults />
          </QueryFilters>
        </Container>
      </Grid.Column>
    </Grid>
    <Footer />
  </div>
)

export default FixedMenuLayout
