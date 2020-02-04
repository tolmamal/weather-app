import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Popup, Button} from "semantic-ui-react";


class AddAsFavorite extends Component {
    render() {
        const {addToFavorites, removeFromFavorites, isMarkedAsFavorite} = this.props;
        const action = isMarkedAsFavorite ? removeFromFavorites : addToFavorites;
        return (
            <div>
                <Popup
                    content="Add to favorites"
                    trigger={
                        <Button
                            onClick={action}
                            size="huge"
                            color={isMarkedAsFavorite ? 'red' : 'white'}
                            icon="heart outline"
                            // icon={isMarkedAsFavorite ? 'heart' : 'heart outline'}
                        />
                    }
                />
            </div>
        );
    }
}

AddAsFavorite.propTypes = {
    addToFavorites: PropTypes.func,
    isMarkedAsFavorite: PropTypes.bool,
    removeFromFavorites: PropTypes.func
};

export default AddAsFavorite;

