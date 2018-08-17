// out of the box, angular cli configures karma as a test runner with jasmine as the test framework
// you can start your live testing from a PowerShell prompt or command prompt using 'ng test' or 'npm test'
// file updates to anything in the watched directory cause the tests to run again, very convenient

// jasmine describe blocks are organizational tools that can be nested any number of times
// the first parameter is a developer-friendly string that represents your organization block
// the second parameter is a function that contains more describe()s and/or it()s
xdescribe('a describe block', () => {

    // jasmine it blocks represent your individual tests
    // like describe, the first parameter is a developer-friendly string that explains your test expectation
    // the second parameter is a function that contains one or more expect() functions
    it('passes if there are no expects', () => {
        // tests that do not throw an error are considered passing tests, even if empty
    });

    it('fails if an error is thrown', () => {
        // tests that throw any kind of exception are considered failing tests
        // errors are displayed in the browser running your karma tests
        // tslint:disable-next-line
        throw 'some error';
    });

    it('fails no matter how your error is thrown', () => {
        // throwing new Error() adds a stack trace to the karma output
        throw new Error('some error');
    });

    it('fails if you intentionally call fail()', () => {
        // calling fail returns your custom message and also returns a stack trace
        fail('reach some logic I shouldn\'t have');
    });

    it('can log to the console like any JavaScript', () => {
        // all the console logging methods push messages and objects to the dev tools console
        console.log('shows up in the browser dev tools log as usual', { 'prop': 'even objects as usual' });
    });

    // name your it definitions using action verbs and be clear in the name what is being tested
    it('asserts 1 is 1', () => {
        // the expect() method represents your assertions about how code should work
        // they throw an error if they are not true
        // they use chaining syntax to be fluent and readable
        expect(1).toBe(1);
    });

    it('asserts 1 is 2', () => {
        // failed expectations throw errors that are reported to the test runner
        expect(1).toBe(2);
    });
});
