beforeEach(function () {
    this.addMatchers({
        toBePromise: function () {
            return typeof this.actual.then === 'function';
        }
    });
});
