import html from './view.html';
import module from '../module';

module.registerController('homeCtrl', /* @ngInject */$scope => {
    $scope.name = 'home';
});

export { html as template };
