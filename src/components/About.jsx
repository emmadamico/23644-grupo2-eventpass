import "../App.css";
import '../styles/AboutUs.css'
import { Container, Row, Col, Image, Card } from 'react-bootstrap';


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
      imageSrc: './team/cris.jpeg',
      description: 'Web Developer.',
      linkedin: 'https://www.linkedin.com/in/cristian-abel-robles/',
      
    },
    {
      name: 'Marcelo Melogno',
      imageSrc: './team/marce.jpeg',
      description: 'Web Designer and Developer in constant training. I firmly believe that the path to improvement is through constant development and training.',
      linkedin: 'https://www.linkedin.com/in/marcelomelogno/',
      
    },
    {
      name: 'Melinda Pinto',
      imageSrc: './team/meli.jpeg',
      description: 'I love spending time in nature, I am a fan of dogs and music. Loving react.',
      linkedin: 'https://www.linkedin.com/in/melinda-pinto-ar22/',
      
    },
    {
      name: 'Emmanuel Angel Nenadovit',
      imageSrc: './team/ema.jpeg',
      description: 'My name is Emmanuel, I’m 34 years old. I’m a computer engineer and I work in a cybersecurity company. I like traveling, being with friends and video games.',
      linkedin: 'https://www.linkedin.com/in/emmanuel-angel-nenadovit-47036b96/',
      
    },
    {
      name: 'Daniela Espinosa',
      imageSrc: './team/danie.jpeg',
      description: 'I’m Dani! I recently discovered the fascinating realm of programming and am enthusiastic about learning more in this captivating field.',
      linkedin: 'https://github.com/Daniela-codoacodo',
      
    },
    {
      name: 'Fabian M. Castro',
      imageSrc: './team/fabi.jfif',
      description: '"IT Geek." Learning more about coding.',
      linkedin: 'https://www.linkedin.com/in/fabian-castro77',
      
    },
  ]
  
  return (
    <main>
      <banner className='banner-about'>
        <img src="/banner.png" alt="" />
        <h1 className="title">About Us</h1>
      </banner>
      <section>
        <Container className="card-about mx-auto">
          <Row>
            {teamMembers.map((member, index) => (
              <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={member.imageSrc} alt={member.name} className="card-img-top"/>
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>{member.description}</Card.Text>
                    {member.linkedin && (
                      <Card.Text>
                        LinkedIn: <a href={member.linkedin} target="_blank" rel="noopener noreferrer">{member.name}</a>
                      </Card.Text>
                    )}
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">CODO a CODO 🚀</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}