const prodInitialState = {
  cartsData: [],
};

export const CartReducerAction = (state = prodInitialState, action) => {
  // console.log(action)

  switch (action.type) {
    case "Add_Cart":
      const itemIndex = state.cartsData.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartsData[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return { ...state, cartsData: [...state.cartsData, temp] };
      }

    case "Remove_Cart":
      const storeItem = state.cartsData.filter((item) => item.id !== action.payload);
      return { ...state, cartsData: storeItem };

      case "Remove_Individual":
      const itemIndex_dec = state.cartsData.findIndex((item) => item.id === action.payload.id);

      if(state.cartsData[itemIndex_dec].qnty >= 1){
        const dltItem = state.cartsData[itemIndex_dec].qnty -= 1;

        return {
          ...state,cartsData:[...state.cartsData]
        }
      }
      else if(state.cartsData[itemIndex_dec].qnty === 1){
        const storeItem = state.cartsData.filter((item) => item.id !== action.payload);
        return { ...state, cartsData: storeItem };

      }
    default:
      return state;
  }
};
