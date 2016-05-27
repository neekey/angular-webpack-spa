/* global angular */

import module from '../module';

module.registerService('Utils', () => {
    return {
        isJSON: str => {
            let ret = null;

            try {
                ret = JSON.parse(str);
            } catch (e) {
                ret = null;
            }

            return !!ret;
        },

        clone(obj) {
            return angular.fromJson(angular.toJson(obj));
        },

        deepEqual(a, b) {
            return angular.toJson(a) === angular.toJson(b);
        },

        safeApply(scope, fn) {
            const phase = scope.$root.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                scope.$apply(fn);
            }
        },
    };
});
