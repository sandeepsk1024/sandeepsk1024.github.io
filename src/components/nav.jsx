import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav className="flex flex-col m-2 p-2 border-r-2 items-end gap-4">
      {props.links.map((link) => (
        <Link key={link.to} to={link.to}>{link.text}</Link>
      ))}
    </nav>
  );
}
