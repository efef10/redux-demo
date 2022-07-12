import * as actionTypes from "../actionTypes";
const initialState = {
    messageToUser: "",
    isMessageFailed: false,
    errorMessage: "",
};

export const messageReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {

        case actionTypes.MESSAGE_FROM_SERVER_FINISHED: {
            return {
                ...state,
                messageToUser: action.payload.message,
                isMessageFailed: false,
            };
        }

        case actionTypes.MESSAGE_FROM_SERVER_FAILED: {
            return {
                ...state,
                messageToUser: "",
                isMessageFailed: true,
                errorMessage: action.payload.message,
            }
        }

        default:
            return { ...state };

    }
}