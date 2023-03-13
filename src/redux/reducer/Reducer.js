import { INCREMENT } from "../constants/Constants";

const InitialState = {
    list: []
}

export const Reducers = (state = InitialState, { payload, type }) => {
    // const { type } = payload
    console.log(payload)

    switch (type) {
        case INCREMENT: return { ...state, list: payload }
        default: return state;
    }
}