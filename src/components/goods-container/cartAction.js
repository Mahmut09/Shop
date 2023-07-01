const cart = JSON.parse(localStorage.getItem("Cart")) || [];

export const addToCart = (dispatch, card) => {
    const existingItem = cart.find(item => item.id === card.id);

    if (existingItem) {
        existingItem.count += 1;
    } else {
        cart.push({ ...card, count: 1 });
    }

    dispatch({ type: "ADD_GOODS", payload: card });
    localStorage.setItem("Cart", JSON.stringify(cart));
};
