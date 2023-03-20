
import { Container, Row, Col, Button } from "react-bootstrap";
const Intro = () => {
    return (

<div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
          <Row>
            <Col>
            <div className="title">NONTON DI BIOSKOPI</div>
            <div className="title">GRATIS KOPI SAMPAI PAGI</div>
            <div className="introButton mt-4 text-center">
                <Button href="#trending" variant="dark">Lihat List</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro
