//xAddTest.js: Functional Logic.

define([], function() {
  return function( Input ) {
	Input.Collection.push( Input.Test );
	return Input.Collection;
  };
});
