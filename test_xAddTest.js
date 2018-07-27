//test_xAddTest.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "xAddTest",
  "tests/xAddTest_SimpleTest_Collection_ReturnsCollectionWithTest"
], function(
  TestSuite,
  log,
  xAddTest,
	xAddTest_SimpleTest_Collection_ReturnsCollectionWithTest
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_xAddTest initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "xAddTest" );
            
	xTestSuite.add( xAddTest_SimpleTest_Collection_ReturnsCollectionWithTest );

      xTestSuite.test();
    }
  });
});
