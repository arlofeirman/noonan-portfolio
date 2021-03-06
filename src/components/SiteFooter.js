import React from "react"
import styled from "styled-components"
import { withRouter } from "react-router-dom"

import { CnLogoSm } from "../components/icons"

const SiteFooter = ({ history }) => {
  return (
    <StyledFooter id="site-footer">
      <LogoContainer onClick={() => history.push("/")}>
        <CnLogoSm />
      </LogoContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  height: 65px;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
`
const LogoContainer = styled.div`
  width: fit-content;
  position: relative;
  margin: 0 auto;
  top: 15px;
  cursor: pointer;
`

export default withRouter(SiteFooter)
