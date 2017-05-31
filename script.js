class Game extends React.Component{
    gameStart = false
    timeStart = 0
    timeLimit = 5000
    clicks = 0
    interval = null

    render(){
        return(
            <div>
            <div id="title" className="title">CLICKER</div>
            <div id="message">กดตรงไหนก็ไดเพื่อเริ่มเล่น</div>
            <div id="timer"></div>
            </div>
        )
    }
    componentWillMount(){
        window.addEventListener('click', this.onClick.bind(this))
    }

    onClick() {

    let messageBox = document.getElementById('message')
    let timer = document.getElementById('timer')

    this.clicks++
    messageBox.textContent = this.clicks
    messageBox.style.fontSize = (this.clicks + 12) + 'pt'
    if (!this.gameStart) {
        this.gameStart = true
        this.timeStart = new Date().getTime()
        this.startTimer()

    }
}

startTimer(){
    
     this.interval = setInterval(() => {
        let currentTime = new Date().getTime()

        let timeDiff = (this.timeLimit + this.timeStart) - currentTime
        if (timeDiff < 0) {
            timeDiff = 0
            clearInterval(this.interval)
            window.removeEventListener('click', this.onClick)
        }

        timer.textContent = `เหลือเวลาอยู่ ${ (timeDiff/ 1000).toFixed(1) } sec`

    }, 100)

}


}
ReactDOM.render( <Game /> ,document.getElementById('root'))
