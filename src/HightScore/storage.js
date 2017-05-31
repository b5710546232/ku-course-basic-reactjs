export default class HightscoreStroage {
    highscore = []

    constructor(){

    }
    save() {

    }

    load() {

    }
    add(name, score) {
        this.highscore.push({
            name,
            score
        })
        this.highscore.sort((a, b) => b.score - a.score)
    }

    cap(limit){

    }
}