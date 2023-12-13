import { useContext } from "react";
import { VintedContext } from "./VintedContext";

export const New = ({ vint }) => {
   const { cats, users } = useContext(VintedContext);
   // users && console.log(users);

   return (
      <div className="new">
         <div className="w-full flex relative ">
            {cats && (
               <div className="book-id bg-amber-400 text-sm font-semibold text-white shadow py-1 px-2 rounded absolute  -top-5 -right-5 h-8">
                  {cats.find((c) => c.id === vint.cat)?.title}
               </div>
            )}

            {users && (
               <div className="book-id bg-sky-400 text-sm font-semibold text-white shadow py-1 px-2 rounded absolute  -top-5 -left-5 flex h-8 gap-2 items-center">
                  {(() => {
                     const user = users.find((u) => u.id === vint.user);
                     return user?.avatar ? (
                        <img
                           className="rounded-full object-cover h-6 w-6"
                           src={user.avatar}
                        />
                     ) : null;
                  })()}
                  <div>{users.find((u) => u.id === vint.user)?.name}</div>
               </div>
            )}

            <div className="price w-full text-right font-medium  text-gray-700 text-xl mt-6">
               {vint.price} EUR
            </div>
         </div>
         <div>
            <img
               className="rounded-xl object-cover h-96 w-72"
               src={vint.img[vint.main_img]}
               alt={vint.title}
            />
         </div>
         <div className="title-wrap flex flex-col text-left w-full gap-1 h-fit justify-end capitalize">
            <div className="title text-xl truncate text-center">
               {vint.title.toLowerCase()}
            </div>
            {vint.size.length > 0 ? (
               <div className="title truncate text-end text-sm">
                  Size: {vint.size[0]}
               </div>
            ) : (
               <div className="title truncate text-end text-sm">No size</div>
            )}
         </div>

         <div className=""></div>
      </div>
   );
};
