// app.controller('MainController',['$scope',function($scope){
//   $scope.title = 'Books';
//   $scope.promo = '75%';
//   $scope.products = [ 
//     { 
//       name: 'The Book of Trees', 
//       price: 19, 
//       pubdate: new Date('2014', '03', '08'), 
//       cover: 'img/the-book-of-trees.jpg',
//       likes: 0,
//       dislikes: 0,
//     }, 
//     { 
//       name: 'Program or be Programmed', 
//       price: 24.79, 
//       pubdate: new Date('2013', '08', '01'), 
//       cover: 'img/program-or-be-programmed.jpg',
//       likes: 0,
//       dislikes: 0,
//     }, 
//     { 
//       name: 'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)', 
//       price: 100, 
//       pubdate: new Date('2011', '05', '13'), 
//       cover: 'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg',
//       likes: 0,
//       dislikes: 0,
//     }, 
//     { 
//       name: 'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)', 
//       price: 128, 
//       pubdate: new Date('2011', '05', '13'), 
//       cover: 'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg',
//       likes: 0,
//       dislikes: 0,
//     } 
//   ];
//     $scope.plusOne = function(index){
//       $scope.products[index].likes += 1;
//     };
//      $scope.minusOne = function(index){
//       $scope.products[index].dislikes += 1;
//     };
// }]);

app.controller('MainController', function($scope, $http) {
  $scope.promo = '75%';
  getItem(); // Load all available items 
  function getItem(){  
  $http.post("ajax/getItem.php").then(function(response){
        $scope.products = response.data;
        // console.log(response);
       }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
    });
  };
  $scope.incLikes = function(itemID) {
    $http.post("ajax/incLikes.php?itemID="+itemID).then(function(response){
      getItem();
    });
  };
  $scope.incDislikes = function(itemID) {
    $http.post("ajax/incDislikes.php?itemID="+itemID).then(function(response){
      getItem();
    });
  };

});
