import 'babel-polyfill';
import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'ui-router-extras';
import couchPotato from 'angular-delay-register';

const module = angular.module('app', [
    'ui.router',
    'scs.couch-potato',
]);

couchPotato.configureApp(module);

module.run(/* @ngInject */$couchPotato => {
    module.lazy = $couchPotato; // note that you need to use the name 'lazy'
});

export default module;
