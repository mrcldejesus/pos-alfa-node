const assert = require('assert');

describe('Array', ()=> {
	describe('#indexOf()', () => {
		it('should return -1 when the  value is not present', () =>{
			assert.equal(-1, [1,2,3]. indexOf(5))
			assert.equal(-1, [1,2,3]. indexOf(0))
		 })
		it('should return the index value is not present', () =>{
			assert.equal(1, [1,2,3]. indexOf(2))
			assert.equal(2, [1,2,3]. indexOf(3))
		})
	})
})