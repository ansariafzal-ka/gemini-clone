import Logo from "../assets/gemini-logo.png";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <nav className="z-30 px-4 md:px-10 border-b flex flex-row justify-between items-center">
      <a href="/">
        <img src={Logo} alt="gemini-logo" width={80} height={80} />
      </a>
      <Button>Contact</Button>
    </nav>
  );
};

export default NavBar;
