import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold">
          <Link to="/"> Real Estate App </Link>
        </h1>
        <ul className="flex gap-4">
          <li>
            {" "}
            <Link to="/"> Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about"> About</Link>
          </li>
          <li>
            {" "}
            <Link to="/sign_in"> Sign In </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
