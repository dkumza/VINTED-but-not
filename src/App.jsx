import "./App.css";
import { Loader } from "./Components/Loader";
import { VintedProvider } from "./Components/VintedContext";

function App() {
   return (
      <VintedProvider>
         <div className="container mx-auto border p-8">
            <Loader />
         </div>
      </VintedProvider>
   );
}

export default App;
