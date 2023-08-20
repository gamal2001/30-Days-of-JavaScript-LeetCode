class EventEmitter {
  constructor() {
    // A map of event names to an array of listeners
    this.events = new Map();
  }

  // Subscribe to an event with a callback function
  subscribe(event, cb) {
    // Get or create the array of listeners for this event
    const listeners = this.events.get(event) || [];
    // Push the callback to the array
    listeners.push(cb);
    // Update the map with the new array
    this.events.set(event, listeners);
    // Return an object with an unsubscribe method
    return {
      unsubscribe: () => {
        // Filter out the callback from the array
        const filtered = listeners.filter((listener) => listener !== cb);
        // Update the map with the filtered array
        this.events.set(event, filtered);
      },
    };
  }

  // Emit an event with optional arguments
  emit(event, args = []) {
    // Get the array of listeners for this event
    const listeners = this.events.get(event);
    // If there are no listeners, return an empty array
    if (!listeners || listeners.length === 0) {
      return [];
    }
    // Otherwise, call each listener with the arguments and return an array of results
    return listeners.map((listener) => listener(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
