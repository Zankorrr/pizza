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
        },
        setFilters(state, action) {
            state.categoryId = Number(action.payload.categoryId)
            state.sortTypeId = Number(action.payload.sortTypeId)
        }
    }
})

export const { setCategoryId, setSortTypeId, setFilters } = filterSlice.actions
export default filterSlice.reducer