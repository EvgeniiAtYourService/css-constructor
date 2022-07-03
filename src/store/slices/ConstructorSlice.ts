import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConstructorState } from '../../models/constructorState.model'

const initialState: ConstructorState = {
    divCreated: false,
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
    },
})

export default userSlice.reducer
