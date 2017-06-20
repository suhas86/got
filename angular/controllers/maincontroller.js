myApp.controller('mainController',['$http','GotService',function($http,
  GotService) {

  //create a context
  var main = this;
  this.showBooks=false;
  this.showChars=false;
  this.showHouses=false;

  this.loadAllBooks = function(){
    
      //To get books
      GotService.getAllBooks().
      then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          main.books = response.data;
          main.heading="All Books"
          main.data = response.data;
          main.showBooks=true;
          main.showChars=false;
          main.showHouses=false;

          //Clear Filters
          /*
          main.query.name="";
          main.query.authors="";
          main.query.publisher="";
          main.query.region="";
          main.query.culture="";
          */

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });

  }// end load all books
    //To get Chars
    this.loadAllChars=function(){

    
      GotService.getAllChars().
      then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          main.chars = response.data;
          main.heading="All Characters (Displaying Alias)"
          main.data = response.data;
          main.showBooks=false;
          main.showChars=true;
          main.showHouses=false;
          
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });
}
        //To get House
        this.loadAllHouses=function(){

       
      GotService.getAllHouses().
      then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          main.houses = response.data;
          main.heading="All Houses"
          main.data = response.data;
          main.showBooks=false;
          main.showChars=false;
          main.showHouses=true;
          
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });
 }
}]); // end controller
