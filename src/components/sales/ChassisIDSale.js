import React, { useState, useEffect } from 'react';
import { Row, Form, Button, FormGroup, Col, Card, CardBody, Label } from 'reactstrap';

import FormInput from '../form/FormInput';
import {
    NUMBER_INPUT_REQUIRED,
} from '../../constants/formValues';
import { loadDropdownGeneric } from '../../helpers/form';

export default ({ history }) => {
    const [form, setForm] = useState({
        question_id: NUMBER_INPUT_REQUIRED,
      //  empty_only: { value: 0, type: 'select', options: [{ id: 0, name: 'No' }, { id: 1, name: 'Yes' }] },
      //  keyword: TEXT_INPUT_OPTIONAL,
    });

    useEffect(() => {
        loadDropdownGeneric('question', 'question_id', setForm);
    }, []);

    const handleFormSubmit = e => {
        e.persist();
        e.preventDefault();
        history.push(`/sale/chassisnumb?chassis=${form.question_id.value}`)
    }

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
                        <Form onSubmit={handleFormSubmit}>
                            <FormGroup>
                                <FormInput
                                    {...form['question_id']}
                                    name="question_id"
                                    placeholder="Enter Chassis Number"
                                    handleOnChange={handleOnChange}
                                />
                            </FormGroup>
                           
                            <Button color="primary" type="submit">
                                Search
                            </Button>
                        </Form>
                    </Col>
                </Row>
           
    );
};