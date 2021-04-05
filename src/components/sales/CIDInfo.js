/* import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, Table, Spinner } from 'reactstrap';
import { apiAuth } from '../../basara-api';

export default ({ results, loading }) => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0 mb-1">Info Cloud Id</h4>
                <Table className="mb-0" responsive={true} striped>
                    <thead>
                        <tr>
                            <th>Work</th>
                            <th>Details</th>
                            <th>Recovery Officer</th>
                            <th>State</th>
                            <th>Answer</th>
                            <th>Created Ago</th>
                            <th>State at Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                    </tbody>
                </Table>
                {loading ? <Spinner color="primary" type="grow" /> : null}
            </CardBody>
        </Card>
    );
};
 */


import React, { useState, useEffect } from 'react';
import { Card, CardBody, Table, Spinner } from 'reactstrap';

import { apiAuth } from '../../basara-api';

export default () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(prevLoading => true);
        apiAuth
            .get(`/searchcloudidinfo/search`)
            .then(res => {
                setLoading(prevLoading => false);
                if (res.data === null) setResults(prevResults => []);
                else setResults(prevResults => res.data);
            })
            .catch(err => {
                setLoading(prevLoading => false);
                console.log(err);
            });
    }, []); 

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0 mb-1">All Sales</h4>
                <Table className="mb-0" responsive={true} striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            {/* <th>Comments</th>
                            <th>Officer</th>
                            <th>Region</th>
                            <th>Territory</th>
                            <th>Date</th>
                            <th>Cloud Date</th>
                            <th>Showroom/Dealer</th> */}
                           {/*  <th>Chasssis No</th> */}
                            <th>Customer Name</th>
                            {/* <th>Customer Address</th>
                            <th>Customer Contact</th>
                            <th>Customer Contact</th>
                            <th>Model</th>
                            <th>Invoice Number</th>
                            <th>Price</th>
                            <th>Sale Type</th>
                            <th>Institute</th>
                            <th>Amount</th> */}
                            
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => {
                            return (
                                <tr key={index}>
                                     <td>{result.id}</td>
                                    <td>{result.customer_name}</td>
                                   {/*  <td>{result.customer_address}</td>
                                    <td>{result.customer_contact}</td>
                                    <td>{result.price}</td>
                                    <td>{result.date}</td>
                                    <td>{result.sys_date}</td> */}
                                   
                                </tr>
                            );
                        })}
                       
                    </tbody>
                </Table>
                {loading ? <Spinner color="primary" type="grow" /> : null}
            </CardBody>
        </Card>
    );
};
