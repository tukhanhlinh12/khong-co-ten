import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <h2>WORK SHOP</h2>
      <p>Không nhìn rõ chữ ?</p>
      <br></br>
      <Container>
        <Row>
          <Col>
            {[
              'Light',
            ].map((variant) => (
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '75rem' }}
                className="mb-2"
              >
                <Card.Header>November <span className='sale'>Sold Out</span></Card.Header>
                <Card.Header>September <span className='sale'>Sold Out</span></Card.Header>
                <Card.Header>December <span className='number'>15</span></Card.Header>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>

      <br></br>
      <br></br>

      <Container>
        <Row>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img className='yasuo' variant="top" src={require('./Image/1.jpg')} />
              <Card.Body className='cards' >
                <Card.Title className='cardz'>Hà Nội</Card.Title>
                <Card.Text className='date'>
                  Fri 28 Nov 2021
                </Card.Text>
                <Card.Text className='cardz'>
                  Ha Noi faith and hope. We always wating for you!
                </Card.Text>
                <br></br>
                <Button variant="dark" size="lg">
                  Buy Tickets
                </Button>{' '}
                <Button className='buttons' variant="danger" size="lg">
                  Get Free
                </Button>
              </Card.Body>
              <br></br>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img className='yasuo' variant="top" src={require('./Image/2.jpg')} />
              <Card.Body className='cards'>
                <Card.Title className='cardz'>Hồ Chí Minh City</Card.Title>
                <Card.Text className='date'>
                  Tue 28 Dec 2021
                </Card.Text>
                <Card.Text className='cardz'>
                  HCM City active and  mordernization. We always wating for you!
                </Card.Text>
                <Button variant="dark" size="lg">
                  Buy Tickets
                </Button>{' '}
                <Button className='buttons' variant="danger" size="lg">
                  Get Free
                </Button>
              </Card.Body>
              <br></br>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img className='yasuo' variant="top" src={require('./Image/3.jpg')} />
              <Card.Body className='cards'>
                <Card.Title className='cardz'>Đà Nẵng</Card.Title>
                <Card.Text className='date'>
                  Thu 28 Nov 2021
                </Card.Text>
                <Card.Text className='cardz'>
                  Da Nang regional stature. We always wating for you!
                </Card.Text>
                <br></br>
                <Button variant="dark" size="lg">
                  Buy Tickets
                </Button>{' '}
                <Button className='buttons' variant="danger" size="lg">
                  Get Free
                </Button>
              </Card.Body>
              <br></br>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
    </>
  );
}
export default App;
