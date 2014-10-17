'use strict'

var Auth = function(){
  this.login =  function(){
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
  };
}

module.exports = new Auth();
