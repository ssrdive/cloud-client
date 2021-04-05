import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../components/PageTitle';
import QiuckAllSales from '../../components/sales/QiuckAllSales';

export default () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Sales', path: '/sales' , active: true},
                            { label: 'Quick All Sales', path: '#', active: true },
                        ]}
                        title={'All Sales'}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <QiuckAllSales />
                </Col>
            </Row>
        </React.Fragment>
    );
};
