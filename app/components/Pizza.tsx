'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue, setType, PizzaSliceState, PizzaType } from '@/lib/features/pizza/pizzaSlice';

const Pizza: React.FC = () => {
  const dispatch = useDispatch();

  // Accessing the pizza state from the Redux store
  const pizza = useSelector((state: { pizza: PizzaSliceState }) => state.pizza);

  // Handlers to update the pizza state
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue(event.target.value));
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setType(event.target.value as PizzaType));
  };

  return (
    <div>
      <h1>Pizza Order</h1>
      <div>
        <label>
          Value:
          <input
            type="text"
            value={pizza.value}
            onChange={handleValueChange}
          />
        </label>
      </div>
      <div>
        <label>
          Type:
          <select value={pizza.type} onChange={handleTypeChange}>
            <option value="Cheese">Cheese</option>
            <option value="Pepperoni">Pepperoni</option>
            <option value="Hawaiian">Hawaiian</option>
          </select>
        </label>
      </div>
      <div>
        <h2>Current Pizza:</h2>
        <p>Value: {pizza.value}</p>
        <p>Type: {pizza.type}</p>
      </div>
    </div>
  );
};

export default Pizza;
