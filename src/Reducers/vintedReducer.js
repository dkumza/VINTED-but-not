import * as types from "../Constants/actionTypes";

export const vintedReducer = (state, action) => {
   let prevState = state === null ? null : [...state];
   //    console.log(prevState);
   switch (action.type) {
      case types.LOAD_FROM_SERVER:
         return (prevState = action.payload.map((vintedID) => ({
            ...vintedID,
            show: true,
         })));
      case types.USERS_FROM_SERVER:
         return (prevState = action.payload.map((users) => ({
            ...users,
         })));
      default:
   }

   return prevState;
};
