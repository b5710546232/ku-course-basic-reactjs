class Game extends React.Component{
    state = {
        clicks:0,
        gameStart:false,
        
    }
    timeStart = 0
    timeLimit = 5000
    interval = null

    render(){
        let message
        if(this.state.gameStart){
            message = this.state.clicks
        }else{
            message = 'กดตรงไหนก็ได้เพื่อเริ่ม'
        }
        return(
            <div>
            <div id="title" className="title">CLICKER</div>
            <div id="message">{message}</div>
            <div id="timer"></div>
            </div>
        )
    }
    componentWillMount(){
        window.addEventListener('click', this.onClick)
    }

    onClick= () => {

    let messageBox = document.getElementById('message')
    let timer = document.getElementById('timer')

    this.setState({
        clicks:this.state.clicks + 1,
    })
    messageBox.style.fontSize = (this.state.clicks + 12) + 'pt'
    if (!this.state.gameStart) {
        this.setState({gameStart:true})
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
