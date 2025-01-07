import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";


export default function Layout() {
  return (
      <div>
          <Navbar/>
          <Outlet/>
          <Footer/>
    </div>
  )
}
