import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import Section from "./SidebarProp";

export default function Sidebar() {
  const sidebarItems = [
    {
      items: [
        {
          text: "Dashboard",
          icon: "dashboard",
        },
      ],
    },
    {
      items: [
        {
          text: "My Profile",
          icon: "account_box",
        },
        {
          text: "Change Password",
          icon: "lock",
        },
        {
          text: "Documents",
          icon: "folder",
        },
      ],
    },
    {
      items: [
        {
          text: "Course Registration",
          icon: "toc",
        },
        {
          text: "Resources",
          icon: "book",
        },
        {
          text: "Registration History",
          icon: "archive",
        },
        {
          text: "Semester Result",
          icon: "view_list",
        },
        {
          text: "View Timetable",
          icon: "table_chart",
        },
      ],
    },
    {
      items: [
        {
          text: "Pay Tuition",
          icon: "payment",
        },
        {
          text: "Payment History",
          icon: "payment",
        },
        {
          text: "Transaction History",
          icon: "payment",
        },
      ],
    },
    {
      items: [
        {
          text: "Notice Board",
          icon: "notifications",
        },
        {
          text: "Accomodation",
          icon: "home",
        },
        {
          text: "Election",
          icon: "done",
        },
        {
          text: "Certificate",
          icon: "crop_landscape",
        },
        {
          text: "Help",
          icon: "contact_support",
        },
        {
          text: "Logout",
          icon: "account_box",
        },
      ],
    },
  ];
  return (
    <div
      className="d-flex flex-column gap-3 justify-content-between text-white py-3 w-100 h-100 scrollable-sidebar"
      style={{ overflowY: "auto" }}
    >
      <div className="d-flex px-3 align-items-center gap-2">
        <img
          className="rounded-1 object-fit-cover"
          height={40}
          width={35}
          src="../src/assets/SQI.jpg"
          alt=""
        />
        <div className="">
          <p className="fz-16 fw-500 p-0 m-0">SCICT</p>
          <p className="fz-12 p-0 m-0">Student Portal</p>
        </div>
      </div>
      <div className="px-3">
        <select
          className="bg-blue w-100 text-white py-2 px-3 fz-14"
          id="exampleSelect"
        >
          <option value="option1">PDC</option>
        </select>
      </div>
      <Section header="General" items={sidebarItems[0].items} />
      <Section header="Profile" items={sidebarItems[1].items} />
      <Section header="Academics" items={sidebarItems[2].items} />
      <Section header="Payments" items={sidebarItems[3].items} />
      <Section header="Others" items={sidebarItems[4].items} />
    </div>
  );
}
