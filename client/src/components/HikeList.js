import React from 'react';
import { ListView} from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';

const HikeList = ({ hikes }) => {

    

    return (
        <ListView 
            enableEmptySections
            dataSource={hikes}
            renderRow={(hike, sectionID) => <ListItem
                                                key={sectionID}
                                                title={hike.name}
                                                subtitle={`${hike.length} mi`}
                                                avatar={{uri:hike.imgSqSmall}}
                                            />}
        />
    )
}

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = state => {
    return { hikes: ds.cloneWithRows(state.hikeList.results) }
}

export default connect(mapStateToProps)(HikeList)