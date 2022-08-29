import Link from "next/link";
import { routes } from "../../data/global";

const Nav = ({ currentPage }: any) => {
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer"></li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
