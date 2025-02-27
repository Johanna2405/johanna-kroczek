import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex px-10 py-4 gap-8 justify-between items-center sticky top-0">
      <div className="flex gap-4 items-center">
        <p className="font-space text-lg text-orange">Johanna Kroczek</p>
        <ul className="flex gap-4 font-space text-md text-light">
          {/* <Link to={""}> */}
          <li>About</li>
          {/* </Link>
          <Link to={""}> */}
          <li>Education</li>
          {/* </Link>
          <Link to={""}> */}
          <li>Experience</li>
          {/* </Link> */}
        </ul>
      </div>
      <div className="flex gap-4 justify-end items-center">
        {/* <Link to={"https://github.com/Johanna2405"}> */}
        <GitHubIcon style={{ fontSize: 19, color: "#f5f4ed" }}></GitHubIcon>
        {/* </Link> */}
        {/* <Link to={"https://github.com/Johanna2405"}> */}
        <LinkedInIcon style={{ fontSize: 19, color: "#f5f4ed" }}></LinkedInIcon>
        {/* </Link> */}
        {/* <Link to={"https://github.com/Johanna2405"}> */}
        <EmailIcon style={{ fontSize: 19, color: "#f5f4ed" }}></EmailIcon>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
