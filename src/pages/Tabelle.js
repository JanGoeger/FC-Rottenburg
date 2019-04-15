import React from "react";
import { Flex, Box } from "rebass";
import { H1, H3, P } from "../components/VerticalRhythm";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Section from "../components/Section";
import RespGrid from "../components/RespGrid";
import Tabelle from "../images/Tabelle.png";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Section>
      <H1 fontSize={[6]} lineHeight={[1.5]}>
        Bezirksliga Alb
      </H1>
      <H3>Spieltag 12 / Aktuelle Tabelle</H3>
    </Section>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 2]}>
          <P>
            <P />
            FC Rottenburg - SC Tübingen
            <P />
            SV Herrenberg - ABV Nagold
            <P />
            SC Weiler - 1. FC Hirrlingen
            <P />
            Spvgg Aue - FC Mössingen
            <P />
            Eintracht Süng - ASV Dettingen
            <P />
          </P>
          FC Stuttgart - SG Derendingen
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 2]}>
          <P>
            <img src={Tabelle} altText="Tabelle" />
          </P>
        </Box>
      </Flex>
    </Section>
  </Layout>
);

export default AboutPage;
