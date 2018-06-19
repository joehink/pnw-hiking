import React from 'react';
import Card from './common/Card'
import HikeList from './HikeList';
import { connect } from 'react-redux';

import Map from './Map';

class DiscoverResults extends React.Component {
    render() {
        return (
            <Card>
                <Map currLocation={this.props.userLocation} height={{height: '40%'}}/>
                <HikeList />
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return { userLocation: state.userLocation.coords }
}

export default connect(mapStateToProps)(DiscoverResults);
