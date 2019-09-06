import React from 'react'

class Popup extends React.Component {

  constructor(props) {
    super(props)

    this.state = {input: ''}
  }


  messWithWords = (e) => {
    let keyPressed = e.key
    if((Math.random() * 10) > 8) { 
    } else {
      this.setState({input: this.state.input + keyPressed})
    }
    console.log(keyPressed, e.target.value)
  }

  render() {
    return (
      <div className='popup'>
        <div className='popupinner'>
          <h1>{this.props.text}</h1>
          <form>
            <label>
              Name:
                <input type="text" name="name" onKeyPress={this.messWithWords} value={this.state.input} />
            </label>
            <input type="submit" value="Submit" />
            <button onClick={this.props.closePopup}>close me</button>
          </form>
        </div>

      </div>

    );
  }
}

export default Popup