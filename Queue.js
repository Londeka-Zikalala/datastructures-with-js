// FIFO rule??
function Queue() {
	let queue = [];
	function enqueue(value) {
		// add a value to an existing array or at the front
		queue.push(value);
	}

	function dequeue() {
		//remove the  value at the front of the queue and return it
		// return a value
		return queue.shift()
	}
	return {
		enqueue,
		dequeue
	}
}

// const queue = Queue();

// queue.enqueue("Andre")
// queue.enqueue("Busi");

// console.log(queue.dequeue())  -- Andre
// console.log(queue.dequeue())  -- Busi