import React, { useState, useEffect } from 'react';
import { Card, CardBody, Table, Spinner } from 'reactstrap';
import { apiAuth } from '../../basara-api';

export default ({id}) => {

    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchDetails = () => {
            apiAuth
                .get(`/cloudidinfor/details/${id}`)
                .then(res => {
                    if (res.data === null) setResults(prevQuestions => []);
                    else setResults(prevQuestions => res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        };
        fetchDetails();
    }, [id]);
    if (results !== null) {

        return  <>
        <Card>
            <CardBody>
                <div className="header">
                    <h4>Sale Infor</h4>
                 <p>  {results.verified == 1 ?  (<font color="green">Sale Verified</font>) :  (<font color="red">Sale not verified</font>)}</p>
                    </div>
               <div>
                 <Table className="mb-0" striped>
                       
                     <tbody>
                            <tr>
                                <th>Cloud Id</th>
                                <td>{results.id}</td>
                            </tr>
                            <tr>
                                <th>Officer</th>
                                <td>{results.officer_name}</td>
                            </tr>
                            <tr>
                                <th>Region</th>
                                <td>{results.region_name}</td>
                            </tr>
                            <tr>
                                <th>ME Territory</th>
                                <td>{results.territory_name}</td>
                            </tr>
                            <tr>
                                <th>Date</th>
                                <td>{results.date}</td>
                            </tr>
                            <tr>
                                <th>Cloud Date</th>
                                <td>{results.date}</td>
                            </tr>
                            <tr>
                                <th>Showroom/Dealer</th>
                                <td>{results.sd_location}</td>
                            </tr>
                            <tr>
                                <th>Dealer/Dealer Territory Name</th>
                                <td>{results.dealer_territory}</td>
                            </tr>
                             <tr>
                                <th>Chassiss No</th>
                                <td>{results.chassis_no}</td>
                            </tr>
                            <tr>
                                <th>Customer Name</th>
                                <td>{results.customer_name}</td>
                            </tr>
                            <tr>
                                <th>Customer Address</th>
                                <td>{results.customer_address}</td>
                            </tr>
                            <tr>
                                <th>Customer Contact</th>
                                <td>{results.customer_contact}</td>
                            </tr>
                            <tr>
                                <th>Model</th>
                                <td>{results.model_name}</td>
                            </tr>
                            <tr>
                                <th>Invoice Number</th>
                                <td>{results.invoice_no}</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td>{results.price}</td>
                            </tr>
                            <tr>
                                <th>Sale Type</th>
                                <td>{results.sale_type_name}</td>
                            </tr>
                            <tr>
                                <th>Institute</th>
                                <td>{results.institute}</td>
                            </tr>
                            <tr>
                                <th>Advance</th>
                                <td>{results.advance}</td>
                            </tr>
                    </tbody>
                </Table>
                 
          </div>
            </CardBody>
        </Card>
         
        </>
   
       
      }
      return (
        <p>  {loading ? <Spinner color="primary" type="grow" /> : null}</p>
        );
};