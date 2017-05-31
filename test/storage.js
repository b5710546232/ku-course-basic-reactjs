import Storage from '../src/Hightscore/storage'
import {
    expect
} from 'chai'

describe('HightscoreStorage', () => {
    it('has a hightscore attrribute', () => {
        let storage = new Storage()
        expect(storage.highscore).to.be.an('array')

    });

    describe('#add', () => {
        it('add score to hightscore', () => {
            let storage = new Storage()
            storage.add('test', 10);

            expect(storage.highscore).to.eql([{
                name: 'test',
                score: 10
            }])
        })
        it('sort hightscore by ghitest to lowest', () => {
            let storage = new Storage()
            storage.add('test2', 20);
            storage.add('test1', 10);
            storage.add('test3', 30);
            expect(storage.highscore).to.eql(
                [
                    {name:'test3',score:30},
                    {name:'test2',score:20},
                    {name:'test1',score:10},
                ])

        })

    })

    describe('#cap', () => {
        it('limit highscore to given length')
        it('do nothing if highscore is under the given length')
    })

})