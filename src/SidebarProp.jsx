import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Section(props) {
  return (
    <div className="d-flex flex-column gap-3">
      <h4 className="fz-14 fw-500 px-3" style={{ color: "#aca6a6" }}>
        {props.header}
      </h4>
      {props.items.map((item, index) => (
        <Link
          to={item.text.trim().replace(/\s+/g, "-")}
          key={index}
          className="text-decoration-none link text-white"
        >
          <div
            key={index}
            className="d-flex align-items-center gap-3 px-3 py-2 fz-14"
          >
            {" "}
            <i className="material-icons" style={{ fontSize: "1.04rem" }}>
              {item.icon}
            </i>
            <span>{item.text}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
