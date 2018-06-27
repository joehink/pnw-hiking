import React from 'react';
import Button from '../reusable/Button';
import LogInRedirect from '../LogInRedirect';
import { connect } from 'react-redux';
import  { signOutUser } from '../../actions';
import Card from '../reusable/Card';

class ProfileScreen extends React.Component {
    signOut() {
        this.props.signOutUser(this.props.navigation);
    }

    renderProfile() {
        if (this.props.user && this.props.user.user) {
            return <Button onPress={() => this.signOut()} >
                        Log Out
                    </Button>
        } else {
            return <LogInRedirect />
        }
    }
    componentDidMount() {
        this.props.navigation.addListener('didFocus', (o) => {
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
