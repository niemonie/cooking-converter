# cooking-converter

A JavaScript library for converting cooking units.

## Getting Started

Library itself is located in Converter.js file.
In app.js file you can find a jQuery usage example.
Using jQuery is optional. Only the htmlConverter function needs jQuery.

## Usage

```javascript
convert(10).from('l').to('ml');
10000
```

10 is the quantity of the first measure. 10000 is the result of the convertion.

The htmlConverter function displays a result of a convertion in html element.
The first parameter is a jQuery selector. It should be provided without the $ sign.
The usage example can be found in app.js file.

```javascript
htmlConverter([selector], [quantity], [origin], [destination]);
```

## Supported Units

* milliliter = ml
* liter = l
* teaspoon = tsp
* tablespoon = tbs
* ounce = oz
* cup
* pint = pt
* quart = qt

## Author

* **Monika Niegrzybowska** - [niemonie](https://github.com/niemonie)