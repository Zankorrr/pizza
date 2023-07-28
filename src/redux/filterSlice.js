import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoryId: 0,
    sortTypeId: 0
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setSortTypeId(state, action) {
            state.sortTypeId = action.payload
        }
    }
})

export const { setCategoryId, setSortTypeId } = filterSlice.actions
export default filterSlice.reducer