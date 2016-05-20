import html from './view.html';
import module from '../module';

module.registerController( 'homeCtrl', function( $scope ){
        $scope.name = 'home';
});

export var template = html;