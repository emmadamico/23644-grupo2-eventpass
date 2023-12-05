import "../App.css";
import '../styles/AboutUs.css'
import React, {useState} from 'react';
import { Container, Row, Col, Image, Accordion } from 'react-bootstrap';


export function About() {
  
  const teamMembers = [
    {
      name: 'Cecilia Emilce Bonfanti',
      imageSrc: './team/ceci.jpeg',
      description: 'Hi! I’m Cecilia Bonfanti and I enjoy frontend development because it challenges me to use my creativity and gives me the opportunity to create innovative and original solutions with code.',
      linkedin: 'https://www.linkedin.com/in/cecilia-emilce-bonfanti-877a571b8/',
      
    },
    {
      name: 'Daniela Homobono',
      imageSrc: './team/danih.jpeg',
      description: '¡Hi! I’m Daniela, An event enthusiast and a passionate programming learner.',
      linkedin: 'https://linkedin.com/in/daniela-homobono-08b627250',
      
    },
    {
      name: 'Cristian Abel Robles',
      imageSrc: './team/ceci.jpeg',
      description: 'Creo en esto...',
      linkedin: 'https://www.linkedin.com/in/cristian-abel-robles/',
      
    },
    {
      name: 'Marcelo Melogno',
      imageSrc: './team/marce.jpg',
      description: 'Web Designer and Developer in constant training. I firmly believe that the path to improvement is through constant development and training',
      linkedin: 'https://www.linkedin.com/in/marcelomelogno/',
      
    },
    {
      name: 'Melinda Pinto',
      imageSrc: './team/ceci.jpeg',
      description: 'Creo en esto...',
      linkedin: 'https://www.linkedin.com/in/melinda-pinto-ar22/',
      
    },
    {
      name: 'Emmanuel Angel Nenadovit',
      imageSrc: './team/ceci.jpeg',
      description: 'Creo en esto...',
      linkedin: 'https://www.linkedin.com/in/emmanuel-angel-nenadovit-47036b96/',
      
    },
    {
      name: 'Daniela Espinosa',
      imageSrc: './team/danie.jpeg',
      description: 'Creo en esto...',
      linkedin: 'https://github.com/Daniela-codoacodo',
      
    },
    {
      name: 'Fabian M. Castro',
      imageSrc: './team/fabi.jfif',
      description: '"IT Geek"',
      linkedin: 'https://www.linkedin.com/in/fabian-castro77',
      
    },
  ]
  
  const initialActiveEventKeys = teamMembers.map((member, index) => index.toString());
  const [activeEventKeys] = useState(initialActiveEventKeys);
  
  return (
    <main>

      <banner className='banner-about'>
        <img
          src="/banner.png"
          alt=""
        />
        <h1 className="title">About Us</h1>
      </banner>
      <section>
        <div className="card-about mx-auto">
          <Accordion activeKey={activeEventKeys} defaultActiveKey={activeEventKeys}>
            {teamMembers.map((member, index) =>

              <Accordion.Item key={index} className='mb-4 border-0 custom-accordion' eventKey={index.toString()}>
                <Accordion.Header>{member.name}</Accordion.Header>
                <Accordion.Body>
                  <Container>
                    <Row>
                      <Col xs={12} md={6}>
                        <p>{member.description}</p>
                        {member.linkedin && (
                          <p>
                            LinkedIn: <a href={member.linkedin} target="_blank" rel="noopener noreferrer">{member.name}</a>
                          </p>
                        )}
                      </Col>
                      <Col xs={12} md={6}>
                        <Image
                          src={member.imageSrc}
                          alt={member.name}
                          roundedCircle
                          style={{ width: '171px', height: '180px' }}
                        />
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Body>
                <Accordion.Body>
                  CODO a CODO 🚀
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
