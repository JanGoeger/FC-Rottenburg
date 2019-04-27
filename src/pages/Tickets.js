import React from "react";
import { Flex, Box } from "rebass";
import { H1, H2, P, Ol } from "../components/VerticalRhythm";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Section from "../components/Section";
import RespGrid from "../components/RespGrid";
import Spiel1 from "../images/Spiel1.png";
import Spiel2 from "../images/Spiel2.png";
import Spiel3 from "../images/Spiel3.png";
import Spiel4 from "../images/Spiel4.png";

const ResourcesPage = () => (
  <Layout>
    <SEO title="Tickets" />
    <Section>
      <H1>Tickets</H1>
    </Section>
    <Section>
      <H2>Heimspiele</H2>
      <p />
      <strong>FC Rottenburg - SC Tübingen (05.04.2019)</strong>
      <p />
      <img src={Spiel1} altText="Spiel1" />
      <p />
      Anpfiff ist um 15:30 im Rottenburger Hohenbergstadion
      <p />
      Stehplatz: 3€
      <p />
      Sitzplatz: 5€
      <p />
      <strong>FC Rottenburg - SV Herrenberg (20.04.2019)</strong>
      <p />
      <img src={Spiel2} altText="Spiel2" />
      <p />
      Anpfiff ist um 15:30 im Rottenburger Hohenbergstadion
      <p />
      Stehplatz: 3€
      <p />
      Sitzplatz: 5€
      <p />
    </Section>
    <hr />
    <Section>
      <H2>Auswärtsspiele</H2>
      <p />
      <strong>ABV Nagold - FC Rottenburg (12.04.2019)</strong>
      <p />
      <img src={Spiel3} altText="Spiel3" />
      <p />
      Anpfiff ist um 15:30 im Nagolder Schwarzwaldstadion
      <p />
      Stehplatz: 3€
      <p />
      Sitzplatz: 5€
      <p />
      <strong>FC Weiler - FC Rottenburg (27.04.2019)</strong>
      <p />
      <img src={Spiel4} altText="Spiel4" />
      <p />
      Anpfiff ist um 15:30 im Weilerner Schönbuchstadion
      <p />
      Stehplatz: 3€
      <p />
      Sitzplatz: 5€
      <p />
    </Section>
  </Layout>
);

export default ResourcesPage;
