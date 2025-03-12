import { NavigationMenuDemo } from "./components/NavigationMenuDemo";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Mantras from "./Tabs/Mantras";
import Bhajans from "./Tabs/Bhajans";
function App() {
  return (
    <>
    <div className="h-500  w-full flex items-center  bg-green-500">
      <NavigationMenuDemo className="pt-3"/>
    </div>
    <BrowserRouter>
    <Routes>
       <Route path="/Mantras" element={<Mantras/>} />
       <Route path="/Bhajans" element={<Bhajans/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
