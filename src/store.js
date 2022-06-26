import { createStore } from "redux";

import AuthSlice from "./slice/AuthSlice";

const reducer = {
  auth: AuthSlice,
};

const store = createStore({
  reducer,
  devTools: true,
});

export default store;
