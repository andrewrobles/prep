const runTests = (solution, tests) => {
    tests.map(({ description, inputs, expected }) => {
        test(description, () => {
            const result = solution(...inputs);
            expect(result).toEqual(expected);
        });
    });
}

module.exports = runTests