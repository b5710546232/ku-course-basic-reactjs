import React from 'react'
export default class Timer extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.startTimer()
    }

    render(){
        let timer = `เหลือเวลาอยู่ ${ this.formatTime(this.getTimeLeft()) } sec`
        return(
            <div id="timer">{timer}</div>
        )
    }

    formatTime(time){
        return (time/1000).toFixed(1)
    }

    getTimeLeft(){
        let currentTime = new Date().getTime()
        let timeDiff = (this.props.timeLimit + this.props.timeStart) - currentTime
        if(timeDiff<0) timeDiff = 0
        return  timeDiff 

    }
    startTimer(){
    
     this.interval = setInterval(() => {
        this.forceUpdate()

    }, 100)

}
    
}