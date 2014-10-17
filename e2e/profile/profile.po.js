'use strict'

var ProfilePage = function(){
  this.h3El = element(by.css('h3'));
  this.login = element(by.css('#login'));
}

module.exports = new ProfilePage();
