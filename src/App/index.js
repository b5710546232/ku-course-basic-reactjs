import React from 'react'

import Game from '../Game'
import HightscoreStorage from '../HightScore/storage'
import Hightscore from '../HightScore'

export default class App extends React.Component{

    state = {
        page:'game'
    }

    highscore = new  HightscoreStorage()

   render(){
        switch(this.state.page){
            case 'game':
                return <Game onGameFinish={this.onGameFinish}/>
            case 'highscore':
                return <Hightscore highscore={this.highscore.highscore}/>

            default:
            return <div>Error</div>
        }
   }

   onGameFinish = (score) => {

        let name = prompt(`Your score is ${score}.\n Enter your name`)

        if(name){
            this.highscore.add(name,score)
        }

        this.setState({page:'highscore'})
   }
}