import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkButton: React.FC<{
  btName: string;
  btType?: "bt-error" | "bt-success" | "bt-warning";
  btPath:string
}> = (props) => {
  const { btName, btType,btPath } = props;
  const bgColor =
    btType === "bt-error"
      ? "bg-red-500"
      : btType === "bt-success"
      ? "bg-green-500"
      : "bg-yellow-500";

  const btClass= `${bgColor} py-2 px-4 hover:bg-cyan-500 py-2 rounded text-white font-bold`
  return (
    <NavLink
    to={btPath}
  
      className={btClass}
    >
      {btName}
    </NavLink>
  );
};

export default NavLinkButton;
