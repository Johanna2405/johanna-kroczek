import { Typewriter } from "react-simple-typewriter";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full pt-40 md:pt-60 xl:pt-72 gap-8">
        <div>
          <img
            src="/johanna.png"
            alt="Johanna"
            className="rounded-full shadow-sm w-32"
          />
        </div>
        <h1 className="text-light font-space text-5xl lowercase text-center">
          <Typewriter words={["Hey! My name is Johanna!"]} />
        </h1>
        <h2 className="text-red font-light text-xl tracking-wide text-center">
          I'm a frontend developer with a design background.
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 py-40 md:py-60 xl:py-72 md:items-start">
          <div className="flex flex-col gap-8 items-start justify-start">
            <h2 className="text-light font-space text-4xl lowercase grow border-b-2 border-red pb-4">
              About me
            </h2>
            <p className="text-light text-left font-thin tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              explicabo perferendis culpa? Recusandae nulla, error quod delectus
              aliquam aperiam vero laborum, magnam facere enim eaque quibusdam
              voluptatem molestiae. Facere, recusandae!
            </p>
            <div className="flex gap-4 items-center">
              <a
                className="px-4 py-2 border mr-4 border-red rounded-xl text-light font-space lowercase text-lg hover:border-light "
                href="/CV-JohannaKroczek.pdf"
                target="_blank"
              >
                <DownloadForOfflineIcon
                  style={{ fontSize: 32, color: "#f5f4ed", paddingRight: 10 }}
                ></DownloadForOfflineIcon>{" "}
                Get my CV{" "}
              </a>
              <a href="https://github.com/Johanna2405" target="_blank">
                {" "}
                <GitHubIcon
                  style={{ fontSize: 24, color: "#f5f4ed" }}
                ></GitHubIcon>
              </a>
              <a
                href="https://www.linkedin.com/in/johanna-kroczek/"
                target="_blank"
              >
                <LinkedInIcon
                  style={{ fontSize: 24, color: "#f5f4ed" }}
                ></LinkedInIcon>
              </a>
              <a href="mailto:johanna.k.1996@googlemail.com" target="_blank">
                <EmailIcon
                  style={{ fontSize: 24, color: "#f5f4ed" }}
                ></EmailIcon>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8 p-6 border border-light rounded-2xl">
            <p className="text-light font-thin tracking-wide">
              Some technologies I have been working with:
            </p>
            <ul className="list-inside flex gap-8">
              <div>
                <li className="text-light font-light flex items-center  gap-4">
                  <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} /> HTML
                </li>
                <li className="text-light font-light flex items-center gap-4">
                  <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} /> CSS
                </li>
                <li className="text-light font-light flex items-center gap-4">
                  <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} />{" "}
                  JavaScript
                </li>
                <li className="text-light font-light flex items-center gap-4">
                  <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} /> React
                </li>
              </div>
              <div>
                <li className="text-light font-light flex items-center gap-4">
                  <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} />{" "}
                  Node.js
                </li>
                <li className="text-light font-light flex items-center gap-4">
                  <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} />{" "}
                  PostgreSQL
                </li>
                <li className="text-light font-light flex items-center gap-4">
                  <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} />{" "}
                  MongoDB
                </li>
                <li className="text-light font-light flex items-center gap-4">
                  <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} /> Java
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
