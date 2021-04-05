import React, { useState, useEffect } from 'react';
import { Badge, Table, Card, CardBody, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';

import { apiAuth } from '../../basara-api';

export default (history) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            const fetchCommitments = () => {
                apiAuth
                    .get(`/salewatch/all`)
                    .then(res => {
                        setResults(prevCommitments => res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            };
            fetchCommitments();
    }, []);

    var rows = results.slice();
    return (
        <Card>
            <CardBody>
            <h4 className = "header-title mt-0" > Sales Watch </h4>
            <p className = "sub-header" > <b> There are { rows.length } overdue watches </b></p >

            <Table className="mb-0" striped>
                    {/* <thead style = {{ 'display': 'block' }}> */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cloud ID</th>
                            <th>Expired</th>
                           <th>Content</th>
                        </tr>
                    </thead>

                   {/*  <tbody style = {{ 'height': '300px', 'overflowY': 'auto', 'display': 'block' }}>  */}
                   <tbody >
                        {results.map((result, index) => {
                            return (
                                <tr key={index}>
                                    <td>{result.id}</td>
                                    <td><Link to={`sale/cloud-id-infor/${result.sale_id}`}>{result.sale_id}</Link></td>
                                    <td> {result.expires == 0 ? <Badge color = "success"> <b> Expires Today </b></Badge> : <Badge color = "danger"> {Math.abs(result.expires)} days ago </Badge>}</td>
                                     <td> { result.content }</td>
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