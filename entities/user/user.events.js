/**
 * File that contains all jQuery listeners events
 * that which one calls a function to execute the
 * business rules
 *
 */

jQuery(function ($) {

    /**
     * Event that listens all click buttons and call
     * the example function into the users.class.js
     */
    $(document).on('click', 'button', function (e) {
        e.preventDefault();
        usserClient.example($(this));
    })

});