/* import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../components/PageTitle';
import SearchKey from '../../components/sales/SearchKey';

export default (history) => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Sales', path: '/sales' , active: true},
                            { label: 'Info By Chassis No', path: '#', active: true },
                        ]}
                        title={'Info By Chassis No'}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <SearchKey  history= {history}/>
                </Col>
            </Row>
            
        </React.Fragment>
    );
};
 */
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../components/PageTitle';
import SearchKey from '../../components/sales/SearchKey';
import { apiAuth } from '../../basara-api';

export default ({ location }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const params = new URLSearchParams(location.search);
    const search = params.get('search');

    useEffect(() => {
        setLoading(prevLoading => true);
        apiAuth
            .get(`/searchsaleinfo/search?search=${search}`)
            .then(res => {
                setLoading(prevLoading => false);
                if (res.data === null) setResults(prevResults => []);
                else setResults(prevResults => res.data);
            })
            .catch(err => {
                setLoading(prevLoading => false);
                console.log(err);
            });
    }, [search]);


    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Sales', path: '/sales' , active: true},
                            { label: 'Info By Cloud ID', path: '/sale/SearchKey', active: true },
                        ]}
                        title={'Search  Sales'}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <SearchKey  results={results} loading={loading}/>
                </Col>
            </Row>

        </React.Fragment>
    );
};
