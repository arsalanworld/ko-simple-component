define([
    'uiComponent'
], function (Component) {
    "use strict";

    return Component.extend({
        initialize: function () {
            this._super();
            alert("component initialized successfully!");
        }
    });
});
