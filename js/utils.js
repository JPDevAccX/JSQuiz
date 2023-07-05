// A simple way of deep-cloning an object
// We use this so we can return a copy of an object from a function (or class method) instead of the original object
// This just helps to avoid confusing bugs where an object accidentally gets modified in unexpected places
function deepClone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

// Simple markup system with escaping of HTML special characters (so we can safely use innerHTML even if the data isn't trusted)
function markupToHtml(markup) {
	markup = htmlspecialchars(markup) ;

	const replaceTable = {
		'[li]' : '<li>', '[/li]' : '</li>',
		'[ul]' : '<ul>', '[/ul]' : '</ul>',
		'[b]' : '<b>', '[/b]' : '</b>'
	}
	for (const [from, to] of Object.entries(replaceTable)) {
		markup = markup.replaceAll(from, to) ;
	}
	return markup ;
}

// Replace HTML special characters with their entity names
// (equivalent to PHP function of the same name with ENT_QUOTES passed)
// https://stackoverflow.com/questions/1787322/what-is-the-htmlspecialchars-equivalent-in-javascript
function htmlspecialchars(str) { 
	if (str === null) return null ;
	
  let map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return str.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Retrieve the elements for the specified selectors and return as an object
function getElementsBySelector(keysToSelectorsTable, keysToRetrieve) {
	return Object.fromEntries(keysToRetrieve.map(key => ([key, document.querySelector(keysToSelectorsTable[key])]))) ;
}

// Get index of given node in parent
function getNodeIndex(node) {
	return Array.prototype.indexOf.call(node.parentNode.children, node);
}

// Get index in parent of current or ancestor node with given class
function getIndexOfFirstElementWithClassTraversingUp(node, className, includeNodeItself = true) {
	if (!includeNodeItself && node !== window.document) node = node.parentNode ;

	while (node !== window.document && !node.classList.contains(className)) {
		node = node.parentNode ;
	}
	
	return (node !== window.document) ? getNodeIndex(node) : null ;
}