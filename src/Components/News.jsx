import { useContext } from "react";
import { VintedContext } from "./VintedContext";
import { New } from "./New";

export const News = () => {
   const { vinted } = useContext(VintedContext);
   console.log(vinted);

   return (
      <div className="flex flex-wrap gap-4 items-center justify-center">
         {vinted.map((vint) =>
            vint.show ? <New key={vint.id} vint={vint} /> : null
         )}
      </div>
   );
};
