import * as types from "../Constants/actionTypes";

export const vintedReducer = (state, action) => {
   let prevState = state === null ? null : [...state];
   switch (action.type) {
      case types.LOAD_FROM_SERVER:
         return (prevState = action.payload.map((vintedID) => ({
            ...vintedID,
         })));
      default:
   }
   return prevState;
};
