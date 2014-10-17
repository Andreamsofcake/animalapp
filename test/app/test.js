'use strict';

describe('app', function() {
  it('has an index page', function() {
    visit('/');
    expect(currentRouteName()).to.equal('index');
  });
  it('will have a home link and a animals link', function(){
    visit('/')
    andThen(function(){
      expect(find('a.home').length).to.equal(1);
    })
  });
});
