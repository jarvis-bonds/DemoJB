namespace DemoJB {

    angular.module('DemoJB', ['ui.router', 'ngResource', 'ui.bootstrap','ngMaterial']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: DemoJB.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('dealership', {
                url: '/dealership',
                templateUrl: '/ngApp/views/dealership.html',
                controller: DemoJB.Controllers.DealershipController,
                controllerAs: 'controller'
            })
            .state('details', {
                url: '/details',
                templateUrl: 'ngApp/views/details.html',
                controller: DemoJB.Controllers.DetailsController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: DemoJB.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            })

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
