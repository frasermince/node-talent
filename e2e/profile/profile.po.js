'use strict'

var ProfilePage = function(){
  this.h1El = element(by.css('h1'));
  this.login = element(by.css('#login'));
}

module.exports = new ProfilePage();
