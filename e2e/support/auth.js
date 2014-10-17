'use strict'

var Auth = function(){
  this.login =  function(emailString, passwordString){
      console.log('here');
      //page.login.click();
      browser.debugger();
      console.log('after');
      var email = element(by.model('user.email'));
      var password = element(by.model('user.password'));
      var submit = element(by.css('.submit'));
      email.sendKeys(emailString);
      password.sendKeys(passwordString);
      submit.click();
  };
}

module.exports = new Auth();
