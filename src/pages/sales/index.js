import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'react';
import {
    Row, Col, title, Card, CardBody,Label, Table, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown,Form,FormGroup,Input,Button 
} from 'reactstrap';
import Sales from '../../components/sales/Sales';
import SaleWatchDetails from '../../components/sales/SaleWatchDetails';
import PageTitle from '../../components/PageTitle';
import SaleQuickLink from '../../components/sales/SaleQuickLink';
import FindSaleInfor from '../../components/sales/FindSaleInfor'


export default ({ history }) => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[{ label: 'Sales', path: '/sales', active: true }]}
                        title={'Sales'}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <SaleQuickLink  history={history} />
                    <FindSaleInfor history={history} />
                    <Sales history={history}  />
                </Col>
            
                <Col md={8}>
                    <SaleWatchDetails  history={history} />
                </Col>
            </Row>
            
        </React.Fragment>
        );
    };
    