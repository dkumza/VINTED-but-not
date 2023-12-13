import { useContext } from "react";
import { VintedContext } from "./VintedContext";

export const News = () => {
   const { vinted } = useContext(VintedContext);
   console.log(vinted);

   return (
      <div>
         {vinted.map((vint) =>
            vint.show ? <div key={vint.id}>{vint.title}</div> : null
         )}
      </div>
   );
};
