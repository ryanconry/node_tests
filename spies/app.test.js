const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');           //use rewire instead of require for testing
                                        //db.saveUser using spies
describe('App', ()=>{
  var db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db',db);

  it('Should call the spy correctly',()=>{
    var spy = expect.createSpy();         //create spy
    spy('Ryan', 27);                                //call spy
    expect(spy).toHaveBeenCalled();       //assert that spy() has been called
    expect(spy).toHaveBeenCalledWith('Ryan',27)  //asser spy called with args
  });

  it('Should call saveUser with user object', () => {
    var email = 'ryan@example.com';
    var password = '123abc';

    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });

});
