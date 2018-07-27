//xAddTest_SimpleTest_Container_ReturnsContainer.js: Testing logic.

define([
	"xAddTest"
], function(
	xAddTest
) {
	return {
		"Name":"xAddTest_SimpleTest_EmptyCollection_ReturnsCollectionWithTest",
		"Input": {
			"Test": { "Name": "SimpleTest" },
			"Collection": []
		},
		"Function": xAddTest,
		"ExpectedOutput": [ { "Name": "SimpleTest" } ],
		"Comparator": {
			"Object": true,
			"Debug": true
		}
	};
});
