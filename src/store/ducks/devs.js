/*
 * Types
 */

export const Types = {
  ADD_REQUEST: "devs/ADD_REQUEST",
  ADD_SUCCESS: "devs/ADD_SUCCESS",
  ADD_FAILURE: "devs/ADD_FAILURE"
};

/*
 * Reducer
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
    case Types.ADD_SUCCESS:
    case Types.ADD_FAILURE:
    default:
      return state;
  }
}
/*
 * Actions
 */
export const Creators = {
  addDevRequest: username => ({
    type: Types.ADD_REQUEST,
    payload: { username }
  }),
  addDevSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),
  addDevFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
};
