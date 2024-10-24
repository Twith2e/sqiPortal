import "bootstrap/dist/css/bootstrap.min.css";

export default function Topnav() {
  return (
    <nav className="d-flex justify-content-between align-items-center px-3 border-bottom">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
        </svg>
      </div>
      <div className="d-flex align-items-center">
        <p className="px-3 py-2">Level</p>
        <p className="px-3 py-2">Year</p>
        <p className="px-3 py-2">Programme</p>
      </div>
    </nav>
  );
}
