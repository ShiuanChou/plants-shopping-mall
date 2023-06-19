import { BagItemInterface, ProductsInterface } from "@/types/product.interface";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface BagState {
    bagItems: BagItemInterface[];
};

const initialState: BagState = {
    bagItems: [],
};

export const bagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        addToBag: (state, action: PayloadAction<ProductsInterface>) => {
            const itemExists = state.bagItems.find((item) => item.product.id === action.payload.id);
            if (itemExists) {
                itemExists.count++;
            } else {
                state.bagItems.push({
                    product: action.payload,
                    count: 1,
                });
            }
        },
        increment: (state, action: PayloadAction<ProductsInterface>) => {
            const item = state.bagItems.find((item) => item.product.id === action.payload.id);
            if(item) item.count++;
        },
        decrement: (state, action: PayloadAction<ProductsInterface>) => {
            const item = state.bagItems.find((item) => item.product.id === action.payload.id);
            if(item) {
                if (item.count === 1) {
                    const index = state.bagItems.findIndex((item) => item.product.id === action.payload.id);
                    state.bagItems.splice(index, 1);
                } else {
                    item.count--;
                }
            }
        },
        removeFromBag: (state, action: PayloadAction<ProductsInterface>) => {
            const index = state.bagItems.findIndex((item) => item.product.id === action.payload.id);
            state.bagItems.splice(index, 1);
        },
    },
});

const bagItems = (state: RootState) => state.bag.bagItems;
export const totalBagItemSelector = createSelector([bagItems], (bagItems) => 
    bagItems.reduce((total: number, current: BagItemInterface) => (total += current.count), 0)
);

export const totalPriceSelector = createSelector([bagItems], (bagItems) => 
    bagItems.reduce((total: number, current: BagItemInterface) => (total += current.count * current.product.price), 0)
);


export const { addToBag, increment, decrement, removeFromBag } = bagSlice.actions;
export const bagReducer = bagSlice.reducer;