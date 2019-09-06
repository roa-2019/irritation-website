import React from 'react';
import Popup from './Form';


class Showpopup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div>
                <h1> Email sign up form! </h1>

                <button onClick={this.togglePopup.bind(this)}> Sign up here!</button>

                {this.state.showPopup ?
                    <Popup
                        text='Fill out your name and email, then submit form after reading terms and conditions:'

                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>

        );
    }
}

export default Showpopup

