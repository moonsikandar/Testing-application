import { FETCH_POSTS, NEW_POSTS } from "../action/type";
const initialState = {
  items: [],
  item: {},
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, items: action.payload };
    case NEW_POSTS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};
