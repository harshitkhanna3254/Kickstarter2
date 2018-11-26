import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import createInstance from '../ethereum/campaign';
import web3 from '../ethereum/web3';

class ContributeForm extends Component {
  
  state = {
      value: ''
  }
  
  onSubmit = async event => {
    event.preventDefault();
    const campaign = createInstance(this.props.address);
    try{
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.contribute.send({
            from: accounts[0],
            value: web3.utils.toWei(this.state.value, 'ether')
        });
    } catch(err) {}
    
  }
  
    render() {  
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                   <Form.Field>
                       <label>Amount to Contribute</label>
                       <Input label={{ tag: true, content: 'Ether' }} 
                              labelPosition='right'
                              icon='ethereum'
                              iconPosition='left'
                              placeholder="Enter Ether amount"
                              value={this.state.value}
                              onChange={event => this.setState({value: event.target.value})}
                        />
                   </Form.Field>
                    <Button primary>
                        Contribute
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ContributeForm;