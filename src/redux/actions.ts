import * as actionTypes from './actionTypes';

export const messageFromServerFinished = (message: string) => (
    {
        type: actionTypes.MESSAGE_FROM_SERVER_FINISHED,
        payload: {
            message,
        }
    }
)

export const messageFromServerFailed = (message: string) => (
    {
        type: actionTypes.MESSAGE_FROM_SERVER_FAILED,
        payload: {
            message,
        }
    }
)
