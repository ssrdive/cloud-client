import React, { Component } from 'react';
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody } from 'reactstrap';
import classnames from 'classnames';
import Comments from './Comments';
import Watches from './Watches';


class CommentsWatchesTabs extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: '1' };
        this.toggle = this.toggle.bind(this);
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };

    render() {
        const tabContents = [
            {
                id: '1',
                title: 'Comments',
                icon: ' uil-database-alt',
                component: () => {
                    return <Comments id={this.props.id} />;
                },
            },
             {
                id: '2',
                title: 'Watches',
                icon: 'uil-money-stack',
                component: () => {
                    return <Watches id={this.props.id} />;
                },
            },
        ];

        return (
            <React.Fragment>
                 <Card>
                <CardBody>
                <Row>
                    <Col lg={12}>
                        <Nav tabs>
                            {tabContents.map((tab, index) => {
                                return (
                                    <NavItem key={index}>
                                        <NavLink
                                            href="#"
                                            className={classnames({ active: this.state.activeTab === tab.id })}
                                            onClick={() => {
                                                this.toggle(tab.id);
                                            }}>
                                            <i className={classnames(tab.icon, 'd-sm-none', 'd-block', 'mr-1')}></i>
                                            <span className="d-none d-sm-block">{tab.title}</span>
                                        </NavLink>
                                    </NavItem>
                                );
                            })}
                        </Nav>

                        <TabContent activeTab={this.state.activeTab}>
                            {tabContents.map((tab, index) => {
                                return (
                                    <TabPane tabId={tab.id} key={index}>
                                        <Row>
                                            <Col sm="12">
                                                <tab.component />
                                            </Col>
                                        </Row>
                                    </TabPane>
                                );
                            })}
                        </TabContent>
                    </Col>
                </Row>
                </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default CommentsWatchesTabs;