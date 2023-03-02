import {INCREMENT} from "../constants/Constants";

const InitialState = {
    state: 0
}

export const Reducers = (state = InitialState, action) => {
    const { type } = action

    switch (type) {
        case INCREMENT: return { state: state.state + 1 }
        default: return state;
    }
}