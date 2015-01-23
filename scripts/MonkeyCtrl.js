angular.module('foodMonkeyApp', [])
  .controller('MonkeyCtrl', ['DishService',function(DishService) {
    var self = this;
    // method to add new entries to the model
    self.listDishes = function() {
	return DishService.listDishes();
    };
    self.addDish = function() {
      DishService.addDish({
	  id: self.listDishes().length + 1,
	  label: self.newDish.label,
	  ingredients: self.newDish.ingredients
      });
	self.newDish = null;
    };
  }])
.factory('DishService', [function() {
    var dishes = [
	{id: 1, label: 'Omelette', ingredients: 'eggs, bacon, cheese, peppers'},
	{id: 2, label: 'Fruit salad', ingredients: 'melon, papaya, kiwi, grapes'}	
    ];

    return {
	listDishes: function() {
	    return dishes;
	},
	addDish: function(dish) {
	    dishes.push(dish);
	}
    };
}]);
