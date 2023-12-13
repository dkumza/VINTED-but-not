import { useContext } from "react";
import { VintedContext } from "./VintedContext";

export const New = ({ vint }) => {
   const { cats } = useContext(VintedContext);
   console.log(cats);
   return (
      <div className="new">
         <div className="w-full flex relative">
            {cats && (
               <div className="book-id bg-sky-400 text-sm text-white shadow py-1 px-2 rounded absolute  -top-5 -left-6">
                  {cats.find((c) => c.id === vint.cat)?.title}
               </div>
            )}

            <div className="price w-full text-right font-medium text-gray-700 text-xl">
               {vint.price} EUR
            </div>
         </div>
         <div>
            <img
               className="rounded-xl object-cover h-96 w-72"
               src={vint.img[0]}
               alt={vint.title}
            />
         </div>
         <div className="title-wrap flex flex-col text-left w-full gap-1 h-fit justify-end capitalize">
            <div className="title text-xl truncate">
               {vint.title.toLowerCase()}
            </div>
            <div className="title truncate">{vint.desc}</div>
         </div>

         <div className=""></div>
      </div>
   );
};
