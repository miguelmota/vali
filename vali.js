(function(global) {
  var lib = (function(){

    'use strict';

    var lib = {};

  /**
   * @desc Validate email address.
   *
   * @func email
   * @param {string} email - email address
   * @return {boolean} - is valid email
   *
   * @example
   * console.log(vali.email('foo.bar-5@qux.com')); // true
   * console.log(vali.email('foo+bar-5@qux.com')); // true
   * console.log(vali.email('foo&bar-5@qux.com')); // true
   * console.log(vali.email('foo...bar-5@qux.com')); // false
   */
    function email(email) {
      if (!(email && (typeof email === 'string' || email instanceof String))) return false;
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

  /**
   * @desc Validate minimum age.
   *
   * @func minAge
   * @param {Date} birthDate - birthdate
   * @param {integer} minAge - minimum age
   * @return {boolean} - is valid age
   *
   * @example
   * console.log(vali.minAge((new Date(1996, 02, 20)), 18)); // true
   * console.log(vali.minAge((new Date(2002, 02, 20)), 18)); // false
   */
    function minAge(birthDate, minAge) {
      if (!(birthDate && minAge)) return false;
      if (!(birthDate instanceof Date)) return false;
      if (!(typeof minAge === 'number' || minAge instanceof Number)) return false;
      var tmpDate = new Date(birthDate.getFullYear() + minAge, birthDate.getMonth(), birthDate.getDate()).setMonth(birthDate.getMonth() - 1);
      return (tmpDate <= new Date());
    }

  /**
   * @desc Validate username. Can only contain letters, numbers, and underscores.
   *
   * @func username
   * @param {string} username - username
   * @return {boolean} - is valid username
   *
   * @example
   * console.log(vali.username('foobar')); // true
   * console.log(vali.username('foo_bar')); // true
   * console.log(vali.username('foo-bar')); // false
   * console.log(vali.username('foo.bar')); // false
   */
    function username(username) {
      var re = /^[a-zA-Z0-9_]+$/;
      return re.test(username);
    }

  /**
   * @desc Validate name. Can only contain letters, dashes, apostrophes, and spaces.
   *
   * @func name
   * @param {string} name - name
   * @return {boolean} - is valid name
   *
   * @example
   * console.log(vali.name('Foo')); // true
   * console.log(vali.name("Foo'o bar")); // true
   * console.log(vali.name('Foo*')); // false
   * console.log(vali.name('Foo1')); // false
   */
    function name(name) {
      if (!(name)) return false;
      var re = /^[a-zA-Z-' ]*$/;
      return re.test(name);
    }

  /**
   * @desc Validate U.S. zip code.
   *
   * @func zip
   * @alias postalCode
   * @param {integer|string} zip - U.S. zip code
   * @return {boolean} - is valid zip code
   *
   * @example
   * console.log(vali.zip(12345)); // true
   * console.log(vali.zip('12345-2453')); // true
   * console.log(vali.zip(123456789)); // false
   */
    function zip(zip) {
      if (!(zip)) return false;
      var re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
      return re.test(zip);
    }

  /**
   * @desc Validate coordinate point. Must be inbetween -190 and 190;
   *
   * @func coordinate
   * @alias coord
   * @param {float|string} coord - coordinate point
   * @return {boolean} - is valid coordinate
   *
   * @example
   * console.log(vali.coord(41.1029592)); // true
   * console.log(vali.coord(-104.8049363)); // true
   * console.log(vali.coord('13')); // false
   * console.log(vali.coord(-200.8049363)); // false
   */
    function coordinate(coord) {
      if (!(coord && (typeof coord === 'number' || coord instanceof Number))) return false;
      var re = /^(\-?(([0-9]{1}?[0-9]{1})|([1]{1}[0-8]{1}[0-9]{1})|([1]{1}[9]{1}[0]{1}))+(\.\d+)?)$/;
      return re.test(coord);
    }

    lib.email = email;
    lib.minAge = minAge;
    lib.username = username;
    lib.name = name;
    lib.zip = lib.postalCode = zip;
    lib.coordinate = lib.coord = coordinate;

    return lib;

  })();

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = lib;
    }
    exports.vali = lib;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return lib;
    });
  } else {
    global.vali = lib;
  }
}).call(this);
