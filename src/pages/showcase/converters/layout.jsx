import Nav from "#components/nav.jsx";
import { Outlet, Link } from "react-router-dom";

export default function ToolsLayout() {
  return (
    <>
      <div className="flex">
        <div className="w-1/8 m-2 p-2">
          <Nav links={[
            {to: '/showcase/converters/conv.tempr', text: 'Temperature'},
            {to: '/showcase/converters/conv.weight', text: 'Weight'},
            {to: '/showcase/converters/conv.currency', text: 'Currency'}
          ]} />
        </div>
        <div className="w-7/8 m-2 p-2 border-l-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}
