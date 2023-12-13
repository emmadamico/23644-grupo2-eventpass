import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../App.css";
import "../styles/AboutUs.css";

export function About() {
  const teamMembers = [
    {
      name: "Cecilia E. Bonfanti",
      imageSrc: "./team/ceci.jpeg",
      description:
        "Hi! I'm Cecilia Bonfanti, passionate about frontend development, embracing creative challenges and innovative code solutions.",
      linkedin:
        "https://www.linkedin.com/in/cecilia-emilce-bonfanti-877a571b8/",
      github: "https://github.com/CeciliaBonfanti",
    },
    {
      name: "Fabian M. Castro",
      imageSrc: "./team/fabi.jfif",
      description:
        '"IT Geek". Constantly expanding coding knowledge, fueled by curiosity and a passion for technology.',
      linkedin: "https://www.linkedin.com/in/fabian-castro77",
      github: "https://github.com/fcg77",
    },
    {
      name: "Daniela Espinosa",
      imageSrc: "./team/danie.jpeg",
      description:
        "I’m Dani! I recently discovered the fascinating realm of programming and am enthusiastic about learning more in this captivating field.",
      linkedin: "https://github.com/Daniela-codoacodo",
      github: "https://github.com/Daniela-codoacodo",
    },
    {
      name: "Daniela Homobono",
      imageSrc: "./team/danih.jpg",
      description:
        "Hi there! I'm Daniela, an event enthusiast who loves learning programming with great passion.",
      linkedin: "https://linkedin.com/in/daniela-homobono-08b627250",
      github: "https://github.com/danielaHomobono",
    },
    {
      name: "Marcelo Melogno",
      imageSrc: "./team/marce.jpeg",
      description:
        "Web Designer and Developer in constant training. I firmly believe that the path to improvement is through constant development and training.",
      linkedin: "https://www.linkedin.com/in/marcelomelogno/",
      github: "https://github.com/MarceM1",
    },
    {
      name: "Emmanuel A. Nenadovit",
      imageSrc: "./team/emma.jpg",
      description:
        "I'm Emmanuel, a 34 year old computer engineer working in cybersecurity. I enjoy traveling, socializing, and gaming",
      linkedin:
        "https://www.linkedin.com/in/emmanuel-angel-nenadovit-47036b96/",
      github: "https://github.com/emmadamico",
    },
    {
      name: "Melinda Pinto",
      imageSrc: "./team/meli.jpeg",
      description:
        "Embracing the beauty of nature, sharing love for dogs and music. Thriving on React's endless possibilities.",
      linkedin: "https://www.linkedin.com/in/melinda-pinto-ar22/",
      github: "https://github.com/webMelinda",
    },
    {
      name: "Cristian A. Robles",
      imageSrc: "./team/cris.jpeg",
      description:
        "Web Developer: Crafting digital experiences with creativity and precision.",
      linkedin: "https://www.linkedin.com/in/cristian-abel-robles/",
      github: "https://github.com/CristianAbelRobles/",
    },
  ];

  return (
    <main>
      <section className=" mt-5 pt-5">
        <article className="py-2 mt-2 mb-5 glass-bg">
          <Container>
            <h3 className="p-0 m-0  text-white versalita">About Us</h3>
          </Container>
        </article>
        <Container className="card-about ">
          <Row className="m-0 p-0">
            {teamMembers.map((member, index) => (
              <Col key={index} xs={12} md={6} lg={3} className="mb-4">
                <Card className="card__container-about">
                  <Card.Img
                    variant="top"
                    src={member.imageSrc}
                    alt={member.name}
                    className="card-img-top bg-transparent"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="z-3 text-white border__bottom-green-about">
                      {member.name}
                    </Card.Title>
                    <Card.Text className="z-3 text-white card__descripcion-about lh-sm">
                      {member.description}
                    </Card.Text>

                    <Card.Text className="d-flex align-items-center justify-content-around">
                      <Link
                        to={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={"/In-White-21.png"}
                          className="icon-about"
                        />
                      </Link>
                      <Link
                        to={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="icon-about">
                          <i class="bi bi-github fs-4 text-white "></i>
                        </div>
                      </Link>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-center border__top-green-about mx-3">
                    <small className="text-white text-center">
                      CODO a CODO 🚀
                    </small>
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
