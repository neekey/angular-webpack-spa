import html from './view.html';
import module from '../module';
import './style.scss';

module.registerController('homeCtrl', /* @ngInject */$scope => {
    $scope.name = 'home';
    $scope.greeting = 'hello world';
});

export { html as template };
