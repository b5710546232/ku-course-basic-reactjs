import React from 'react'

export default class Hightscore extends React.Component{
    render(){
        let table = []
        for(let i = 0;i< this.props.highscore.length ;i++){
            table.push(
                <tr key ={i}>
                <td className="my-text">{i+1}</td>
                <td className="my-text">{this.props.highscore[i].name}</td>
                <td className="my-text">{this.props.highscore[i].score}</td>
                </tr>
            )
        }
        return (
            <div className="my-text">
            <h1 id="high-score-header">Highscore</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>ชื่อ</th>
                        <th>คะแนน</th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
            <button>Play again</button>
            </div>
        )
    }
}