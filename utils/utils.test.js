const utils = require('./utils')
it('should add two numbers',() => {
  var res = utils.add(33,11);
  if (res!==44){
    throw new Error('Value not correct');
  }
});

it('should square the given number', () => {
  var res = utils.square(9);
  if(res!==81){
    throw new Error('Value incorrect');
  }
})
