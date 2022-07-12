import { combineReducers, createStore, applyMiddleware } from "redux"
import { messageReducer } from "./reducers/messageReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    messageReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch