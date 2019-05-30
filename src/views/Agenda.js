import React from 'react';
import {Card } from "react-bootstrap";
import { data } from '../data.js';
import Scheduler from 'devextreme-react/scheduler';
import 'react-day-picker/lib/style.css';
import Citas from './Citas'
import {Button, Row, Col, Form } from "react-bootstrap";

const currentDate = new Date();
const views = ['month'];

class Agenda extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state ={
      vchNombre:'',
      vchDescripcion:'',
      dtmFecha:''
    }
  
  }
  
  render() {
    return (
        <div className="content">
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Citas/>
                </Card.Body>
              </Card>
            </Col>
            <Col md={8}>
              <Card body outline color="warning">                        
                <Scheduler
                  dataSource={data}
                  views={views}
                  defaultCurrentView={'month'}
                  defaultCurrentDate={currentDate}
                  height={600}
                  startDayHour={9} />
                <br></br>
                <Row>
                  <Col>
                    <Form.Group as={Col} controlId="formGridSecondLastName">
                      <Form.Label>Nombre:</Form.Label>
                      <Form.Control type="text" name="vchNombre" value={this.state.vchNombre} disabled/>
                    </Form.Group>
                  </Col>
                  <Col>
                  <Col>
                    <Form.Group as={Col} controlId="formGridSecondLastName">
                      <Form.Label>Descripcion:</Form.Label>
                      <Form.Control type="text" name="vchDescripcion" value={this.state.vchDescripcion} disabled/>
                    </Form.Group>
                  </Col>
                  </Col>
                  <Col>
                    <Form.Group as={Col} controlId="formGridSecondLastName">
                      <Form.Label>Fecha:</Form.Label>
                      <Form.Control type="text" name="dtmFecha" value={this.state.dtmFecha} disabled/>
                    </Form.Group>
                  </Col>
                </Row>
                {/* <Row>
                  <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Button color="danger" id="btnDelete" className="col-sm-12" > Delete </Button>      
                  </Col>
                </Row> */}
              </Card>
            </Col>
          </Row>
        </div>       
    );
  }
}

export default Agenda;
