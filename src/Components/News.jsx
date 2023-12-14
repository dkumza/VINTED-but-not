import { useContext } from "react";
import { VintedContext } from "./VintedContext";
import { New } from "./New";

export const News = () => {
   const { vinted } = useContext(VintedContext);
   // console.log(vinted);

   return (
      <div>
         <h1 className="text-xl px-12 text-start font-medium">Newsfeed</h1>
         <div className="flex flex-wrap gap-3 items-center justify-center py-4">
            {vinted.map((vint) =>
               vint.show ? <New key={vint.id} vint={vint} /> : null
            )}
         </div>
      </div>
   );
};
