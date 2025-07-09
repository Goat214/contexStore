import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Headr from "../Components/Headr";

function MainLAyout() {
  return (
   <>
    <Headr/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
   </>
  )
}

export default MainLAyout
