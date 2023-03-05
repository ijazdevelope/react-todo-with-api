import { INCREMENT } from '../constants/Constants'

export const Action = (payload) => {
    return {
        type: INCREMENT,
        payload
    }
}
