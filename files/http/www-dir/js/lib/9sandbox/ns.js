Namespace = function() { 
	this.content = []
	return this;
} 

Namespace.prototype.push = function(namespace) {
	this.content.push(namespace)
	return this
} 
