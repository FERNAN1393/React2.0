import React from 'react';
import {Card } from "react-bootstrap";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Alert, Button, DropdownItem, Row, Col, Dropdown, Form } from "react-bootstrap";

const MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const WEEKDAYS_SHORT = ['Do','Lu','Ma','Mi','Ju','Vi','Sa']
const WEEKDAYS_LONG =['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
class Citas extends React.Component {
    constructor(props){
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
          selectedDay: null,
          currentMonth: new Date().getMonth(),
          currentYear: new Date().getFullYear(),
          vchPaciente: '',
          vchDescripcion:''
        };
    }
    

    

    handleDayClick(day, { selected }) {
        this.setState({
          selectedDay: selected ? undefined : day,
        });
    }
    

    
    handleChange(e){
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;     
        this.setState({
            [name]: value
        });
    }
    

    render(){
        return(
            <div className="content">
                <Card body outline color="info" className="col-sm-11">
                    <Row>
                        <Col>
                            <label htmlFor="calendar"><b>Selecciona dia:</b></label>
                            <DayPicker 
                                selectedDays={this.state.selectedDay}
                                fromMonth={new Date(this.state.currentYear, this.state.currentMonth)}
                                onDayClick={this.handleDayClick}
                                months={MONTHS}
                                weekdaysLong={WEEKDAYS_LONG}
                                weekdaysShort={WEEKDAYS_SHORT}/>
                            <label>
                            {this.state.selectedDay
                                ? " " + this.state.selectedDay.toLocaleDateString()
                                :  ' No day selected yet 👻'}
                            </label>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Group as={Col} controlId="formGridSecondLastName">
                                <Form.Label>Descripcion:</Form.Label>
                                <Form.Control type="text" name="vchApellidoMaterno" value={this.state.vchDescripcion} onChange={this.handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Paciente:</Form.Label>
                                <Form.Control as="select" name="vchSexo" value={this.state.vchPaciente} onChange={this.handleChange}>
                                    <option >Seleccione uno:</option>
                                    <option value="Masculino">Fernando Sanchez</option>
                                    <option value="Femenino">Pedro Perez</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button color="info" className="col-sm-12"> Guardar Cita </Button>      
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }

}

export default Citas