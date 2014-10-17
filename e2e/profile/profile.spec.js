'use strict'

describe('Profile Page', function(){
  var page;
  var auth;
  beforeEach(function(){
    browser.get('/login');
    page = require('./profile.po');
    auth = require('../support/auth');
    auth.login('user@example.com', 'testtest');
  });
  it('should have a title that says "welcome"', function(){
    expect(page.h3El.getText()).toBe('User Example');
  });
});
