namespace DemoJB.Services {

    export class CarService {
        private CarsResource;
        private MakesResource;

        public listCars() {
            return this.CarsResource.query();
        }

        public listMakes() {
            return this.MakesResource.query();
        }


        constructor($resource: ng.resource.IResourceService) {
            this.CarsResource = $resource('/api/cars');
            this.MakesResource = $resource('/api/makes');
        }
    }
    angular.module('DemoJB').service('carService', CarService);
    export class MyService {

    }
    angular.module('DemoJB').service('myService', MyService);
    }
