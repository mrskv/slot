describe('Sys.isEmpty test', function() {
    it('Number', function() {
        expect(Sys.isEmpty(5)).toBe(false);
    });
    it('String', function() {
        expect(Sys.isEmpty('test')).toBe(false);
    });
    it('Empty string', function() {
        expect(Sys.isEmpty('')).toBe(false);
    });
    it('Object', function() {
        expect(Sys.isEmpty({})).toBe(false);
    });
    it('Empty array', function() {
        expect(Sys.isEmpty([])).toBe(true);
    });
    it('Undefined', function() {
        expect(Sys.isEmpty(undefined)).toBe(true);
    });
    it('null', function() {
        expect(Sys.isEmpty(null)).toBe(true);
    });
});

describe('Sys.isArray', function() {
    it('Empty array', function() {
        expect(Sys.isArray([])).toBe(true);
    });
    it('Array', function() {
        expect(Sys.isArray([1,2,3])).toBe(true);
    });
    it('Object', function() {
        expect(Sys.isArray({test:'test'})).toBe(false);
        expect(Sys.isArray({})).toBe(false);
    });
});

describe('Sys.isObj', function() {
    it('Empty object', function() {
        expect(Sys.isObj({})).toBe(true);
    });
    it('Array', function() {
        expect(Sys.isObj([1,2,3])).toBe(false);
    });
    it('String', function() {
        expect(Sys.isObj('test')).toBe(false);
    });
    it('Boolean', function() {
        expect(Sys.isObj(true)).toBe(false);
    });
});

describe('Sys.apply', function() {
    it('Empty object & object', function() {
        var obj1 = {},
            obj2 = {name: 'test'},
            toBeObj = {name: 'test'};
        expect(Sys.apply(obj1, obj2)).toEqual(toBeObj);
    });
    it('Object & object', function() {
        var obj1 = {name: 'test'},
            obj2 = {version: 1},
            toBeObj = {name: 'test', version:1};
        expect(Sys.apply(obj1, obj2)).toEqual(toBeObj);
    });
    it('Object & empty', function() {
        expect(Sys.apply({f:1})).toEqual({f:1});
        expect(Sys.apply({f:1}, null)).toEqual({f:1});
    });
    it('non Object & object', function() {
        expect(Sys.apply('test', {f:1})).toBe('test');
    });
});

