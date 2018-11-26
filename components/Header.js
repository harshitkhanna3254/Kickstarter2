import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import {Link}from '../routes';

export default () => {
    return(
        <Menu style={{marginTop : '10px'}}>
            <Link route='/'>
                <a className="item" >
                    Kickstarter v2.0
                </a>
            </Link>

            <Menu.Menu position="right">
            <Link route='/'>
                <a className="item" >
                    Campaigns
                </a>
            </Link>
            <Link route='/campaigns/new'>
                <a className="item" >
                    <Icon name='add circle' size="large" />
                </a>
            </Link>
            </Menu.Menu>
        </Menu>
    )
}