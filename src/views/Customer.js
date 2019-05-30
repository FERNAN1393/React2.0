import React, {Component} from 'react';
import {Modal, Form, Col, Tabs, Tab, Card } from "react-bootstrap";
import Button from "../components/CustomButton.js";
import DataGrid, { Column, Pager, Paging, SearchPanel } from 'devextreme-react/data-grid';
import avatar from '../assets/img/default-avatar.png';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Customer extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onSelectionChanged = this.onSelectionChanged.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.guardarPaciente = this.guardarPaciente.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeBirthday = this.handleChangeBirthday.bind(this);
        this.state = {
            dataPaciente:[],
            vchNombre: '',
            vchApellidoPaterno: '',
            vchApellidoMaterno: '',
            vchDireccion: '',
            vchCodigoPostal: '',
            vchFechaIngreso: new Date(),
            vchTelefono: '',
            vchCorreo: '',
            vchFechaNacimiento: '',
            vchSexo: '',
            vchTipoSangre: '',
            decPeso: '',
            decAltura: '',
            vchDiagnostico: '',
            vchTratamiento: '',
            vchObservaciones: '',
            lgShow: false,
            showEmployeeInfo: false,
            selectedRowPicture: '',
            selectedRowNotes: '',
            selectRowIdKey:'',
            key: 'home',
          };
    }

    //Metodo para limpiar campos
    clearForm(){
        this.setState({ 
            vchNombre: '',
            vchApellidoPaterno: '',
            vchApellidoMaterno: '',
            vchDireccion: '',
            vchCodigoPostal: '',
            vchFechaIngreso: new Date(),
            vchTelefono: '',
            vchCorreo: '',
            vchFechaNacimiento: '',
            vchSexo: '',
            vchTipoSangre: '',
            decPeso: '',
            decAltura: '',
            vchDiagnostico: '',
            vchTratamiento: '',
            vchObservaciones: ''
        })
    }

    //Metodo para obtener la lista de registros
    componentDidMount() {
        axios.get(`http://localhost:54474/api/Pacientes`)
            .then(res => {
                console.log('res', res)
                let dataPaciente = res.data;
                console.log('persons', dataPaciente)
                this.setState({ dataPaciente, selectRowIdKey: '' });
                
      })
    }
    
    handleClose() {
        this.setState({ lgShow: false });
    }
    
    handleShow() {
        this.clearForm();
        this.setState({ showEmployeeInfo: false, lgShow: true });
    }
    
    //Metodo Devextreme para seleccionar filas de la tabla
    onSelectionChanged({ selectedRowsData }) {
        const data = selectedRowsData[0];
        console.log("dataSelected", data);
        this.setState({
            showEmployeeInfo: !!data,
            vchDiagnostico: data.vchDiagnostico,
            vchTratamiento: data.vchTratamiento,
            vchObservaciones: data.vchObservaciones,
            selectedRowPicture: data && data.Picture
        });
    }
    
    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value,
        });
    }
    handleChangeDate(date) {
        this.setState({
            vchFechaIngreso: date
        })
    }
    handleChangeBirthday(date) {
        this.setState({
            vchFechaNacimiento: date
        })
    }
    //Metodo para guardar Registros
    guardarPaciente(e){
        e.preventDefault();
        let infoPaciente={
            vchNombre : this.state.vchNombre,
            vchApellidoPaterno: this.state.vchApellidoPaterno,
            vchApellidoMaterno: this.state.vchApellidoMaterno,
            vchDireccion: this.state.vchDireccion,
            vchCodigoPostal: this.state.vchCodigoPostal,
            vchFechaIngreso: this.state.vchFechaIngreso,
            vchTelefono: this.state.vchTelefono,
            vchCorreo: this.state.vchCorreo,
            vchFechaNacimiento: this.state.vchFechaNacimiento,
            vchSexo: this.state.vchSexo,
            vchTipoSangre: this.state.vchTipoSangre,
            decPeso: this.state.decPeso,
            decAltura: this.state.decAltura,
            vchDiagnostico: this.state.vchDiagnostico,
            vchTratamiento: this.state.vchTratamiento,
            vchObservaciones: this.state.vchObservaciones,
        }
        console.log("envio info", infoPaciente);

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Origin': 'http://localhost:3000'
            }
          };
          
          axios.post('http://localhost:54474/api/Pacientes/create', infoPaciente, axiosConfig)
          .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            this.setState({lgShow: false})
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          })
          this.clearForm();
    }

    render(){
        let lgClose = () => this.setState({ lgShow: false });
        const margen ={
            marginLeft: '10px'
        }
        let colorLabelA = {
            color: 'green',
            fontWeight: 'bolder'
        }
        return(
            <div className="content">
                <Button  bsstyle="info" onClick={this.handleShow}>
                    Agregar
                </Button>
                <Button style={margen} variant="secondary" >
                    Editar
                </Button>
                <Button style={margen} variant="danger"  onClick={this.handleClose}>
                    Eliminar
                </Button>   
                <Modal size="lg" show={this.state.lgShow} onHide={lgClose} aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Alta Paciente</Modal.Title>
                    </Modal.Header>
                    <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
                        <Tab eventKey="home" title="Datos Generales">
                            <br></br>
                            <Modal.Body>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridName">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control type="texts" name="vchNombre" value={this.state.vchNombre} onChange={this.handleChange} />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridLastName">
                                            <Form.Label>Apellido Paterno</Form.Label>
                                            <Form.Control type="textr" name="vchApellidoPaterno" value={this.state.vchApellidoPaterno} onChange={this.handleChange} />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridSecondLastName">
                                            <Form.Label>Apellido Materno</Form.Label>
                                            <Form.Control type="text" name="vchApellidoMaterno" value={this.state.vchApellidoMaterno} onChange={this.handleChange} />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridAddress">
                                            <Form.Label>Direccion</Form.Label>
                                            <Form.Control type="text" name="vchDireccion" value={this.state.vchDireccion} onChange={this.handleChange} />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridZip">
                                            <Form.Label>Codigo Postal</Form.Label>
                                            <Form.Control type="text" name="vchCodigoPostal" value={this.state.vchCodigoPostal} onChange={this.handleChange}/>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridDate">
                                            <Form.Label>Fecha Ingreso</Form.Label>
                                            <DatePicker className="form-control" dateFormat="dd/MM/yyyy" selected={this.state.vchFechaIngreso} onChange={this.handleChangeDate} />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridPhoneNumber">
                                            <Form.Label>Telefono</Form.Label>
                                            <Form.Control type="text" name="vchTelefono" value={this.state.vchTelefono} onChange={this.handleChange} />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Correo Electronico</Form.Label>
                                            <Form.Control type="text" name="vchCorreo" value={this.state.vchCorreo} onChange={this.handleChange}/>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Modal.Body>
                        </Tab>
                        <Tab eventKey="profile" title="Datos Medicos">
                        <br></br>
                            <Modal.Body>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridName">
                                            <Form.Label>Fecha Nacimiento</Form.Label>
                                            <DatePicker  className="form-control" dateFormat="dd/MM/yyyy" selected={this.state.vchFechaNacimiento} onChange={this.handleChangeBirthday}/>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridLastName">
                                            <Form.Label>Sexo</Form.Label>
                                            <Form.Control as="select" name="vchSexo" value={this.state.vchSexo} onChange={this.handleChange}>
                                                <option >Seleccione uno:</option>
                                                <option value="Masculino">Masculino</option>
                                                <option value="Femenino">Femenino</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridSecondLastName">
                                            <Form.Label>Tipo de Sangre</Form.Label>
                                            <Form.Control type="text" name="vchTipoSangre" value={this.state.vchTipoSangre} onChange={this.handleChange} />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridAddress">
                                            <Form.Label>Peso</Form.Label>
                                            <Form.Control type="text" name="decPeso" value={this.state.decPeso} onChange={this.handleChange} />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>Altura</Form.Label>
                                            <Form.Control type="text" name="decAltura" value={this.state.decAltura} onChange={this.handleChange}/>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Diagnostico</Form.Label>
                                            <Form.Control as="textarea" rows="3" name="vchDiagnostico" value={this.state.vchDiagnostico} onChange={this.handleChange}/>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Tratamiento</Form.Label>
                                            <Form.Control as="textarea" rows="3" name="vchTratamiento" value={this.state.vchTratamiento} onChange={this.handleChange}/>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Observaciones</Form.Label>
                                            <Form.Control as="textarea" rows="3" name="vchObservaciones" value={this.state.vchObservaciones} onChange={this.handleChange} />
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Modal.Body>
                        </Tab>
                    </Tabs>
                    <Modal.Footer>
                    <   Button variant="secondary" onClick={this.handleClose} >
                            Cerrar
                        </Button>
                        <Button bsstyle="info" onClick={this.guardarPaciente}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>
                <br></br>
                <br></br>
                <Card>
                    <Card.Body>
                        <DataGrid
                            dataSource={this.state.dataPaciente}
                            showBorders={true}
                            columnHidingEnabled={true}
                            rowAlternationEnabled={true}
                            selection={{ mode: 'single' }}
                            onSelectionChanged={this.onSelectionChanged}
                        >
                        <Paging defaultPageSize={10} />
                        <Pager
                            showPageSizeSelector={true}
                            allowedPageSizes={[5, 10, 20]}
                            showNavigationButtons={true}
                            showInfo={true} />
                        <SearchPanel visible={true}
                            width={240}
                            placeholder={'Buscar...'} />
                        <Column dataField={'vchNombre'} caption={'Titles'}/>
                        <Column dataField={'vchApellidoPaterno'} />
                        <Column dataField={'vchApellidoMaterno'} />
                        <Column dataField={'vchDireccion'}/>
                        <Column dataField={'vchCorreo'} />
                        <Column dataField={'vchTelefono'}/>
                        <Column dataField={'dtmFechaIngreso'} dataType={'date'}/>
                        </DataGrid>
                        <br></br>
                        <br></br>
                        {
                        this.state.showEmployeeInfo &&
                        <div id={'employee-info'}>
                            <img src={avatar} className={'employee-photo'} />
                            <br></br>
                            <p className={'employee-notes'}><a style = {colorLabelA}>Diagnostico:   </a>{this.state.vchDiagnostico}</p>
                            <p className={'employee-notes'}><a style = {colorLabelA}>Tratamiento:   </a>{this.state.vchTratamiento}</p>
                            <p className={'employee-notes'}><a style = {colorLabelA}>Observaciones: </a>{this.state.vchObservaciones}</p>
                        </div>
                        }
                    </Card.Body>
                </Card>
          </div>
        )   
    }

}
export default Customer;
