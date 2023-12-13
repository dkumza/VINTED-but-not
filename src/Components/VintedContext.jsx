/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState } from "react";
import { vintedReducer } from "../Reducers/vintedReducer";
import axios from "axios";
import { loadFromServer } from "../Actions/vintedActions";

export const VintedContext = createContext();

const VINTED_NEWS_URL = "https://in3.dev/vinted/api/news/";
const PRODUCTS_URL = "https://in3.dev/vinted/api/products/";

export const VintedProvider = ({ children }) => {
   const [vinted, dispatchVinted] = useReducer(vintedReducer, null);
   const [productIDs, setProductIDs] = useState(null);

   //    fetch news data from url
   //    useEffect(() => {
   //       axios
   //          .get(VINTED_NEWS_URL)
   //          .then((res) => {
   //             console.log(res.data);
   //             dispatchVinted(loadFromServer(res.data));
   //          })
   //          .catch((err) => console.log(err));
   //    }, []);

   //    fetch news data from url, to get product ID's
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

   return (
      <VintedContext.Provider
         value={{
            vinted,
            dispatchVinted,
         }}
      >
         {children}
      </VintedContext.Provider>
   );
};
