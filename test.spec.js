const mocha = require('mocha')
const chai = require('chai');
const assertArrays = require('chai-arrays');

const oddEven = require('./numbers').oddEven

chai.use(assertArrays);
const expect = chai.expect;

describe('Odd-Even Number', () => {
    it('should return an error for empty argument ', (done) => {
        expect(oddEven()).to.equal('Empty argument')
        done();
    });

    it('should return an error for empty array [] ', (done) => {
        expect(oddEven([])).to.equal('Array can not be empty.')
        done();
    });

    it('should return an error for a string input "Hi" ', (done) => {
        expect(oddEven('hi')).to.equal('Input should be an array.')
        done();
    });

    it('should return an error if all items of the arrays aren\'t numbers', (done) => {
        expect(oddEven([1, 'yyyy', '30', 5, 30])).to.equal('Invalid array items');
        done();
    });

    it('should return an error if a boolean is passed', (done) => {
        expect(oddEven(true)).to.equal('Input should be an array.');
        done();
    });
    it('should pass for valid arguments', (done) => {
        expect(oddEven([1, 17, 12, 5, 30])).to.be.an('object');
        expect(oddEven([1, 17, 12, 5, 30])).to.have.property('evenNumbers').to.not.be.empty;
        expect(oddEven([1, 17, 12, 5, 30])).to.have.property('oddNumbers').to.not.be.empty
        done();
    });

    it('should return evenNumbers = [ 12, 30 ] for input [ 1, 17, 12, 5, 30 ]', (done) => {
        let result = oddEven([1, 17, 12, 5, 30]);
        expect((oddEven([1, 17, 12, 5, 30])).evenNumbers).to.be.an('array');
        expect((oddEven([1, 17, 12, 5, 30])).evenNumbers).to.be.equalTo([12, 30]);
        done();
    });

    it('should return oddNumbers = [ 1, 17, 5 ] for input [ 1, 17, 12, 5, 30 ]', (done) => {
        let result = oddEven([1, 17, 12, 5, 30]);
        expect((oddEven([1, 17, 12, 5, 30])).oddNumbers).to.be.an('array');
        expect((oddEven([1, 17, 12, 5, 30])).oddNumbers).to.be.equalTo([1, 17, 5]);
        done();
    });
})
