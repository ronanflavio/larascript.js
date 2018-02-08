/**
 * File that contains a a base rest client for jquery consumes
 */

var baseClass = (function (env) {

    /**
     * Return base path for local ou external
     * @type {{local: local, external: external}}
     */
    var url = {
        local: function () {
            var element = document.querySelector('meta[name=env]');
            return element && element.getAttribute('content');
        },

        external: function () {
            var element = document.querySelector('meta[name=external]');
            return element && element.getAttribute('content');
        }
    };

    /**
     * Public bind accessible
     * @type type
     */
    var publicBind = {

        /**
         * Return configured url
         * @param {type} env
         * @param {type} path
         * @returns {undefined|String}
         */
        getUrl: function (env, path) {
            if (env === 'local') {
                path = url.local() + path;
            } else {
                path = url.external() + path;
            }
            return path;
        },

        /**
         * Execute ajax call.
         * @param {type} config
         * @param {type} callback
         * @returns {undefined}
         */
        execute: function (config, callback) {
            $.ajax({
                type: config.type,
                url: config.url,
                data: config.data,
                beforeSend: function (request) {
                    if (config.json) {
                        request.setRequestHeader('Content-Type', 'application/json');
                    }
                },
                success: function(response) {
                    callback(null, response)
                },
                error: function(error) {
                    callback(error)
                }
            })
        }
    };

    return publicBind;

}('local'));


