import "./App.css";
import { Layout } from "./Components/Layout";
// import { Loader } from "./Components/Loader";
import { VintedProvider } from "./Components/VintedContext";

function App() {
   return (
      <VintedProvider>
         <div className="container mx-auto border p-8">
            {/* <Loader /> */}
            <Layout />
         </div>
      </VintedProvider>
   );
}

export default App;
