import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, CardBody, Table, Spinner,Form,FormGroup,Button  } from 'reactstrap';
import Badge from 'reactstrap/lib/Badge';
import FormInput from '../form/FormInput';
import CommentsWatches from './CommentsWatches';

import { apiAuth } from '../../basara-api';
import Label from 'reactstrap/lib/Label';


const AddCommentForm = () => {
    return (
        
                <Row>
                    <Col md={4}>
                    <h4>Add Comment</h4>
                        <Form>
                            <FormGroup>
                                <Label type="text">Details</Label>
                                <FormInput  name="id" placeholder="Comment"  type="textarea"  required />
                            </FormGroup>
                       
                            <Button color="primary" type="submit">
                                Comment
                            </Button>
                        </Form>
                    </Col>
                </Row>
    );
};



export default ({ id }) => {
    const [questions, setQuestions] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = () => {
            apiAuth
                .get(`/cloudidinfor/details/${id}`)
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
    
    if (questions === null) {
        return <p>  {loading ? <Spinner color="primary" type="grow" /> : null}</p>;
      }

    return (
        <>
        <Card>
            <CardBody>       
                         <Row>
                             <Col><AddCommentForm /></Col>
                         </Row>


                         <Row>
                             <Col><CommentsWatches id={id} /></Col>
                         </Row>

            </CardBody>
        </Card>
        </>
    );
};

