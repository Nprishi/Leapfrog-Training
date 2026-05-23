import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <>
      <div className="layout">
        <Sidebar />

        <div className="main-content">
          <Header />

          <div className="page-content">
            <Outlet />
          </div>

        </div>

      </div>
      <Footer />
    </>
  );
}

export default AppLayout;