'use strict'

describe('Profile Page', function(){
  var page;
  beforeEach(function(){
    browser.get('/login');
    page = require('./profile.po');
    var login = function(){
      console.log('here');
      //page.login.click();
      browser.debugger();
      console.log('after');
      var email = element(by.model('user.email'));
      var password = element(by.model('user.password'));
      var submit = element(by.css('.submit'));
      email.sendKeys('user@example.com');
      password.sendKeys('testtest');
      submit.click();
    }
    login();

  });
  it('should have a title that says "welcome"', function(){
    expect(page.h1El.getText()).toBe('Welcome!');
  });
});
