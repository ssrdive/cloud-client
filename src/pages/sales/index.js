import React from 'react';
import {
    Row, Col, title, Card, CardBody,Label, Table, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown,Form,FormGroup,Input,Button 
} from 'reactstrap';
import Sales from '../../components/sales/Sales';
import PageTitle from '../../components/PageTitle';

const records = [
    { id: 1, firstName: 'Greeva', lastName: 'N', username: '@greeva' },
    { id: 2, firstName: 'Dhyani', lastName: 'B', username: '@dhyani' },
    { id: 3, firstName: 'Manu', lastName: 'B', username: '@mannat' },
    { id: 4, firstName: 'Nik', lastName: 'N', username: '@nikn' },
    { id: 5, firstName: 'Shreyu', lastName: 'Navadiya', username: '@sn' },
];

const HoverableTable = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0 mb-1">Sales Watch</h4>
                <br />
                <p className="sub-header">
                    THERE ARE 13 OVERDUE WATCHES
                </p>

                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>CLOUD ID</th>
                            <th>EXPIRES</th>
                            <th>CONTENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

const DefaultFormCloud = () => {
    return (
        <Card>
            <CardBody>
                
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail2">Cloud Id</Label>
                        <Input type="email" name="email" id="exampleEmail2" placeholder="Enter your Cloud Id" />
                    </FormGroup>

                    <Button color="primary" type="submit">
                        search
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
};


const DefaultFormChassis = () => {
    return (
        <Card>
            <CardBody>
                <h4></h4>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail2">Chassis Number</Label>
                        <Input type="email" name="email" id="exampleEmail2" placeholder="Enter your Chassis Number" />
                    </FormGroup>

                    <Button color="primary" type="submit">
                        search
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
};

const DefaultFormSearch = () => {
    return (
        <Card>
            <CardBody>
               
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail2">Search</Label>
                        <Input type="email" name="email" id="exampleEmail2" placeholder="Enter Keyword" />
                    </FormGroup>

                    <Button color="primary" type="submit">
                        search
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
};

export default (props) => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[{ label: 'Randeepa', path: '/sale', active: true },
                        { label: 'sale', path: '/sale', active: true }
                    ]}
                        title={'Sales'}
                    />
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col>
                    <Card>
                        <CardBody>
                            <Row className="align-items-center">
                                
                            <Col>
                                 <h3><label className="">Quick Links</label></h3>  
                                    <UncontrolledDropdown className="">
                                        <DropdownToggle tag="a" className="dropdown-toggle p-0 arrow-none font-weight-bold cursor-pointer">
                                            Show
                                            <i className='uil uil-angle-down font-size-16 align-middle ml-1'></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>
                                                Today
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>
                                                Cloud Date
                                            </DropdownItem>
                                           
                                            <DropdownItem>
                                                Acual Date
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>
                                                All Sales
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            
            <Row>
                <Col>
                    <HoverableTable />
                </Col>
            </Row>
            
            <Row className="align-items-center">
                <Col>
                
                    <Card>
                        <CardBody>
                    <h3><label className="">Find Sale Information</label></h3>  

                            <Row className="align-items-center">
                                
                         

                <Col lg={4}>
                <DefaultFormCloud />
                
                                </Col>
                                <Col lg={4}>
                <DefaultFormChassis />
                
                                </Col>
                                
                            <Col lg={4}>
                <DefaultFormSearch />
                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
       
            <Row className="align-items-center">
                <Col>
                
                    <Card>
                        <CardBody>
                    

                            <Row className="align-items-center">
                                
                         
                            <Col lg={12}>
                                  <Sales />
                            </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
        );
    };
    