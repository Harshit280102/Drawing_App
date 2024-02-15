import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(), //ADD ENDPOINT
})


export type AppDispatch =typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);