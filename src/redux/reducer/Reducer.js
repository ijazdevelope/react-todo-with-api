import { INCREMENT } from "../constants/Constants";

const InitialState = {
    state: []
}

export const Reducers = (state = InitialState, { payload, type }) => {
    // const { type } = payload

    switch (type) {
        case INCREMENT: return { ...state, state: payload }
        default: return state;
    }
}