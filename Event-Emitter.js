'use strict';

const EventEmitter = class {
  constructor() {
    this.events = {}; //hash of events and functions
  }
  on(name, fn) {
    this.events[name] = fn;
  }
  emit(name, ...args) {
    let event = this.events[name];
    if (event) args.forEach(arg => event = event.bind(null, arg));
    else return;
    event();
  }
};

const emitter = new EventEmitter();
