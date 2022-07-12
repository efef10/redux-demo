import { useState } from "react"
import { sayBye, sayHello } from "../redux/thunk"

import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../hooks/appHooks";

export const SendMessageToUser = () => {

    const [userName, setUserName] = useState("")
    const userMessageDetails = useAppSelector((state: RootState) => state.messageReducer)
    const dispatch = useAppDispatch()

    return (
        <>
            <input
                type="text"
                placeholder="please fill your name"
                value={userName}
                onChange={(e) => { setUserName(e.target.value) }} />
            <p>{userMessageDetails.messageToUser}</p>
            <button onClick={() => { dispatch(sayHello(userName) as any) }}>hello</button>
            <button onClick={() => { dispatch(sayBye(userName) as any) }}>bye</button>
            {userMessageDetails.isMessageFailed && (<p style={{ color: "red" }}>{userMessageDetails.errorMessage}</p>)}
        </>
    )
}