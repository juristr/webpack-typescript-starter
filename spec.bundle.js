var testsContext = require.context("./src", true, /.spec.ts/);
testsContext.keys().forEach(testsContext);

var testsContext = require.context("./src", true, /.ts/);
testsContext.keys().forEach(testsContext);