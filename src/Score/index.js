import React from 'react'
export default class Score extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){
       let style = {
            fontSize:this.props.score + 12,
        }
        return(
            <div style={style}>
            {this.props.score}
            </div>
        )
    }


}