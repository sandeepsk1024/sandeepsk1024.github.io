import { Outlet, Link } from "react-router-dom";

export default function VizLayout() {
  return (
    <>
      <div className="">
        <div className="">
          <nav>
            <Link to={'/viz/viz1'}>Viz1</Link>
          </nav>
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
      
    </>
  );
}
