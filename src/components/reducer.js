export const initialState = {
  basket: [],
};

// Selector
// foRLoop말고 reduce로 한번에 반환.
export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
};

/** Context api와 Redux는 NOT SAME
 * But, Same pattern.
 * 그러니까 그 idea(글로벌 storr, dispatching into the store)를 착용할 수 있음.
 */

/** state=현상태/ actiond= 뭐할건지 */
const reducer = (state, action) => {
  // console.log(`action 🧨: ${action}`);
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
