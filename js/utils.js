// A simple way of deep-cloning an object
// We use this so we can return a copy of an object from a function (or class method) instead of the original object
// This just helps to avoid confusing bugs where an object accidentally gets modified in unexpected places
function deepClone(obj) {
	return JSON.parse(JSON.stringify(obj));
}