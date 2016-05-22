import module from '../module';

module.registerFilter('upper', function() {

    return function(input) {
        return input.toUpperCase();
    };

});
