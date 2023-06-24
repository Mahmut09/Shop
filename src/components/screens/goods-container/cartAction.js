export const addToCart = (dispatch, card) => {
    dispatch({ type: "ADD_GOODS", payload: card });
};  