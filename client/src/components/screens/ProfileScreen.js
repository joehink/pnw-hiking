import React from 'react';
import LogInRedirect from '../LogInRedirect';
import { connect } from 'react-redux';
import  { signOutUser } from '../../actions';
import { Button, Card } from '../reusable';

class ProfileScreen extends React.Component {
    signOut() {
        const { navigation } = this.props;

        this.props.signOutUser(navigation);
    }

    renderProfile() {
        const { user } = this.props;

        if (user.user) {
            return <Button onPress={() => this.signOut()} >
                        Log Out
                    </Button>
        } else {
            return <LogInRedirect />
        }
    }
    componentDidMount() {
        const { navigation } = this.props;

        navigation.addListener('willFocus', () => {
            this.setState({});
        });
    }
    render() {
        return (
            <Card>
                {this.renderProfile()}
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.currUser }
}

export default connect(mapStateToProps, { signOutUser })(ProfileScreen);
