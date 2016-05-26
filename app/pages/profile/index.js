import html from './view.html';
import module from '../module';

module.registerController( 'profileCtrl', function( $scope ){
        "ngInject";
        $scope.name = 'profile';
});

export var template = html;