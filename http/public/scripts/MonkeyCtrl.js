angular.module('foodMonkeyApp', [])
  .controller('MonkeyCtrl', ['$http',function($http) {
    var self = this;
    // method to add new entries to the model
    self.dishes = [];
	self.newDish = {};	
	var fetchDishes = function() {
	return $http.get('/api/dish').then(function(response){
		self.dishes = response.data;
	}, function(errResponse){
		console.error('Error while fetching dishes');	
	});
	};
	
	fetchDishes();

    self.addDish = function() {
      $http.post('/api/dish',self.newDish)
	.then(fetchDishes)
	.then(function(response){
		self.newDish = {};	
	});

    };


/*  }])
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
    };*/


}]);
