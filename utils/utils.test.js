const expect = require('expect');
const utils = require('./utils');

it('should add two numbers',() => {       //it() being a mocha test case
  var res = utils.add(33,11);
  expect(res).toBe(44).toBeA('number');   //assertion test using expect library
});

it('should square the given number', () => {
  var res = utils.square(9);
  expect(res).toBe(81).toBeA('number');
});

it('should expect some values', () => {         //assertion testing for objects/arrays
  expect({name: 'Ryan'}).toEqual({name: 'Ryan'}); //toEqual instead of toBe
  expect([2,3,4]).toInclude(3);
  expect({
    name: 'Ryan',
    age: 27
  }).toInclude({name: 'Ryan'});
  expect({
    name: 'Ryan',
    age: 27
  }).toExclude({likes: 'football'});
});

it('should verify first and last names are set', () => {
  var user = utils.setName({age: 27, location: 'Hamilton'}, 'Ryan Conry')
  expect(user).toInclude({
    firstName : 'Ryan',
    lastName : 'Conry'
  });
});

it('Should async add two numbers', (done) => {    //done specifies async test
  utils.asyncAdd(4,3,(sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  })
});

it('Should async square a number', (done) => {
  utils.asyncSquare(7,(squared) => {
    expect(squared).toBe(49).toBeA('number');
    done();
  })
})
