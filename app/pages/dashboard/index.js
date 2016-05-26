import html from './view.html';
import module from '../module';
import './component';
import './service';
import './filter';
import './style.scss';

module.registerController( 'dashboardCtrl', function( $scope ){
    "ngInject";
    $scope.name = 'neekey';
});

export var template = html;