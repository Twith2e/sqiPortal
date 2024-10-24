import Sidebar from "./SideBar";
import TopNav from "./TopNav";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-2 bg-blue ps-0 position-fixed h-100 side-bar"
          style={{ paddingRight: "2px" }}
        >
          <Sidebar />
        </div>
        <div className="col-10 offset-2 p-0 position-fixed top-0">
          <TopNav />
        </div>
        <div className="col-10 offset-2" style={{ marginTop: "60px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
