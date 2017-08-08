let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PENDING':
    console.log('pending request')
      return state;
    case 'FETCH_FULFILLED':
      console.log('fulfilled request')
      return [...action.payload.data];
    case 'FETCH_REJECTED':
      console.log('rejected request')
      return state;
    default:
      return state;
  }
};
