import React from "react"
import Styled from "styled-components"
import { Container, Menu, Icon, Dropdown } from "semantic-ui-react"

import Logo from "./../../components/Logo"
import { constants } from "./../../constants"

const { links } = constants

const Navbar = () => (
  <div>
    <Menu attached="top" inverted as={HeaderComponent}>
      <Container>
      <Menu.Item as="a" heaer href="http://github-help-wanted.com/" target="_blank" rel="noopener noreferrer">
  <Logo size="large" />
</Menu.Item>

        <Menu.Menu position="right">
          <GitHubIcon>
            <Menu.Item
              fixed="right"
              as="a"
              href={links.internal.gh_repo_url}
              target="_blank"
            >
              <Icon style={{ margin: "0px" }} name="github" size="big" />
              <div class="hover-msg">
                <div>read</div>
                <div>the</div>
                <div>code</div>
                {/*
                ░░░░░░░░░▄░░░░░░░░░░░░░░▄░░░░
                ░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌░░░
                ░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐░░░
                ░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐░░░
                ░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐░░░
                ░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌░░░
                ░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌░░
                ░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐░░
                ░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌░
                ░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌░
                ▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐░
                ▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌
                ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐░
                ░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌░
                ░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐░░
                ░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌░░
                ░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀░░░
                ░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀░░░░░
                ░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀░░░░░░░░
               */}
              </div>
            </Menu.Item>
          </GitHubIcon>
        </Menu.Menu>
      </Container>
    </Menu>
  </div>
)

const HeaderComponent = Styled.div`
  height: 70px;
  border-radius: 0px !important;
  background-color: ${constants.colors.dark} !important;
`

const GitHubIcon = Styled.div`
  position: relative;
  margin: 0px;
  & >a {
    padding-left: 5px !important;
    height: 100%;
  }
  & .hover-msg {
    width: 50px;
    transition: opacity 0.2s ease;
    opacity: 0;
    background-color: rgba(255, 255, 255, 0.08);
    padding: 12px 0px 0px 15px;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    text-align: center;
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 100%;
    & >div {
      margin-left: 30px;
      opacity: 0;
      transition-duration: 0.4s;
    }
    & :nth-child(1) {
      margin-top: 1px;
      transition-delay: 0.1s;
    }
    & :nth-child(2) {
      transition-delay: 0.2s;
    }
    & :nth-child(3) {
      transition-delay: 0.3s;
    }
  }
  &:hover .hover-msg {
    opacity: 1;
    & >div {
      margin-left: 0px;
      opacity: 1;
    }
  }
`

export default Navbar
