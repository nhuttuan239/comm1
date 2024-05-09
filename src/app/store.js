import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commentReducer from "../features/comment/commentSlice";
import postReducer from "../features/post/postSlice";
import userReducer from "../features/user/userSlice";
import friendReducer from "../features/friend/friendSlice";

const rootReducer = combineReducers({
  comment: commentReducer,
  post: postReducer,
  user: userReducer,
  friend: friendReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
