import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConstructorState } from '../../models/constructorState.model'

const initialState: ConstructorState = {
    testText: 'Gibraltar'
}

export const userSlice = createSlice({
    name: 'constructor',
    initialState,
    reducers: {
        changeTestText(state, action: PayloadAction<string>) {
            state.testText = action.payload
        },
    },
})

export default userSlice.reducer
