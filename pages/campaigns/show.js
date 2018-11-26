import React, {Component} from 'react';
import Layout from '../../components/Layout';
import createInstance from '../../ethereum/campaign';
import {Card, Grid} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';

class CampaignShow extends Component {

    
    static async getInitialProps(props) {
        const campaign = createInstance(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        }            
    }

    renderCards() {

        const {
            minimumContribution,
            balance,
            requestsCount,
            approversCount,
            manager
        } = this.props;


        const items = [
            {
              header: manager,
              description: 'Address of the creator of the Campaign',
              meta: "Address of the manager",
              style: {overflowWrap: 'break-word'}
            },
            {
              header: web3.utils.fromWei(balance, 'ether'),
              description: 'The total balance of the Campaign',
              meta: 'Balance (in Ether)',
            },
            {
              header: minimumContribution,
              description:
                'Minimum contribution required to become an approver.',
              meta: 'Minimum Contribution (in Wei)',
            },
            {
                header: requestsCount,
                description:
                  'Number of requests made by the manager',
                meta: 'Requests Count',
            },
            {
                header: approversCount,
                description:
                  'Number of Approvers in the Campaign',
                meta: 'Approvers Count',
            }
          ]
          return <Card.Group items={items} />
    }

    render() {
        return(
            <Layout>
                <h3>Show Campaign Page</h3>
                <Grid>
                    <Grid.Column width={10}>
                    {this.renderCards()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm address={this.props.address}/>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}

export default CampaignShow;