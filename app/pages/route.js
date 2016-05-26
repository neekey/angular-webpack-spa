import module from './module';

module.config(function ( $futureStateProvider, $locationProvider, $urlRouterProvider ) {
    "ngInject";

    var futureStates = [
        {
            stateName: 'dashboard',
            url: '/dashboard',
            type: 'asyncState'
        },
        {
            stateName: 'home',
            url: '/',
            type: 'asyncState'
        },
        {
            stateName: 'profile',
            url: '/profile',
            type: 'asyncState'
        },
    ];

    futureStates.forEach(function( futureState ){
        $futureStateProvider.futureState(futureState);
    });


    $futureStateProvider.stateFactory( 'asyncState', function( $q, futureState ){
        "ngInject";

        var d = $q.defer();

        switch( futureState.stateName ){
            case 'dashboard':
                require.ensure( [ './dashboard/index' ], function( require ){ moduleResolve( require( './dashboard/index' ) ); } );
                break;
            case 'home':
                require.ensure( [ './home/index' ], function( require ){ moduleResolve( require( './home/index' ) ); } );
                break;
            case 'profile':
                require.ensure( [ './profile/index' ], function( require ){ moduleResolve( require( './profile/index' ) ); } );
                break;
        }

        function moduleResolve( module ){
            var state = {
                name: futureState.stateName,
                url: futureState.url,
                controller: futureState.stateName + 'Ctrl',
                template: module.template
            };
            d.resolve( state );
        }

        return d.promise;
    });

    /**
    * looks like futureState is not compatible with urlRouterProvider.otherwise
    */
    $urlRouterProvider.otherwise( '/' );

    // 启用 html5 history
    $locationProvider.html5Mode(true);

});
