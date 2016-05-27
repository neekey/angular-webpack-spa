import html from './view.html';
import module from '../module';

module.registerController('profileCtrl', /* @ngInject */$scope => {
    $scope.name = 'profile';
});

export { html as template };
