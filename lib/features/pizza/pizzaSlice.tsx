import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppThunk } from "@/lib/store";

// Define the possible pizza types as a TypeScript union type
type PizzaType = "Cheese" | "Pepperoni" | "Hawaiian";

// Define the initial state interface
export interface PizzaSliceState {
    value: string;
    type: PizzaType;
}

// Initial state
const initialState: PizzaSliceState = {
    value: "",
    type: "Cheese",  // default to Cheese or any other default value you prefer
};

// Create the slice
const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        setType: (state, action: PayloadAction<PizzaType>) => {
            state.type = action.payload;
        },
    },
});

// Export actions for dispatching
export const { setValue, setType } = pizzaSlice.actions;

// Export the reducer to be included in the store
export default pizzaSlice.reducer;

// Example of a thunk using the slice
export const updatePizzaType = (newType: PizzaType): AppThunk => (dispatch) => {
    dispatch(setType(newType));
};
