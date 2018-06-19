import React, {Component} from 'react';
import { ListView} from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';

class TrailList extends Component {
    displayTrail = trail => {
        this.props.navigation.navigate('Trail', { ...trail })
    }
    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.props.trails}
                renderRow={(trail, sectionID) => <ListItem
                                                    key={sectionID}
                                                    title={trail.name}
                                                    subtitle={`${trail.distanceFromUser} miles away`}
                                                    avatar={trail.imgSqSmall ? {uri: trail.imgSqSmall } : require('../images/graySquare.png')}
                                                    onPress={() => this.displayTrail(trail)}
                                                />}
            />
        )
    }
}

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = state => {
    return { trails: ds.cloneWithRows(state.trailList.results) }
}

export default connect(mapStateToProps)(TrailList)