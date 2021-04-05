import React, { useState, useEffect } from 'react';
import {
    Row, Col, Card, CardBody,Label,Form,FormGroup,Input,Button 
} from 'reactstrap';
import FormInput from '../form/FormInput';
import PageTitle from '../../components/PageTitle';
import CloudIDSale from './CloudIDSale'
import ChassisIDSale from './ChassisIDSale';
import SearchKeySale from './SearchKeySale';

export default ({ history }) => {
    return (
        <React.Fragment>
        
           
            <Row className="align-items-center">
                <Col>
                
                    <Card>
                        <CardBody>
                    <h4><label className="">Find Sale Information</label></h4>  

                            <Row className="align-items-center">
                                        <Col md={12}>
                                            <CloudIDSale history={history} />
                                            <br />
                                        </Col>
                                        <Col md={12}>
                                             <ChassisIDSale history={history}/>
                                             <br />
                                       </Col>
                                        <Col md={12}>
                                             <SearchKeySale history={history} />
                                             <br />
                                        </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
        );
    };
    