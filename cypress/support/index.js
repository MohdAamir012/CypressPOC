beforeEach(function() {
    let testSuite = Cypress.env('SUITE');
    if (!testSuite) {
      return;
    }
    
    const testName = Cypress.mocha.getRunner().test.fullTitle();
    testSuite = "<"+testSuite+">"
    if (!testName.includes(testSuite)) {
      this.skip();
    }
  })