import { Link } from "react-scroll";
const NavLink = ({ href, title }) => {
  const scrollToSection = (event) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <Link
      to={href}
      className="block py-2 pl-3 pr-4 text-[#107C41] md:text-base xl:text-xl font-semibold rounded md:p-0 hover:text-slate-500"
      smooth={true}
      offset={0}
      duration={500}
    >
      {title}
    </Link>
  );
};

export default NavLink;
