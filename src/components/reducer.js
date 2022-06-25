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
  console.log(action.payload);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index > 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    //   return {
    //     ...state,
    //     basket: state.basket.filter((item) => item.id !== action.id),
    //   };
    default:
      return state;
  }
};

export default reducer;
