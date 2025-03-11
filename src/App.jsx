import React from "react";
import AnimatedNavbar from "./navbar/AnimatedNavbar";
import { Sidebar } from "./Sidebar/Sidebar";

function App() {
  return (
   <div className="flex">
    <div className="">
<AnimatedNavbar/>
    </div>
    <div>
<Sidebar/>
    </div>
   </div>
  );
}

export default App;
