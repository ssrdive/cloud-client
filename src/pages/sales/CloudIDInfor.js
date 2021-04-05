import { Component } from '@fullcalendar/core';
import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../components/PageTitle';
import CloudIDInfor from '../../components/sales/CloudIDInfor';
import CloudIDInfoDetails from '../../components/sales/CloudIDInfoDetails'

export default ({ match }) => {
    const id = match.params.id;

    return (
        <>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Sales', path: '/sales' },
                            { label: 'Qiuck All Sales', path: '#', active: true },
                        ]}
                        title={'Sale Info'}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <CloudIDInfor id={id} />
                </Col>
                <Col md={12}>
                    <CloudIDInfoDetails id={id} />
                </Col>
            </Row>
        </>
    );
};
