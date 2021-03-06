import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"
import Grid from "styled-components-grid"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import {
  HeaderSm,
  BodyText,
  BoldBodyText,
  NumberedBlock,
  ColoredNumber,
  NumberedBlockText,
} from "../../components/typography"

const ResearchRoundOne = () => (
  <FullWidthBackground
    className="responsive-align-left"
    backgroundColor="white"
  >
    <ContentContainer style={{ maxWidth: "1040px" }}>
      <BlueHeaderSm>RESEARCH ROUND ONE</BlueHeaderSm>
      <BodyTextWithMargin>
        After listing out our scenarios, I mocked up two different workflows
        that would solve for the most high priority scenarios and we kicked off
        our first round of user research. Our goals for the research were to
        know if users found the designs easy to understand and navigate, if
        there were any interactions that needed to be reworked, and if users
        understood what they were editing and who it would impact.
      </BodyTextWithMargin>
      <BodyTextWithMargin>
        We did 7 interviews with customers who were frequent users of Campaigns
        and we asked each user to complete specific tasks like:
      </BodyTextWithMargin>
      <ExampleContainer>
        <BlueExampleBox>
          <BoldBodyText style={{ fontWeight: "300" }}>
            “You realize you have a typo in Touch 2. How would you correct it?”
          </BoldBodyText>
        </BlueExampleBox>
        <BlueExampleBox>
          <BoldBodyText style={{ fontWeight: "300" }}>
            “You find out that one of your prospects, George Oscar Bluth,
            actually goes by Gob Bluth. He’s about to receive several automated
            email touches and you want to greet him by “Gob” instead of
            “George”. How would you change this information?”
          </BoldBodyText>
        </BlueExampleBox>
      </ExampleContainer>
      <BoldBodyTextWithMargin>
        Our most important findings:
      </BoldBodyTextWithMargin>
      <GridWithMargin>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
          <NumberedBlock>
            <ColoredNumber>1 )</ColoredNumber>
            <NumberedBlockText>
              We were able to see firsthand several of the ways users
              misinterpreted and misused the existing workflow and therefore
              expected one outcome but received another.
            </NumberedBlockText>
          </NumberedBlock>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
          <NumberedBlock>
            <ColoredNumber>2 )</ColoredNumber>
            <NumberedBlockText>
              Most users felt that they would feel more confident making changes to
              their campaign if the UI was more explicit about who the changes would
              affect and when the changes would be implemented.
            </NumberedBlockText>
          </NumberedBlock>
        </Grid.Unit>
      </GridWithMargin>
    </ContentContainer>
  </FullWidthBackground>
)

const BlueHeaderSm = styled(HeaderSm)`
  color: ${({ theme }) => theme.colors.blue};
`

const BodyTextWithMargin = styled(BodyText)`
  margin-top: 12px;

  ${breakpoint("tablet")`
    margin-top: 25px;
  `}
`

const BoldBodyTextWithMargin = styled(BoldBodyText)`
  margin-top: 12px;

  ${breakpoint("tablet")`
    margin-top: 25px;
  `}
`

const GridWithMargin = styled(Grid)`
  margin-top: 12px;

  ${breakpoint("tablet")`
  margin-top: 25px;
  `}
`

const ExampleContainer = styled.div`
  margin-top: 12px;

  ${breakpoint("tablet")`
    padding: 0 20px;
    margin-top: 25px;
`}
`
const BlueExampleBox = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.blue};
  padding: 20px;

  &:not(:first-of-type) {
    margin-top: 10px;
  }

  ${breakpoint("tablet")`
      padding-left: 20px;
      padding-right: 50px;
  `}
`

export default ResearchRoundOne
