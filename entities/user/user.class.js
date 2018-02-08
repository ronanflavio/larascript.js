/**
 * File that contains a lot of client services for jquery consumes
 */

var userClass = (function() {

    /**
     * Base class for client resource
     */
    var client = {
        __proto__ : baseClass
    };

    /**
     * Example of how the function comes out into
     * the class files
     *
     * @param $btn
     */
    client.example = function ($btn) {
        alert('btn was clicked!');
    };

    /**
     * Only functions into client scope will be
     * public/returned
     */
    return client;
    
}());


