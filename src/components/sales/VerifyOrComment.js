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
                    <Col md={6}>
                    <h4>Add Comment</h4>
                        <Form>
                            <FormGroup>
                                <Label type="text">Comment</Label>
                                <FormInput  name="id" placeholder="Comment"  type="textarea"  required />
                            </FormGroup>
                            <br />
                            <FormGroup>
                                
                                    <Label>Add attachment (image) :&nbsp;</Label>
                                    <FormInput type="file" name="attachment" accept=".jpg, .jpeg, .png, .JPG, .JPEG, .PNG" /> <p>Maximum File Size (512KB)</p>
                                
                              {/* <p> <label>Add attachment (image) :&nbsp;</label><FormInput type="file" name="attachment" accept=".jpg, .jpeg, .png, .JPG, .JPEG, .PNG" /> Maximum File Size (512KB)</p>  */}
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
                    {questions.verified == 0 ? (
                         <Row>
                         <b>Verify this Sale: </b>&nbsp;&nbsp;<Link to={`/cloudidinfor/update/byid}`}><button class="success"><font color="black">Verify Sale</font></button></Link>
                         <br />
                        
                      </Row>
                         ):(
                                <Row>
                                 <p><Badge color="success">Sale-Verified</Badge></p>
                                    <Table ClassName="table">
                                        <tbody>
                                            <tr>
                                                <th>By</th>
                                               <td>{questions.verified_by}</td>
                                            </tr>
                                            <tr>
                                                <th>On</th>
                                                <td>{questions.verified_on}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                             </Row>
                         )}

                         <Row>
                             <Col><AddCommentForm /></Col>
                         </Row>

                            <hr />
                         <Row>
                             <Col><CommentsWatches id={id} /></Col>
                         </Row>


            </CardBody>
        </Card>
        </>
    );
};



/*
  {questions !== null ? (
                                <Table>
                                    <tbody>
                                    {questions.verified == 0 ? (<b>Verify this Sale <button class="success"><font color="black">Verify Sale</font></button> </b>):( 
                                        <b>verified</b>
                                    
                                                                                  
                           )}
                                    </tbody>
                                </Table>
               
                            
               ) : (
                <Spinner type="grow" color="primary" />
            )}
            


 {questions.verified == 0 ? (<b>Verify this Sale <button class="success"><font color="black">Verify Sale</font></button> </b>):( 

                    
                             <Table>
                                 
                                 <tbody>
                                    
                                 </tbody>
                             </Table>
                         )}

{questions.verified == 0 ? (
    <Row>
                 <b>Verify this Sale: </b>&nbsp;&nbsp;<button class="success"><font color="black">Verify Sale</font></button>
                 <br />
    </Row>
):(
    <Row>
    <p><font color="green">Sale Verified</font></p>
        <Table ClassName="table">
            <tbody>
                <tr>
                    <th>By</th>
                    <td>{questions.verified_by}</td>
                </tr>
                <tr>
                    <th>On</th>
                    <td>{questions.verified_on}</td>
                </tr>
            </tbody>
        </Table>
    </Row>
)} */

/* import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, CardBody, Table, Spinner } from 'reactstrap';
import Badge from 'reactstrap/lib/Badge';

import { apiAuth } from '../../basara-api';

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
                         <b>Verify this Sale: </b>&nbsp;&nbsp;<Link to={`/cloudidinfor/update/byid}`}><button class="success"><font color="black">Verify Sale</font></button></Link>
                         <br />
                        
                      </Row>
                             <Row>
                                 <p><Badge color="success">Sale-Verified</Badge></p>
                                    <Table ClassName="table">
                                        <tbody>
                                            <tr>
                                                <th>By</th>
                                               <td>{questions.verified_by}</td>
                                            </tr>
                                            <tr>
                                                <th>On</th>
                                                <td>{questions.verified_on}</td>
                                            </tr>
                                        </tbody>
                                </Table>
                     </Row>   
            </CardBody>
        </Card>
        </>
    );
};
 */