/* import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr'
import PageTitle from '../../components/PageTitle';

const InlineForm = () => {
    return ( <
        Card >
        <
        CardBody >
        <
        h4 className = "header-title mt-0" > ALL < br / > Cloud Date < /h4> <
        Form inline >
        <
        FormGroup className = "mb-2 mr-sm-2 mb-sm-0" >
        <
        div className = "form-group" >
        <
        label > Start Date < /label> <br / >
        <
        Flatpickr value = { new Date() }
        options = {
            { altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" } }
        onChange = { date => { console.log(date) } }
        className = "form-control" / >
        <
        /div> <
        /FormGroup>

        <
        FormGroup className = "mb-2 mr-sm-2 mb-sm-0" >
        <
        div className = "form-group" >
        <
        label > End Date < /label> <br / >
        <
        Flatpickr value = { new Date() }
        options = {
            { altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" } }
        onChange = { date => { console.log(date) } }
        className = "form-control" / >
        <
        /div> <
        /FormGroup>

        <
        Button color = "primary"
        type = "submit" >
        List <
        /Button> <
        /Form>

        <
        /CardBody> <
        /Card>
    );
};

const InlineFormRegion = () => {
    return ( <
        Card >
        <
        CardBody >
        <
        h4 className = "header-title mt-0" > REGION < br / > Cloud Date < /h4> <
        Form inline >
        <
        Col xl = { 4 } >
        <
        Select

        className = "react-select"
        classNamePrefix = "react-select"
        options = {
            [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
            ]
        } > < /Select> <
        /Col>


        <
        FormGroup className = "mb-2 mr-sm-2 mb-sm-0" >
        <
        div className = "form-group" >
        <
        label > Start Date < /label> <br / >
        <
        Flatpickr value = { new Date() }
        options = {
            { altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" } }
        onChange = { date => { console.log(date) } }
        className = "form-control" / >
        <
        /div> <
        /FormGroup>

        <
        FormGroup className = "mb-2 mr-sm-2 mb-sm-0" >
        <
        div className = "form-group" >
        <
        label > End Date < /label> <br / >
        <
        Flatpickr value = { new Date() }
        options = {
            { altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" } }
        onChange = { date => { console.log(date) } }
        className = "form-control" / >
        <
        /div> <
        /FormGroup>

        <
        Button color = "primary"
        type = "submit" >
        List <
        /Button> <
        /Form> <
        /CardBody> <
        /Card>
    );
};

const InlineFormOfficer = () => {
    return ( <
        Card >
        <
        CardBody >
        <
        h4 className = "header-title mt-0" > OFFICER < br / > Cloud Date < /h4> <
        Form inline >
        <
        Col xl = { 4 } >
        <
        Select

        className = "react-select"
        classNamePrefix = "react-select"
        options = {
            [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
            ]
        } > < /Select> <
        /Col> <
        FormGroup className = "mb-2 mr-sm-2 mb-sm-0" >
        <
        div className = "form-group" >
        <
        label > Start Date < /label> <br / >
        <
        Flatpickr value = { new Date() }
        options = {
            { altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" } }
        onChange = { date => { console.log(date) } }
        className = "form-control" / >
        <
        /div> <
        /FormGroup>

        <
        FormGroup className = "mb-2 mr-sm-2 mb-sm-0" >
        <
        div className = "form-group" >
        <
        label > End Date < /label> <br / >
        <
        Flatpickr value = { new Date() }
        options = {
            { altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" } }
        onChange = { date => { console.log(date) } }
        className = "form-control" / >
        <
        /div> <
        /FormGroup>

        <
        Button color = "primary"
        type = "submit" >
        List <
        /Button> <
        /Form> <
        /CardBody> <
        /Card>
    );
};

const BasicForms = () => {
    return ( <
        React.Fragment >

        <
        Row >
        <
        Col md = { 5 } >
        <
        InlineForm / >
        <
        /Col> <
        Col md = { 7 } >
        <
        InlineFormRegion / >
        <
        /Col> <
        Col md = { 7 } >
        <
        InlineFormOfficer / >
        <
        /Col> <
        /Row> <
        /React.Fragment>
    );
};
export default BasicForms; */

import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr'
import PageTitle from '../../components/PageTitle';

/* 
const ReactSelect = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0 mb-1">React Select <a href="https://github.com/JedWatson/react-select" className="ml-2 font-size-13"><i className='uil uil-external-link-alt'></i></a></h4>
                <Row>
                    <Col xl={6}>
                        <p className="mb-1 mt-3 font-weight-bold">Single Selection</p>
                        <p className="text-muted font-size-14">React-Select based Select element</p>
                        <Select
                            className="react-select"
                            classNamePrefix="react-select"
                            options={[
                                { value: 'chocolate', label: 'Chocolate' },
                                { value: 'strawberry', label: 'Strawberry' },
                                { value: 'vanilla', label: 'Vanilla' },
                            ]}></Select>
                    </Col>
                    
                </Row>
                
            </CardBody>
        </Card>
    );
}; */

const InlineForm = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0">ALL <br />Cloud Date</h4>
                <Form>
                <Col md={12}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <div className="form-group">
                            <label>Start Date</label> <br />
                            <Flatpickr value={new Date()} options={{altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d"}}
                                    onChange={date => { console.log(date) }}
                                    className="form-control" />
                        </div>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <div className="form-group">
                            <label>End Date</label> <br />
                            <Flatpickr value={new Date()} options={{altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d"}}
                                    onChange={date => { console.log(date) }}
                                    className="form-control" />
                        </div>
                    </FormGroup>

                    <Button color="primary" type="submit">
                        List
                    </Button>
                    </Col>
                </Form>
               
            </CardBody>
        </Card>
    );
};

const InlineFormRegion = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0">REGION <br />Cloud Date</h4>
                <Form>
                    
                    <Select
                    
                    className="react-select"
                    classNamePrefix="react-select"
                    options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' },
                    ]}></Select>
                
                   
                    
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <div className="form-group">
                            <label>Start Date</label> <br />
                            <Flatpickr value={new Date()} options={{altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d"}}
                                    onChange={date => { console.log(date) }}
                                    className="form-control" />
                        </div>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <div className="form-group">
                            <label>End Date</label> <br />
                            <Flatpickr value={new Date()} options={{altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d"}}
                                    onChange={date => { console.log(date) }}
                                    className="form-control" />
                        </div>
                    </FormGroup>

                    <Button color="primary" type="submit">
                        List
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
};

const InlineFormOfficer = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0">OFFICER <br />Cloud Date</h4>
                <Form>
               
                    <Select
                    
                    className="react-select"
                    classNamePrefix="react-select"
                    options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' },
                    ]}></Select>
           
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <div className="form-group">
                            <label>Start Date</label> <br />
                            <Flatpickr value={new Date()} options={{altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d"}}
                                    onChange={date => { console.log(date) }}
                                    className="form-control" />
                        </div>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <div className="form-group">
                            <label>End Date</label> <br />
                            <Flatpickr value={new Date()} options={{altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d"}}
                                    onChange={date => { console.log(date) }}
                                    className="form-control" />
                        </div>
                    </FormGroup>

                    <Button color="primary" type="submit">
                        List
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
};

const BasicForms = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <InlineForm />
                </Col>
                <Col lg={12}>
                    <InlineFormRegion />
                </Col>
                <Col lg={12}>
                    <InlineFormOfficer />
                </Col>
            </Row>
        </React.Fragment>
    );
};
export default BasicForms;
