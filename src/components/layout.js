import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

export const ContentContainer = styled.div`
  max-width: 1240px;
  background: transparent;
  margin: 0 auto;
  padding: 0 20px;

  @media (hover: none) and (pointer: coarse) and (orientation: landscape) {
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  ${breakpoint("desktop")`
    padding: 0 5px;
  `}
`

// backgroundColor prop must be one of colors in the styled-components theme
export const FullWidthBackground = styled.div`
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  padding: 35px 0;

  &.responsive-align-center {
    text-align: center;
  }

  ${breakpoint("tablet")`
    padding: 65px 0;

    &.responsive-align-center {
      text-align: left;
    }
  `}
`
