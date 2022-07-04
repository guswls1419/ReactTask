import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// actions
const GET_CHAT = "GET_CHAT";

// action creators
const getChat = createAction(GET_CHAT, (chat) => ({ chat }));

// initialState
export const initialState = {
  list: [],
};

// middleware actions
export default handleActions(
  {
    [GET_CHAT]: (state, action) =>
      produce(state, (draft) => {

      }),
  },
  initialState
);

const actionCreators = {
  getChat,
};

export { actionCreators };