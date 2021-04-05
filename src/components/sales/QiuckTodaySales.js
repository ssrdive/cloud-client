import React, { useState, useEffect } from 'react';
import { Card, CardBody, Table, Spinner } from 'reactstrap';

import { apiAuth } from '../../basara-api';

export default () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
/* 
    useEffect(() => {
        setLoading(prevLoading => true);
        apiAuth
            .get(`/allsales/all`)
            .then(res => {
               
                if (res.data === null) setResults(prevResults => []);
                else setResults(prevResults => res.data);
            })
            .catch(err => {
               
                console.log(err);
            });
    }, []); 
 */
    useEffect(() => {
        const fetchCommitments = () => {
            apiAuth
                .get(`/allsales/all`)
                .then(res => {
                    setResults(prevCommitments => res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        };
        fetchCommitments();
}, []);
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0 mb-1">All Sales</h4>
                <Table className="mb-0" responsive={true} striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>C.Name</th>
                            <th>C.Address</th>
                            <th>C.Contact</th>
                            <th>Prcie</th>
                            <th>DATE</th>
                            <th>CLOUDDATE</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => {
                            return (
                                <tr key={index}>
                                     <td>{result.id}</td>
                                    <td>{result.customer_name}</td>
                                    <td>{result.customer_address}</td>
                                    <td>{result.customer_contact}</td>
                                    <td>{result.price}</td>
                                    <td>{result.date}</td>
                                    <td>{result.sys_date}</td>
                                   
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
