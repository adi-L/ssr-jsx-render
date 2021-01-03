const store = new Store({});

store.state.name = "adi"




function Store(initialData) {
this.state = initialData;
this.subscribers = [];
}

export function createStore(initialData) {
    return new Store (initialData);
}
Store.prototype.getState =  function() {
    return this.state;
}

Store.prototype.getStateAsString = function() {
    return JSON.stringify(this.state);
}
Store.prototype.setState = function(newState, callback) {
    //store data
    const oldState = { ...this.state };
    const mergeState = Object.assign({}, oldState, newState);
    state = mergeState;
    Object.freeze(this.state);
    this.subscribers.forEach((Call) => {
        Call.func(this.state,oldState);
    });
    if (typeof callback === "function") {
        callback(state, oldState);
    }
    return state;
}
Store.prototype.connect = function(component) {
    if (typeof window !== "object") {
        return component;
    }
    const index = this.subscribers.findIndex(e => e.func === component);
    if (index > -1) {
        console.log("cant connect right now")
        return component;
    }
    this.subscribers.push({
        func: component
    });
    return component;
}
export function disconnect(onDispatch) {
    const index = subscribers.findIndex(e => e.func === onDispatch);
    if (index > -1) {
        subscribers = subscribers.splice(index, 1);
    }
}