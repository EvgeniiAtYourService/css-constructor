import { combineReducers, configureStore } from '@reduxjs/toolkit'
import constructorReducer from '../store/slices/ConstructorSlice'

const rootReducer = combineReducers({
    constructorReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
