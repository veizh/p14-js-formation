import { configureStore } from "@reduxjs/toolkit"


let state = {
    value: null,
    list: [
    ]
};

const reducer = (currentState, action ) => {
    switch (action.type) {
        case 'ADD_USER':
            const listWithNewUser = [...currentState.list, action.payload]
            return {...currentState, list: listWithNewUser}
        default:
            return currentState
    }
}

export const store = configureStore(
    {
        preloadedState: state,
        reducer
    }
)