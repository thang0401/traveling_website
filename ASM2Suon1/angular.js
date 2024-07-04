
var app = angular.module("myapp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "trangchu.html", controller: "myCtrl" })
        .when("/gioithieu", { templateUrl: "gioithieu.html", controller: "myCtrl" })
        .when("/lienhe", { templateUrl: "lienhe.html", controller: "myCtrl" })
        .when("/detail/:id", { templateUrl: "chitiet.html", controller: "myCtrl" })
        .when("/QAF", { templateUrl: "QAF.html", controller: "myCtrl" })
        .when("/login", { templateUrl: "login.html", controller: "myCtrl" })
        .when("/signin", { templateUrl: "signin.html", controller: "myCtrl" })
        .when("/cart", { templateUrl: "cartPage.html", controller: "myCtrl" })
        .otherwise({ templateUrl: "trangchu.html", controller: "myCtrl" });
});

app.controller("myCtrl", function($scope, $rootScope, $routeParams, $http) {
    $scope.tours = [];
    $scope.sortDomestic = '';
    $scope.sortInternational = '';
    $scope.detailProduct = {};
    $scope.username = '';
    $scope.password = '';
    $scope.loginData = {};

    $scope.auth = function() {
        var loginUrl ="http://localhost:3001/auth/login";
        $http.post(loginUrl, JSON.stringify( $scope.loginData))
            .then(function(response) {
                if (response.data && response.data.access_token) {
                    localStorage.setItem('token', response.data.access_token);
                    console.log('Token:', response.data.access_token);
                    alert('Login successful');
                }
            })
            .catch(function(error) {
                console.error('Login failed', error);
                alert('Login failed! Please check your credentials.');
            });
    };

    $http.get("http://localhost:3001/tours").then(function(response) {
        $scope.tours = response.data;
    });
    // Fetch details for a specific tour 
    $http.get("http://localhost:3001/tours" + $routeParams.id).then(function(response) {
        $scope.detailProduct = response.data;
    });

    $scope.sortDomesticTours = function(order) {
        $scope.sortAscDomestic = false;
        $scope.sortDescDomestic = false;
        if (order === 'asc') {
            $scope.sortDomestic = 'price';
            $scope.sortAscDomestic = true;
        } else if (order === 'desc') {
            $scope.sortDomestic = '-price';
            $scope.sortDescDomestic = true;
        }
    };

    $scope.sortInternationalTours = function(order) {
        $scope.sortAscInternational = false;
        $scope.sortDescInternational = false;
        if (order === 'asc') {
            $scope.sortInternational = 'price';
            $scope.sortAscInternational = true;
        } else if (order === 'desc') {
            $scope.sortInternational = '-price';
            $scope.sortDescInternational = true;
        }
    };
    $scope.countries=['Việt Nam','Mỹ','Trung Quốc','Khác'];
    $scope.formData = {};
    $scope.submitForm = function() {
        $scope.signupForm.$setSubmitted();
        if ($scope.signupForm.$valid) {
            // Show the overlay with form data
            $scope.showOverlay = true;
            $scope.statusMessage = "Đăng ký thành công!";
            $scope.statusClass = "alert-success";
        } else {
            $scope.statusMessage = "Vui lòng điền đầy đủ thông tin.";
            $scope.statusClass = "alert-danger";
        }
    };
    $scope.addToCart = function(tours)
{
    if (typeof $rootScope.cart == 'undefined'){
        $rootScope.cart =[];
    }
    var index = $rootScope.cart.findIndex(item => item.id == tours.id);
    if (index == -1){
        tours.quantity =1;
        $rootScope.cart.push(tours);
    }else {
        $rootScope.cart[index].quantity++;
    }
    console.log($rootScope.cart);
}  

    $rootScope.minus = function(item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            $rootScope.remove(item);
        }
    };

    $rootScope.plus = function(item) {
        item.quantity += 1;
    };

    $rootScope.remove = function(item) {
        const index = $rootScope.cart.indexOf(item);
        if (index > -1) {
            $rootScope.cart.splice(index, 1);
        }
    };
    $scope.calculatePrice = function(price, quantity) {
        if (!price || !quantity) {
            return 0;
        }
        var numPrice = Number(price);
        if (isNaN(numPrice)) {
            return 0;
        }
        return numPrice * quantity;
    };
    $rootScope.total = function() {
        return $rootScope.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
    $scope.closeOverlay = function() {
        $scope.showOverlay = false;
    };
});
