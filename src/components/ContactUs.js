import React from 'react'
import {Form, Col, Row, Button} from "react-bootstrap";

function ContactUs() {
  return (
    <Form className="container1 my-3">
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <Form.Label column sm={2}>
      Enquiry
    </Form.Label>
  <div className='center'>
    
            <textarea name="text" placeholder="Enquiry Message" cols="100" rows="6"></textarea>
          </div>
          <div className='center my-3'>
          <Button variant="success mx-3">Submit</Button>{' '}
          <Button variant="danger mx-3">Reset</Button>
           
          </div>
</Form>
  )
}

export default ContactUs
