export const Loader = () => {
   return (
      <div className="min-h-full">
         <div className="flex gap-3 justify-center min-h-full items-center">
            <span className="sr-only">Loading...</span>
            <div className="h-8 w-8 bg-sky-100 rounded-full animate-bounce  [animation-delay:-0.3s]"></div>
            <div className="h-8 w-8 bg-sky-200 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
            <div className="h-8 w-8 bg-sky-300 rounded-full animate-bounce [animation-delay:-0.1s]"></div>
            <div className="h-8 w-8 bg-sky-500 rounded-full animate-bounce"></div>
         </div>
      </div>
   );
};
