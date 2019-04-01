import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const ImprintPage = () => (
  <Layout>
    <SEO title="Imprint" />
    <Section>
      <H1>Imprint</H1>
      <RespGrid min={"240px"}>
        <Box>
          <H3>Responsible</H3>
          <P>
            Jan Göger
            <br />
            {"Weinsbergstrasse 195, 50825 Köln"}
            <br />
            {"jangoeger95@web.de"}
          </P>
        </Box>
        <Box>
          <H3>Credits</H3>
          <P>
            Alle Fans des FC Rottenburgs, die diesen Verein so einzigartig
            machen!
          </P>
        </Box>
      </RespGrid>
    </Section>
  </Layout>
)

export default ImprintPage
