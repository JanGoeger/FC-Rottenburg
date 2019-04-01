import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, P } from "../components/VerticalRhythm"
import img01_4x1 from "../images/1920/4x1/41.png"
import img01_21x9 from "../images/1440/21x9/219.png"
import img01_16x9 from "../images/1200/16x9/169.png"
import img01_3x2 from "../images/0800/3x2/32.png"
import img01_4x3 from "../images/0480/4x3/43.png"
import breakpoints from "../theme/breakpoints"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Figure caption="Photo from fcrottenburg.de">
      <picture>
        <source srcSet={img01_4x1} media={`(min-width: ${breakpoints.xl})`} />
        <source srcSet={img01_21x9} media={`(min-width: ${breakpoints.lg})`} />
        <source srcSet={img01_16x9} media={`(min-width: ${breakpoints.md})`} />
        <source srcSet={img01_3x2} media={`(min-width: ${breakpoints.sm})`} />
        <img src={img01_4x3} alt="Cologne" />
      </picture>
    </Figure>
    <Section>
      <H1>Wir für Deine Stadt!</H1>
      <P>Willkommen auf der (in)offiziellen Homepage des FC Rottenburg 1946</P>
      <P />
      <P>
        Of course, you can also use icons, e.g.{" "}
        <FontAwesomeIcon icon="coffee" />, <FontAwesomeIcon icon="yin-yang" />,{" "}
        <FontAwesomeIcon icon="peace" />.
      </P>
    </Section>
  </Layout>
)

export default IndexPage
