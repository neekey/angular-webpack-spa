import module from '../module';

module.registerService('Utils', function Utils() {

    return {
        isJSON: function( str ){
            var ret = null;

            try {
                ret = JSON.parse( str );
            }
            catch(e){
                ret = null;
            }

            return !!ret;
        },

        /**
         * 通过域名判断当前环境
         */
        getCurrentEnv: function(){

            var host = location.host;

            if( host == 'dip.alibaba-inc.com' ){
                return 'production';
            }
            else if( host == 'dip.alibaba.net' ){
                return 'prepub';
            }
            else {
                return 'development';
            }
        },

        clone: function( obj ){
            return angular.fromJson( angular.toJson( obj ) );
        },

        deepEqual: function( a, b ){
            return angular.toJson( a ) === angular.toJson( b )
        },

        safeApply: function( scope, fn) {
            var phase = scope.$root.$$phase;
            if(phase == '$apply' || phase == '$digest') {
                if(fn && (typeof(fn) === 'function')) { fn();
                }
            } else {
                scope.$apply(fn);
            }
        }
    }
});