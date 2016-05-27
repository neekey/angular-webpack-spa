import module from '../module';
import html from './component.html';

module.registerDirective('myCom', () => {
    return {
        template: html,
        restrict: 'EA',
        scope: {
            name: '=',
        },

        link(scope) {
            console.log('component name:', scope.name);
            setTimeout(() => {
                console.log('component name:', scope.name);
            }, 1000);
        },
    };
});
