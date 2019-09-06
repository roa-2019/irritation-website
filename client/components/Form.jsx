import React from 'react'

class Popup extends React.Component {  
    render() {  
  return (  
  <div className='popup'>  
    <div className='popupinner'>  
    <h1>{this.props.text}</h1>  
    <form>
            <label>
                Name:
                <input type="text" name="name" />
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