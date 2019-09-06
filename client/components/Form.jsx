import React from 'react'
import Main from './Main'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


class Popup extends React.Component {

  constructor(props) {
    super(props)

    this.state = {input: ''}
  }


  messWithWords = (e) => {
    let keyPressed = e.key
    if((Math.random() * 10) > 7.5) {
      keyPressed='e'
    }
    this.setState({input: this.state.input + keyPressed})
    console.log(keyPressed, e.target.value, e.charCode)
  }

  render() {
    return (
      <Router>
        <div className='popup'>
          <div className='popupinner'>
            <h1>{this.props.text}</h1>
            <form>
              <label>
                Name:
                  <input type="text" name="name" onKeyDown={this.messWithWords} value={this.state.input} />
              </label>

              <Link to="/break-stuff"><input type="submit" value="Submit" /></Link>
              <button onClick={this.props.closePopup}>close me</button>
            </form>
          </div>
          <Route path="/break-stuff" component={Main} />

        </div>
      </Router>
      

    );
  }
}

export default Popup

