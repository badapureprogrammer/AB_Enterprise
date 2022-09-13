export const AddItem = (item) => {
  return {
    type: "Add_Cart",
    payload: item,
  };
};


// Remove Item
export const RemoveItem = (id) => {
  return {
    type: "Remove_Cart",
    payload: id,
  };
};


// Remove Individual Item
export const RemoveIndividual_Item = (item) => {
  return {
    type: "Remove_Individual",
    payload: item,
  };
};