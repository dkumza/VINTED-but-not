/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState } from "react";
import { vintedReducer } from "../Reducers/vintedReducer";
import axios from "axios";
import { loadFromServer, loadUsersFromServer } from "../Actions/vintedActions";

export const VintedContext = createContext();

const VINTED_NEWS_URL = "https://in3.dev/vinted/api/news/";
const PRODUCTS_URL = "https://in3.dev/vinted/api/products/";
const PRODUCTS_CATS_URL = "https://in3.dev/vinted/api/cats/all";
const USERS_URL = "https://in3.dev/vinted/api/users/";

export const VintedProvider = ({ children }) => {
   const [vinted, dispatchVinted] = useReducer(vintedReducer, null);
   const [productIDs, setProductIDs] = useState(null);
   const [cats, setCats] = useState(null);
   const [users, dispatchUsers] = useReducer(vintedReducer, null);

   useEffect(() => {
      axios
         .get(VINTED_NEWS_URL)
         .then((res) => {
            // console.log(res.data);
            setProductIDs(res.data);
         })
         .catch((err) => console.log(err));
   }, []);
   //    console.log(productIDs);

   useEffect(() => {
      if (productIDs) {
         let responses = [];
         productIDs.map((product) => {
            axios
               .get(PRODUCTS_URL + product.id)
               .then((res) => {
                  responses.push(res.data);
                  dispatchVinted(loadFromServer(responses));
               })
               .catch((error) => console.error(error));
         });
      }
   }, [productIDs]);

   useEffect(() => {
      axios
         .get(PRODUCTS_CATS_URL)
         .then((res) => {
            // console.log(res.data);
            setCats(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   // vinted && console.log(vinted);

   useEffect(() => {
      if (vinted) {
         Promise.all(
            vinted.map((product) =>
               axios.get(USERS_URL + product.user).then((res) => {
                  // console.log(product.user);
                  return res.data;
               })
            )
         )
            .then((usersArray) => {
               // array of responses for each product ID
               dispatchUsers(loadUsersFromServer(usersArray));
            })
            .catch((error) => console.error(error));
      }
   }, [vinted]);

   return (
      <VintedContext.Provider
         value={{
            vinted,
            dispatchVinted,
            users,
            dispatchUsers,
            cats,
            setCats,
         }}
      >
         {children}
      </VintedContext.Provider>
   );
};
