import { useContext } from "react";
import { VintedContext } from "./VintedContext";
import { News } from "./News";
import { Loader } from "./Loader";

export const Layout = () => {
   const { vinted } = useContext(VintedContext);
   return <div>{vinted ? <News /> : <Loader />}</div>;
};
