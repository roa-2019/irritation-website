import React from 'react'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.openTab()
    // setTimeout(this.openTab, 5000)
  }

  openTab = () => {
    // set higher for demo
    let newTabs = 1
    for (let i = 0; i < newTabs; i++) {
      let newWindow = window.open('', '_blank', 'width=300, height=200')
      this.moveWindow(newWindow)
    }
  }

  moveWindow = (popup) => {
    const min = 0
    const max = 10
    let count = 0
    setInterval(() => {
      if(count == 20) {
        popup.focus()
        popup.moveTo(300, 0)
        count = 0
      } else {
        popup.focus()
        var random1 = this.getRandomNum(min, max)
        var random2 = this.getRandomNum(min, max)
        console.log(random1*5, random2)
        popup.moveBy(random1*5, random2)
        count += 1
      }
      // set move speed lower for demo, try 10 or 5 ect
    }, 1000)
  }

  getRandomNum = (min, max) => {
    return Math.random() * (+max - +min) + +min;
  }

  render () {
    return null
  }

}

