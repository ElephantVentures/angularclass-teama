describe('Controller: MonkeyCtrl', function() {
  // Instantiate a new version of my module before each test
  beforeEach(module('foodMonkeyApp'));

  var ctrl;

  // Before each unit test, instantiate a new instance
  // of the controller
  beforeEach(inject(function($controller) {
    ctrl = $controller('MonkeyCtrl');
  }));

  it('should have items available on load', function() {
    expect(ctrl.dishes).toEqual([
      {id: 1, label: 'Omelette', ingredients: 'eggs, bacon, cheese, peppers'},
      {id: 2, label: 'Fruit salad', ingredients: 'melon, papaya, kiwi, grapes'}
    ]);
  });

  it('should have Ingredients field set', function() {
    ctrl.dishes = {id: 3, label: 'Paella', ingredients: ''};
    expect(ctrl.dishes.ingredients).not.toBeDefined();
  });
});
