import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div>

      <Navbar />

      <div className="layout-container">

        <Sidebar />

        <main className="main-content">
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;