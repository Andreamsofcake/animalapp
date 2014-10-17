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
  it('will have a home link and a animals link', function(){
    visit('/animals')
    andThen(function(){
      expect(find('a.animals').length).to.equal(1);
    })
  });
  it('lists all the animal types', function(){
    visit('/animals')
    andThen(function(){
      expect(find('ul.animals li').length).to.eql(3)
    })
  })
  it('will have a cats, dogs, ducks link', function(){
    visit('/animals')
    andThen(function(){
      expect(find('ul.animals li a.cats').length).to.equal(1);
      expect(find('ul.animals li a.dogs').length).to.equal(1);
      expect(find('ul.animals li a.ducks').length).to.equal(1);
    })
  });
});
