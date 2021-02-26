import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import ChapterCard from "./ChapterCard/ChapterCard";

// this variable simutales the .json file that will be received and parsed
const chapters = [
<<<<<<< HEAD
    {
        name: "Computer Society",
        description:
            "Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo.",
        url: "#instagram",
        members: "0",
        path: "logo_cs.png",
    },
    {
        name: "Power and Energy Society",
        description:
            "B I C I C L E T A. Bicileta elétrica de controle remoto. Churrasqueira de controle remoto. ELÉTRICA BICICLETA.",
        url: "#instagram",
        members: "0",
        path: "logo_pes.png",
    },
    {
        name: "Robotics and Automation Society",
        description:
            "Aleixo Aleixo Aleixo Aleixo Aleixo. Aleixo Aleixo Aleixo Aleixo Aleixo. Aleixo Aleixo Aleixo Aleixo Aleixo. Aleixo Aleixo Aleixo Aleixo Aleixo.",
        url: "#instagram",
        members: "0",
        path: "logo_ras.png",
    },
=======
  {
    name: 'Computer Society',
    description: 'Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo.',
    url: '#instagram',
    members: '0',
    path: '../../logo_CS.png'
  },
  {
    name: 'Power and Energy Society',
    description: 'B I C I C L E T A. Bicileta elétrica de controle remoto. Churrasqueira de controle remoto. ELÉTRICA BICICLETA.',
    url: '#instagram',
    members: '0',
    path: '../../logo_PES.png'
  },
  {
    name: 'Robotics and Automation Society',
    description: 'Aleixo Aleixo Aleixo Aleixo Aleixo. Aleixo Aleixo Aleixo Aleixo Aleixo. Aleixo Aleixo Aleixo Aleixo Aleixo. Aleixo Aleixo Aleixo Aleixo Aleixo.',
    url: '#instagram',
    members: '0',
    path: '../../logo_RAS.png'
  },
>>>>>>> fc7c0d9... updating ChapterCard
];

export class Chapters extends Component {
    static propTypes = {};

<<<<<<< HEAD
    render() {
        return (
            <div>
                <section style={{ display: "inline-block", width: "66%" }}>
                    <h2>Capítulos</h2>
                    <CardDeck>
                        {chapters.map((chap) => (
                            <ChapterCard
                                chapter={chap}
                                key={chap.name}
                            ></ChapterCard>
                        ))}
                    </CardDeck>
                </section>
            </div>
        );
    }
=======
  render() {
    return (
      <div>
        <section style={{ display: 'inline-block', width: '66%' }}>
          <h2>Capítulos</h2>
          <CardDeck>
            {
              chapters.map(chap =>
                <ChapterCard
                  chapter={chap} key={chap.name}
                ></ChapterCard>
              )
            }
          </CardDeck>
        </section>
      </div>
    );
  }
>>>>>>> fc7c0d9... updating ChapterCard
}

export default Chapters;
