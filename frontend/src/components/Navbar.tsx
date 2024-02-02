import {
  HiHome,
  HiUser,
  HiUserGroup,
  HiInbox,
  HiMagnifyingGlass,
  HiBell,
} from "react-icons/hi2";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row justify-between py-4 items-center">
      <h1 className="text-4xl font-extrabold text-purple-800">Likegram</h1>
      <ul className="flex flex-row gap-14 items-center">
        <li>
          <HiHome className="font-bold text-2xl text-purple-700 hover:text-purple-900 cursor-pointer" />
        </li>
        <li>
          <HiUser className="font-bold text-2xl text-purple-700 hover:text-purple-900 cursor-pointer" />
        </li>
        <li>
          <HiUserGroup className="font-bold text-2xl text-purple-700 hover:text-purple-900 cursor-pointer" />
        </li>
        <li>
          <HiInbox className="font-bold text-2xl text-purple-700 hover:text-purple-900 cursor-pointer" />
        </li>
        <li className="flex flex-row gap-4 justify-center items-center border-b-2 shadow-sm">
          <input
            type="text"
            className="outline-none py-1 px-2 text-black font-semibold bg-transparent"
            placeholder="search"
          />
          <HiMagnifyingGlass className="font-bold text-2xl text-purple-700" />
        </li>
      </ul>
      <div className="flex flex-row gap-14 items-center border-l-2 px-8">
        <HiBell className="font-bold text-2xl text-purple-700 hover:text-purple-900 cursor-pointer " />
        <Link
          className="flex flex-row items-center justify-center gap-2 border-2 px-8 py-2 border-purple-800 rounded-md cursor-pointer"
          to={"/auth"}
        >
          <HiUser className="font-bold text-3xl text-purple-700 hover:text-purple-900 " />
          <div className="flex flex-col items-center justify-center ">
            <h4 className="font-bold text-md">Hello User</h4>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
