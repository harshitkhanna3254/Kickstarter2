import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';

class CampaignIndex extends Component {

    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return {campaigns: campaigns}
    }
    
    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return(
                {
                    header: address,
                    description: (
                        <Link route = {"/campaigns/" + address}>         
                            <a>
                                View Campaign
                            </a>
                        </Link>
                        ),
                    fluid: true
                }
            )
        })
        return <Card.Group items={items} />
    }

    renderButton() {
        return(
        <Link route = "/campaigns/new" >
            <a>
                <Button inverted secondary content="Add Campaign" floated="right" icon="add circle" labelPosition="left" />
            </a>
        </Link>
        )
    }

    render() {
        return(
            <Layout>
                <div>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
                    <h3>Open Campaigns</h3> 
                    {this.renderButton()} 
                    {this.renderCampaigns()}
                </div>
            </Layout>
        )
    }

}

export default CampaignIndex;