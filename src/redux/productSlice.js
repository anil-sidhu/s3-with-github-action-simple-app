import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API_URL = "https://dummyjson.com/products";


export const fetchProducts = createAsyncThunk('products', async () => {

    const resp = await fetch(API_URL);
    const jsonResp = await resp.json();
    // console.log("action",jsonResp);

    return jsonResp.products;
})

// middleware -> handle async operations
// redux toolkit has thunk middleware
// extraReducer -> external reducer which is called outside to slice


const initialState = {
    products: [],
    cartItems: []
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            // console.log(action);
            if (action.payload) {
                state.cartItems.push(action.payload)
                // console.log(action.payload);

            }
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload

        })
    },

})

export const { addCartItem } = productSlice.actions

export default productSlice.reducer