import React from 'react';
import { Card, Row, Col, CardBody, button, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { ChevronDown } from 'react-feather';

export default ({ history }) => {
    return (
        <Card>
            <CardBody>
                <Row className="align-items-center">
                                
                    <Col>
                        <h3><label className="">Quick Links</label></h3>  
                        <UncontrolledDropdown className="d-inline">
                                                <DropdownToggle color="info">
                                                    Show{' '}
                                                    <i className="icon">
                                                    <ChevronDown></ChevronDown>
                                                    </i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem
                                                       onClick={() => {
                                                            history.push('/sale/quick-all-sales');
                                                        }}>
                                                       All Sales
                                                    
                                                    </DropdownItem>
                                                    <DropdownItem
                                                       onClick={() => {
                                                            history.push('/sale/quick-today-sales');
                                                        }}>
                                                       Today
                                                    
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        onClick={() => {
                                                            history.push(`/financials/payment-vouchers`);
                                                        }}>
                                                        Payment Vouchers
                                                    </DropdownItem>
                                                </DropdownMenu>
                         </UncontrolledDropdown>                               
                    </Col>
              </Row>                
           </CardBody>
        </Card>
    );
};
