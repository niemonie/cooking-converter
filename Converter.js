(function (global, $) {

    var Converter = function (quantity) {
        return new Converter.init(quantity);
    }

    var supportedUnits = ['milliliter', 'ml', 'teaspoon', 'tsp', 'tablespoon', 'tbs', 'tbsp', 'ounce', 'oz', 'cup', 'pint', 'pt', 'quart', 'qt', 'gallon', 'gl'];

    // prototype holds methods (to save memory space)
    Converter.prototype = {

        validateQuantity: function () {
            // 'this' refers to the calling object at execution time    
            if (!this.quantity) {
                throw "Missing the quantity parameter!";
            }

            if (isNaN(this.quantity)) {
                throw "Quantity is not a number!";
            }
        },

        validateUnit: function () {
            if (supportedUnits.indexOf(this.language) === -1) {
                throw "Invalid unit";
            }
        },
        from: function (from) {
            if (this.destination) {
                throw "From must be called before to";
            }

            this.origin = from;

            // make chainable
            return this;
        },
        to: function (to) {
            if (!this.origin) {
                throw "To must be called after from";
            }

            this.destination = to;
        }

    }

    Converter.init = function (quantity) {
        var self = this;
        self.quantity = quantity;
        self.validateQuantity();
    }

    Converter.init.prototype = Converter.prototype;
    global.Converter = Converter;

}(window, jQuery));