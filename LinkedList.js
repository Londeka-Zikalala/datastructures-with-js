function LinkedList() {

	let startNode = null;
	let lastNode = null;
	let length = 0;
	function add(value) {
		  // Create a new node with the given value
		  const node = { value, next: null };
		  // If the list is empty, set the start and end nodes to the new node
		  if (startNode === null) {
			startNode = node;
			lastNode = node;
		  } else {
			// If the list is not empty, set the next node of the current end node to the new node
			lastNode.next = node;
			// Update the end node to the new node
			lastNode = node;
		  }
		  // Increment the length of the list
		  length++;
	}

	function count(){
		return length
	}

	function clear() {
		  // Reset the start and end nodes to null
		  startNode = null;
		  lastNode = null;
		  // Reset the length of the list to 0
		  length = 0;
	}

	function contains(value) {
		   // Initialize the current node to the start node
		   let currentNode = startNode;
		   // Loop through the list until the current node is null
		   while (currentNode !== null) {
			 // If the current node's value is equal to the given value, return true
			 if (currentNode.value === value) {
			   return true;
			 }
			 // Move to the next node
			 currentNode = currentNode.next;
		   }
		   // If the loop completes without finding the value, return false
		   return false;
	}

	function forEach(fn) {
		  // Initialize the current node to the start node
		  let currentNode = startNode;
		  // Loop through the list until the current node is null
		  while (currentNode !== null) {
			// Execute the callback function on the current node's value
			fn(currentNode.value);
			// Move to the next node
			currentNode = currentNode.next;
		  }
	}

	function first() {
		  // Check if the list is empty
		  if (startNode === null) {
			// If the list is empty, return null
			return null;
		  } else {
			// If the list is not empty, return the value of the first node
			return startNode.value;
		  }
	}

	function last() {
		  // Check if the list is empty
		  if (lastNode === null) {
			// If the list is empty, return null
			return null;
		  } else {
			// If the list is not empty, return the value of the last node
			return lastNode.value;
		  }
	}

	return {
		add,
		clear,
		contains,
		count,
		first,
		last,
		forEach
	}
}

