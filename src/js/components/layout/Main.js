import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Container, Grid, Header } from "semantic-ui-react"

import QueryFilters from "./../../containers/QueryFilters"
import QueryResults from "./../../containers/QueryResults"

import Badge from "./../Badge"

import { constants } from "./../../constants"

const { project_info } = constants

const FixedMenuLayout = () => (
  <div>
    <Navbar />
    <Grid style={{ paddingTop: "5em" }}>
      {/* placeholder for adding github user to main layout
      <Grid.Column >
        <Container>
        </Container>
      </Grid.Column>
      */}
      <Grid.Column width={16}>
        <Container style={{ marginBottom: "4em" }}>
          <Container>
            <Header style={{ marginBottom: "2em" }} size="large">
              <Header.Content style={{ marginBottom: "0.33em" }}>
                Become a Contributor
              </Header.Content>
              <Header.Subheader>
                <p>Open-Source projects are looking for your help.</p>
                <p>
                  Below are recent issues that maintainers lablelled as{" "}
                  <i>help wanted</i>.
                </p>
                <p>
                  Use the filters to find issues you'd like to contribute to.
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
