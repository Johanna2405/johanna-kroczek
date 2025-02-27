import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  return (
    <div className="flex px-10 py-4 gap-8 justify-between items-center sticky top-0 bg-dark z-50">
      <div className="flex gap-4 items-center">
        <p className="font-space text-lg text-red lowercase">Johanna Kroczek</p>
        <ul className="flex gap-4 font-space text-md text-light lowercase">
          <li>
            <a href="#about" className="hover:text-red">
              About
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-red">
              Education
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-red">
              work experience
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 justify-end items-center">
        <a href="https://github.com/Johanna2405" target="_blank">
          {" "}
          <GitHubIcon style={{ fontSize: 24, color: "#f5f4ed" }}></GitHubIcon>
        </a>
        <a href="https://www.linkedin.com/in/johanna-kroczek/" target="_blank">
          <LinkedInIcon
            style={{ fontSize: 24, color: "#f5f4ed" }}
          ></LinkedInIcon>
        </a>
        <a href="mailto:johanna.k.1996@googlemail.com" target="_blank">
          <EmailIcon style={{ fontSize: 24, color: "#f5f4ed" }}></EmailIcon>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
