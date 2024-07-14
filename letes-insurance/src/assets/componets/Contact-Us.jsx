
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function AppContact(){

    return(
    
        <section id='Contact us'>

           <Container fluid className='overall'>

           <div className='section-tittle'>
            <h3>Contact Us</h3>
            <p>Get Intouch and Get Insured </p>
        </div>

        <Form>
      <Row className='contact-form'>
        <Col sm={12} md={6} lg={4}>
          <Form.Control  type='test' placeholder="Enter your full Name" required/>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Form.Control  type='email' placeholder="Enter your email address" required/>
        </Col>
        <Col sm={12} lg={4}>
          <Form.Control  type='tel' placeholder="Enter your Contact" required/>
        </Col>
      </Row>

        <Row>

        <colume sm={12}>
        <Form.Control className='message' as='textarea' placeholder="Enter your Message" required/>
        </colume>

        </Row>

        <Row>

    <Col sm={12} className='button'>
    <button type='summit'>Summit</button>
    </Col>

</Row>
    </Form>

           </Container>

        <Container fluid >     
        <div className='goggle-map'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507365.35487409495!2d2.954296628594845!3d6.547947654560678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1719147943227!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </Container>

        <Container fluid className='contact-info'>

            <div>
                <ul>
                    <li>
                         <i class="fa-solid fa-envelope"></i>
                        <p>infor@letesinsureane.com</p>
                    </li>

                    <li>
                    <i class="fa-solid fa-location-dot"></i>
                    <p>7 Olayona Lawal Str, Ifako-Ijaye, Lagos State.</p>

                    </li>
                    <li>
                    <i class="fa-solid fa-phone"></i>
                    <p>+234 802 662 2335</p>
                    </li>
                </ul>

            </div>


        </Container>

        </section>
    );
    
    }