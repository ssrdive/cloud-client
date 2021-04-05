import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../components/PageTitle';
import CIDInfo from '../../components/sales/CIDInfo';

export default (history) => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Sales', path: '/sales' , active: true},
                            { label: 'Info By Cloud ID', path: '#', active: true },
                        ]}
                        title={'Info By Cloud ID'}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <CIDInfo  history= {history}/>
                </Col>
            </Row>

        </React.Fragment>
    );
};
