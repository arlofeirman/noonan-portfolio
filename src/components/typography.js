import styled from "styled-components"
import { Link as ReactRouterLink } from "react-router-dom"
import breakpoint from "styled-components-breakpoint"

export const LargeTitleText = styled.h1`
  line-height: ${({ theme }) =>
    theme.typography.largeTitleText.mobileLineHeight};
  font-weight: ${({ theme }) => theme.typography.largeTitleText.fontWeight};
  font-size: ${({ theme }) => theme.typography.largeTitleText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.largeTitleText.fontSize};
  `}

  ${breakpoint("tablet")`
    line-height: ${({ theme }) => theme.typography.largeTitleText.lineHeight};
  `}
`

// @TODO Putting a line-height and font-weight in the same breakpoint function was behaving unexpectedly.
// Need to file an issue on the github repo
export const LargeBodyText = styled.p`
  line-height: ${({ theme }) =>
    theme.typography.largeBodyText.mobileLineHeight};
  font-weight: ${({ theme }) => theme.typography.largeBodyText.fontWeight};
  font-size: ${({ theme }) => theme.typography.largeBodyText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.largeBodyText.fontSize};
  `}

  ${breakpoint("tablet")`
    line-height: ${({ theme }) => theme.typography.largeBodyText.lineHeight};
  `}
`

export const HeaderLg = styled.h2`
  line-height: ${({ theme }) => theme.typography.headerLgText.lineHeight};
  font-size: ${({ theme }) => theme.typography.headerLgText.mobileFontSize};
  font-weight: ${({ theme }) => theme.typography.headerLgText.fontWeight};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.headerLgText.fontSize};
  `}
`

export const HeaderMd = styled.h3`
  line-height: ${({ theme }) => theme.typography.headerMdText.lineHeight};
  font-weight: ${({ theme }) => theme.typography.headerMdText.fontWeight};
  font-style: ${({ theme }) => theme.typography.headerMdText.fontStyle};
  font-size: ${({ theme }) => theme.typography.headerMdText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.headerMdText.fontSize};
  `}
`

export const HeaderSm = styled.h4`
  text-transform: uppercase;
  line-height: ${({ theme }) => theme.typography.headerSmText.lineHeight};
  font-weight: ${({ theme }) => theme.typography.headerSmText.fontWeight};
  font-size: ${({ theme }) => theme.typography.headerSmText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.headerSmText.fontSize};
  `}
`

export const BodyText = styled.p`
  line-height: ${({ theme }) => theme.typography.normalBodyText.lineHeight};
  font-weight: ${({ theme }) => theme.typography.normalBodyText.fontWeight};
  font-size: ${({ theme }) => theme.typography.normalBodyText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.normalBodyText.fontSize};
  `}
`

export const BoldBodyText = styled.p`
  line-height: ${({ theme }) => theme.typography.boldBodyText.lineHeight};
  font-weight: ${({ theme }) => theme.typography.boldBodyText.fontWeight};
  font-size: ${({ theme }) => theme.typography.boldBodyText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.boldBodyText.fontSize};
  `}
`

export const SmallGreyItalic = styled.p`
  font-size: 14px;
  color: #7f8a8c;
  font-weight: 100;
  font-style: italic;
`

export const Link = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.colors.green};
  text-decoration: none;
  cursor: pointer;
  font-style: ${({ theme }) => theme.typography.linkText.fontStyle};
  font-weight: ${({ theme }) => theme.typography.linkText.fontWeight};
  font-size: ${({ theme }) => theme.typography.linkText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.linkText.fontSize};
  `}
`

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.green};
  text-decoration: none;
  cursor: pointer;
  font-style: ${({ theme }) => theme.typography.linkText.fontStyle};
  font-weight: ${({ theme }) => theme.typography.linkText.fontWeight};
  font-size: ${({ theme }) => theme.typography.linkText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.linkText.fontSize};
  `}
`

export const ExternalLinkLg = styled.a`
  color: ${({ theme }) => theme.colors.green};
  text-decoration: none;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.linkText.fontWeight};
  font-style: ${({ theme }) => theme.typography.linkText.fontStyle};
  font-size: ${({ theme }) => theme.typography.largeBodyText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.largeBodyText.fontSize};
  `}
`

export const NavLinkText = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.typography.navLinkText.fontWeight};
  font-size: ${({ theme }) => theme.typography.navLinkText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.navLinkText.fontSize};
  `}
`

export const ColoredNumber = styled(BoldBodyText)`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.blue};
  font-weight: 700;
  font-style: italic;
  display: none;

  ${breakpoint("tablet")`
    width: 8%;
    display: inline;
  `}
`

export const NumberedBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &:last-of-type {
    margin-bottom: 20px;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  &.first-in-sub-block {
    margin-top: 20px;
  }

  ${breakpoint("tablet")`
    &:not(:last-of-type) {
      margin-bottom: 40px;
    }

    &:last-of-type {
      margin-bottom: 0px;
    }

    &.first-in-sub-block {
      margin-top: 40px;
    }

    &.first-in-sub-block,
    &.sub-block {
      margin-left: 40px;

      .sub-block-text-wrapper {
        max-width: 450px;
        width: 120%;
        display: inline-block;
      }
    }
  `}
`

export const NumberedBlockText = styled(BodyText)`
  width: 100%;

  ${breakpoint("tablet")`
     width: 80%
  `};
`
