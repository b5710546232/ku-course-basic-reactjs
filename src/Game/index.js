import React from 'react'
import Timer from '../Timer'
import Score from '../Score'
export default class Game extends React.Component{
    state = {
        clicks:0,
        gameStart:false,
        
    }
    timeStart = 0
    timeLimit = 5000
    interval = null
    
    render(){
        let message
        let timer =null
        if(this.state.gameStart){
            message = <Score score={this.state.clicks} />
            timer =  (<Timer timeLimit={this.timeLimit} timeStart={this.timeStart} />)
        }else{
            message = 'กดตรงไหนก็ได้เพื่อเริ่ม'
        }
        return(
            <div>
            <div id="title" className="title">REACT-CLICKER</div>
            <div id="message">{message}</div>
            {timer}
            </div>
        )
    }
    componentWillMount(){
        window.addEventListener('click', this.onClick)
    }

    onClick= () => {

    let messageBox = document.getElementById('message')

    // if(this.state.gameStart && this.getTimeLeft() <= 0){
    //     clearInterval(this.interval)
    //     window.removeEventListener('click', this.onClick)
    // }



    this.setState({
        clicks:this.state.clicks + 1,
    })
    messageBox.style.fontSize = (this.state.clicks + 12) + 'pt'
    if (!this.state.gameStart) {
        this.timeStart = new Date().getTime()
        this.setState({gameStart:true})

        setTimeout(()=>{
            this.props.onGameFinish(this.state.clicks)
        },this.timeLimit)

    }
}



    getTimeLeft(){
        let currentTime = new Date().getTime()
        let timeDiff = (this.timeLimit + this.timeStart) - currentTime
        if(timeDiff<0) timeDiff = 0
        return  timeDiff 

    }
}