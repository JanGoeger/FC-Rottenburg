import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import Jugend from "../images/Jugend1.jpg"
import Jugend2 from "../images/Jugend2.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title="Jugend" />
    <Section>
      <H1 fontSize={[6]} lineHeight={[1.5]}>
        Rottenburger Kaderschmiede
      </H1>
      <H3>U16 holt die Herbsmeisterschaft!</H3>
    </Section>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 2]}>
          <P>
            Der u16 Nachwuchs des FC Rottenburg hat aufgrund einer
            außerordentlich starken Hinrunde hochverdient die
            Herbstmeisterschaft in der u16 Landesliga geholt. Mit einem 3:2
            Heimerfolg über TuS Tübingen im letzten Hinrundenspiel haben die
            Jungs erstmals die Tabellenführung übernommen und somit Borussia
            Reutlingen von der Spitze verdrängt. Somit geht der Nachwuchs als
            gejagtes Team in die Rückrunde.
          </P>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 2]}>
          <P>
            U16 Nachwuchscoach Mayer hat sich für seine gute Arbeit in der
            Hinrunde belohnt und war dementsprechend stolz auf seine Jungs{" "}
            <blockquote>
              {" "}
              "Ich bin total stolz auf die Jungs. Wir haben uns für eine klasse
              Hinrunde belohnt und können auf dieser Leistung aufbauen!"
              <cite> -Albert Mayer, u16 Coach FC Rottenburg</cite>
            </blockquote>
            Am 04.02.2019 geht es nun weiter mit dem Rückrundenauftakt auswärts
            beim Nagolder SV.
          </P>
        </Box>
        <img src={Jugend} altText="Jugend" />
      </Flex>

      <Section>
        <H3>U18 überwintert auf Abstiegsplatz!</H3>
      </Section>
      <RespGrid min={"240px"}>
        <P>
          Der u18 Nachwuchs des FC Rottenburg überwintert in der u18 Bezirksliga
          nur auf einem Abstiegsplatz. Das 0:4 am vergangenen Samstag gegen SV
          Stuttgart besiegelt eine katastrophale Hinrunde für die jungen
          Domstädter. Das rettende Ufer ist nun bereits 7 Punkte entfernt und
          ein Nichtabstieg scheint nun eine Herkulesaufgabe zu werden.
          Nichtsdestrotrotz wollen sich die jungen Rottenburger noch nicht
          aufgeben. U18 Kapitän Bender summiert die Hinrunde mit folgenden
          Worten:
        </P>
        <P>
          <blockquote>
            {" "}
            "Wir haben die komplette Hinrunde keinen Rythmus gefunden und selten
            unser Potenzial voll ausgeschöpft. Dementsprechend müssen wir in der
            Hinrunde doppelt so viel investieren um das Blatt noch zu wenden und
            den Nichtabstieg zu schaffen!"
            <cite> -Robert Bender, u18 Kapitän FC Rottenburg</cite>
          </blockquote>
          Die Rückrunde beginnt für die u18 am 05.02.2019 mit einem Heimspiel
          gegen den 1. FC Weiler, welcher ebenfalls auf einem Abstiegsplatz
          überwintert.
        </P>
      </RespGrid>
      <img src={Jugend2} altText="Jugend2" />
    </Section>
  </Layout>
)

export default AboutPage
