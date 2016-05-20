import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'ui-router-extras';
import couchPotato from 'angular-delay-register';

var module = angular.module( 'app', [
    'ui.router',
    'ct.ui.router.extras.future',
    'scs.couch-potato'
]);

couchPotato.configureApp( module );

module.run([ '$couchPotato', function( $couchPotato ){
    module.lazy = $couchPotato; //note that you need to use the name 'lazy'
}]);

export default module;