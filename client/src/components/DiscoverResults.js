import React from 'react';
import Card from './common/Card'
import HikeList from './HikeList';
import { connect } from 'react-redux';

import Map from './Map';

class DiscoverResults extends React.Component {
    render() {
        return (
            <Card>
                <Map currLocation={this.props.userLocation} hikes={this.props.hikeList} height={{height: '40%'}}/>
                <HikeList navigation={this.props.navigation} />
            </Card>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { userLocation: state.userLocation.coords, hikeList: state.hikeList.results }
}

export default connect(mapStateToProps)(DiscoverResults);
