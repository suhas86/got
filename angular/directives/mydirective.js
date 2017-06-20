myApp.directive("bookList",function(){
	return {
		restrict: "E",
		templateUrl:"./views/book-list.html",
		scope:{
			item:"=",
			isbooks:"=",
			ischars:"=",
			ishouses:"="
		},
		controller: function($scope){
	
		}
	}
});
