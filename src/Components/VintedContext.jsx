/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState } from "react";
import { vintedReducer } from "../Reducers/vintedReducer";
import axios from "axios";
import { loadFromServer } from "../Actions/vintedActions";

export const VintedContext = createContext();

const VINTED_NEWS_URL = "https://in3.dev/vinted/api/news/";
const PRODUCTS_URL = "https://in3.dev/vinted/api/products/";
const PRODUCTS_CATS_URL = "https://in3.dev/vinted/api/cats/all";
const USERS_URL = "https://in3.dev/vinted/api/cats/all";

export const VintedProvider = ({ children }) => {
   const [vinted, dispatchVinted] = useReducer(vintedReducer, null);
   const [productIDs, setProductIDs] = useState(null);
   const [cats, setCats] = useState(null);

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
         Promise.all(
            productIDs.map((product) =>
               axios.get(PRODUCTS_URL + product.id).then((res) => {
                  //   console.log(PRODUCTS_URL, product.id, res.data);
                  return res.data;
               })
            )
         )
            .then((dataArray) => {
               // dataArray is an array of responses for each product ID
               console.log(dataArray);
               dispatchVinted(loadFromServer(dataArray)); // assuming loadFromServer can handle an array of data
            })
            .catch((error) => console.error(error));
      }
   }, [productIDs]);

   useEffect(() => {
      axios
         .get(PRODUCTS_CATS_URL)
         .then((res) => {
            console.log(res.data);
            setCats(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <VintedContext.Provider
         value={{
            vinted,
            dispatchVinted,
            cats,
            setCats,
         }}
      >
         {children}
      </VintedContext.Provider>
   );
};
