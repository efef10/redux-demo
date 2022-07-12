import * as actions from "./actions";

export const sayHello = (helloTo: string) => {
    return async function (dispatch: (action: { type: string, payload?: { [key: string]: any } }) => void) {

        try {
            const response = await buildStrFromServer("hello", helloTo);
            dispatch(actions.messageFromServerFinished(response.data))
        }
        catch (error: any) {
            dispatch(actions.messageFromServerFailed(error.errorMessage))
        }
    }
}

export const sayBye = (helloTo: string) => {
    return async function (dispatch: (action: { type: string, payload?: { [key: string]: any } }) => void) {

        try {
            const response = await buildStrFromServer("bye bye", helloTo);
            dispatch(actions.messageFromServerFinished(response.data))
        }
        catch (error: any) {
            dispatch(actions.messageFromServerFailed(error.errorMessage))
        }
    }
}


//this function mock a server request that returns a Promise
const buildStrFromServer = (action: "hello" | "bye bye", messageTo: string): Promise<{ data: string }> => {
    return new Promise((resolve, reject) => {
        if (!messageTo || messageTo.length > 10) {
            setTimeout(() => {
                reject({ errorMessage: "invalid receiver name" });
            }, 500)
            reject({ errorMessage: "invalid receiver name" });
        } else {
            setTimeout(() => {
                resolve({ data: `${action} to ${messageTo}!!!` })
            }, 500)
        }
    })
}