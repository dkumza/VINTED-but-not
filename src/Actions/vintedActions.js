import * as types from "../Constants/actionTypes";

export function loadFromServer(books) {
   return {
      type: types.LOAD_FROM_SERVER,
      payload: books,
   };
}

export function loadUsersFromServer(users) {
   return {
      type: types.USERS_FROM_SERVER,
      payload: users,
   };
}
