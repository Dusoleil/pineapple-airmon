registerController('MainController', ['$api', '$scope', function($api, $scope) {
    $scope.interfaces = [];
    $scope.selectedInterface = "";
    $scope.modinterface = false;

    $scope.getInterfaces = (function()
        {
            $api.request(
                {
                    module: 'airmon',
                    action: 'getInterfaces'
                },
                function(response)
                {
                    $scope.interfaces = response.interfaces;
                    $scope.selectedInterface = $scope.interfaces[0];
                    console.log(response)
                }
            );
        });

    $scope.startMonitor = (function()
        {
            $scope.modinterface = true;
            $api.request(
                {
                    module: 'airmon',
                    action: 'startMonitor',
                    interface: $scope.selectedInterface
                },
                function(response)
                {
                    $scope.getInterfaces();
                    $scope.modinterface = false;
                }
            );
        });

    $scope.stopMonitor = (function()
        {
            $scope.modinterface = true;
            $api.request(
                {
                    module: 'airmon',
                    action: 'stopMonitor',
                    interface: $scope.selectedInterface
                },
                function(response)
                {
                    $scope.getInterfaces();
                    $scope.modinterface = false;
                }
            );
        });

    $scope.getInterfaces();
}]);
