import rootReducer from './reducers';

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage as default

// Persist configuration
const persistConfig = {
  key: "root", // Key for the persisted state
  storage, // Default storage is localStorage
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Persistor to handle rehydration
export const persistor = persistStore(store);

export default store;
