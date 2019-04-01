import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import Trikot1 from "../images/Trikot1.jpg"
import Trikot2 from "../images/Trikot2.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title="Shop" />
    <Section>
      <H1 fontSize={[6]} lineHeight={[1.5]}>
        Shop
      </H1>
      <H3>Heimtrikot Saison 18/19</H3>
    </Section>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 2]}>
          <P>
            Das aktuelle Heimtrikot der Rottenburger nur hier und exklusiv im
            offiziellen FC Rottenburg Shop zum UVP 79,99€
          </P>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 2]}>
          <P>
            <img src={Trikot1} altText="Trikot1" />
          </P>
        </Box>
      </Flex>
      <hr />
      <Section>
        <H3>Fanschal Saison 18/19</H3>
      </Section>
      <RespGrid min={"240px"}>
        <P>
          Der aktuelle Fanschal der Rottenburger nur hier und exklusiv im
          offiziellen FC Rottenburg Shop zum UVP 19,99€
        </P>
        <P>
          <img src={Trikot2} altText="Trikot2" />
        </P>
      </RespGrid>
    </Section>
  </Layout>
)

export default AboutPage
