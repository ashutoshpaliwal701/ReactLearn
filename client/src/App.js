
import React from "react";
import Header from "./componets/common/header";
import Footer from "./componets/common/footer";
import CatagoryContainer from "./componets/common/catagroycontainer";
import Login from "./componets/auth/login";


function App() {
  
  return (
    <>
      <div>
        <Header/>
        <CatagoryContainer/>
        <Login/>
        <Footer/>
        <h1>Hello world</h1>
      </div>
    
    
    
    </>
  );
}

export default App;
