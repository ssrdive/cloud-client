import React, { Component } from 'react';
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody } from 'reactstrap';
import classnames from 'classnames';
import VerifyOrComment from './VerifyOrComment';
import MarkSaleComplete from './MarkSaleComplete';
import  Commissions from './Commissions';
import RMV from './RMV';
import SaleWatch from './SaleWatch';
/* 
import ContractDetails from './ContractDetails';
import ContractInstallments from './ContractInstallments';
import ContractReceipts from './ContractReceipts';
import ContractCommitments from './ContractCommitments';
import ContractQuestions from './ContractQuestions';
import ContractDocuments from './ContractDocuments';
import ContractHistory from './ContractHistory'; 
import Dev from './Dev'; */

class DetailsTabs extends Component {
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
                title: 'Verify Or Comment on Sale',
                icon: ' uil-database-alt',
                component: () => {
                    return <VerifyOrComment id={this.props.id} />;
                },
            },
             {
                id: '2',
                title: 'Mark Sale Complete',
                icon: 'uil-money-stack',
                component: () => {
                    return <MarkSaleComplete id={this.props.id} />;
                },
            },
            {
                id: '3',
                title: 'Commissions',
                icon: 'uil-comment-question',
                component: () => {
                    return <Commissions id={this.props.id} />;
                },
            },
            {
                id: '4',
                title: 'Sale Watch',
                icon: 'uil-receipt',
                component: () => {
                    return <SaleWatch id={this.props.id} />;
                },
            },
            {
                id: '5',
                title: 'RMV',
                icon: 'uil-comment-message',
                component: () => {
                    return <RMV id={this.props.id} />;
                },
            },
            
           /* {
                id: '8',
                title: 'Dev',
                icon: 'uil-trowel',
                component: () => {
                    return <Dev id={this.props.id} />;
                },
            }, */
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

export default DetailsTabs;