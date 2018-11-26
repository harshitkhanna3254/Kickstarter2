import React, {Component} from 'react';
import {Form, CheckBox, Button, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';


class CampaignNew extends Component {

    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    }


    render() {
        return(
            <Layout>
                <h2>Create a Campaign</h2>
                {this.renderForm()}
             </Layout>
        )
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading: true, errorMessage: ''})
        try{
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minimumContribution)
                                .send({
                                    from: accounts[0]
                                });
            Router.pushRoute('/'); //Redirecting to root route after successfull creation of campaign.

        } catch(err) {
            this.setState({errorMessage: err.message})
        }
        this.setState({loading: false})
    }

    renderForm() {
        return(
            <Form onSubmit = {this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input  label={{ tag: true, content: 'Wei' }} 
                            labelPosition='right'
                            icon='ethereum'
                            iconPosition='left'
                            placeholder="Enter Wei amount" 
                            value = {this.state.minimumContribution}
                            onChange={event => this.setState({minimumContribution: event.target.value})} />
                </Form.Field>
                
                {this.renderError()}
                <Button loading={this.state.loading} content="Create" primary />
            </Form>
        )   
    }

    renderError() {
        return(
            <Message 
            error
            header='Oops! Something went wrong...'
            list={[
                    'Only Integers allowed. Just enter the digits and not any type.  Eg- 100',
                    'Actual Message from Metamask --------- ' + this.state.errorMessage
                 ]}
            />
        )
    }
}

export default CampaignNew;