let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_FETCH_PENDING':
      return state;
    case 'USERS_FETCH_FULFILLED':
      return [...action.payload.data]
    case 'USERS_FETCH_REJECTED':
      return state;
    default:
      return state;
  }
}
