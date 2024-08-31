import Nav from "#components/nav.jsx";
import { Outlet, Link } from "react-router-dom";

export default function ToolsLayout() {
  return (
    <>
      <div className="flex">
        <div className="w-1/5">
          <Nav links={[
            {to: '/tools/conv.tempr', text: 'Temperature'},
            {to: '/tools/conv.weight', text: 'Weight'},
            {to: '/tools/conv.currency', text: 'Currency'}
          ]} />
        </div>
        <div className="w-4/5 m-2 p-2">
          <Outlet />
        </div>
      </div>
      
    </>
  );
}
