import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
AnimatedOpacity = Animatable.createAnimatableComponent(TouchableOpacity);

class HikeButton extends Component {
    onLoading() {
        if (this.props.loading) {
            return (
                <Animatable.Image 
                    source={require('../../images/spinner.png')} 
                    animation="rotate"
                    iterationCount="infinite" 
                    style={{ position: 'absolute' }}
                />
            )
        }
    }
    render() {
        const { buttonHike, buttonHikeText } = styles;
        const pulsing = this.props.loading ? "" : "pulse";
        return (
            <View style={{height: 250, justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                {this.onLoading()}
                <AnimatedOpacity 
                    animation={pulsing} 
                    iterationCount="infinite" 
                    duration={3000}
                    style={buttonHike} 
                    onPress={this.props.onPress} 
                >
                    <Animatable.Text 
                        animation={pulsing}
                        iterationCount="infinite" 
                        style={buttonHikeText}
                        duration={3000}
                    >
                        Go!
                    </Animatable.Text>
                </AnimatedOpacity>   
            </View>
        )
    }
}

const styles = {
    buttonHike: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        borderRadius: 300,
        backgroundColor: '#2CB42C',
        shadowOpacity: .25,
        shadowRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 3,  height: 3 },
    },
    buttonHikeText: {
        // fontFamily: 'Avenir', 
        fontWeight: '300',
        color: '#fff',
        fontSize: 60
    }
};

const mapStateToProps = state => {
    return { loading: state.trailList.loading }
}

export default connect(mapStateToProps)(HikeButton);
