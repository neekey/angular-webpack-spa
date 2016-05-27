import module from '../module';

module.registerFilter('upper', () => {
    return (input) => {
        return input.toUpperCase();
    };
});
