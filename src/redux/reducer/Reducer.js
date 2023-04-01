import { actionTypes, INCREMENT } from "../constants/Constants";

const InitialState = {
    list: localStorage.getItem(JSON.stringify('todo')) || []
}

export const Reducers = (list = InitialState, { payload, type }) => {
    // const { type } = payload
    console.log(payload, type, 'payload in reducer');

    switch (type) {
        case INCREMENT: return { ...list, list: payload };
        case actionTypes.ADD_TODO: return [...list?.list, { payload }];
        // case actionTypes.ADD_TODO: return { list: [...list, payload] };
        default: return list;
    }
}