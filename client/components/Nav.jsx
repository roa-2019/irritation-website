import React from 'react'

export default class Nav extends React.Component {
    constructor(props) {
        super(props)

        // setTimeout(this.openTab, 5000)
    }

    openTab = () => {
        // set higher for demo
        let newTabs = 1
        for (let i = 0; i < newTabs; i++) {
            let newWindow = window.open(this.tabItems(), '_blank', 'width=300, height=200')
            this.moveWindow(newWindow)
                .then(newWindow.document.createTextNode('<p>Hello</p>'))
        }
    }


    tabItems = () => {
        let content = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=-mMhKYJFOnQ", "https://www.youtube.com/watch?v=D3vO_ogtpUI", "https://brightbrides.net/russian-brides/", "https://www.youtube.com/watch?v=3_3VrHLuqG4", "https://www.youtube.com/watch?v=Sdkwu2FvFfI"]
         return content[Math.floor((Math.random()*content.length))];
    }


    moveWindow = (popup) => {
        const min = 0
        const max = 10
        let count = 0
        setInterval(() => {
            if (count == 20) {
                popup.focus()
                popup.moveTo(300, 0)
                count = 0
            } else {
                popup.focus()
                var random1 = this.getRandomNum(min, max)
                var random2 = this.getRandomNum(min, max)
                console.log(random1 * 5, random2)
                popup.moveBy(random1 * 5, random2)
                count += 1
            }
            // set move speed lower for demo, try 10 or 5 ect
        }, 1000)
    }

    getRandomNum = (min, max) => {
        return Math.random() * (+max - +min) + +min;
    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><a href="#" onClick={() => this.openTab()}>Home</a></li>
                        <li><a href="#" onClick={() => this.openTab()}>Support</a></li>
                        <li><img src="vegan-vibes.jpg" alt="logo" width="500px"></img></li>
                        <li><a href="#" onClick={() => this.openTab()}>News</a></li>
                        <li><a href="#" onClick={() => this.openTab()}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
        d
    }

}


