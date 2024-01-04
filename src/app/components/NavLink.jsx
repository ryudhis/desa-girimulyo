import { Link } from "react-scroll";
const NavLink = ({ href, title }) => {
  return (
    <Link
      to={href}
      className="cursor-pointer block py-2 pl-3 pr-4 text-[#107C41] md:text-base xl:text-xl font-semibold rounded md:p-0 hover:text-slate-500"
      smooth={true}
      offset={-120}
      duration={500}
    >
      {title}
    </Link>
  );
};

export default NavLink;
