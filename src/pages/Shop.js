import React from "react";
import { Flex, Box } from "rebass";
import { H1, H3, P } from "../components/VerticalRhythm";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Section from "../components/Section";
import RespGrid from "../components/RespGrid";
import Trikot1 from "../images/Trikot1.jpg";
import Trikot2 from "../images/Trikot2.jpg";
import Dauerkarte from "../images/Dauerkarte.png";
import Logo from "../images/mainz.png";

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
      <hr />
      <Section>
        <H3>Dauerkarte Saison 18/19</H3>
      </Section>
      <RespGrid min={"240px"}>
        <P>
          Die Dauerkarte "Klassenerhalt" erhalten Sie hier im Shop für
          unschlagbare 35€ und gilt für alle anstehenden Heimspiele der Saison.
        </P>
        <P>
          <img src={Dauerkarte} altText="Dauerkarte" />
        </P>
      </RespGrid>
      <hr />
      <Section>
        <H3>Allgemeine Shopinfos</H3>
      </Section>
      <RespGrid min={"240px"}>
        <P>
          Wenn euch die oben gelisteten Artikel angesprochen haben und
          ernsthaftes Interesse am Kauf besteht, kontaktiert mich bitte einfach
          per &nbsp;{" "}
          <a href="mailto:jangoeger95@web.de?subject=Fragen, Anregungen, Kritik">
            E-Mail.
          </a>
          &nbsp; Gerne gebe ich euch weitere Hinweise über die Produkte. Bitte
          seien Sie darauf hingewiesen, dass für eine Beflockung mit Nummer und
          Name eine Extragebühr von 10€ berechnet wird. Geeignete
          Zahlungsmethoden sind Kreditkarte, Paypal, Klarna, Lastschrift und
          Nachnahme.
        </P>
        <P>
          <img src={Logo} altText="Logo" />
        </P>
      </RespGrid>
    </Section>
  </Layout>
);

export default AboutPage;
