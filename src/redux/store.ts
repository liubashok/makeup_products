import { configureStore, combineReducers } from '@reduxjs/toolkit';
import makeupReducer from './makeupSlice';


const rootReducer = combineReducers({
  makeup: makeupReducer,
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('makeupStore');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('makeupStore', serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;