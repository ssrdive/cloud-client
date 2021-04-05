import React, { useState, useEffect } from 'react';
import { Label, Card, Row, Col, CardBody, Table, Spinner,Form,FormGroup,Button  } from 'reactstrap';
import FormInput from '../form/FormInput';
import { DROPDOWN_DEFAULT } from '../../constants/formValues';
import { loadDropdownAccountGeneric } from '../../helpers/form';
import { apiAuth } from '../../basara-api';
import CommentsWatches from './CommentsWatches';

const MarkSaleComplteForm = () => {
    const [form, setForm] = useState({
        account: DROPDOWN_DEFAULT,
    });

    useEffect(() => {
        loadDropdownAccountGeneric('all', 'all', 1, 1, setForm);
    }, []);

    const handleOnChange = e => {
        e.persist();
        setForm(prevForm => {
            const updatedForm = { ...prevForm, [e.target.name]: { ...prevForm[e.target.name] } };
            updatedForm[e.target.name].value = e.target.value;
            return updatedForm;
        });
    };


    return (
            <Row>
                    <Col md={12}>
                          <h4>Mark Sale Complete</h4>
                        <Form>
                            <FormGroup>
                              <Label for="text">Sale Complete Type</Label>
                                <FormInput
                                    {...form['account']}
                                    name="SaleCompleteType"
                                    handleOnChange={handleOnChange}
                                />          
                            </FormGroup> 

                            <FormGroup>
                                <Label for="text">Sale Complete Type</Label>
                                <   FormInput  name="id" placeholder="Comment"  type="textarea"  required />
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

    useEffect(() => {
        const fetchDetails = () => {
            apiAuth
                .get(`/contract/questions/${id}`)
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

    return (
        <Row>
            <Card>
                <CardBody>       
                        <Row><Col><MarkSaleComplteForm /></Col></Row>
                
                        <Row>
                             <Col><CommentsWatches id={id} /></Col>
                         </Row>
                </CardBody>
            </Card>
        </Row>

        
        );
};
