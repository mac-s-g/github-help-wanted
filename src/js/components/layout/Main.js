import React from "react"
import Styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Container, Grid, Header } from "semantic-ui-react"

import QueryFilters from "./../../containers/QueryFilters"
import QueryResults from "./../../containers/QueryResults"

import Badge from "./../Badge"

import { constants } from "./../../constants"

const { project_info, links } = constants

const AppWrapper = Styled.div``
const IntroMessage = Styled.div`
  font-weight: 300;
  font-size: 22px;
  margin-bottom: 4rem;
`

const FixedMenuLayout = () => (
  <AppWrapper>
    <Navbar />
    <Grid style={{ paddingTop: "5em" }}>
      {/* placeholder for adding github user to main layout
      <Grid.Column >
        <Container>
        </Container>
      </Grid.Column>
      */}
      <Grid.Column width={16}>
        <Container>
          <IntroMessage>
            Community-Powered, Connecting you with Open-Source
          </IntroMessage>
          <Header style={{ marginBottom: "2em" }}>
            <Header.Content style={{ marginBottom: "1em" }}>
              Become a Contributor
            </Header.Content>
            <Header.Subheader>
              <p>
                Open-source projects{" "}
                <a
                  href={links.internal.gh_repo_url + "#help-wanted"}
                  target="_blank"
                >
                  like this one
                </a>{" "}
                are looking for your help.
              </p>
              <p>
                Below are recent issues that maintainers labelled as
                <i> help wanted</i>.
              </p>
              <p>Use the filters to find issues you'd like to contribute to.</p>
            </Header.Subheader>
          </Header>
        </Container>
        <QueryFilters>
          <QueryResults />
        </QueryFilters>
      </Grid.Column>
    </Grid>
    <Footer />
  </AppWrapper>
)

export default FixedMenuLayout
