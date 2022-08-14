import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./Pages/Category/Category";
import Menu from "./components/SideMenu/Menu";
import { useState } from "react";
function Routing() {

  const [inactive,setInactive] = useState(false);


  return (
    <div>
      <div>
        <Menu  onCollapse={(inactive)=>{
            console.log(inactive);
            setInactive(inactive);
        }}/>
      </div>

      <div className={`container ${inactive ? "inactive" : ""} `}>
        <Routes>
          <Route exact path="/category" element={<Category />} />
        </Routes>
      </div>
    </div>
  );
}

export default Routing;
