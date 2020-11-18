const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be faulsy', () => {
    expect(functions.checkValue('null')).not.toBeFalsy();
});

test('User should be Julia Vrn object', () => {
    expect(functions.createUser()).toEqual({
        fName: 'Julia',
        lName: 'Vrn'
    });
});