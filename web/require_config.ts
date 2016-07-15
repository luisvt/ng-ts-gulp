declare var require;

require.config({
    //By default load any module IDs from js/lib
    baseUrl: '',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        angular: 'angular/angular',
        'ts-helpers': 'ts-helpers/index'
    }
});

require(['module.config', 'angular'], function(moduleConfig) {
    angular.bootstrap(document, [moduleConfig.heroApp.name]);
});
