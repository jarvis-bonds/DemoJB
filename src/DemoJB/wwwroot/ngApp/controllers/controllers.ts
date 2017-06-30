namespace DemoJB.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public menuId;
        public activeMenu;
        public view = 'list';
       
        public setView(view, menuId) {
            this.view = view;
            this.activeMenu = menuId;
        }

        public isActive(menuId) {
            return this.activeMenu == menuId;
        }

        public showMain() {
            this.setView('main', '');
        }

        public showLocations() {
            this.setView('home', 'Home');
        }

        public showDives() {
            this.setView('customs', 'Custom');
        }

        constructor() {
            
        }
    }


    export class DealershipController {
        public cars;
        public makes;
        
        
        public showModal(index) {
            this.$uibModal.open({
                templateUrl: '/ngApp/views/details.html',
                controller: DetailsController,
                controllerAs: 'modal',
                resolve: {
                    car: () => this.cars[index]
                }
            });
    }

        constructor(carService: DemoJB.Services.CarService, private $uibModal: angular.ui.bootstrap.IModalService) {
            this.cars = carService.listCars();
            this.makes = carService.listMakes();
        }
    }

    export class DetailsController {

        public ok() {
            this.$uibModalInstance.close();
        }

        constructor(private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance, public car) {

        }
    }


    export class AboutController {

        public message = "Doing it Big";
        public customs = [
            "Lexus",
            "Bentley",
            "Mustang",
            "BMW",
            "Infinity"
        ];

        public view = 'list';
        public selected = -1;
        public customBox;
     
        

        public setView(view) {
            this.view = view;
        }

        public startAdd() {
            this.customBox = "";
            this.setView('add');
        }

        public add(customBox) {
            customBox = this.customBox;
            this.customs.push(this.customBox);
            this.setView('list');
        }

        public cancel() {
            this.setView('list');
        }

        public startEdit(index) {
            this.selected = index;
            this.customBox = this.customs[index];
            this.setView('edit');
        }

        public save() {
            this.customs[this.selected] = this.customBox;
            this.setView('list');
        }

        public startRemove(index) {
            this.selected = index;
            this.setView('delete');
        }

        public remove(selected) {
            selected = this.selected;
            this.customs.splice(selected, 1);
            this.setView('list');
        }

        public getSelected() {
            return this.customs[this.selected];
        }
       
        constructor() {
            console.log(this.message);
        }
    }
}  

