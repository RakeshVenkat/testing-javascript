const {assert} = require('chai');
const sinon = require('sinon');
const {add, greet} = require('./src');

describe('Mocking using Sinon', () => {
    it('Simple test without sinon', () => {
        assert.equal(add(2,3), 5)
    })

    it('Sinon useFakeTimers() provides date as Thu Jan 01 1970', () => {
        const clock = sinon.useFakeTimers()
        assert.equal('Hi Mr. Trump!! The time is: Thu Jan 01 1970', greet('Mr. Trump'))
        clock.restore()
    })

    it('Use specific date with sinon useFakeTimers(Date). (note month starts from 0)', () => {
        const clock = sinon.useFakeTimers(new Date(2020, 2, 20))
        assert.equal('Hi Rakesh venkat!! The time is: Fri Mar 20 2020', greet('Rakesh venkat'))
        clock.restore()
    })

})

