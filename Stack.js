
// const stack = Stack();

//stack.push("Andre");
//stack.push("Busi");

// console.log(stack.pop())   -- Busi
// console.log(stack.pop())   -- Andre

// how would u implement this using a linked list

function Stack() {
	let startNode = null;

	function push(value) {
		// Create a new node with the given value
		const node = { value, next: null };
		// If the stack is empty, set the start node to the new node
		if (startNode === null) {
			startNode = node;
		} else {
			// If the stack is not empty, set the next node of the new node to the current start node
			node.next = startNode;
			// Update the start node to the new node
			startNode = node;
		}
	}

	function pop() {
		// If the stack is empty, return undefined
		if (startNode === null) {
			return undefined;
		} else {
			// Get the value of the current start node
			const value = startNode.value;
			// Update the start node to the next node in the list
			startNode = startNode.next;
			// Return the value
			return value;
		}
	}

	return {
		push,
		pop
	}
}