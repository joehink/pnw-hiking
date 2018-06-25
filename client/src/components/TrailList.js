import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'

class TrailList extends Component {
    render() {
        const { navigation, trails } = this.props;                  
        return (
            <FlatList 
                data={trails}
                extraData={this.props}
                keyExtractor={(item) => item.id.toString()}
                renderItem={(trail) => {
                    return (
                        <ListItem
                            key={trail.index}
                            title={trail.item.name}
                            subtitle={this.props.favorites ? `${trail.item.length} miles`: `${trail.item.distanceFromUser} miles away`}
                            avatar={trail.item.imgSqSmall ? {uri: trail.item.imgSqSmall } : require('../images/graySquare.png')}
                            onPress={() => navigation.navigate('Trail', { ...trail.item })}
                        />
                    )} 
                }                    
            />
        )
    }
}

export default TrailList;