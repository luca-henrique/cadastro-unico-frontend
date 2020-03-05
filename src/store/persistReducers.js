import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: "cadastro",
      storage,
      whiteList: ["auth", "user", "profile", "box"]
    },
    reducers
  );
  return persistedReducer;
};
