//_AsyncTest_AsyncTestCollection_ReturnsAsyncTestCollectionWithAsyncTest.js: Testing logic.

define([
	"xAddTest",
	"xGenerateAsyncTest"
], function(
	xAddTest,
	xGenerateAsyncTest
) {
	return {
		"Name":"_AsyncTest_AsyncTestCollection_ReturnsAsyncTestCollectionWithAsyncTest",
		"Input": {
			"Test": xGenerateAsyncTest({
				"Async": true,
				"Name": "AsyncTest",
				"Input": undefined,
				"Function": function() {
					return promise(function( resolve ) {
						resolve( true );
					});
				},
				"ExpectedOutput": true
			}),
			"Collection": []
		},
		"Function": xAddTest,
		"ExpectedOutput": [{ "Name": "AsyncTest" }],
		"Comparator": {
			"Object": true
		}
	};
});
