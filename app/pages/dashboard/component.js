import module from '../module';
import html from './component.html'

module.registerDirective( 'myCom', function(){

    return {
        template: html,
        restrict: 'EA',
        scope: {
            name: '='
        },

        link: function (scope) {
            console.log( 'component name:', scope.name );
            setTimeout(function(){
                console.log( 'component name:', scope.name );
            }, 1000)
        }
    }
});