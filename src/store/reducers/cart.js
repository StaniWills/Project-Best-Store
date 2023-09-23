const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const CLEAR_CART = 'CLEAR_CART';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const clearCart = () => ({ type: CLEAR_CART });
export const incrementCount = payload => ({ type: INCREMENT_COUNT, payload });
export const decrementCount = payload => ({ type: DECREMENT_COUNT, payload });

const checkProduct = (state, payload) => {
  const productInState = state.find(el => el.id === payload.id);
  if(productInState){
    productInState.count++
    return [...state]
  } else {
    return [...state, {
      ...payload,
      count: 1
    }]
  }
}

export const cartReducer = (state = defaultState, action) => {
  if(action.type === ADD_TO_CART){
    return checkProduct(state, action.payload)
  } else if(action.type === CLEAR_CART) {
    return defaultState
  } else if (action.type === INCREMENT_COUNT) {
    state.find(el => el.id === action.payload).count++
    return [...state]
  } else if (action.type === DECREMENT_COUNT) {
    const target_card = state.find(el => el.id === action.payload)
    if (target_card.count === 1){
      state = state.filter(el => el.id !== action.payload)
    } else {
      target_card.count--
    }
    return [...state]
  } else {
    return state
  }
}
