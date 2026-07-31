import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Layout.css";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="layout-container">
        <Sidebar />
        <div className="content">
            {children}
        </div>
      </div>
    </>
  )
}

export default Layout;