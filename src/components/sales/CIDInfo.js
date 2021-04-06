import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Table, Spinner } from 'reactstrap';

import { apiAuth } from '../../basara-api';

export default ({ results, loading }) => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0 mb-1">All Sales</h4>
                <Table className="mb-0" responsive={true} striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Comments</th>
                            <th>Chasssis No</th> 
                            <th>Officer</th>
                            <th>Region</th>
                            <th>Territory</th>
                            <th>Date</th>
                            <th>Cloud Date</th>
                            <th>Showroom/Dealer</th>
                            <th>Customer Name</th>
                            <th>Model</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => {
                            return (
                                <tr key={index}>
                                     <td><Link to={`/sale/cloud-id-infor/${result.id}`}>{result.id}</Link></td>
                                     <td>{result.sale_comments}</td>
                                     <td>{result.chassis_no}</td>
                                     <td>{result.officer_name}</td>
                                     <td>{result.region_name}</td>
                                     <td>{result.territory_name}</td>
                                     <td>{result.date}</td>
                                     <td>{result.sys_date}</td>
                                     {result.location  ? (<td>{result.location}</td>) : (<td>{result.sd_location}</td>)}
                                    <td>{result.customer_name}</td>
                                    <td>{result.model}</td>
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
