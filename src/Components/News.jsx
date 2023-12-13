import { useContext } from "react";
import { VintedContext } from "./VintedContext";

export const News = () => {
   const { vinted } = useContext(VintedContext);
   return <div>News</div>;
};
