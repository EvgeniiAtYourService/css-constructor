import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConstructorState } from '../../models/constructorState.model'

const initialState: ConstructorState = {
    divCreated: false,
    propertiesWindowShown: false,
}

export const userSlice = createSlice({
    name: 'constructor',
    initialState,
    reducers: {
        createDiv(state) {
            state.divCreated = true
        },
        removeDiv(state) {
            state.divCreated = false
        },
        showPropertiesWindow(state, action: PayloadAction<boolean>) {
            state.propertiesWindowShown = action.payload
        }
    },
})

export default userSlice.reducer
