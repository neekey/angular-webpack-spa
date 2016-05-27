import html from './view.html';
import module from '../module';
import './component';
import './service';
import './filter';
import './style.scss';

module.registerController('dashboardCtrl', /* @ngInject */($scope) => {
    $scope.name = 'Neekey';
});

export { html as template };
