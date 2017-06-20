myApp.service('GotService',function($http){
	var main=this;
	this.baseUrl="https://anapioficeandfire.com/api/";

	//Get All Books
	this.getAllBooks=function(){
		return $http({
			method:'GET',
			url:main.baseUrl+'books'
		})
	} //End of Get all books

	//Get All Charecters
	this.getAllChars=function(){
		return $http({
			method:'GET',
			url:main.baseUrl+'characters'
		})
	} //End of Get all Charecters

	//Get All House
	this.getAllHouses=function(){
		return $http({
			method:'GET',
			url:main.baseUrl+'houses'
		})
	} //End of Get all House
	//Get Book Details
	this.getBook=function(name){
		return $http({
			method:'GET',
			url:main.baseUrl+'books?name='+name
		})
	} //End of Get Book
	//Get House Details
	this.getHouse=function(name){
		return $http({
			method:'GET',
			url:main.baseUrl+'houses?name='+name
		})
	} //End of Get House
	//Get House Details
	this.getChar=function(id){
		return $http({
			method:'GET',
			url:main.baseUrl+'characters/'+id
		})
	} //End of Get House
});