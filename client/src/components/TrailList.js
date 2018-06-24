import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';

class TrailList extends Component {
    render() {
        const { navigation, trails } = this.props;
        return (
            <FlatList 
                data={trails}
                renderItem={({ item }) => (
                        <ListItem
                            title={item.name}
                            subtitle={`${item.distanceFromUser} miles away`}
                            avatar={item.imgSqSmall ? {uri: item.imgSqSmall } : require('../images/graySquare.png')}
                            onPress={() => navigation.navigate('Trail', { ...item })}
                        />
                    )}
                keyExtractor={(item) => item.id.toString()}                    
            />
        )
    }
}

const mapStateToProps = state => {
    return { trails: state.trailList.results }
}

export default connect(mapStateToProps)(TrailList)