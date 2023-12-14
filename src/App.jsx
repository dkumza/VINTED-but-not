import "./App.css";
import { Layout } from "./Components/Layout";
// import { Loader } from "./Components/Loader";
import { VintedProvider } from "./Components/VintedContext";

function App() {
   return (
      <VintedProvider>
         <div className="container mx-auto flex flex-col items-center py-4">
            <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-l from-lime-400 to-green-600 mb-4">
               VINCTED
            </h1>
            {/* <Loader /> */}
            <Layout />
         </div>
      </VintedProvider>
   );
}

export default App;
