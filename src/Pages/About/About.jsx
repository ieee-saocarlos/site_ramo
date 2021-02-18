import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import Chapter from "../../Layout/Chapter/Chapter";

// this variable simutales the .json file that will be received and parsed
const chapters = [
  {
    name: 'Computer Society',
    description: 'Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo. Allan é o brabo.',
    url: '#instagram',
    members: '0'
  },
  {
    name: 'Power and Energy Society',
    description: 'B I C I C L E T A. Bicileta elétrica de controle remoto. Churrasqueira de controle remoto. ELÉTRICA BICICLETA.',
    url: '#instagram',
    members: '0'
  },
  {
    name: 'Robotics and Automation Society',
    description: 'Aleixo Aleixo Aleixo Aleixo Aleixo. Aleixo Aleixo Aleixo Aleixo Aleixo. Aleixo Aleixo Aleixo Aleixo Aleixo. Aleixo Aleixo Aleixo Aleixo Aleixo.',
    url: '#instagram',
    members: '0'
  },
];

// "About" page in a basic simplified version to test the Card components
export class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <section style={{ display: 'inline-block', width: '66%' }}>
          <h2>Capítulos</h2>
          <CardDeck>
            {
              chapters.map(chap =>
                <Chapter
                  chapter={chap}
                ></Chapter>
              )
            }
          </CardDeck>
        </section>
      </div>
    );
  }
}

export default Home;
