// INITILIZE SERVICE
// ============================================================
angular.module("DashboardApp").service("quoteService", function($http) {

  // CRUD FUNCTIONS
  // ============================================================
  this.getquote = function() {
    return $http({
      method: 'GET',
      url: 'https://apimk.com/motivationalquotes?get_quote=yes'
    });
  };

});
