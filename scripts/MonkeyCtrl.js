angular.module('foodMonkeyApp', [])
  .controller('MonkeyCtrl', [function() {
    var self = this;
    // method to add new entries to the model
    self.addDish = function() {
      self.newDish.id = self.dishes.length + 1;
      self.dishes.push(self.newDish);
      self.newDish = null;
    };
    // default data model
    self.dishes = [
      {id: 1, label: 'Omelette', ingredients: 'eggs, bacon, cheese, peppers'},
      {id: 2, label: 'Fruit salad', ingredients: 'melon, papaya, kiwi, grapes'}
    ];
  }]);
