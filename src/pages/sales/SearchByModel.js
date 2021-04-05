import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr'
import PageTitle from '../../components/PageTitle';


const InlineFormOfficer = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0">OFFICER <br />Cloud Date</h4>
                <Form>
                
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <div className="form-group">
                            <label>Start Date</label> <br />
                            <Flatpickr value={new Date()} options={{altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d"}}
                                    onChange={date => { console.log(date) }}
                                    className="form-control" />
                        </div>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <div className="form-group">
                            <label>End Date</label> <br />
                            <Flatpickr value={new Date()} options={{altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d"}}
                                    onChange={date => { console.log(date) }}
                                    className="form-control" />
                        </div>
                    </FormGroup>
                    <FormGroup>
                    
                    <Select
                    
                    className="react-select"
                    classNamePrefix="react-select"
                    options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' },
                    ]}></Select>
                    
                    </FormGroup>
                    <FormGroup>
                  
                    <Select
                    
                    className="react-select"
                    classNamePrefix="react-select"
                    options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' },
                    ]}></Select>
                    
                    </FormGroup>
                   
                    <Button color="primary" type="submit">
                        List
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
};

const BasicForms = () => {
    return (
        <React.Fragment>

            <Row>
                <Col xl={12}>
                    <InlineFormOfficer />
                </Col>
            </Row>
        </React.Fragment>
    );
};
export default BasicForms;
