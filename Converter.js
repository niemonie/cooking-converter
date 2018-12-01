;
(function (global, $) {

    var convert = function (quantity) {
        return new convert.init(quantity);
    }

    var errorMessage;

    var supportedUnits = ['ml', 'l', 'tsp', 'tbs', 'oz', 'cup', 'pt', 'qt'];

    var units = {
        ml: {
            ratio: 1
        },
        l: {
            ratio: 1000
        },
        tsp: {
            ratio: 5
        },
        tbs: {
            ratio: 15
        },
        oz: {
            ratio: 28.41
        },
        cup: {
            ratio: 250
        },
        pt: {
            ratio: 568.26
        },
        qt: {
            ratio: 1136.52
        }
    }

    // prototype holds methods (to save memory space)
    convert.prototype = {

        validateQuantity: function () {
            // 'this' refers to the calling object at execution time    
            if (!this.quantity) {
                this.errorMessage = "Missing the quantity parameter!";
                throw this.errorMessage;
            }

            if (isNaN(this.quantity)) {
                this.errorMessage = "Quantity is not a number!"
                throw this.errorMessage;
            }
        },

        validateUnit: function (unit) {
            if (!unit) {
                throw "Missing the unit!";
            }
            if (supportedUnits.indexOf(unit) === -1) {
                throw "Invalid unit";
            }
        },

        from: function (from) {
            if (this.destination) {
                throw "From must be called before to";
            }
            this.origin = from;
            this.validateUnit(this.origin);

            // make chainable
            return this;
        },

        to: function (to) {
            if (!this.origin) {
                throw "To must be called after from";
            }

            this.destination = to;
            this.validateUnit(this.destination);

            var result = this.quantity * units[this.origin].ratio / units[this.destination].ratio;
            return result;
        }
    }
    convert.init = function (quantity) {
        var self = this;
        self.quantity = quantity;
        self.validateQuantity();
    }

    convert.init.prototype = convert.prototype;
    global.convert = convert;

    var htmlConverter = function (selector, quantity, origin, destination) {
        if (!$) {
            throw 'jQuery not loaded';
        }
        
        var msg = convert(quantity).from(origin).to(destination);
        $(selector).html(msg);
    }

    global.htmlConverter = htmlConverter;

}(window, jQuery));