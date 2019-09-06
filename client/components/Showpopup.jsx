import React from 'react';
import Popup from './Form';


class Showpopup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        console.log('hi')
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div>
                <h1> Simple Popup Example In React Application </h1>
                <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>

                {this.state.showPopup ?
                    <Popup
                        text='Click "Close Button" to hide popup'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>

        );
    }
}

export default Showpopup

