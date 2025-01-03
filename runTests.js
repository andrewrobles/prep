const runTests = (solution, tests) => {
    tests.map(({ description, input, expected }) => {
        test(description, () => {
            const result = solution(input);
            expect(result).toEqual(expected);
        });
    });
}

module.exports = runTests