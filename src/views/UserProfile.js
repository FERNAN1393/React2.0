import React, {Component} from "react";
import {Row, Col, Card, Form } from "react-bootstrap";
import Button from "../components/CustomButton.js";

class UserProfile extends Component{
    render(){
        return(
            <div className="content">
                <Row>
                    <Col md={12}>
                        <Card>
                            <Card.Body>                        
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridCompany">
                                            <Form.Label>Empresa</Form.Label>
                                            <Form.Control type="empresa" placeholder="" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridUser">
                                            <Form.Label>Usuario</Form.Label>
                                            <Form.Control type="user" placeholder="" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Correo</Form.Label>
                                            <Form.Control type="email" placeholder="" />
                                        </Form.Group>
                                    </Form.Row>
                                    <br></br>
                                    <Form.Row>
                                        <Col>
                                            <Form.Group controlId="formGridName">
                                                <Form.Label>Nombre</Form.Label>
                                                <Form.Control placeholder="" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="formGridLastName">
                                                <Form.Label>Apellido</Form.Label>
                                                <Form.Control placeholder="" />
                                            </Form.Group>
                                        </Col>
                                    </Form.Row>
                                    <br></br>
                                        <Form.Group controlId="formGridAddress">
                                            <Form.Label>Direccion</Form.Label>
                                            <Form.Control placeholder="" />
                                        </Form.Group>
                                    <br></br>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>Ciudad</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Estado</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridZip">
                                            <Form.Label>Codigo Postal</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Form.Row>
                                    <br></br>
                                    <Button bsStyle="info" pullRight >
                                        Update Profile
                                    </Button>
                                    <br></br>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

}
export default UserProfile;


