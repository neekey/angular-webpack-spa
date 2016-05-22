import html from './view.html';
import module from '../module';
import './component';
import './service';
import './filter';

module.registerController( 'dashboardCtrl', function( $scope ){
    $scope.name = 'neekey';
});

export var template = html;