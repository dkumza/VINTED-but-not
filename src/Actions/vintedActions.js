import * as types from "../Constants/actionTypes";

export function loadFromServer(books) {
   return {
      type: types.LOAD_FROM_SERVER,
      payload: books,
   };
}
