import React, { useState, useEffect } from 'react';
import { Label, Card, Row, Col, CardBody, Table, Spinner,Form,FormGroup,Button  } from 'reactstrap';
import FormInput from '../form/FormInput';
import Flatpickr from 'react-flatpickr'
import CommentsWatches from './CommentsWatches'

import { apiAuth } from '../../basara-api';

const DocumentSet = () =>{
    return(
        <FormGroup>
             <h4 className="header-title mt-0">Document Set</h4>
                <Row>
                    <Col md={2}>Document Set Complete&nbsp;&nbsp;</Col>
                    <Col md={1}><a href="###########"><button class="success"><font color="black">Mark Complete</font></button></a></Col>
              </Row>
        </FormGroup>
    );
}

const RMVDelivery = () =>{
    return(
            <FormGroup>
                <h4 className="header-title mt-0">RMV Deleivery</h4>
                <Row>
                    <Col md={2}><p>Sent to RMV</p></Col>
                    <Col md={1}><a href=""><button class="success"><font color="black">Mark Complete</font></button></a></Col>
              </Row>
            </FormGroup>
    );
}


const Registration = () =>{
    return(

        <Row>
            <Col md={3}>
                <h4 className="header-title mt-0">Registration</h4>
               <Form>
                    <Label for="text">Registration date</Label>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Flatpickr value={new Date()} options={{altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d"}}
                                    onChange={date => { console.log(date) }}
                                    className="form-control" /> 
                        </FormGroup>
                        

                        <FormGroup>
                       <Label for="text">Register Number</Label>
                            <FormInput type="text" placeholder="1234567" />
                        </FormGroup>
               
                        <FormGroup>
                            <Label for="text">CR</Label>
                            <FormInput type="file" name="attachment" accept=".jpg, .jpeg, .png, .JPG, .JPEG, .PNG"  />
                        </FormGroup>

                        <Button color="primary" type="submit">Add</Button>
                    </Form>
            </Col>
        </Row>   
    );
}


const CRHandOver = () =>{
    return(

        <Row>
            <Col md={3}>
                <h4 className="header-title mt-0">CR HandOver</h4>
               <Form>
                    <FormGroup>
                       <Label for="text">Pronto Number</Label>
                            <FormInput type="number" placeholder="1234567" />
                    </FormGroup>
                   
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="text">Pronto Date</Label>
                            <Flatpickr value={new Date()} options={{altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d"}}
                                    onChange={date => { console.log(date) }}
                                    className="form-control" /> 
                    </FormGroup>
                        
                    <FormGroup>
                       <Label for="text">Person Responsible</Label>
                            <FormInput type="text" placeholder="Mr James Bone" />
                    </FormGroup>
                   
                    <FormGroup>
                        <Label for="text">Remarks</Label>
                            <FormInput  name="id" placeholder="Remarks"  type="textarea"  required />
                    </FormGroup>
                        <Button color="primary" type="submit">Add</Button>
                    </Form>
            </Col>
        </Row>   
    );
}

const CustomerConfirmation = () =>{
    return(

        <Row>
            <Col md={3}>
                <h4 className="header-title mt-0">Customer Confirmation</h4>
               <Form>
                    <FormGroup>
                        <Label for="text">Customer Confirmation</Label>
                            <FormInput  name="id" placeholder="Remarks"  type="textarea"  required />
                    </FormGroup>
                        <Button color="primary" type="submit">Add</Button>
                    </Form>
            </Col>
        </Row>   
    );
}



export default ({ id }) => {
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        const fetchDetails = () => {
            apiAuth
                .get(`/contract/questions/${id}`)
                .then(res => {
                    if (res.data === null) setQuestions(prevQuestions => []);
                    else setQuestions(prevQuestions => res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        };
        fetchDetails();
    }, [id]);

    return (
        <Card>
            <CardBody>
                <Row>
                    <Col><DocumentSet /></Col>
                </Row>
                <br /> <hr />
                <Row>
                    <Col><RMVDelivery /></Col>
                </Row>
                <br /> <hr />
                <Row>
                    <Col><Registration /></Col>
                </Row>
                <br /> <hr />
                <Row>
                    <Col><CRHandOver /></Col>
                </Row>
                <br /> <hr />
                <Row>
                    <Col><CustomerConfirmation /></Col>
                </Row>
                <br /> <hr />
                <Row>
                    <Col><CommentsWatches id={id} /></Col>
                </Row>      
            </CardBody>
        </Card>
    );
};
