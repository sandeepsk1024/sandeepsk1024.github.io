import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to={`/showcase/converters`}>
            Converters
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
