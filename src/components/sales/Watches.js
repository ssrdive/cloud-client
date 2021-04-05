import React, { useState, useEffect } from 'react';
import { Card, CardBody, Table, Spinner } from 'reactstrap';

import { apiAuth } from '../../basara-api';

export default ({ id }) => {
    const [questions, setQuestions] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = () => {
            apiAuth
                .get(`/comments/details/${id}`)
                .then(res => {
                    if (res.data === null) setQuestions(prevQuestions => []);
                    else setQuestions(prevQuestions => res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        };
        fetchDetails();
    }, [id]);
    if (questions !== null){
        return <>
        <Card>
            <CardBody>
                     
                    <Table>
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Answer</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr><td>{questions.sale_id}</td></tr>
                            </tbody>
                      
                    </Table>
            </CardBody>
        </Card>
        </>
    }

    return (
    
            <p>  {loading ? <Spinner color="primary" type="grow" /> : null}</p>
    );
};
