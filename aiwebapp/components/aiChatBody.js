(function() {
    'use strict';

    angular
        .module('ui-chat-app')
        .directive('aiChatBody', aiChatBody);

    function aiChatBody() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/views/ai-chat-body.html',
            link: linkFunction
        };
        return directive;

        function linkFunction() {
            console.log('AI BODY IS IN FUNCTION');
            console.log('imad test');
            console.log('git gui izmjena');
            console.log('imad test 2');
        }
    }
})();
