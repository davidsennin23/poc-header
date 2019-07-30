import React from 'react';

const registeredStates = {};

function _registerAndGetState(stateName) {
    let state = Reflect.get(registeredStates, stateName);
    if (!state) {
        state = new SharedState();
        Reflect.defineProperty(registeredStates, stateName, {
            get: () => state,
        });
    }
    return state;
}

const _values = Symbol('values');
const _components = Symbol('components');
const _notify = Symbol('notify');
const _getState = Symbol('getState');
const _setState = Symbol('setState');
const _registerComponent = Symbol('registerComponent');
const _unregisterComponent = Symbol('unregisterComponent');

class SharedState {

    constructor() {
        Reflect.defineProperty(this, _values, {
            value: {},
            writable: false,
            enumerable: false,
        });
        Reflect.defineProperty(this, _components, {
            value: [],
            writable: false,
            enumerable: false
        });
    }

    getState() {
        return _g(this, _getState)();
        // return _g(this, _getState).apply(this);
    }

    setState(state, perpetrator) {
        _g(this, _setState)(state, perpetrator);
        // _g(this, _setState).apply(this, [state, perpetrator]);
    }

    registerComponent(component) {
        _g(this, _registerComponent)(component);
        // _g(this, _registerComponent).apply(this, [component]);
    }

    unregisterComponent(component) {
        _g(this, _unregisterComponent)(component);
        // _g(this, _unregisterComponent).apply(this, [component]);
    }

}

function _g(_s, _k) {
    const pr = Reflect.get(_s, _k);
    if (!pr) {
        throw new Error(`Couldn't find property ${_k.toString()} on shared state`);
    }
    return typeof pr === 'function' ? pr.bind(_s) : pr;
}

function _r(pk, func) {
    Reflect.defineProperty(SharedState.prototype, pk, {
        value: func,
        writable: false,
        enumerable: false,
    });
    
}

function _i(newS, oldS) {
    const nk = Reflect.ownKeys(newS);
    const r = [];
    nk.forEach(k => {
        const pd = Reflect.getOwnPropertyDescriptor(oldS, k);
        if (!pd || pd.value !== nk[k]) r.push(k);
    })
    return r;
}

function _u(keys, newS, old) {
    const chipped = {};
    keys.forEach(k => {
        chipped[k] = newS[k];
        const pd = Reflect.getOwnPropertyDescriptor(old, k);
        if (!pd) {
            Reflect.defineProperty(old, k, {
                value: newS[k],
            });
            return;
        }
        pd.value = newS[k];
    });
    return chipped;
} 

_r(_notify, function(changedValues, perpetrator) {
    const comps = _g(this, _components);
    comps.forEach(comp => {
        if (comp === perpetrator) {
            return;
        }
        const nf = Reflect.get(comp, 'onSharedStateChange');
        if (nf && typeof nf === "function") {
            nf.apply(comp, [changedValues]);
        }
    });
});

_r(_getState, function() {
    return _g(this, _values);
})

_r(_setState, function(newState, perpetrator) {
    const old = _g(this, _values);
    const uk = _i(newState, old);
    const not = _u(uk, newState, old);
    _g(this, _notify)(not, perpetrator);
})

_r(_registerComponent, function(component) {
    const cs = _g(this, _components);
    const i = cs.indexOf(component);
    if (i === -1) {
        cs.push(component);
    }
})

_r(_unregisterComponent, function(component) {
    const cs = _g(this, _components);
    const i = cs.indexOf(component);
    if (i > -1) {
        cs.splice(i, 1);
    }
})


const _sharedState = Symbol('sharedState');

function _gss(component) {
    const sharedStateDescriptor = Reflect.getOwnPropertyDescriptor(component, _sharedState);
    if (!sharedStateDescriptor) {
        console.log("The component wasn't properly registered", component);
        return undefined;
    }
    return sharedStateDescriptor.value
}

function _updateSharedState(component, state) {
    if (typeof state !== 'object') {
        console.log('The state must be an object');
        return;
    }
    const sharedState = _gss(component);
    if (sharedState) {
        sharedState.setState(state, component);
    }
}

function _getSharedState(component) {
    const sharedState = _gss(component);
    if (sharedState) {
        return sharedState.getState();
    }
    return {};
}

function _registerSetSharedStateFunction(component) {
    const setSharedState = 'setSharedState';
    Reflect.defineProperty(component, setSharedState, {
        value: (newState) => {
            _updateSharedState(component, newState);
        },
        writable: false,
    })
}

function _registerGetSharedStateFunction(component) {
    const getSharedState = 'getSharedState';
    Reflect.defineProperty(component, getSharedState, {
        value: () => _getSharedState(component),
        writable: false,
    })
}

function _bindComponentToState(component, state) {
    const s = _gss(component);
    if (s) {
        console.log("Component is already registered");
        return;
    }
    Reflect.defineProperty(component, _sharedState, {
        value: state,
        writable: false,
        enumerable: false,
    });
    state.registerComponent(component);
}

function _registerSharedStateProp(component, stateName) {
    const state = _registerAndGetState(stateName);
    _bindComponentToState(component, state);
}

function registerComponent(component, stateName) {
    if (!component || !stateName) {
        console.log("Failed to register component", stateName, component);
        return;
    }
    _registerSharedStateProp(component, stateName);
    _registerSetSharedStateFunction(component);
    _registerGetSharedStateFunction(component);
}

function _unregister(component, state) {
    state.unregisterComponent(component);
}

function unregisterComponent(component) {
    console.log("Unregister", component)
    if (!component) {
        console.log("Failed to unregister component", component);
        return;
    }
    const sharedState = _gss(component);
    if (!sharedState) {
        console.log("Can't unregister as unregistered component", component);
        return;
    }
    _unregister(component, sharedState);
}

export {
    registerComponent,
    unregisterComponent,
}