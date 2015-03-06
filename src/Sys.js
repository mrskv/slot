/**
 * @namespace Sys
 * @module Sys
 * @type {object}
 */
var Sys = {

    /**
     * Проверяет на пустоту переданный ей аргумент
     * @method isEmpty
     * @param {*} a Аргумент любого типа
     * @returns {boolean}
     */
    isEmpty: function(a) {
        return (a === null) || (a === undefined) || (Sys.isArray(a) && !a.length)
    },

    /**
     * Позволяет определить, является ли переданный ей аргумент массивом
     * @method isArray
     * @param {*} a Предполагаемый массив
     * @returns {boolean}
     */
    isArray: function(a) {
        var b = window.toString.apply(a);
        return (b === "[object Array]" || b === "[object NodeList]" || b === "[object TouchList]")
    },

    /**
     * Позволяет определить, является ли переданный ей аргумет объектом
     * @method isObj
     * @param {*} obj Предпологаемый объект
     * @returns {boolean}
     */
    isObj:function(obj) {
        return ! Sys.isArray(obj) && (typeof obj === "object");
    },

    /**
     * Расширяет переданный объект extendable свойствами из объекта expander
     * @method apply
     * @param {object} extendable Расширяемый объект
     * @param {object} expander Объект-расширитель
     * @returns {*|{}}
     */
    apply: function(extendable, expander) {
        var c;
        extendable = extendable || {};
        if (expander === null || expander === undefined) {
            return extendable;
        }
        if (extendable && expander && Sys.isObj(expander)) {
            for (c in expander) {
                if (expander.hasOwnProperty(c)) {
                    extendable[c] = expander[c];
                }
            }
        } else {
            throw "Error in Sys.apply";
        }
        return extendable;
    }
}