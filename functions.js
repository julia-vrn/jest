const functions = {
    add: (num1, num2) => num2 + num2,
    isNull: () => null,
    checkValue: (input) => input,
    createUser: () => {
        const user = {
            fName: 'Julia',
            lName: 'Vrn'
        };
        return user;
    }
};

module.exports = functions;