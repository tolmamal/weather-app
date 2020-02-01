import React , {Component} from 'react';
import { Header, Icon} from "semantic-ui-react";
import {createHashHistory} from 'history';






class EmptyFavorites extends Component {
    render() {
        return <Header as="h1" icon style={{marginTop: 100}}>
            <Icon name='settings' size="large" onClick={createHashHistory().goBack} style={{cursor: 'pointer'}}/>
            No favorites chosen in your list
            <Header.Subheader>
                In order to choose favorites, click on the icon
            </Header.Subheader>


        </Header>
    }
}

export default EmptyFavorites;
